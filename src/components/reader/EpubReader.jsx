import { useEffect, useRef, useState } from "react";
import ePub from "epubjs";
import axios from "axios";
import { logReadingActivity, updateReadingProgress } from "../../services/reading.service";
import LoadingState from "../common/LoadingState";

const EpubReader = ({ url, bookId }) => {
  const viewerRef = useRef(null);
  const bookRef = useRef(null);
  const renditionRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let secondsAccumulated = 0;
    let isVisible = !document.hidden;

    const flush = () => {
      const minutes = Math.floor(secondsAccumulated / 60);
      if (minutes > 0) {
        secondsAccumulated -= minutes * 60;
        logReadingActivity(bookId, minutes).catch(() => { });
      }
    };

    const tick = setInterval(() => {
      if (isVisible) secondsAccumulated += 1;
      if (secondsAccumulated >= 60) flush();
    }, 1000);

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const loadBook = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(url, {
          responseType: "arraybuffer",
        });

        if (cancelled) return;

        const book = ePub(response.data);
        bookRef.current = book;

        await book.ready;
        if (cancelled) return;

        const rendition = book.renderTo(viewerRef.current, {
          width: "100%",
          height: "100%",
          flow: "paginated",
          allowScriptedContent: true,
        });
        renditionRef.current = rendition;

        await rendition.display();
        book.locations.generate(1600).then(() => {
          if (cancelled) return;

          rendition.on("relocated", (location) => {
            const epubLocation = location.start.cfi;
            const percentage = book.locations.percentageFromCfi(epubLocation);

            updateReadingProgress(bookId, {
              epubLocation,
              percentage: Math.round(percentage * 100),
            }).catch(() => { });
          });
        });

        setLoading(false);
      } catch (err) {
        if (!cancelled) {
          console.error(err);
          setError("Failed to load book.");
          setLoading(false);
        }
      }
    };

    loadBook();

    const handleResize = () => renditionRef.current?.resize();
    window.addEventListener("resize", handleResize);

    const handleKey = (e) => {
      if (e.key === "ArrowRight") renditionRef.current?.next();
      if (e.key === "ArrowLeft") renditionRef.current?.prev();
    };
    window.addEventListener("keyup", handleKey);

    return () => {
      clearInterval(tick);
      document.removeEventListener("visibilitychange", handleVisibility);
      flush(); // log any partial minute accrued before navigating away
      cancelled = true;
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keyup", handleKey);
      renditionRef.current?.destroy();
      bookRef.current?.destroy();
      renditionRef.current = null;
      bookRef.current = null;
    };
  }, [url, bookId],);

  return (
    <div className="epub-wrapper">
      {error && <p className="epub-error">{error}</p>}
      {loading && <LoadingState message="Loading book..." />}

      <div
        ref={viewerRef}
        className="epub-viewer"
        style={{ visibility: loading ? "hidden" : "visible" }}
      />

      {!loading && !error && (
        <div className="epub-nav">
          <button onClick={() => renditionRef.current?.prev()}>◀</button>
          <button onClick={() => renditionRef.current?.next()}>▶</button>
        </div>
      )}
    </div>
  );
};

export default EpubReader;

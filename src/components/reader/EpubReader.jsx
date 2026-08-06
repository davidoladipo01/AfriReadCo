import { useEffect, useRef } from "react";
import ePub from "epubjs";

const EpubReader = ({ url }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!url) return;

    const book = ePub(url);

    const rendition = book.renderTo(
      viewerRef.current,
      {
        width: "100%",
        height: "100%",
      }
    );

    rendition.display();

    return () => {
      book.destroy();
    };
  }, [url]);

  return (
    <div
      ref={viewerRef}
      style={{
        width: "100%",
        height: "100vh",
      }}
    />
  );
};

export default EpubReader;
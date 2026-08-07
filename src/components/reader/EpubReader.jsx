import { useEffect, useRef } from "react";
import ePub from "epubjs";
import axios from "axios";

const EpubReader = ({ url }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    let book;

    const loadBook = async () => {
      try {
        const response = await axios.get(url, {
          responseType: "arraybuffer",
        });

        book = ePub(response.data);

        const rendition = book.renderTo(
          viewerRef.current,
          {
            width: "100%",
            height: "100%",
            // epub.js renders each chapter inside a sandboxed iframe.
            // Without this flag it only sets sandbox="allow-same-origin",
            // which blocks script execution inside that iframe and throws
            // "Blocked script execution in 'about:srcdoc' because the
            // document's frame is sandboxed and the 'allow-scripts'
            // permission is not set."
            allowScriptedContent: true,
          }
        );

        rendition.display();
      } catch (error) {
        console.error(error);
      }
    };

    loadBook();

    return () => {
      if (book) {
        book.destroy();
      }
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
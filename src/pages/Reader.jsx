import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getReadingBook } from "../services/reading.service";
import EpubReader from "../components/reader/EpubReader";

const Reader = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [readerData, setReaderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getReadingBook(id);
        console.log("READER RESPONSE:", response.data);
        setReaderData(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <p>Loading book...</p>;
  }

  const book = readerData?.book;

  if (!book) {
    return <p>Book unavailable</p>;
  }

  const readingUrl =
     book.epubUrl || book.pdfUrl || book.downloadUrl;

  return (
    <div className="reader-page">
      <header className="reader-header">
        <div className="reader-book">
          <button onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>

          <div>
            <h3>{book.title}</h3>
            <p>{book.authors?.join(", ")}</p>
          </div>
        </div>

        <div className="reader-actions">
          <button>
            <span className="material-symbols-outlined">bookmark</span>
          </button>

          <button>
            <span className="material-symbols-outlined">search</span>
          </button>

          <button>
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <div className="reader-body">
        <aside className="reader-sidebar">
          <h4>Reading Tools</h4>

          <button>Bookmarks</button>
          <button>Highlights</button>
          <button>Notes</button>
        </aside>

        <main className="reader-content">
          {book.fileType === "epub" && <EpubReader url={`http://localhost:5005/api/reading/file/${book._id}`} />}
        </main>
      </div>
    </div>
  );
};

export default Reader;

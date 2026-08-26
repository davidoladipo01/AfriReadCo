import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getReadingBook, startReadingBook } from "../services/reading.service";
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
        setReaderData(response.data.data);
        startReadingBook(id).catch((err) => console.error(err));
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

  const readingUrl = `${import.meta.env.VITE_DEV_BASE_URL}/api/reading/file/${book._id}`;

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
      </header>

      <main className="reader-content">
        {book.fileType === "epub" && <EpubReader url={readingUrl} bookId={book._id} />}
      </main>
    </div>
  );
};

export default Reader;
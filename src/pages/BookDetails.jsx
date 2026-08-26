import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getBookById, shelveBook, getShelfStatus, removeFromShelf } from "../services/book.service";
import { getBookCoverUrl } from "../utils/bookCover";

const BookDetails = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [shelfEntry, setShelfEntry] = useState(null);
  const [savingShelf, setSavingShelf] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookById(id);
        setBook(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchShelfStatus = async () => {
      try {
        const response = await getShelfStatus(id);
        setShelfEntry(response.data.data);
      } catch (error) {
        // Not logged in or no entry yet — safe to ignore.
      }
    };

    fetchBook();
    fetchShelfStatus();
  }, [id]);

  const handleSaveToggle = async () => {
    setSavingShelf(true);

    try {
      if (shelfEntry) {
        await removeFromShelf(id);
        setShelfEntry(null);
        toast.success("Removed from your list.");
      } else {
        const response = await shelveBook(id, "want_to_read");
        setShelfEntry(response.data.data);
        toast.success("Added to Want to Read.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSavingShelf(false);
    }
  };

  if (!book) {
    return <p>Loading...</p>;
  }

return (
  <div className="book-page">
    <div className="book-details-hero">

      <div className="book-cover">
        <img
          src={getBookCoverUrl(book)}
          alt={book.title}
        />
      </div>

      <div className="book-info">

        <span className="book-badge">
          {book.language}
        </span>

        <h1>{book.title}</h1>

        <p className="book-author">
          {book.authors?.join(", ")}
        </p>

        <p className="book-description">
          {book.description}
        </p>

        <div className="book-meta">

          <div>
            <span>Publisher</span>
            <strong>{book.publisher || "Unknown"}</strong>
          </div>

          <div>
            <span>Published</span>
            <strong>{book.publishedDate || "N/A"}</strong>
          </div>

        </div>

        <div className="book-actions">

          {book.canRead ? (
            <Link
              to={`/dashboard/read/${book._id}`}
            >
              <button className="read-btn">
                Read Now
              </button>
            </Link>
          ) : (
            <button disabled>
              Not Available
            </button>
          )}

          <button onClick={handleSaveToggle} disabled={savingShelf}>
            {shelfEntry ? "Saved ✓" : "Save Book"}
          </button>

          <button>
            Join Club
          </button>

        </div>

      </div>

    </div>
  </div>
);
};

export default BookDetails;
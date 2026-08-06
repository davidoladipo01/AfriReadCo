import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBookById } from "../services/book.service";

const BookDetails = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response =
          await getBookById(id);

        setBook(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

return (
  <div className="book-page">
    <div className="book-details-hero">

      <div className="book-cover">
        <img
          src={book.coverImage}
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

          <button>
            Save Book
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
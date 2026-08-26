import { Link } from "react-router-dom";
import { getBookCoverUrl } from "../../utils/bookCover";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/dashboard/books/${book._id}`}
      className="book-card"
    >
      <div className="book-card-cover">
        <img src={getBookCoverUrl(book)} alt={book.title} />
        <div className="book-card-overlay">
          <span className="material-symbols-outlined">menu_book</span>
        </div>
      </div>

      <h3>{book.title}</h3>
      <p>{book.authors?.join(", ")}</p>
    </Link>
  );
};

export default BookCard;
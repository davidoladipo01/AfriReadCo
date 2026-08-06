import { useEffect, useState } from "react";
import { getBooks } from "../services/book.service";
import BookCard from "../components/books/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBooks(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Loading books...</p>;
  }

  return (
    <div className="books-page">
      <div className="books-header">
        <div>
          <h1>My Library</h1>
          <p>Continue your reading journey.</p>
        </div>

        <div className="books-actions">
          <input type="text" placeholder="Search books..." />

          <button>
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
      </div>

      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;

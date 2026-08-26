import { useEffect, useState } from "react";
import { getBooks } from "../services/book.service";
import { searchBooksAPI } from "../services/reading.service";
import BookCard from "../components/books/BookCard";
import UploadBookModal from "../components/books/UploadBookModal";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBooks = async (query = "") => {
    setLoading(true);

    try {
      const response = query.trim()
        ? await searchBooksAPI(query.trim())
        : await getBooks();

      setBooks(response.data.books || response.data.data || []);
    } catch (error) {
      console.error("Book search failed:", error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchBooks(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleUploaded = (newBook) => {
    setBooks((prev) => [newBook, ...prev]);
  };

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
          <input
            type="text"
            value={searchTerm}
            placeholder="Search books..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button>
            <span className="material-symbols-outlined">tune</span>
          </button>

          <button
            className="upload-book-btn"
            onClick={() => setShowUploadModal(true)}
          >
            <span className="material-symbols-outlined">upload_file</span>
            Upload Book
          </button>
        </div>
      </div>

      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>

      {showUploadModal && (
        <UploadBookModal
          onClose={() => setShowUploadModal(false)}
          onUploaded={handleUploaded}
        />
      )}
    </div>
  );
};

export default Books;
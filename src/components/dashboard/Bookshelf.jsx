import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getShelf } from "../../services/book.service";
import { getBookCoverUrl } from "../../utils/bookCover";

const Bookshelf = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShelf = async () => {
      try {
        const response = await getShelf("want_to_read");
        setEntries(response.data.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchShelf();
  }, []);

  return (
    <div className="lg:col-span-8 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Want to Read
        </h2>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-6 no-scrollbar">
        {loading ? (
          <p className="text-on-surface-variant">Loading...</p>
        ) : (
          entries.map(({ book }) =>
            book ? (
              <Link
                key={book._id}
                to={`/dashboard/books/${book._id}`}
                className="flex-shrink-0 w-[130px] sm:w-[140px] md:w-[150px] lg:w-[160px] flex flex-col gap-2 group"
              >
                <div className="relative aspect-[2/3] rounded-lg md:rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all bg-surface-container">
                  {book.coverImage || book.image || book.cover || book.cover_url || book.thumbnail ? (
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Book cover"
                      src={getBookCoverUrl(book)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-outline-variant text-4xl">
                        menu_book
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-bold text-on-surface text-xs md:text-sm truncate">
                    {book.title}
                  </p>
                  <p className="text-xs md:text-label-md text-on-surface-variant">
                    {book.categories?.[0] || book.authors?.[0] || ""}
                  </p>
                </div>
              </Link>
            ) : null
          )
        )}

        <Link
          to="/dashboard/books"
          className="flex-shrink-0 w-[130px] sm:w-[140px] md:w-[150px] lg:w-[160px] flex flex-col gap-2 group opacity-50 hover:opacity-100 transition-opacity"
        >
          <div className="aspect-[2/3] rounded-lg md:rounded-xl bg-surface-container-high flex flex-col items-center justify-center border-2 border-dashed border-outline-variant">
            <span className="material-symbols-outlined text-outline-variant text-2xl md:text-4xl mb-1 md:mb-2">
              add_circle
            </span>
            <p className="text-xs md:text-label-md font-bold text-outline-variant">
              Add Book
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Bookshelf;
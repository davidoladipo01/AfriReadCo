import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getContinueReading } from "../../services/reading.service";
import { getBookCoverUrl } from "../../utils/bookCover";

const ContinueReading = () => {
  const navigate = useNavigate();

  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await getContinueReading();
        const list = response.data.data || [];

        setEntry(list[0] || null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  return (
    <div className="lg:col-span-8 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Continue Reading
        </h2>
        <Link className="text-primary font-bold hover:underline" to="/dashboard/books">
          View All Bookshelf
        </Link>
      </div>

      {loading ? (
        <div className="bento-card bg-surface-container-low border-none premium-shadow">
          <p className="text-on-surface-variant">Loading...</p>
        </div>
      ) : !entry?.book ? (
        <div className="bento-card flex flex-col items-center justify-center text-center gap-4 bg-surface-container-low border-none premium-shadow py-12">
          <span className="material-symbols-outlined text-primary text-5xl">
            menu_book
          </span>
          <p className="text-on-surface-variant">
            You're not currently reading anything.
          </p>
          <button
            className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold hover:scale-105 transition-transform"
            onClick={() => navigate("/dashboard/books")}
          >
            Browse Books
          </button>
        </div>
      ) : (
        (() => {
          const book = entry.book;
          const percentage = Math.min(
            100,
            Math.round(entry.percentage || 0)
          );
          const hasPageCount = Boolean(book.pageCount);

          return (
            <div className="bento-card flex flex-col md:flex-row gap-8 items-center bg-surface-container-low border-none premium-shadow">
              <div className="w-full md:w-1/3">
                {book.coverImage || book.image || book.cover || book.cover_url || book.thumbnail ? (
                  <img
                    className="w-full rounded-xl shadow-lg"
                    alt="Book cover"
                    src={getBookCoverUrl(book)}
                  />
                ) : (
                  <div className="w-full aspect-[2/3] rounded-xl shadow-lg bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-outline-variant text-5xl">
                      menu_book
                    </span>
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-4">
                <span className="text-label-md bg-primary/10 text-primary px-3 py-1 rounded-full self-start">
                  Current Read
                </span>
                <h3 className="font-display-lg text-headline-lg text-on-surface leading-tight">
                  {book.title}
                </h3>
                <p className="text-body-lg text-on-surface-variant">
                  {book.authors?.join(", ")}
                </p>
                <div className="mt-4">
                  <div className="flex justify-between text-label-md text-on-surface-variant mb-2">
                    <span>{percentage}% Complete</span>
                    {hasPageCount && (
                      <span>
                        {entry.currentPage} of {book.pageCount} pages
                      </span>
                    )}
                  </div>
                  <div className="w-full bg-surface-variant h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    className="bg-[#C65D3B] text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2"
                    onClick={() => navigate(`/dashboard/read/${book._id}`)}
                  >
                    <span className="material-symbols-outlined">menu_book</span>
                    Resume Reading
                  </button>
                  <button className="border-2 border-outline-variant text-on-surface-variant px-6 py-3 rounded-xl font-bold hover:bg-surface-variant/20 transition-colors">
                    Notes &amp; Reviews
                  </button>
                </div>
              </div>
            </div>
          );
        })()
      )}
    </div>
  );
};

export default ContinueReading;
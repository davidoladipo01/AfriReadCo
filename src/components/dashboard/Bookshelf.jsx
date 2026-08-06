import { bookCovers } from "./dashboardData";

const Bookshelf = () => (
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
      {bookCovers.map((book) => (
        <div
          key={book.title}
          className="flex-shrink-0 w-[130px] sm:w-[140px] md:w-[150px] lg:w-[160px] flex flex-col gap-2 group"
        >
          <div className="relative aspect-[2/3] rounded-lg md:rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Book cover"
              src={book.image}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button className="w-10 h-10 md:w-12 md:h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                <span className="material-symbols-outlined text-lg md:text-2xl">add</span>
              </button>
            </div>
          </div>
          <div>
            <p className="font-bold text-on-surface text-xs md:text-sm truncate">{book.title}</p>
            <p className="text-xs md:text-label-md text-on-surface-variant">
              {book.category}
            </p>
          </div>
        </div>
      ))}
      <div className="flex-shrink-0 w-[130px] sm:w-[140px] md:w-[150px] lg:w-[160px] flex flex-col gap-2 group opacity-50">
        <div className="aspect-[2/3] rounded-lg md:rounded-xl bg-surface-container-high flex flex-col items-center justify-center border-2 border-dashed border-outline-variant">
          <span className="material-symbols-outlined text-outline-variant text-2xl md:text-4xl mb-1 md:mb-2">
            add_circle
          </span>
          <p className="text-xs md:text-label-md font-bold text-outline-variant">
            Add Book
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default Bookshelf;
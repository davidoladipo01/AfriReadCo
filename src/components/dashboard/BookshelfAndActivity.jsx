import Bookshelf from "./Bookshelf";
import ActivityFeed from "./ActivityFeed";

const BookshelfAndActivity = () => (
  <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
    <Bookshelf />
    <ActivityFeed />
  </section>
);

export default BookshelfAndActivity;

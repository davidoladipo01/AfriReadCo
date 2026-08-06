import ContinueReading from "./ContinueReading";
import ReadingAnalytics from "./ReadingAnalytics";

const ReadingOverview = () => (
  <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
    <ContinueReading />
    <ReadingAnalytics />
  </section>
);

export default ReadingOverview;

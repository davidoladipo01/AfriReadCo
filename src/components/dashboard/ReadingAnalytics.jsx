import { weekDays, weeklyPages } from "./dashboardData";

const ReadingAnalytics = () => (
  <div className="lg:col-span-4 flex flex-col gap-6">
    <h2 className="font-headline-lg text-headline-lg text-on-surface">
      Reading Habits
    </h2>
    <div className="bento-card h-full flex flex-col gap-6 bg-white border-outline-variant/10 premium-shadow">
      <div className="flex justify-between items-center">
        <p className="font-bold">Pages per Week</p>
        <select className="bg-surface-container-low border-none rounded-lg text-label-md">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>
      <div className="flex-1 flex items-end justify-between gap-2 h-[220px] pb-4 border-b border-outline-variant/20">
        {weeklyPages.map((pages, index) => (
          <div
            key={weekDays[index] + pages}
            className={`w-full rounded-t-lg hover:bg-primary-container/40 transition-colors cursor-pointer relative group ${index === 3 ? "bg-primary" : "bg-primary-container/20"}`}
            style={{ height: `${pages}%` }}
          >
            <div
              className={`absolute -top-8 left-1/2 -translate-x-1/2 text-white text-xs px-2 py-1 rounded ${index === 3 ? "bg-primary block" : "bg-on-surface hidden group-hover:block"}`}
            >
              {pages}p
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-label-md text-on-surface-variant font-medium">
        {weekDays.map((day, index) => (
          <span
            key={`${day}-${index}`}
            className={index === 3 ? "text-primary font-bold" : ""}
          >
            {day}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20">
        <div>
          <p className="text-label-md text-on-surface-variant">Avg. Daily</p>
          <p className="font-headline-md text-on-surface">28 min</p>
        </div>
        <div>
          <p className="text-label-md text-on-surface-variant">Best Time</p>
          <p className="font-headline-md text-on-surface">21:30</p>
        </div>
      </div>
    </div>
  </div>
);
export default ReadingAnalytics;

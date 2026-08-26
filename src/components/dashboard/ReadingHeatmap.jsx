import { useEffect, useState } from "react";
import { getReadingHeatmap, getReadingStreak } from "../../services/reading.service";

const colorByIntensity = [
  "bg-surface-container",
  "bg-primary/20",
  "bg-primary/50",
  "bg-primary",
];

const intensityFromMinutes = (minutes) => {
  if (minutes <= 0) return 0;
  if (minutes < 30) return 1;
  if (minutes < 60) return 2;
  return 3;
};

const ReadingHeatmap = () => {
  const [days, setDays] = useState([]);
  const [streak, setStreak] = useState({ currentStreak: 0 });

  useEffect(() => {
    getReadingHeatmap(364).then((res) => setDays(res.data.data)).catch(() => {});
    getReadingStreak().then((res) => setStreak(res.data.data)).catch(() => {});
  }, []);

  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-headline-lg text-headline-lg text-on-surface">
        Consistency
      </h2>
      <div className="bento-card bg-white border-outline-variant/10 premium-shadow">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <p className="font-bold text-on-surface">
              {streak.currentStreak} day streak
            </p>
            <div className="flex gap-2">
              <div className="flex items-center gap-1 text-label-md">
                <div className="w-3 h-3 rounded-sm bg-surface-container" />
                <span className="text-on-surface-variant">0 min</span>
              </div>
              <div className="flex items-center gap-1 text-label-md">
                <div className="w-3 h-3 rounded-sm bg-primary/30" />
                <span className="text-on-surface-variant">1-30 min</span>
              </div>
              <div className="flex items-center gap-1 text-label-md">
                <div className="w-3 h-3 rounded-sm bg-primary" />
                <span className="text-on-surface-variant">60+ min</span>
              </div>
            </div>
          </div>
          <p className="text-label-md text-on-surface-variant">Last 365 days</p>
        </div>
        <div className="flex gap-1 overflow-x-auto pb-2 no-scrollbar">
          <div className="grid grid-flow-col grid-rows-7 gap-1">
            {days.map((day) => {
              const intensity = intensityFromMinutes(day.minutes);
              return (
                <div
                  key={day.date}
                  className={`w-3 h-3 rounded-sm ${colorByIntensity[intensity]} transition-colors hover:scale-125 hover:shadow-md cursor-help`}
                  title={`${day.date}: ${day.minutes} mins read`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadingHeatmap;
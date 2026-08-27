import { useEffect, useState } from "react";
import { getTodayActivity } from "../../services/reading.service";

const ReadingChallengeCard = () => {
  const [activity, setActivity] = useState({ minutesRead: 0, goalMinutes: 20 });

  useEffect(() => {
    getTodayActivity()
      .then((res) => setActivity(res.data.data))
      .catch(() => {});
  }, []);

  const pct = Math.min((activity.minutesRead / activity.goalMinutes) * 100, 100);

  return (
    <div className="bento-card flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <p className="font-bold text-on-surface">Today's Challenge</p>
        <span className="text-label-md bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full">
          +50 XP
        </span>
      </div>
      <p className="text-body-md text-on-surface-variant">
        Read for {activity.goalMinutes} minutes today
      </p>
      <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden mt-auto">
        <div className="bg-primary h-full" style={{ width: `${pct}%` }} />
      </div>
      <p className="text-label-md text-on-surface-variant text-right">
        {activity.minutesRead}/{activity.goalMinutes} min
      </p>
    </div>
  );
};

export default ReadingChallengeCard;
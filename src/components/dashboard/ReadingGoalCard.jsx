import { useEffect, useState } from "react";
import { getReadingGoal } from "../../services/reading.service";

const ReadingGoalCard = () => {
  const [progress, setProgress] = useState({ booksCompleted: 0, goal: 12 });

  useEffect(() => {
    getReadingGoal()
      .then((res) => setProgress(res.data.data))
      .catch(() => {});
  }, []);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const fraction = Math.min(progress.booksCompleted / (progress.goal || 1), 1);
  const offset = circumference - fraction * circumference;

  return (
    <div className="bento-card flex flex-col items-center text-center gap-4">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 128 128">
          <circle cx="64" cy="64" fill="transparent" r={radius} stroke="#e6e2da" strokeWidth="8" />
          <circle
            cx="64" cy="64" r={radius} fill="transparent" stroke="#996c04"
            strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="butt"
            strokeWidth="8" style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display-lg text-headline-md text-on-surface">{progress.booksCompleted}</span>
          <span className="text-label-md text-on-surface-variant">of {progress.goal}</span>
        </div>
      </div>
      <p className="font-bold text-on-surface">Annual Reading Goal</p>
    </div>
  );
};

export default ReadingGoalCard;
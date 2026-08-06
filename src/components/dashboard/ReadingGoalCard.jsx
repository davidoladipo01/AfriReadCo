const ReadingGoalCard = () => {
  const radius = 54; // Reduced from 58 to account for stroke width
  const circumference = 2 * Math.PI * radius; // 339.29
  const offset = circumference - (12 / 20) * circumference; // 135.72

  

  return (
    <div className="bento-card flex flex-col items-center text-center gap-4">
      <div className="relative w-32 h-32">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 128 128"
        >
          {/* Background circle */}
          <circle
            cx="64"
            cy="64"
            fill="transparent"
            r={radius}
            stroke="#e6e2da"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            fill="transparent"
            stroke="#996c04"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="butt"
            strokeWidth="8"
            style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display-lg text-headline-md text-on-surface">
            12
          </span>
          <span className="text-label-md text-on-surface-variant">of 20</span>
        </div>
      </div>
      <p className="font-bold text-on-surface">Annual Reading Goal</p>
    </div>
  );
};

export default ReadingGoalCard;
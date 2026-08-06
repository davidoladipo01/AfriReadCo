const AchievementCard = () => (
  <div className="bento-card flex flex-col gap-4">
    <p className="font-bold text-on-surface">Recent Achievements</p>
    <div className="flex gap-4">
      <div
        className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center"
        title="First Review"
      >
        <span className="material-symbols-outlined text-primary">
          rate_review
        </span>
      </div>
      <div
        className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center"
        title="10 Books Completed"
      >
        <span className="material-symbols-outlined text-tertiary">
          military_tech
        </span>
      </div>
      <div className="w-12 h-12 rounded-full border-2 border-dashed border-outline-variant flex items-center justify-center text-outline-variant">
        <span className="material-symbols-outlined">lock</span>
      </div>
    </div>
    <p className="text-label-md text-on-surface-variant mt-auto">
      Unlock "Library Master" by completing 3 more reviews.
    </p>
  </div>
);
export default AchievementCard;

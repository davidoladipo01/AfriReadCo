const ReadingChallengeCard = () => (
  <div className="bento-card flex flex-col gap-4"><div className="flex justify-between items-start"><p className="font-bold text-on-surface">Today's Challenge</p><span className="text-label-md bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full">+50 XP</span></div><p className="text-body-md text-on-surface-variant">Read 25 pages today</p><div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden mt-auto"><div className="bg-primary h-full w-[65%]" /></div><p className="text-label-md text-on-surface-variant text-right">16/25 pages</p></div>
);
export default ReadingChallengeCard;

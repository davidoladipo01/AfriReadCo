const ActiveClubCard = () => (
  <div className="bento-card border-tertiary/20 bg-tertiary-fixed/10 flex flex-col gap-4">
    <p className="text-label-md text-tertiary font-bold tracking-wider">
      ACTIVE CLUB
    </p>
    <div>
      <h3 className="font-headline-md text-on-surface leading-tight">
        African Fantasy Circle
      </h3>
      <p className="text-body-md text-on-surface-variant mt-1">
        Live discussion in 2h 15m
      </p>
    </div>
    <button className="w-full py-2.5 rounded-xl bg-tertiary text-white font-bold hover:bg-tertiary/90 transition-colors mt-auto">
      Join Circle
    </button>
  </div>
);
export default ActiveClubCard;

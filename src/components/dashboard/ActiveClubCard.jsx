import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyActiveClub } from "../../services/club.service";

const daysLeft = (endDate) => {
  const diff = new Date(endDate) - new Date();
  return Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 0);
};

const ActiveClubCard = () => {
  const [club, setClub] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMyActiveClub()
      .then((res) => setClub(res.data.club))
      .catch(() => {});
  }, []);

  if (!club) {
    return (
      <div className="bento-card border-tertiary/20 bg-tertiary-fixed/10 flex flex-col gap-4">
        <p className="text-label-md text-tertiary font-bold tracking-wider">NO ACTIVE CLUB</p>
        <p className="text-body-md text-on-surface-variant">
          Join a reading circle to see it here.
        </p>
        <button
          className="w-full py-2.5 rounded-xl bg-tertiary text-white font-bold hover:bg-tertiary/90 transition-colors mt-auto"
          onClick={() => navigate("/dashboard/communities")}
        >
          Browse Clubs
        </button>
      </div>
    );
  }

  return (
    <div className="bento-card border-tertiary/20 bg-tertiary-fixed/10 flex flex-col gap-4">
      <p className="text-label-md text-tertiary font-bold tracking-wider">ACTIVE CLUB</p>
      <div>
        <h3 className="font-headline-md text-on-surface leading-tight">{club.name}</h3>
        <p className="text-body-md text-on-surface-variant mt-1">
          {club.activeSchedule
            ? `${club.activeSchedule.chapterRange} · ${daysLeft(club.activeSchedule.endDate)} days left`
            : club.currentBook
            ? `Reading: ${club.currentBook.title}`
            : "No active reading schedule"}
        </p>
      </div>
      <button
        className="w-full py-2.5 rounded-xl bg-tertiary text-white font-bold hover:bg-tertiary/90 transition-colors mt-auto"
        onClick={() => navigate(`/dashboard/communities/${club._id}`)}
      >
        Open Circle
      </button>
    </div>
  );
};

export default ActiveClubCard;
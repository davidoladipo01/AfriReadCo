import { useEffect, useState } from "react";
import { getProfile } from "../services/reading.service";
import LoadingState from "../components/common/LoadingState";

const StatCard = ({ label, value }) => (
  <div className="bento-card flex flex-col items-center text-center gap-1">
    <span className="font-display-lg text-headline-md text-on-surface">{value}</span>
    <span className="text-label-md text-on-surface-variant">{label}</span>
  </div>
);

const Profile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProfile()
      .then((res) => setData(res.data.data))
      .catch(() => setError("Couldn't load profile."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingState message="Loading profile..." />;
  if (error) return <p className="p-8 text-red-500">{error}</p>;

  const { user, stats } = data;
  const memberSince = new Date(stats.memberSince).toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col gap-8 p-6 md:p-8">
      {/* Header */}
      <section className="bento-card flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={user.avatar || "/default-avatar.png"}
          alt={user.firstName}
          className="w-28 h-28 rounded-full object-cover border border-outline-variant/30"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-body-md text-on-surface-variant">@{user.userName}</p>
          {user.bio && (
            <p className="text-body-md text-on-surface mt-2 max-w-xl">{user.bio}</p>
          )}
          <p className="text-label-md text-on-surface-variant mt-2">
            Member since {memberSince}
            {user.location ? ` · ${user.location}` : ""}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        <StatCard label="Books Completed" value={stats.booksCompleted} />
        <StatCard label="Currently Reading" value={stats.booksReading} />
        <StatCard label="Day Streak" value={stats.currentStreak} />
        <StatCard label="Minutes Read" value={stats.totalMinutesRead} />
      </section>

      {/* Genres & favorites */}
      <section className="bento-card flex flex-col gap-4">
        <h2 className="font-headline-md text-on-surface">Reading Preferences</h2>

        {user.genres?.length > 0 && (
          <div>
            <p className="text-label-md text-on-surface-variant mb-2">Favorite genres</p>
            <div className="flex flex-wrap gap-2">
              {user.genres.map((genre) => (
                <span
                  key={genre}
                  className="text-label-md bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        )}

        {user.favoriteAuthors?.length > 0 && (
          <div>
            <p className="text-label-md text-on-surface-variant mb-2">Favorite authors</p>
            <p className="text-body-md text-on-surface">{user.favoriteAuthors.join(", ")}</p>
          </div>
        )}

        {user.favoriteBooks?.length > 0 && (
          <div>
            <p className="text-label-md text-on-surface-variant mb-2">Favorite books</p>
            <p className="text-body-md text-on-surface">{user.favoriteBooks.join(", ")}</p>
          </div>
        )}

        {!user.genres?.length && !user.favoriteAuthors?.length && !user.favoriteBooks?.length && (
          <p className="text-body-md text-on-surface-variant">
            No reading preferences set yet.
          </p>
        )}
      </section>
    </div>
  );
};

export default Profile;

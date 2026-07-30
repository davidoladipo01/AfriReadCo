import ReadingGoalCard from "./ReadingGoalCard";
import ReadingChallengeCard from "./ReadingChallengeCard";
import ActiveClubCard from "./ActiveClubCard";
import AchievementCard from "./AchievementCard";

const DashboardStats = () => <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter"><ReadingGoalCard /><ReadingChallengeCard /><ActiveClubCard /><AchievementCard /></section>;

export default DashboardStats;

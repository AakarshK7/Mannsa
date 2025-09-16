import { WelcomeBanner } from "./WelcomeBanner";
import { DashboardCards } from "./DashboardCards";
import { MoodTracker } from "./MoodTracker";
import { StudentProgress } from "./StudentProgress";

export function HomePage() {
  return (
    <div className="space-y-6">
      <WelcomeBanner />
      <DashboardCards />
      
      {/* Student Progress Section */}
      <div className="mb-8">
        <StudentProgress />
      </div>
      
      {/* Mood Tracker - Full width */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <MoodTracker />
        </div>
        <div className="xl:col-span-1">
          {/* Additional home widgets can go here */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 text-center">
            <h3 className="mb-2 text-purple-700">Your Wellness Journey</h3>
            <p className="text-sm text-gray-600 mb-4">Track your daily progress and celebrate small wins!</p>
            <div className="text-2xl mb-2">🌟</div>
            <p className="text-xs text-purple-600">You're doing great! Keep it up.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
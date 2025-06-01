import { Logo } from '@/components/Logo';
import { StreakCard } from '@/components/dashboard/StreakCard';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { MonthlyProgress } from '@/components/dashboard/MonthlyProgress';
import { WorkoutProgressAnalytics } from '@/components/dashboard/WorkoutProgressAnalytics';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
interface WorkoutProgress {
  name: string;
  current: number;
  previous: number;
  trend: 'up' | 'down';
}

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session?.user);

  const stats = {
    currentStreak: 7,
    totalWorkouts: 45,
    thisWeekWorkouts: 4,
    monthlyGoal: 20,
    completedThisMonth: 12,
  };

  const workoutProgress: WorkoutProgress[] = [
    { name: 'Push-ups', current: 45, previous: 35, trend: 'up' },
    { name: 'Squats', current: 60, previous: 65, trend: 'down' },
    { name: 'Bench Press', current: 135, previous: 125, trend: 'up' },
    { name: 'Deadlift', current: 185, previous: 180, trend: 'up' },
    { name: 'Pull-ups', current: 12, previous: 15, trend: 'down' },
  ];

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Header */}
      <div className="text-center py-6">
        <Logo />
        <p className="text-gray-600 text-sm mt-1">Track your fitness journey</p>
      </div>

      <StreakCard currentStreak={stats.currentStreak} />
      <StatsGrid
        totalWorkouts={stats.totalWorkouts}
        thisWeekWorkouts={stats.thisWeekWorkouts}
      />
      <MonthlyProgress
        monthlyGoal={stats.monthlyGoal}
        completedThisMonth={stats.completedThisMonth}
      />
      <WorkoutProgressAnalytics workoutProgress={workoutProgress} />
      <QuickActions />
    </div>
  );
}

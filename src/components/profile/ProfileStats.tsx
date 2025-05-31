import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Target, Calendar, User } from 'lucide-react';

interface ProfileStatsProps {
  stats: {
    totalWorkouts: number;
    currentStreak: number;
    personalRecords: number;
    memberSince: string;
  };
}

export function ProfileStats({ stats }: ProfileStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardContent className="p-4 text-center">
          <Trophy className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{stats.totalWorkouts}</p>
          <p className="text-xs text-gray-600">Total Workouts</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <Target className="h-6 w-6 text-green-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{stats.currentStreak}</p>
          <p className="text-xs text-gray-600">Day Streak</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <Calendar className="h-6 w-6 text-blue-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{stats.personalRecords}</p>
          <p className="text-xs text-gray-600">Personal Records</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <User className="h-6 w-6 text-purple-500 mx-auto mb-2" />
          <p className="text-sm font-bold">{stats.memberSince}</p>
          <p className="text-xs text-gray-600">Member Since</p>
        </CardContent>
      </Card>
    </div>
  );
}

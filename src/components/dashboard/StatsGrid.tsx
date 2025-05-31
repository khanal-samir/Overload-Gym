import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Calendar } from 'lucide-react';

interface StatsGridProps {
  totalWorkouts: number;
  thisWeekWorkouts: number;
}

export function StatsGrid({ totalWorkouts, thisWeekWorkouts }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-full">
              <Trophy className="h-6 w-6 text-yellow-300" />
            </div>
            <div>
              <p className="text-xs text-blue-100">Total Workouts</p>
              <p className="text-2xl font-bold">{totalWorkouts}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-full">
              <Calendar className="h-6 w-6 text-green-200" />
            </div>
            <div>
              <p className="text-xs text-green-100">This Week</p>
              <p className="text-2xl font-bold">{thisWeekWorkouts}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { Card, CardContent } from '@/components/ui/card';
import { Flame } from 'lucide-react';

interface StreakCardProps {
  currentStreak: number;
}

export function StreakCard({ currentStreak }: StreakCardProps) {
  return (
    <Card className="bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 text-white shadow-xl border-0 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />
      <CardContent className="p-6 relative">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-orange-100 text-sm font-medium">
              Current Streak
            </p>
            <p className="text-4xl font-bold mb-1">{currentStreak}</p>
            <p className="text-orange-100 text-sm">days strong! 🔥</p>
          </div>
          <div className="relative">
            <Flame className="h-16 w-16 text-orange-200" />
            <div className="absolute inset-0 animate-pulse">
              <Flame className="h-16 w-16 text-yellow-300" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

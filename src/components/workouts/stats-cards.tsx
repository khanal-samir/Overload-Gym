import { Dumbbell, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white shadow-xl border-0 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
        <CardContent className="p-4 text-center relative">
          <div className="p-2 bg-white/20 rounded-full w-fit mx-auto mb-2">
            <Dumbbell className="h-8 w-8 text-blue-100" />
          </div>
          <p className="text-2xl font-bold">45</p>
          <p className="text-xs text-blue-100">Total Workouts</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 text-white shadow-xl border-0 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
        <CardContent className="p-4 text-center relative">
          <div className="p-2 bg-white/20 rounded-full w-fit mx-auto mb-2">
            <TrendingUp className="h-8 w-8 text-green-100" />
          </div>
          <p className="text-2xl font-bold">7</p>
          <p className="text-xs text-green-100">This Week</p>
        </CardContent>
      </Card>
    </div>
  );
}

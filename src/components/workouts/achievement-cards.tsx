import { Award, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AchievementCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
        <CardContent className="p-4 text-center">
          <div className="p-2 bg-white/20 rounded-full w-fit mx-auto mb-2">
            <Award className="h-6 w-6 text-purple-100" />
          </div>
          <p className="text-lg font-bold">12</p>
          <p className="text-xs text-purple-100">Personal Records</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
        <CardContent className="p-4 text-center">
          <div className="p-2 bg-white/20 rounded-full w-fit mx-auto mb-2">
            <Target className="h-6 w-6 text-orange-100" />
          </div>
          <p className="text-lg font-bold">85%</p>
          <p className="text-xs text-orange-100">Goal Progress</p>
        </CardContent>
      </Card>
    </div>
  );
}

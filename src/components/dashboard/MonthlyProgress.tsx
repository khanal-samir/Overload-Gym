import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Target } from 'lucide-react';

interface MonthlyProgressProps {
  monthlyGoal: number;
  completedThisMonth: number;
}

export function MonthlyProgress({
  monthlyGoal,
  completedThisMonth,
}: MonthlyProgressProps) {
  const progressPercentage = Math.round(
    (completedThisMonth / monthlyGoal) * 100
  );

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <div className="p-2 bg-green-100 rounded-full">
            <Target className="h-5 w-5 text-green-600" />
          </div>
          Monthly Goal
          <Badge
            variant="secondary"
            className="ml-auto bg-green-100 text-green-700"
          >
            {progressPercentage}%
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              {completedThisMonth} of {monthlyGoal} workouts
            </span>
            <span className="font-medium text-green-600">
              {monthlyGoal - completedThisMonth} remaining
            </span>
          </div>
          <div className="relative">
            <Progress value={progressPercentage} className="h-3" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 animate-pulse" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

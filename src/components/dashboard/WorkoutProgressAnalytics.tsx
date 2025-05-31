import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Zap } from 'lucide-react';

interface WorkoutProgress {
  name: string;
  current: number;
  previous: number;
  trend: 'up' | 'down';
}

interface WorkoutProgressAnalyticsProps {
  workoutProgress: WorkoutProgress[];
}

export function WorkoutProgressAnalytics({
  workoutProgress,
}: WorkoutProgressAnalyticsProps) {
  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-purple-50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <div className="p-2 bg-purple-100 rounded-full">
            <TrendingUp className="h-5 w-5 text-purple-600" />
          </div>
          Progress Analytics
          <Zap className="h-4 w-4 text-yellow-500 ml-auto" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {workoutProgress.map((workout, index) => (
          <div
            key={index}
            className="space-y-3 p-3 rounded-lg bg-white shadow-sm border"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">{workout.name}</span>
              <div className="flex items-center gap-2">
                <Badge
                  variant={workout.trend === 'up' ? 'default' : 'destructive'}
                  className={`text-xs ${
                    workout.trend === 'up'
                      ? 'bg-green-100 text-green-700 border-green-200'
                      : 'bg-red-100 text-red-700 border-red-200'
                  }`}
                >
                  {workout.trend === 'up' ? '↗' : '↘'}{' '}
                  {Math.abs(workout.current - workout.previous)}
                </Badge>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>Previous: {workout.previous}</span>
              <span className="font-medium text-gray-900">
                Current: {workout.current}
              </span>
            </div>
            <div className="relative">
              <Progress
                value={Math.min(
                  (workout.current / (workout.previous * 1.5)) * 100,
                  100
                )}
                className="h-2"
              />
              {workout.trend === 'up' && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 animate-pulse" />
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

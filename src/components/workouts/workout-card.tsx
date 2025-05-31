import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle2, Circle, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import type { Workout } from '@/lib/types';

interface WorkoutCardProps {
  workout: Workout;
  href?: string;
}

export function WorkoutCard({ workout, href }: WorkoutCardProps) {
  const CardWrapper = href ? Link : 'div';
  const cardProps = href ? { href } : {};

  const totalSets = workout.exercises.reduce(
    (total, ex) => total + ex.sets.length,
    0
  );
  const completedSets = workout.exercises.reduce(
    (total, ex) => total + ex.sets.filter(set => set.completed).length,
    0
  );
  const completionRate =
    totalSets > 0 ? Math.round((completedSets / totalSets) * 100) : 0;

  return (
    <CardWrapper {...cardProps}>
      <Card
        className={`${
          href
            ? 'cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300'
            : ''
        } border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 relative overflow-hidden`}
      >
        {/* Completion indicator line */}
        <div
          className={`absolute top-0 left-0 h-1 transition-all duration-500 ${
            completionRate === 100
              ? 'bg-gradient-to-r from-green-400 to-emerald-500 w-full'
              : 'bg-gradient-to-r from-blue-400 to-blue-500'
          }`}
          style={{ width: `${completionRate}%` }}
        />

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-12 translate-x-12 opacity-50" />

        <CardContent className="p-4 relative">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-gray-900 text-lg">
                  {workout.name}
                </h3>
                {completionRate === 100 ? (
                  <div className="p-1 bg-green-100 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                ) : (
                  <div className="p-1 bg-gray-100 rounded-full">
                    <Circle className="h-4 w-4 text-gray-400" />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <Calendar className="h-4 w-4" />
                <span>{workout.date}</span>
                {completionRate === 100 && (
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700 border-green-200 text-xs"
                  >
                    <Zap className="h-3 w-3 mr-1" />
                    Complete
                  </Badge>
                )}
              </div>

              {/* Enhanced Progress Bar */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2.5 relative overflow-hidden">
                  <div
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      completionRate === 100
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                        : 'bg-gradient-to-r from-blue-400 to-blue-600'
                    }`}
                    style={{ width: `${completionRate}%` }}
                  />
                  {completionRate > 0 && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  )}
                </div>
                <span className="text-sm font-bold text-gray-700">
                  {completionRate}%
                </span>
              </div>
            </div>

            <div className="text-right ml-4">
              <div className="flex items-center gap-1 mb-1">
                <TrendingUp className="h-4 w-4 text-blue-500" />
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 border-blue-200"
                >
                  {totalSets} sets
                </Badge>
              </div>
              <p className="text-xs text-gray-500">
                {workout.exercises.length} exercises
              </p>
            </div>
          </div>

          {/* Enhanced Exercise Tags */}
          <div className="flex flex-wrap gap-2">
            {workout.exercises.slice(0, 3).map((exercise, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors"
              >
                {exercise.name}
              </Badge>
            ))}
            {workout.exercises.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs bg-gray-50 text-gray-600 border-gray-200"
              >
                +{workout.exercises.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}

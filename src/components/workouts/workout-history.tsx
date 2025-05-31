import { Dumbbell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { WorkoutCard } from '@/components/workouts/workout-card';
import type { Workout } from '@/lib/types';

interface WorkoutHistoryProps {
  workouts: Workout[];
  searchTerm: string;
}

export function WorkoutHistory({ workouts, searchTerm }: WorkoutHistoryProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Recent Workouts
        </h2>
        <Badge
          variant="outline"
          className="text-xs bg-blue-50 text-blue-700 border-blue-200"
        >
          {workouts.length} workouts
        </Badge>
      </div>

      <div className="space-y-3">
        {workouts.map(workout => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            href={`/workouts/${workout.id}`}
          />
        ))}
      </div>

      {/* Empty State */}
      {workouts.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <div className="p-4 bg-gray-100 rounded-full w-fit mx-auto mb-3">
            <Dumbbell className="h-12 w-12 text-gray-400" />
          </div>
          <p className="text-gray-600 font-medium">No workouts found</p>
          <p className="text-sm text-gray-500">Try adjusting your search</p>
        </div>
      )}
    </div>
  );
}

'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { WorkoutLogger } from '@/components/workouts/workout-logger';
import { SearchInput } from '@/components/ui/search-input';
import { Button } from '@/components/ui/button';
import { useSearch } from '@/hooks/use-search';
import type { Workout } from '@/lib/types';
import { StatsCards } from '@/components/workouts/stats-cards';
import { AchievementCards } from '@/components/workouts/achievement-cards';
import { WeeklyProgress } from '@/components/workouts/weekly-progress';
import { WorkoutHistory } from '@/components/workouts/workout-history';

export default function WorkoutsPage() {
  const [showLogger, setShowLogger] = useState(false);

  // Mock workout history
  const workoutHistory: Workout[] = [
    {
      id: '1',
      name: 'Push Day',
      date: '2024-01-15',
      duration: '',
      exercises: [
        {
          id: '1',
          name: 'Bench Press',
          sets: [{ reps: 10, weight: 60, completed: true }],
        },
        {
          id: '2',
          name: 'Push-ups',
          sets: [{ reps: 15, weight: 0, completed: true }],
        },
        {
          id: '3',
          name: 'Shoulder Press',
          sets: [{ reps: 12, weight: 25, completed: true }],
        },
      ],
    },
    {
      id: '2',
      name: 'Pull Day',
      date: '2024-01-13',
      duration: '',
      exercises: [
        {
          id: '4',
          name: 'Pull-ups',
          sets: [{ reps: 8, weight: 0, completed: true }],
        },
        {
          id: '5',
          name: 'Deadlift',
          sets: [{ reps: 5, weight: 100, completed: true }],
        },
        {
          id: '6',
          name: 'Rows',
          sets: [{ reps: 10, weight: 50, completed: true }],
        },
      ],
    },
    {
      id: '3',
      name: 'Leg Day',
      date: '2024-01-11',
      duration: '',
      exercises: [
        {
          id: '7',
          name: 'Squats',
          sets: [{ reps: 12, weight: 80, completed: true }],
        },
        {
          id: '8',
          name: 'Lunges',
          sets: [{ reps: 10, weight: 20, completed: true }],
        },
        {
          id: '9',
          name: 'Calf Raises',
          sets: [{ reps: 15, weight: 0, completed: true }],
        },
      ],
    },
  ];

  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    workoutHistory,
    ['name'],
    [{ field: 'exercises', nestedField: 'name' }]
  );

  if (showLogger) {
    return <WorkoutLogger onClose={() => setShowLogger(false)} />;
  }

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Workouts
          </h1>
          <p className="text-gray-500 text-sm">Track your progress</p>
        </div>
        <Button
          onClick={() => setShowLogger(true)}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Log Workout
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search workouts..."
        />
      </div>

      {/* Enhanced Stats Section */}
      <div className="space-y-4">
        <StatsCards />
        <AchievementCards />
        <WeeklyProgress />
      </div>

      {/* Workout History */}
      <WorkoutHistory workouts={filteredItems} searchTerm={searchTerm} />
    </div>
  );
}

'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Edit3,
  Save,
  Calendar,
  Dumbbell,
  TrendingUp,
  Award,
  Zap,
  Star,
} from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';
import { ExerciseCard } from '@/components/ui/exercise-card';
import { NotesCard } from '@/components/ui/notes-card';
import { useWorkout } from '@/hooks/use-workout';
import type { Workout } from '@/lib/types';

interface WorkoutDetailProps {
  id: string;
}

export function WorkoutDetail({ id }: WorkoutDetailProps) {
  const [isEditing, setIsEditing] = useState(false);

  // Mock workout data - in real app, fetch based on id
  const initialWorkout: Workout = {
    id,
    name: 'Push Day',
    date: '2024-01-15',
    duration: '',
    notes: 'Great workout today! Felt strong on bench press.',
    exercises: [
      {
        id: '1',
        name: 'Bench Press',
        sets: [
          { reps: 10, weight: 60, completed: true },
          { reps: 8, weight: 65, completed: true },
          { reps: 6, weight: 70, completed: true },
        ],
        notes: 'Form felt good, going up in weight next time',
      },
      {
        id: '2',
        name: 'Push-ups',
        sets: [
          { reps: 15, weight: 0, completed: true },
          { reps: 12, weight: 0, completed: true },
          { reps: 10, weight: 0, completed: true },
        ],
        notes: 'Did these to failure on last set',
      },
      {
        id: '3',
        name: 'Shoulder Press',
        sets: [
          { reps: 12, weight: 25, completed: true },
          { reps: 10, weight: 25, completed: true },
          { reps: 8, weight: 30, completed: false },
        ],
        notes: '',
      },
    ],
  };

  const {
    workout,
    updateSet,
    addSet,
    removeSet,
    updateExerciseNotes,
    updateWorkoutNotes,
    removeExercise,
  } = useWorkout(initialWorkout);

  const saveWorkout = () => {
    setIsEditing(false);
    // Save workout to database
    console.log('Saving workout:', workout);
  };

  const totalSets = workout.exercises.reduce(
    (total, exercise) => total + exercise.sets.length,
    0
  );
  const completedSets = workout.exercises.reduce(
    (total, exercise) =>
      total + exercise.sets.filter(set => set.completed).length,
    0
  );
  const totalWeight = workout.exercises.reduce(
    (total, exercise) =>
      total +
      exercise.sets.reduce(
        (setTotal, set) => setTotal + set.weight * set.reps,
        0
      ),
    0
  );
  const completionRate =
    totalSets > 0 ? Math.round((completedSets / totalSets) * 100) : 0;

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Header */}
      <PageHeader
        href="/workouts"
        title={workout.name}
        action={{
          label: isEditing ? 'Save' : 'Edit',
          onClick: isEditing ? saveWorkout : () => setIsEditing(true),
          icon: isEditing ? (
            <Save className="h-4 w-4 mr-1" />
          ) : (
            <Edit3 className="h-4 w-4 mr-1" />
          ),
          variant: 'ghost',
        }}
      />

      {/* Enhanced Workout Header */}
      <Card className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white shadow-2xl border-0 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">{workout.date}</span>
                {completionRate === 100 && (
                  <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                )}
              </div>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                <Zap className="h-3 w-3 mr-1" />
                {completionRate}% Complete
              </Badge>
            </div>
            <div className="relative">
              <Dumbbell className="h-12 w-12 text-blue-200" />
              {completionRate === 100 && (
                <div className="absolute inset-0 animate-pulse">
                  <Dumbbell className="h-12 w-12 text-yellow-300" />
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-blue-100 mb-2">
              <span>Progress</span>
              <span>
                {completedSets}/{totalSets} sets
              </span>
            </div>
            <div className="bg-white/20 rounded-full h-3 relative overflow-hidden">
              <div
                className="bg-gradient-to-r from-white to-yellow-200 h-3 rounded-full transition-all duration-500"
                style={{ width: `${completionRate}%` }}
              />
              {completionRate > 0 && (
                <div className="absolute inset-0 bg-white/10 animate-pulse" />
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <CardContent className="p-4 text-center">
            <div className="p-2 bg-green-100 rounded-full w-fit mx-auto mb-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-xl font-bold text-green-700">
              {workout.exercises.length}
            </p>
            <p className="text-xs text-green-600">Exercises</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 via-purple-50 to-purple-100 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <CardContent className="p-4 text-center">
            <div className="p-2 bg-purple-100 rounded-full w-fit mx-auto mb-2">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-xl font-bold text-purple-700">{completedSets}</p>
            <p className="text-xs text-purple-600">Sets Done</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 via-orange-50 to-orange-100 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <CardContent className="p-4 text-center">
            <div className="p-2 bg-orange-100 rounded-full w-fit mx-auto mb-2">
              <Dumbbell className="h-6 w-6 text-orange-600" />
            </div>
            <p className="text-xl font-bold text-orange-700">{totalWeight}</p>
            <p className="text-xs text-orange-600">Total kg</p>
          </CardContent>
        </Card>
      </div>

      {/* Workout Notes */}
      <NotesCard
        title="Workout Notes"
        notes={workout.notes || ''}
        isEditing={isEditing}
        onNotesChange={updateWorkoutNotes}
        placeholder="Add notes about your workout..."
      />

      {/* Exercises */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Exercises
          </h2>
          <Badge
            variant="outline"
            className="text-xs bg-blue-50 text-blue-700 border-blue-200"
          >
            <Zap className="h-3 w-3 mr-1" />
            {workout.exercises.length} exercises
          </Badge>
        </div>

        {workout.exercises.map((exercise, exerciseIndex) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            isEditing={isEditing}
            onUpdateSet={(setIndex, field, value) =>
              updateSet(exerciseIndex, setIndex, field, value)
            }
            onAddSet={() => addSet(exerciseIndex)}
            onRemoveSet={setIndex => removeSet(exerciseIndex, setIndex)}
            onUpdateNotes={notes => updateExerciseNotes(exerciseIndex, notes)}
            onRemoveExercise={() => removeExercise(exerciseIndex)}
          />
        ))}
      </div>

      {/* Enhanced Action Buttons */}
      {!isEditing && (
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="w-full border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
          >
            Repeat Workout
          </Button>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Start Similar
          </Button>
        </div>
      )}
    </div>
  );
}

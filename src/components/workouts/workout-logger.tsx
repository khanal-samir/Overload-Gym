'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Save, Plus } from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';
import { ExerciseCard } from '@/components/ui/exercise-card';
import { useWorkout } from '@/hooks/use-workout';
import type { Exercise } from '@/lib/types';

interface WorkoutLoggerProps {
  onClose: () => void;
}

export function WorkoutLogger({ onClose }: WorkoutLoggerProps) {
  const [workoutName, setWorkoutName] = useState('');
  const [currentExercise, setCurrentExercise] = useState('');

  const initialWorkout = {
    id: '',
    name: '',
    date: new Date().toISOString().split('T')[0],
    duration: '',
    exercises: [],
    notes: '',
  };

  const {
    workout,
    updateSet,
    addSet,
    removeSet,
    updateExerciseNotes,
    addExercise,
    removeExercise,
  } = useWorkout(initialWorkout);

  const addNewExercise = () => {
    if (currentExercise.trim()) {
      const newExercise: Exercise = {
        id: Date.now().toString(),
        name: currentExercise.trim(),
        sets: [{ reps: 0, weight: 0, completed: false }],
        notes: '',
      };
      addExercise(newExercise);
      setCurrentExercise('');
    }
  };

  const saveWorkout = () => {
    console.log('Saving workout:', {
      ...workout,
      name: workoutName,
    });
    onClose();
  };

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      {/* Header */}
      <PageHeader
        title="Log Workout"
        close={onClose}
        action={{
          label: 'Save',
          onClick: saveWorkout,
          icon: <Save className="h-4 w-4 mr-1" />,
          variant: 'default',
        }}
      />

      {/* Workout Name */}
      <div className="space-y-2">
        <Label htmlFor="workout-name">Workout Name</Label>
        <Input
          id="workout-name"
          placeholder="e.g., Push Day, Leg Day"
          value={workoutName}
          onChange={e => setWorkoutName(e.target.value)}
        />
      </div>

      {/* Add Exercise */}
      <div className="space-y-3">
        <Label>Add Exercise</Label>
        <div className="flex gap-2">
          <Input
            placeholder="Exercise name"
            value={currentExercise}
            onChange={e => setCurrentExercise(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && addNewExercise()}
          />
          <Button onClick={addNewExercise} size="sm">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Exercises */}
      <div className="space-y-4">
        {workout.exercises.map((exercise, exerciseIndex) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            isEditing={true}
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

      {workout.exercises.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No exercises added yet</p>
          <p className="text-sm">Add your first exercise above</p>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useCallback } from 'react';
import type { Workout, Exercise, WorkoutSet } from '@/lib/types';

export function useWorkout(initialWorkout: Workout) {
  const [workout, setWorkout] = useState<Workout>(initialWorkout);

  const updateSet = useCallback(
    (
      exerciseIndex: number,
      setIndex: number,
      field: keyof WorkoutSet,
      value: number | boolean
    ) => {
      setWorkout(prev => ({
        ...prev,
        exercises: prev.exercises.map((exercise, eIndex) =>
          eIndex === exerciseIndex
            ? {
                ...exercise,
                sets: exercise.sets.map((set, sIndex) =>
                  sIndex === setIndex ? { ...set, [field]: value } : set
                ),
              }
            : exercise
        ),
      }));
    },
    []
  );

  const addSet = useCallback((exerciseIndex: number) => {
    setWorkout(prev => ({
      ...prev,
      exercises: prev.exercises.map((exercise, eIndex) =>
        eIndex === exerciseIndex
          ? {
              ...exercise,
              sets: [
                ...exercise.sets,
                { reps: 0, weight: 0, completed: false },
              ],
            }
          : exercise
      ),
    }));
  }, []);

  const removeSet = useCallback((exerciseIndex: number, setIndex: number) => {
    setWorkout(prev => ({
      ...prev,
      exercises: prev.exercises.map((exercise, eIndex) =>
        eIndex === exerciseIndex
          ? {
              ...exercise,
              sets: exercise.sets.filter((_, sIndex) => sIndex !== setIndex),
            }
          : exercise
      ),
    }));
  }, []);

  const updateExerciseNotes = useCallback(
    (exerciseIndex: number, notes: string) => {
      setWorkout(prev => ({
        ...prev,
        exercises: prev.exercises.map((exercise, eIndex) =>
          eIndex === exerciseIndex ? { ...exercise, notes } : exercise
        ),
      }));
    },
    []
  );

  const updateWorkoutNotes = useCallback((notes: string) => {
    setWorkout(prev => ({ ...prev, notes }));
  }, []);

  const addExercise = useCallback((exercise: Exercise) => {
    setWorkout(prev => ({
      ...prev,
      exercises: [...prev.exercises, exercise],
    }));
  }, []);

  const removeExercise = useCallback((exerciseIndex: number) => {
    setWorkout(prev => ({
      ...prev,
      exercises: prev.exercises.filter((_, eIndex) => eIndex !== exerciseIndex),
    }));
  }, []);

  return {
    workout,
    updateSet,
    addSet,
    removeSet,
    updateExerciseNotes,
    updateWorkoutNotes,
    addExercise,
    removeExercise,
    setWorkout,
  };
}

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Plus, Dumbbell, Target } from 'lucide-react';
import { ExerciseSetRow } from './exercise-set-row';
import type { Exercise, WorkoutSet } from '@/lib/types';

interface ExerciseCardProps {
  exercise: Exercise;
  isEditing: boolean;
  onUpdateSet: (
    setIndex: number,
    field: keyof WorkoutSet,
    value: number | boolean
  ) => void;
  onAddSet: () => void;
  onRemoveSet: (setIndex: number) => void;
  onUpdateNotes: (notes: string) => void;
  onRemoveExercise?: () => void;
}

export function ExerciseCard({
  exercise,
  isEditing,
  onUpdateSet,
  onAddSet,
  onRemoveSet,
  onUpdateNotes,
  onRemoveExercise,
}: ExerciseCardProps) {
  const completedSets = exercise.sets.filter(set => set.completed).length;
  const totalSets = exercise.sets.length;
  const completionRate =
    totalSets > 0 ? Math.round((completedSets / totalSets) * 100) : 0;

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Progress indicator */}
      <div
        className={`absolute top-0 left-0 h-1 transition-all duration-500 ${
          completionRate === 100
            ? 'bg-gradient-to-r from-green-400 to-emerald-500 w-full'
            : 'bg-gradient-to-r from-blue-400 to-blue-500'
        }`}
        style={{ width: `${completionRate}%` }}
      />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-30" />

      <CardHeader className="pb-3 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-full">
              <Dumbbell className="h-4 w-4 text-blue-600" />
            </div>
            <CardTitle className="text-lg bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {exercise.name}
            </CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-700 border-blue-200"
            >
              <Target className="h-3 w-3 mr-1" />
              {completionRate}%
            </Badge>
            {isEditing && onRemoveExercise && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onRemoveExercise}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                Remove
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 relative">
        {/* Sets Header */}
        <div className="grid grid-cols-4 gap-2 text-xs font-medium text-gray-600 px-2 py-2 bg-gray-50 rounded-lg">
          <span>Set</span>
          <span>Reps</span>
          <span>Weight (kg)</span>
          <span>Done</span>
        </div>

        {/* Sets */}
        <div className="space-y-3">
          {exercise.sets.map((set, setIndex) => (
            <ExerciseSetRow
              key={setIndex}
              setNumber={setIndex + 1}
              set={set}
              isEditing={isEditing}
              onUpdateSet={(field, value) =>
                onUpdateSet(setIndex, field, value)
              }
              onRemoveSet={isEditing ? () => onRemoveSet(setIndex) : undefined}
            />
          ))}

          {isEditing && (
            <Button
              variant="outline"
              size="sm"
              onClick={onAddSet}
              className="w-full border-dashed border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Set
            </Button>
          )}
        </div>

        {/* Exercise Notes */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">
            Exercise Notes
          </Label>
          {isEditing ? (
            <Textarea
              value={exercise.notes || ''}
              onChange={e => onUpdateNotes(e.target.value)}
              placeholder="Add notes for this exercise..."
              rows={2}
              className="text-sm border-2 border-gray-200 focus:border-blue-300 transition-colors"
            />
          ) : (
            <div className="text-sm text-gray-600 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
              {exercise.notes || 'No notes for this exercise.'}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

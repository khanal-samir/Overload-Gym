'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus } from 'lucide-react';
import type { WorkoutSet } from '@/lib/types';

interface ExerciseSetRowProps {
  setNumber: number;
  set: WorkoutSet;
  isEditing: boolean;
  onUpdateSet: (field: keyof WorkoutSet, value: number | boolean) => void;
  onRemoveSet?: () => void;
}

export function ExerciseSetRow({
  setNumber,
  set,
  isEditing,
  onUpdateSet,
  onRemoveSet,
}: ExerciseSetRowProps) {
  return (
    <div className="grid grid-cols-4 gap-2 items-center">
      <Badge
        variant="outline"
        className="w-8 h-8 flex items-center justify-center"
      >
        {setNumber}
      </Badge>

      {isEditing ? (
        <>
          <Input
            type="number"
            value={set.reps || ''}
            onChange={e =>
              onUpdateSet('reps', Number.parseInt(e.target.value) || 0)
            }
            className="h-8 text-center"
            placeholder="0"
          />
          <Input
            type="number"
            value={set.weight || ''}
            onChange={e =>
              onUpdateSet('weight', Number.parseInt(e.target.value) || 0)
            }
            className="h-8 text-center"
            placeholder="0"
          />
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={set.completed}
              onChange={e => onUpdateSet('completed', e.target.checked)}
              className="w-4 h-4"
            />
            {onRemoveSet && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onRemoveSet}
                className="text-red-500 p-1 h-6 w-6"
              >
                <Minus className="h-3 w-3" />
              </Button>
            )}
          </div>
        </>
      ) : (
        <>
          <span className="text-center font-medium">{set.reps}</span>
          <span className="text-center font-medium">
            {set.weight > 0 ? `${set.weight}` : '-'}
          </span>
          <div className="flex justify-center">
            <div
              className={`w-4 h-4 rounded-full ${set.completed ? 'bg-green-500' : 'bg-gray-300'}`}
            />
          </div>
        </>
      )}
    </div>
  );
}

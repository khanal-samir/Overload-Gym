'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { StickyNote } from 'lucide-react';

interface NotesCardProps {
  title: string;
  notes: string;
  isEditing: boolean;
  onNotesChange: (notes: string) => void;
  placeholder?: string;
}

export function NotesCard({
  title,
  notes,
  isEditing,
  onNotesChange,
  placeholder = 'Add notes...',
}: NotesCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <StickyNote className="h-5 w-5 text-yellow-500" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <Textarea
            value={notes}
            onChange={e => onNotesChange(e.target.value)}
            placeholder={placeholder}
            rows={3}
          />
        ) : (
          <p className="text-gray-700 text-sm">
            {notes || `No ${title.toLowerCase()} added.`}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

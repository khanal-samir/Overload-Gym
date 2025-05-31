import { Sparkles, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function WeeklyProgress() {
  return (
    <Card className="bg-gradient-to-br from-white to-gray-50 shadow-xl border-0">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-yellow-500" />
            <h3 className="font-semibold text-gray-900">This Week</h3>
          </div>
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-700 border-green-200"
          >
            <Zap className="h-3 w-3 mr-1" />
            7/7 days
          </Badge>
        </div>
        <div className="flex gap-1 mb-3">
          {[1, 2, 3, 4, 5, 6, 7].map(day => (
            <div
              key={day}
              className={`flex-1 h-3 rounded-full transition-all duration-300 ${
                day <= 7
                  ? 'bg-gradient-to-r from-green-400 to-emerald-500 shadow-sm'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-600">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </CardContent>
    </Card>
  );
}

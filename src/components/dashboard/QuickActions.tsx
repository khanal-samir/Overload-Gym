import { Card, CardContent } from '@/components/ui/card';
import { Clock, Brain } from 'lucide-react';

interface QuickAction {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
}

const quickActions: QuickAction[] = [
  {
    icon: Clock,
    title: 'Quick Workout',
    description: 'Start logging now',
    gradient: 'from-blue-500 to-blue-600',
    iconColor: 'text-blue-100',
  },
  {
    icon: Brain,
    title: 'AI Plan',
    description: 'Generate workout',
    gradient: 'from-purple-500 to-purple-600',
    iconColor: 'text-purple-100',
  },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {quickActions.map((action, index) => (
        <Card
          key={index}
          className={`cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br ${action.gradient} text-white border-0`}
        >
          <CardContent className="p-4 text-center">
            <div className="p-3 bg-white/20 rounded-full w-fit mx-auto mb-3">
              <action.icon className={`h-8 w-8 ${action.iconColor}`} />
            </div>
            <p className="font-medium text-sm">{action.title}</p>
            <p className="text-xs text-white/80">{action.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import {
  Brain,
  Sparkles,
  Target,
  Clock,
  Dumbbell,
  Loader2,
} from 'lucide-react';

export default function AIPlansPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<any>(null);
  const [formData, setFormData] = useState({
    goal: '',
    experience: '',
    timeAvailable: '',
    equipment: '',
    preferences: '',
  });

  const generatePlan = async () => {
    setIsGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      setGeneratedPlan({
        name: 'Personalized Strength Building Plan',
        duration: '8 weeks',
        frequency: '4 days/week',
        workouts: [
          {
            day: 'Day 1 - Upper Body Push',
            exercises: [
              { name: 'Bench Press', sets: '4 x 8-10', rest: '2-3 min' },
              { name: 'Overhead Press', sets: '3 x 8-12', rest: '2 min' },
              { name: 'Dips', sets: '3 x 10-15', rest: '90 sec' },
              { name: 'Push-ups', sets: '2 x max', rest: '60 sec' },
            ],
          },
          {
            day: 'Day 2 - Lower Body',
            exercises: [
              { name: 'Squats', sets: '4 x 8-10', rest: '3 min' },
              { name: 'Romanian Deadlift', sets: '3 x 10-12', rest: '2-3 min' },
              { name: 'Lunges', sets: '3 x 12 each leg', rest: '90 sec' },
              { name: 'Calf Raises', sets: '3 x 15-20', rest: '60 sec' },
            ],
          },
        ],
      });
      setIsGenerating(false);
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (generatedPlan) {
    return (
      <div className="p-4 space-y-6 max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Your AI Plan</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setGeneratedPlan(null)}
          >
            New Plan
          </Button>
        </div>

        {/* Plan Overview */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="h-6 w-6" />
              <h2 className="text-xl font-bold">{generatedPlan.name}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-purple-100">Duration</p>
                <p className="font-semibold">{generatedPlan.duration}</p>
              </div>
              <div>
                <p className="text-purple-100">Frequency</p>
                <p className="font-semibold">{generatedPlan.frequency}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workouts */}
        <div className="space-y-4">
          {generatedPlan.workouts.map((workout: any, index: number) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-blue-500" />
                  {workout.day}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {workout.exercises.map(
                  (exercise: any, exerciseIndex: number) => (
                    <div
                      key={exerciseIndex}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-sm">{exercise.name}</p>
                        <p className="text-xs text-gray-600">{exercise.sets}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exercise.rest}
                      </Badge>
                    </div>
                  )
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="bg-green-600 hover:bg-green-700">Save Plan</Button>
          <Button variant="outline">Start Workout</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          AI Workout Plans
        </h1>
        <p className="text-gray-600 text-sm">
          Get personalized workouts powered by AI
        </p>
      </div>

      {/* AI Icon */}
      <div className="text-center py-6">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Brain className="h-10 w-10 text-white" />
        </div>
        <p className="text-gray-600 text-sm">
          Tell us about your fitness goals
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="goal">Fitness Goal</Label>
          <Input
            id="goal"
            placeholder="e.g., Build muscle, lose weight, get stronger"
            value={formData.goal}
            onChange={e => handleInputChange('goal', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Experience Level</Label>
          <Input
            id="experience"
            placeholder="e.g., Beginner, Intermediate, Advanced"
            value={formData.experience}
            onChange={e => handleInputChange('experience', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Time Available</Label>
          <Input
            id="time"
            placeholder="e.g., 30 minutes, 3 days per week"
            value={formData.timeAvailable}
            onChange={e => handleInputChange('timeAvailable', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="equipment">Available Equipment</Label>
          <Input
            id="equipment"
            placeholder="e.g., Dumbbells, gym access, bodyweight only"
            value={formData.equipment}
            onChange={e => handleInputChange('equipment', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferences">Additional Preferences</Label>
          <Textarea
            id="preferences"
            placeholder="Any injuries, preferred exercises, or other notes..."
            value={formData.preferences}
            onChange={e => handleInputChange('preferences', e.target.value)}
            rows={3}
          />
        </div>
      </div>

      {/* Generate Button */}
      <Button
        onClick={generatePlan}
        disabled={isGenerating || !formData.goal || !formData.experience}
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
        size="lg"
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Generating Your Plan...
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4 mr-2" />
            Generate AI Workout Plan
          </>
        )}
      </Button>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="h-6 w-6 text-green-500 mx-auto mb-2" />
            <p className="font-medium text-sm">Personalized</p>
            <p className="text-xs text-gray-600">Tailored to your goals</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <p className="font-medium text-sm">Adaptive</p>
            <p className="text-xs text-gray-600">Adjusts to your schedule</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

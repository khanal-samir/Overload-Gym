export interface WorkoutSet {
  reps: number;
  weight: number;
  completed: boolean;
}

export interface Exercise {
  id: string;
  name: string;
  sets: WorkoutSet[];
  notes?: string;
}

export interface Workout {
  id: string;
  name: string;
  date: string;
  duration: string;
  exercises: Exercise[];
  notes?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  age: string;
  weight: string;
  height: string;
  goal: string;
}

export interface WorkoutStats {
  totalWorkouts: number;
  currentStreak: number;
  thisWeekWorkouts: number;
  monthlyGoal: number;
  completedThisMonth: number;
  personalRecords: number;
  memberSince: string;
}

export interface Achievement {
  name: string;
  icon: string;
  earned: boolean;
}

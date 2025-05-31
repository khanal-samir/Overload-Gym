// Server Component
import { WorkoutDetail } from '@/components/workouts/workout-detail';

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <WorkoutDetail id={params.id} />;
}

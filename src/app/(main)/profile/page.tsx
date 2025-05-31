'use client';
import { useState } from 'react';
import { ProfileCard } from '@/components/profile/ProfileCard';
import { ProfileStats } from '@/components/profile/ProfileStats';
import { Achievements } from '@/components/profile/Achievements';
import { ProfileSettings } from '@/components/profile/ProfileSettings';

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    age: '28',
    weight: '175',
    height: '5\'10"',
    goal: 'Build Muscle',
  });

  const stats = {
    totalWorkouts: 45,
    currentStreak: 7,
    personalRecords: 12,
    memberSince: 'Jan 2024',
  };

  const achievements = [
    { name: 'First Workout', icon: '🎯', earned: true },
    { name: '7 Day Streak', icon: '🔥', earned: true },
    { name: '30 Day Streak', icon: '💪', earned: false },
    { name: 'Strength Master', icon: '🏆', earned: false },
  ];

  const handleProfileSave = (updatedProfile: typeof profile) => {
    setProfile(updatedProfile);
    // Here you would typically make an API call to save the profile
  };

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-gray-900">Profile</h1>

      <ProfileCard profile={profile} onSave={handleProfileSave} />
      <ProfileStats stats={stats} />
      <Achievements achievements={achievements} />
      <ProfileSettings />
    </div>
  );
}

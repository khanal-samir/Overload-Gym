import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Edit3 } from 'lucide-react';

interface Profile {
  name: string;
  email: string;
  age: string;
  weight: string;
  height: string;
  goal: string;
}

interface ProfileCardProps {
  profile: Profile;
  onSave: (profile: Profile) => void;
}

export function ProfileCard({
  profile: initialProfile,
  onSave,
}: ProfileCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(initialProfile);

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave(profile);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-blue-500 text-white text-lg">
                {profile.name
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              {isEditing ? (
                <Input
                  value={profile.name}
                  onChange={e => handleInputChange('name', e.target.value)}
                  className="font-semibold text-lg"
                />
              ) : (
                <h2 className="text-xl font-semibold">{profile.name}</h2>
              )}
              <p className="text-gray-600 text-sm">{profile.email}</p>
              <Badge variant="secondary" className="mt-1">
                {profile.goal}
              </Badge>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit3 className="h-4 w-4" />
          </Button>
        </div>

        {isEditing && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs">Age</Label>
                <Input
                  value={profile.age}
                  onChange={e => handleInputChange('age', e.target.value)}
                />
              </div>
              <div>
                <Label className="text-xs">Weight (kg)</Label>
                <Input
                  value={profile.weight}
                  onChange={e => handleInputChange('weight', e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label className="text-xs">Height</Label>
              <Input
                value={profile.height}
                onChange={e => handleInputChange('height', e.target.value)}
              />
            </div>
            <Button onClick={handleSave} className="w-full">
              Save Changes
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

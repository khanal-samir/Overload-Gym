import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Shield, HelpCircle, LogOut } from 'lucide-react';

export function ProfileSettings() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button variant="ghost" className="w-full justify-start">
          <Bell className="h-4 w-4 mr-3" />
          Notifications
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Shield className="h-4 w-4 mr-3" />
          Privacy & Security
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <HelpCircle className="h-4 w-4 mr-3" />
          Help & Support
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700"
        >
          <LogOut className="h-4 w-4 mr-3" />
          Sign Out
        </Button>
      </CardContent>
    </Card>
  );
}

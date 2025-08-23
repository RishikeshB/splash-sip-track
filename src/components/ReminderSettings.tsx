import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Bell, Clock, Smartphone } from 'lucide-react';

const reminderTimes = [
  { time: '08:00', label: 'Morning Start' },
  { time: '10:00', label: 'Mid Morning' },
  { time: '12:00', label: 'Lunch Time' },
  { time: '14:00', label: 'Afternoon' },
  { time: '16:00', label: 'Late Afternoon' },
  { time: '18:00', label: 'Evening' },
  { time: '20:00', label: 'Before Bed' },
];

const ReminderSettings = () => {
  const [remindersEnabled, setRemindersEnabled] = useState(true);
  const [selectedTimes, setSelectedTimes] = useState(['08:00', '12:00', '16:00', '20:00']);

  const toggleTime = (time: string) => {
    setSelectedTimes(prev => 
      prev.includes(time) 
        ? prev.filter(t => t !== time)
        : [...prev, time]
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card className="p-6 glass-card">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-primary mb-4">
              <Bell className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gradient">
              Smart Reminders
            </h2>
            <p className="text-muted-foreground">
              Set up gentle reminders to help you stay hydrated throughout the day
            </p>
          </div>

          {/* Master Toggle */}
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-3">
              <Smartphone className="h-5 w-5 text-primary" />
              <div>
                <Label htmlFor="master-toggle" className="font-medium">
                  Enable Reminders
                </Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when it's time to drink water
                </p>
              </div>
            </div>
            <Switch 
              id="master-toggle"
              checked={remindersEnabled}
              onCheckedChange={setRemindersEnabled}
            />
          </div>

          {/* Time Selection */}
          {remindersEnabled && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Clock className="h-4 w-4" />
                Reminder Times
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {reminderTimes.map((reminder) => (
                  <Button
                    key={reminder.time}
                    variant={selectedTimes.includes(reminder.time) ? "default" : "outline"}
                    className={`h-auto p-3 flex flex-col gap-1 transition-flow ${
                      selectedTimes.includes(reminder.time) 
                        ? "bg-gradient-primary shadow-water" 
                        : "border-primary/30 hover:bg-primary/10"
                    }`}
                    onClick={() => toggleTime(reminder.time)}
                  >
                    <span className="font-semibold">{reminder.time}</span>
                    <span className="text-xs opacity-80">{reminder.label}</span>
                  </Button>
                ))}
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  You have {selectedTimes.length} reminder{selectedTimes.length !== 1 ? 's' : ''} set
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ReminderSettings;
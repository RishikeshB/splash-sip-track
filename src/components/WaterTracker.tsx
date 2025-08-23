import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Plus, Minus, Droplets } from 'lucide-react';

const WaterTracker = () => {
  const [currentIntake, setCurrentIntake] = useState(0);
  const dailyGoal = 2000; // 2000ml daily goal
  const glassSize = 250; // 250ml per glass

  const addWater = () => {
    setCurrentIntake(prev => Math.min(prev + glassSize, dailyGoal + 500));
  };

  const removeWater = () => {
    setCurrentIntake(prev => Math.max(prev - glassSize, 0));
  };

  const progressPercentage = (currentIntake / dailyGoal) * 100;

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="p-6 glass-card">
        <div className="text-center space-y-6">
          {/* Water Bottle Visualization */}
          <div className="relative mx-auto w-24 h-32 bg-card border-2 border-primary/30 rounded-b-2xl rounded-t-lg overflow-hidden">
            <div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-primary transition-all duration-1000 ease-out wave-bg"
              style={{ height: `${Math.min(progressPercentage, 100)}%` }}
            />
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-card border border-primary/30 rounded-t-md" />
          </div>

          {/* Progress Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Today's Progress</h3>
            <div className="text-3xl font-bold text-gradient">
              {currentIntake}ml
            </div>
            <div className="text-sm text-muted-foreground">
              of {dailyGoal}ml goal
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <Progress value={progressPercentage} className="h-3" />
            <div className="text-xs text-muted-foreground">
              {Math.round(progressPercentage)}% complete
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={removeWater}
              className="h-12 w-12 rounded-full border-primary/30 hover:bg-primary/10 transition-flow"
            >
              <Minus className="h-5 w-5" />
            </Button>
            
            <div className="flex flex-col items-center gap-1">
              <Button 
                onClick={addWater}
                className="h-16 w-16 rounded-full bg-gradient-primary hover:shadow-drop transition-flow water-drop"
              >
                <Droplets className="h-6 w-6" />
              </Button>
              <span className="text-xs text-muted-foreground">+{glassSize}ml</span>
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={addWater}
              className="h-12 w-12 rounded-full border-primary/30 hover:bg-primary/10 transition-flow"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>

          {/* Achievement */}
          {progressPercentage >= 100 && (
            <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 animate-float">
              <div className="text-sm font-medium text-primary">
                🎉 Daily goal achieved! Great job staying hydrated!
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default WaterTracker;
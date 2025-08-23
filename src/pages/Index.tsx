import React from 'react';
import { Button } from '@/components/ui/button';
import { Droplets, Waves, Heart } from 'lucide-react';
import WaterTracker from '@/components/WaterTracker';
import HydrationBenefits from '@/components/HydrationBenefits';
import ReminderSettings from '@/components/ReminderSettings';
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Animated water droplet icon */}
            <div className="relative mx-auto w-24 h-24 mb-8">
              <div className="w-full h-full flex items-center justify-center bg-gradient-primary rounded-full animate-float drop-shadow-lg">
                <Droplets className="h-12 w-12 text-white" />
              </div>
              <div className="absolute inset-0 animate-ripple rounded-full bg-primary/20"></div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gradient leading-tight">
                Water Reminder
              </h1>
              <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-primary">
                <Waves className="h-8 w-8" />
                <span className="font-medium">Remind Drink</span>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Stay healthy and hydrated with gentle reminders throughout your day. 
                Track your water intake and build better hydration habits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-drop transition-flow px-8 py-6 text-lg water-drop"
              >
                <Droplets className="mr-2 h-5 w-5" />
                Start Tracking
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:bg-primary/10 transition-flow px-8 py-6 text-lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                Learn Benefits
              </Button>
            </div>
          </div>
        </div>

        {/* Floating water droplets decoration */}
        <div className="absolute top-10 left-10 opacity-10">
          <Droplets className="h-16 w-16 text-primary animate-float" style={{ animationDelay: '0s' }} />
        </div>
        <div className="absolute top-32 right-16 opacity-10">
          <Droplets className="h-12 w-12 text-primary animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <Droplets className="h-20 w-20 text-primary animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Water Tracker Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Track Your Daily Intake
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Monitor your hydration levels with our beautiful and intuitive water tracker
            </p>
          </div>
          <WaterTracker />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-ocean">
        <div className="container mx-auto">
          <HydrationBenefits />
        </div>
      </section>

      {/* Reminder Settings Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <ReminderSettings />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Droplets className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold text-gradient">Water Reminder</span>
          </div>
          <p className="text-muted-foreground">
            Stay hydrated, stay healthy. Your wellness journey starts with every drop.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

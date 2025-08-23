import React from 'react';
import { Button } from '@/components/ui/button';
import { Droplets, Waves, Heart, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
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
              Transform your hydration habits with smart reminders, progress tracking, and team collaboration. 
              Stay healthy, boost productivity, and build lasting wellness routines.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-drop transition-flow px-8 py-6 text-lg water-drop group"
            >
              <Droplets className="mr-2 h-5 w-5" />
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 transition-flow px-8 py-6 text-lg"
            >
              <Heart className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-8 space-y-4">
            <p className="text-sm text-muted-foreground">Trusted by 50,000+ users worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-xs font-medium">Microsoft Teams</div>
              <div className="text-xs font-medium">WhatsApp</div>
              <div className="text-xs font-medium">Messenger</div>
            </div>
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
  );
};

export default Hero;
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  Settings, 
  Bell, 
  BarChart3, 
  ArrowRight,
  Droplets
} from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up & Set Goals",
    description: "Create your account and set personalized hydration targets based on your lifestyle, activity level, and health goals.",
    details: "Takes less than 2 minutes to get started"
  },
  {
    icon: Settings,
    title: "Configure Reminders",
    description: "Choose your preferred notification channels (Teams, WhatsApp, Messenger) and set up reminder schedules that fit your routine.",
    details: "Customize frequency, timing, and message style"
  },
  {
    icon: Bell,
    title: "Receive Smart Notifications",
    description: "Get gentle, contextual reminders throughout your day. Our AI learns your patterns and optimizes reminder timing.",
    details: "Works across all your devices and platforms"
  },
  {
    icon: BarChart3,
    title: "Track & Improve",
    description: "Monitor your progress with beautiful analytics, earn achievements, and build lasting hydration habits with your team.",
    details: "See real health improvements over time"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gradient-ocean">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in minutes and transform your hydration habits with our simple 4-step process
          </p>
        </div>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 glass-card text-center h-full hover:shadow-drop transition-flow group">
                <div className="space-y-4">
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                  
                  <div className="pt-2">
                    <span className="text-sm text-primary font-medium">
                      {step.details}
                    </span>
                  </div>
                </div>
              </Card>
              
              {/* Arrow connector (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Demo section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-gradient">
              See It In Action
            </h3>
            <p className="text-muted-foreground">
              Watch how Water Reminder seamlessly integrates into your daily workflow
            </p>
            <div className="bg-card/50 rounded-lg p-8 border border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-3 h-3 rounded-full bg-primary animate-float"></div>
                  <span className="text-sm text-muted-foreground">9:30 AM - Teams notification: "Time for your morning hydration boost! 💧"</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <div className="w-3 h-3 rounded-full bg-primary animate-float" style={{animationDelay: '1s'}}></div>
                  <span className="text-sm text-muted-foreground">12:15 PM - WhatsApp reminder: "Lunch break = water break! Stay refreshed 🥤"</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <div className="w-3 h-3 rounded-full bg-primary animate-float" style={{animationDelay: '2s'}}></div>
                  <span className="text-sm text-muted-foreground">3:45 PM - Messenger nudge: "Afternoon energy dip? Try H2O instead of coffee ⚡"</span>
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-gradient-primary hover:shadow-drop transition-flow">
              <Droplets className="mr-2 h-5 w-5" />
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
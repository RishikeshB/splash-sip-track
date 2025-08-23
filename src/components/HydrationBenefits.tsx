import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Brain, Zap, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: "Healthier Heart",
    description: "Proper hydration helps maintain healthy blood pressure and circulation."
  },
  {
    icon: Brain,
    title: "Better Focus",
    description: "Stay mentally sharp and improve concentration throughout the day."
  },
  {
    icon: Zap,
    title: "More Energy",
    description: "Combat fatigue and maintain optimal energy levels naturally."
  },
  {
    icon: Shield,
    title: "Immune Support",
    description: "Support your body's natural defense system with adequate hydration."
  }
];

const HydrationBenefits = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient mb-4">
          Why Stay Hydrated?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the amazing benefits of maintaining proper hydration throughout your day
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <Card 
              key={index} 
              className="p-6 glass-card hover:shadow-drop transition-flow group cursor-pointer"
            >
              <div className="text-center space-y-4">
                <div className="relative mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-primary group-hover:animate-float">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HydrationBenefits;
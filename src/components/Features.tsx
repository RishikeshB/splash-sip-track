import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Droplets, 
  Bell, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Smartphone,
  Target,
  Award,
  Clock
} from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Personalized notifications across all your devices and platforms",
    details: [
      "Customizable reminder schedules",
      "WhatsApp, Teams, and Messenger integration",
      "Smart timing based on your routine",
      "Gentle nudges, not intrusive alerts"
    ]
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Beautiful analytics to visualize your hydration journey",
    details: [
      "Daily, weekly, and monthly insights",
      "Streak tracking and achievements",
      "Health impact visualization",
      "Export data for health apps"
    ]
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Build healthy habits together with colleagues and friends",
    details: [
      "Organization-wide challenges",
      "Team leaderboards and goals",
      "Peer encouragement system",
      "Manager insights dashboard"
    ]
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Personalized hydration targets based on your lifestyle",
    details: [
      "Activity-based adjustments",
      "Weather and climate considerations",
      "Medical condition support",
      "Gradual goal progression"
    ]
  },
  {
    icon: Award,
    title: "Gamification",
    description: "Make hydration fun with achievements and rewards",
    details: [
      "Unlock badges and milestones",
      "Streak rewards and bonuses",
      "Social sharing features",
      "Referral program benefits"
    ]
  },
  {
    icon: MessageSquare,
    title: "Multi-Platform",
    description: "Works everywhere you communicate and work",
    details: [
      "Microsoft Teams integration",
      "WhatsApp Business support",
      "Facebook Messenger bots",
      "Mobile and desktop apps"
    ]
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Everything You Need to Stay Hydrated
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive hydration management with seamless integrations and intelligent insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 glass-card hover:shadow-drop transition-flow group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Droplets className="h-3 w-3 text-primary flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="bg-gradient-ocean rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gradient">
              Works Where You Work
            </h3>
            <p className="text-lg text-muted-foreground">
              Seamlessly integrate with your existing workflow. Get reminders in Teams during meetings, 
              WhatsApp notifications on the go, and Messenger updates with friends.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-drop transition-flow"
            >
              <Clock className="mr-2 h-5 w-5" />
              See All Integrations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Users, 
  Smartphone, 
  Globe,
  CheckCircle,
  ArrowRight,
  Bell,
  Zap,
  Shield,
  Clock
} from 'lucide-react';

const platforms = [
  {
    name: "Microsoft Teams",
    icon: "🏢",
    description: "Perfect for workplace hydration reminders during meetings and work hours",
    features: [
      "Meeting break reminders",
      "Team challenge notifications",
      "Manager wellness insights",
      "Custom work hour scheduling"
    ],
    users: "50M+ professionals",
    badge: "Enterprise Ready",
    color: "border-blue-500/30"
  },
  {
    name: "WhatsApp",
    icon: "💬",
    description: "Personal reminders that reach you wherever you are, on your most-used app",
    features: [
      "Personal reminder messages",
      "Group hydration challenges",
      "Progress sharing with friends",
      "Voice message reminders"
    ],
    users: "2B+ users worldwide",
    badge: "Most Popular", 
    color: "border-green-500/30"
  },
  {
    name: "Facebook Messenger",
    icon: "📱",
    description: "Social hydration tracking with friends and family support networks",
    features: [
      "Friend accountability system",
      "Social sharing features",
      "Family wellness tracking",
      "Fun stickers and reactions"
    ],
    users: "1.3B+ active users",
    badge: "Social Focused",
    color: "border-purple-500/30"
  }
];

const benefits = [
  {
    icon: Bell,
    title: "Smart Timing",
    description: "AI-powered notifications that learn your patterns and optimize timing"
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Connect your platforms in seconds with our one-click integration"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays secure with enterprise-grade encryption"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock reminders that work across all time zones"
  }
];

const NotificationPlatforms = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Notifications Where You Already Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get hydration reminders on the platforms you use every day. No new apps to download, 
            no extra notifications to manage.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <Card key={index} className={`p-6 glass-card hover:shadow-drop transition-flow border-2 ${platform.color}`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{platform.icon}</span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {platform.name}
                    </h3>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {platform.badge}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground">
                  {platform.description}
                </p>
                
                <div className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{platform.users}</span>
                    <Button size="sm" variant="outline" className="hover:bg-primary/10">
                      Connect
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits section */}
        <div className="bg-gradient-ocean rounded-2xl p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Why Our Notifications Work Better
            </h3>
            <p className="text-muted-foreground">
              Not all reminders are created equal. Here's what makes ours special.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration showcase */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold text-gradient">
            See It In Action
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-4 glass-card">
              <div className="text-left space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className="text-2xl">🏢</span>
                  <span>Microsoft Teams</span>
                </div>
                <div className="bg-blue-50 p-3 rounded text-xs">
                  <strong>💧 Hydration Bot:</strong> Good morning! Ready to start your day hydrated? 
                  Your team goal is 85% complete. Keep it up! 🎯
                </div>
              </div>
            </Card>
            
            <Card className="p-4 glass-card">
              <div className="text-left space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className="text-2xl">💬</span>
                  <span>WhatsApp</span>
                </div>
                <div className="bg-green-50 p-3 rounded text-xs">
                  <strong>Water Reminder:</strong> Time for a water break! 🥤 
                  You're doing great - 6 glasses down, 2 to go today! 
                </div>
              </div>
            </Card>
            
            <Card className="p-4 glass-card">
              <div className="text-left space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className="text-2xl">📱</span>
                  <span>Messenger</span>
                </div>
                <div className="bg-purple-50 p-3 rounded text-xs">
                  <strong>💧 AquaBot:</strong> Hey! Sarah just completed her daily goal 🏆 
                  Want to join the challenge? Let's stay hydrated together!
                </div>
              </div>
            </Card>
          </div>
          
          <Button size="lg" className="bg-gradient-primary hover:shadow-drop transition-flow">
            <Globe className="mr-2 h-5 w-5" />
            Connect All Platforms
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotificationPlatforms;
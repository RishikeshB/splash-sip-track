import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Droplets, 
  ArrowRight, 
  Mail, 
  Star,
  Users,
  Trophy,
  Heart,
  CheckCircle
} from 'lucide-react';

const stats = [
  { icon: Users, value: "50K+", label: "Happy Users" },
  { icon: Trophy, value: "1M+", label: "Goals Achieved" },
  { icon: Heart, value: "98%", label: "Health Improvement" },
  { icon: Star, value: "4.9/5", label: "User Rating" }
];

const ContactCTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Main CTA */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-16 text-center text-white mb-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-8">
              <Droplets className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Start Your Hydration Journey Today
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Join thousands of individuals and organizations who have transformed their wellness 
              with our smart hydration reminders.
            </p>
            
            {/* Email signup */}
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="bg-white/10 border-white/20 text-white placeholder-white/60 flex-1"
                />
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 whitespace-nowrap"
                >
                  Start Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-3">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
            
            {/* Quick benefits */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
                <span className="text-white/90">Setup in 2 minutes</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
                <span className="text-white/90">Works on all platforms</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
                <span className="text-white/90">Proven results</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 glass-card text-center hover:shadow-drop transition-flow">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Alternative CTAs */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal use */}
          <Card className="p-8 glass-card hover:shadow-drop transition-flow">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">
                For Personal Use
              </h3>
              <p className="text-muted-foreground">
                Start your personal hydration journey with free reminders and basic tracking.
              </p>
              <div className="space-y-3">
                <Button size="lg" className="w-full bg-gradient-primary hover:shadow-drop transition-flow">
                  <Droplets className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="w-full hover:bg-primary/10">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>

          {/* Enterprise */}
          <Card className="p-8 glass-card hover:shadow-drop transition-flow border-primary/30">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">
                For Organizations
              </h3>
              <p className="text-muted-foreground">
                Transform your workplace wellness with team challenges and analytics.
              </p>
              <div className="space-y-3">
                <Button size="lg" className="w-full bg-gradient-primary hover:shadow-drop transition-flow">
                  <Trophy className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Button>
                <Button variant="outline" size="lg" className="w-full hover:bg-primary/10">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Sales
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Final encouragement */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold text-gradient">
            Ready to Transform Your Health?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every great journey starts with a single step. Make that step a sip towards better health, 
            improved focus, and enhanced well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-drop transition-flow">
              <Droplets className="mr-2 h-5 w-5" />
              Begin Your Journey
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
              <Star className="mr-2 h-5 w-5" />
              Watch Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
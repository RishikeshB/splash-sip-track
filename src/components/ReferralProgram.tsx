import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Gift, 
  Users, 
  Crown, 
  Share, 
  Award, 
  Droplets,
  Star,
  Trophy,
  ArrowRight
} from 'lucide-react';

const rewards = [
  {
    referrals: 1,
    reward: "1 Month Premium Free",
    badge: "First Drop",
    icon: Droplets,
    color: "bg-blue-500"
  },
  {
    referrals: 3,
    reward: "3 Months Premium + Exclusive Badge",
    badge: "Stream Builder",
    icon: Award,
    color: "bg-green-500"
  },
  {
    referrals: 5,
    reward: "6 Months Premium + Premium Features",
    badge: "Hydration Hero",
    icon: Star,
    color: "bg-purple-500"
  },
  {
    referrals: 10,
    reward: "1 Year Premium + Ambassador Status",
    badge: "Water Champion",
    icon: Crown,
    color: "bg-gold-500"
  },
  {
    referrals: 25,
    reward: "Lifetime Premium + Special Recognition",
    badge: "Aqua Legend",
    icon: Trophy,
    color: "bg-gradient-primary"
  }
];

const ReferralProgram = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6">
            <Gift className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Earn While You Share
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help your friends build better hydration habits and unlock amazing rewards. 
            The more you share, the more you earn!
          </p>
        </div>

        {/* How it works */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 glass-card text-center hover:shadow-drop transition-flow">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4">
              <Share className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Share Your Link</h3>
            <p className="text-muted-foreground text-sm">
              Get your unique referral link and share it with friends, family, and colleagues
            </p>
          </Card>

          <Card className="p-6 glass-card text-center hover:shadow-drop transition-flow">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Friends Join</h3>
            <p className="text-muted-foreground text-sm">
              When someone signs up using your link, they get a bonus and you earn points
            </p>
          </Card>

          <Card className="p-6 glass-card text-center hover:shadow-drop transition-flow">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Unlock Rewards</h3>
            <p className="text-muted-foreground text-sm">
              Earn premium features, exclusive badges, and special recognition
            </p>
          </Card>
        </div>

        {/* Rewards tier */}
        <div className="space-y-4 mb-12">
          <h3 className="text-2xl font-bold text-gradient text-center mb-8">
            Referral Rewards Tiers
          </h3>
          
          {rewards.map((tier, index) => (
            <Card key={index} className="p-4 glass-card hover:shadow-drop transition-flow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${tier.color} flex items-center justify-center`}>
                    <tier.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-semibold text-foreground">
                        {tier.referrals} Referral{tier.referrals > 1 ? 's' : ''}
                      </h4>
                      <Badge variant="secondary" className="text-xs">
                        {tier.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {tier.reward}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="bg-gradient-ocean rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Crown className="w-16 h-16 mx-auto text-primary" />
            <h3 className="text-3xl font-bold text-gradient">
              Start Earning Today
            </h3>
            <p className="text-lg text-muted-foreground">
              Join our referral program and help build a healthier, more hydrated world 
              while earning amazing rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-drop transition-flow">
                <Gift className="mr-2 h-5 w-5" />
                Get My Referral Link
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                <Trophy className="mr-2 h-5 w-5" />
                View Leaderboard
              </Button>
            </div>
            
            {/* Bonus offer */}
            <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm font-medium text-primary">
                🎉 Limited Time: Your first 3 referrals get you 6 months premium instead of 3!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram;
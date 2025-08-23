import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Users, 
  BarChart3, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Crown,
  Target,
  Award
} from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "Team Challenges",
    description: "Boost team morale with fun hydration challenges and competitions"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track team wellness metrics and identify improvement opportunities"
  },
  {
    icon: Shield,
    title: "Admin Controls",
    description: "Manage user permissions, set organization-wide goals, and monitor compliance"
  },
  {
    icon: Zap,
    title: "Productivity Boost",
    description: "Well-hydrated teams are 23% more productive and have better focus"
  }
];

const features = [
  "Unlimited team members",
  "Advanced analytics and reporting",
  "Custom reminder schedules",
  "Integration with Microsoft Teams",
  "WhatsApp Business integration",
  "Wellness program integration",
  "Priority customer support",
  "Single sign-on (SSO)",
  "Data export capabilities",
  "Custom branding options"
];

const plans = [
  {
    name: "Team",
    price: "$3",
    period: "per user/month",
    description: "Perfect for small teams and departments",
    maxUsers: "Up to 50 users",
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "$2",
    period: "per user/month",
    description: "Ideal for large organizations",
    maxUsers: "Unlimited users",
    badge: "Best Value"
  },
  {
    name: "Custom",
    price: "Contact us",
    period: "for pricing",
    description: "Tailored solutions for unique needs",
    maxUsers: "Custom requirements",
    badge: "Enterprise"
  }
];

const OrganizationInvite = () => {
  return (
    <section className="py-20 px-4 bg-gradient-ocean">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6">
            <Building className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Transform Your Organization's Wellness
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Boost productivity, reduce sick days, and build a healthier workplace culture 
            with organization-wide hydration programs.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 glass-card text-center hover:shadow-drop transition-flow group">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Features showcase */}
        <div className="bg-card/50 rounded-2xl p-8 mb-16 border border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Enterprise Features
            </h3>
            <p className="text-muted-foreground">
              Everything you need to manage hydration at scale
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing plans */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Choose Your Plan
            </h3>
            <p className="text-muted-foreground">
              Flexible pricing that scales with your organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`p-6 glass-card hover:shadow-drop transition-flow ${index === 1 ? 'border-primary/50 shadow-water' : ''}`}>
                <div className="text-center space-y-4">
                  {plan.badge && (
                    <Badge variant={index === 1 ? "default" : "secondary"} className="mb-2">
                      {plan.badge}
                    </Badge>
                  )}
                  
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h4>
                    <div className="text-3xl font-bold text-gradient mb-1">
                      {plan.price}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {plan.period}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                  
                  <div className="text-sm font-medium text-primary">
                    {plan.maxUsers}
                  </div>
                  
                  <Button 
                    className={`w-full ${index === 1 ? 'bg-gradient-primary hover:shadow-drop' : ''}`}
                    variant={index === 1 ? "default" : "outline"}
                  >
                    {plan.name === "Custom" ? "Contact Sales" : "Start Free Trial"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ROI section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <Target className="w-16 h-16 mx-auto" />
            <h3 className="text-3xl font-bold">
              Proven ROI for Your Organization
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">23%</div>
                <p className="text-white/90">Productivity Increase</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15%</div>
                <p className="text-white/90">Fewer Sick Days</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">89%</div>
                <p className="text-white/90">Employee Satisfaction</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Crown className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Award className="mr-2 h-5 w-5" />
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationInvite;
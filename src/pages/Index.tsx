import React from 'react';
import { Droplets } from 'lucide-react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import ReferralProgram from '@/components/ReferralProgram';
import OrganizationInvite from '@/components/OrganizationInvite';
import NotificationPlatforms from '@/components/NotificationPlatforms';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Notification Platforms Section */}
      <NotificationPlatforms />
      
      {/* Referral Program Section */}
      <ReferralProgram />
      
      {/* Organization Invite Section */}
      <OrganizationInvite />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Contact/CTA Section */}
      <ContactCTA />

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

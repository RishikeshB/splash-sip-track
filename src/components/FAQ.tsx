import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';

const faqs = [
  {
    question: "How do I get started with Water Reminder?",
    answer: "Simply sign up with your email, set your hydration goals, and connect your preferred notification platforms (Teams, WhatsApp, or Messenger). The entire setup takes less than 2 minutes, and you'll receive your first reminder within the hour."
  },
  {
    question: "Which platforms support notifications?",
    answer: "We currently support Microsoft Teams, WhatsApp, and Facebook Messenger. You can connect multiple platforms and customize which reminders go where. For example, work reminders via Teams and personal reminders via WhatsApp."
  },
  {
    question: "How much does Water Reminder cost?",
    answer: "We offer a free plan with basic reminders for individuals. Team plans start at $3/user/month, Enterprise plans at $2/user/month, and we also offer custom solutions. All paid plans include a 14-day free trial with no credit card required."
  },
  {
    question: "Can I customize my reminder schedule?",
    answer: "Absolutely! You can set custom reminder times, frequency, and even different schedules for weekdays vs weekends. Our AI learns your patterns and suggests optimal timing to maximize effectiveness while minimizing disruption."
  },
  {
    question: "Is my data secure and private?",
    answer: "Yes, we take privacy seriously. All data is encrypted in transit and at rest. We never share your personal information with third parties, and you can export or delete your data at any time. We're GDPR compliant and SOC 2 certified."
  },
  {
    question: "How does the referral program work?",
    answer: "Share your unique referral link with friends and colleagues. When they sign up, you both get rewards! You'll earn premium features, exclusive badges, and special recognition. The more you refer, the better the rewards get."
  },
  {
    question: "Can organizations track employee hydration?",
    answer: "Organizations can see aggregated, anonymous wellness metrics to understand team health trends. Individual data remains private unless employees choose to share it. Managers get insights into team participation rates and overall wellness goals."
  },
  {
    question: "What happens if I miss reminders?",
    answer: "No worries! Our system is designed to be encouraging, not stressful. We'll gently remind you later and adjust future reminders based on your response patterns. You can always catch up, and we celebrate progress over perfection."
  },
  {
    question: "Do you integrate with health apps?",
    answer: "Yes! We integrate with popular health apps like Apple Health, Google Fit, and Fitbit. This allows for more accurate hydration tracking and better personalized recommendations based on your activity levels."
  },
  {
    question: "Can I use Water Reminder offline?",
    answer: "While notifications require an internet connection, you can log your water intake offline through our mobile app. Data syncs automatically when you're back online, ensuring you never lose track of your progress."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-gradient-ocean">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about Water Reminder. Can't find what you're looking for? 
            We're here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-6 glass-card">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-primary/20 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Contact support */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold text-gradient">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground">
            Our support team is here to help you succeed with your hydration goals
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 glass-card text-center hover:shadow-drop transition-flow">
              <MessageCircle className="w-12 h-12 mx-auto text-primary mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Live Chat</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get instant answers from our support team
              </p>
              <Button variant="outline" size="sm" className="hover:bg-primary/10">
                Start Chat
              </Button>
            </Card>
            
            <Card className="p-6 glass-card text-center hover:shadow-drop transition-flow">
              <Mail className="w-12 h-12 mx-auto text-primary mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Email Support</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed help via email within 24 hours
              </p>
              <Button variant="outline" size="sm" className="hover:bg-primary/10">
                Send Email
              </Button>
            </Card>
            
            <Card className="p-6 glass-card text-center hover:shadow-drop transition-flow">
              <Phone className="w-12 h-12 mx-auto text-primary mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Phone Support</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Enterprise customers get priority phone support
              </p>
              <Button variant="outline" size="sm" className="hover:bg-primary/10">
                Schedule Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import { Button } from "./ui/button-simple";
import { Card, CardContent, CardHeader } from "./ui/card-simple";
import { Check, Star } from "./ui/icons-simple";

// Simple inline icon for Crown
const Crown = () => <span className="text-lg">👑</span>;

export function CallToAction() {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "Forever",
      description: "Perfect for getting started",
      features: [
        "5 lessons per day",
        "Basic vocabulary",
        "Community access",
        "Mobile app access"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Premium",
      price: "19",
      period: "per month",
      description: "Most popular choice",
      features: [
        "Unlimited lessons",
        "Native speaker audio",
        "Live tutoring sessions",
        "Offline downloads",
        "Progress tracking",
        "Certificates"
      ],
      buttonText: "Start Premium",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Pro",
      price: "39",
      period: "per month",
      description: "For serious learners",
      features: [
        "Everything in Premium",
        "1-on-1 tutoring",
        "Business Russian course",
        "Academic writing module",
        "Priority support",
        "Custom learning path"
      ],
      buttonText: "Start Pro",
      buttonVariant: "default" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Learning Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with our free plan and upgrade when you're ready. All plans include 
            a 7-day money-back guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-red-600 scale-105' : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-2 text-sm font-medium">
                  <Crown className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.buttonVariant === 'default' 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : ''
                  }`}
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className="bg-red-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Russian Journey?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join over 50,000 students who are already learning Russian with confidence. 
            Start your free trial today and see the difference quality education makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3">
              Start 7-Day Free Trial
            </Button>
            <span className="text-red-100">No credit card required</span>
          </div>

          <div className="flex items-center justify-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-red-100 ml-2">Rated 4.8/5 by 50,000+ students</span>
          </div>
        </div>
      </div>
    </section>
  );
}
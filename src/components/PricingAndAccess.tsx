import { Card, CardContent } from "./ui/card-simple";
import { Button } from "./ui/button-simple";
import { Badge } from "./ui/badge-simple";
import { CheckCircle, Star, Zap, Crown } from "./ui/icons-simple";

export function PricingAndAccess() {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "Forever",
      description: "Perfect for trying out the platform",
      badge: null,
      color: "gray",
      features: [
        { name: "A1-A2 level lessons", included: true },
        { name: "Basic AI chat (10 messages/day)", included: true },
        { name: "Community forum access", included: true },
        { name: "Placement test", included: true },
        { name: "Cultural content library", included: true },
        { name: "Verb conjugation tool", included: true },
        { name: "B1-C1 levels", included: false },
        { name: "Unlimited AI tutor", included: false },
        { name: "Official certification", included: false },
        { name: "Personalized learning path", included: false }
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Premium",
      price: "19",
      period: "per month",
      description: "Full access to all features",
      badge: "Most Popular",
      color: "blue",
      features: [
        { name: "All free features included", included: true },
        { name: "Complete A1-C1 curriculum", included: true },
        { name: "Unlimited AI speaking tutor", included: true },
        { name: "Personalized learning paths", included: true },
        { name: "Official certificates", included: true },
        { name: "Download lessons offline", included: true },
        { name: "Priority support", included: true },
        { name: "Movies with subtitles", included: true },
        { name: "Professional specialization tracks", included: true },
        { name: "TORFL exam preparation", included: true }
      ],
      cta: "Start Premium",
      popular: true
    },
    {
      name: "Pro",
      price: "49",
      period: "per month",
      description: "For serious learners & professionals",
      badge: "Best Value",
      color: "purple",
      features: [
        { name: "Everything in Premium", included: true },
        { name: "Weekly 1-on-1 sessions with teachers", included: true },
        { name: "Fast Track Work program", included: true },
        { name: "Job placement support", included: true },
        { name: "University admission counseling", included: true },
        { name: "Legal & visa consultation", included: true },
        { name: "Exclusive mentor access", included: true },
        { name: "Custom learning plan", included: true },
        { name: "Career coaching", included: true },
        { name: "Lifetime certificate archive", included: true }
      ],
      cta: "Go Pro",
      popular: false
    }
  ];

  const annualSavings = [
    { plan: "Premium", monthly: 19, annual: 15, savings: "21%" },
    { plan: "Pro", monthly: 49, annual: 39, savings: "20%" }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          badge: "bg-blue-600",
          button: "bg-blue-600 hover:bg-blue-700",
          border: "border-blue-200",
          gradient: "from-blue-50 to-blue-100"
        };
      case "purple":
        return {
          badge: "bg-purple-600",
          button: "bg-purple-600 hover:bg-purple-700",
          border: "border-purple-200",
          gradient: "from-purple-50 to-purple-100"
        };
      default:
        return {
          badge: "bg-gray-600",
          button: "bg-gray-600 hover:bg-gray-700",
          border: "border-gray-200",
          gradient: "from-gray-50 to-gray-100"
        };
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-600 text-white mb-4">💰 Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Learning Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Start for free and upgrade anytime. No hidden fees, cancel whenever you want.
          </p>
          
          {/* Annual Savings Banner */}
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
            <Star className="w-4 h-4" />
            <span className="font-medium">Save up to 21% with annual billing</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color);
            
            return (
              <Card 
                key={index}
                className={`relative overflow-hidden border-2 ${plan.popular ? colors.border + ' shadow-2xl scale-105' : 'border-border'}`}
              >
                {plan.badge && (
                  <div className={`absolute top-0 left-0 right-0 ${colors.badge} text-white text-center py-2 text-sm font-medium`}>
                    {plan.badge}
                  </div>
                )}
                
                <CardContent className={`p-6 ${plan.badge ? 'pt-12' : ''}`}>
                  {/* Plan Name & Price */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full ${plan.popular ? colors.button : 'bg-gray-600 hover:bg-gray-700'} ${plan.popular ? 'font-bold' : ''}`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Annual Savings Table */}
        <Card className="border-border shadow-lg mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Annual Plan Savings</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4">Plan</th>
                    <th className="text-right py-3 px-4">Monthly</th>
                    <th className="text-right py-3 px-4">Annual (per month)</th>
                    <th className="text-right py-3 px-4">You Save</th>
                  </tr>
                </thead>
                <tbody>
                  {annualSavings.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-4 font-medium">{item.plan}</td>
                      <td className="text-right py-4 px-4 text-muted-foreground">${item.monthly}/mo</td>
                      <td className="text-right py-4 px-4 font-bold text-green-600">${item.annual}/mo</td>
                      <td className="text-right py-4 px-4">
                        <Badge className="bg-green-600 text-white">{item.savings}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Free Features Highlight */}
        <Card className="border-border bg-gradient-to-r from-green-50 to-green-100 shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Free Forever Tier</h3>
              <p className="text-muted-foreground">No credit card required. Start learning immediately.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📚</div>
                <div className="font-bold mb-1">Full A1-A2 Access</div>
                <div className="text-sm text-muted-foreground">Complete beginner curriculum</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-bold mb-1">AI Chat Practice</div>
                <div className="text-sm text-muted-foreground">10 messages per day</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="font-bold mb-1">Community Access</div>
                <div className="text-sm text-muted-foreground">Forums and study groups</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Money Back Guarantee */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-blue-50 border-2 border-blue-200 rounded-lg px-6 py-4 mb-8">
            <div className="text-3xl">✅</div>
            <div className="text-left">
              <div className="font-bold text-blue-700">30-Day Money-Back Guarantee</div>
              <div className="text-sm text-blue-600">Not satisfied? Get a full refund, no questions asked.</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Compare All Features
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            🎓 Student discounts available • 🏢 Team pricing for schools
          </p>
        </div>
      </div>
    </section>
  );
}

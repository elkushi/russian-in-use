import { useState } from "react";
import { Card, CardContent } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { TrendingUp, DollarSign } from "./ui/icons-simple";

export function CostComparison() {
  const [months, setMonths] = useState(12);

  const options = [
    {
      name: "Our Platform (Premium)",
      icon: "🇷🇺",
      monthlyPrice: 19,
      setup: 0,
      features: ["All levels A1-C1", "Unlimited AI tutor", "Certifications", "Job support"],
      pros: ["Learn at your own pace", "24/7 access", "Affordable"],
      color: "red"
    },
    {
      name: "Traditional Language School",
      icon: "🏫",
      monthlyPrice: 400,
      setup: 150,
      features: ["Fixed schedule", "Group classes", "Basic materials", "In-person only"],
      pros: ["Face-to-face interaction", "Structured curriculum"],
      color: "blue"
    },
    {
      name: "Private Tutor",
      icon: "👨‍🏫",
      monthlyPrice: 320,
      setup: 0,
      features: ["1-2 hrs/week", "Personalized", "Flexible schedule", "No materials"],
      pros: ["Customized lessons", "One-on-one attention"],
      color: "green"
    },
    {
      name: "Rosetta Stone",
      icon: "🗿",
      monthlyPrice: 36,
      setup: 0,
      features: ["Self-paced", "Basic curriculum", "No live support", "Limited feedback"],
      pros: ["Established brand", "Speech recognition"],
      color: "yellow"
    },
    {
      name: "University Course",
      icon: "🎓",
      monthlyPrice: 833,
      setup: 500,
      features: ["Semester-based", "Academic credit", "Textbooks required", "Fixed pace"],
      pros: ["Accredited", "College credit", "Structured"],
      color: "purple"
    },
  ];

  const calculateTotal = (option: typeof options[0]) => {
    return (option.monthlyPrice * months) + option.setup;
  };

  const calculateSavings = (option: typeof options[0]) => {
    const ourTotal = calculateTotal(options[0]);
    const theirTotal = calculateTotal(option);
    return theirTotal - ourTotal;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-600 text-white mb-4">💰 Cost Comparison</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compare Learning Costs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            See how much you can save while getting more features with our platform
          </p>

          {/* Time Selector */}
          <div className="max-w-md mx-auto">
            <label className="block text-sm font-medium mb-3">
              Calculate costs for:
            </label>
            <input
              type="range"
              min="1"
              max="24"
              value={months}
              onChange={(e) => setMonths(parseInt(e.target.value))}
              className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-gray-600">1 month</span>
              <span className="text-2xl font-bold text-green-600">{months} months</span>
              <span className="text-sm text-gray-600">24 months</span>
            </div>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {options.map((option, idx) => {
            const total = calculateTotal(option);
            const savings = idx === 0 ? 0 : calculateSavings(option);
            const isOurs = idx === 0;

            return (
              <Card 
                key={idx}
                className={`border-4 ${isOurs ? 'border-red-500 shadow-2xl transform scale-105' : 'border-gray-200'} relative overflow-hidden`}
              >
                {isOurs && (
                  <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-2 text-sm font-bold">
                    ⭐ Best Value
                  </div>
                )}
                
                <CardContent className={`p-6 ${isOurs ? 'pt-12' : ''}`}>
                  {/* Icon & Name */}
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-3">{option.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{option.name}</h3>
                  </div>

                  {/* Pricing */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl font-bold">${option.monthlyPrice}</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    {option.setup > 0 && (
                      <div className="text-sm text-gray-600 text-center">
                        + ${option.setup} setup fee
                      </div>
                    )}
                  </div>

                  {/* Total Cost */}
                  <div className={`rounded-xl p-4 mb-6 ${isOurs ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-100'}`}>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">{months}-month total:</div>
                      <div className="text-3xl font-bold text-gray-900">${total.toLocaleString()}</div>
                      {!isOurs && savings > 0 && (
                        <div className="text-sm text-red-600 font-medium mt-2">
                          ${savings.toLocaleString()} more expensive
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-700 mb-2">Includes:</div>
                    <ul className="space-y-1">
                      {option.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-sm text-gray-600 flex items-center space-x-2">
                          <span className="text-green-600">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pros */}
                  <div className="border-t pt-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Pros:</div>
                    <ul className="space-y-1">
                      {option.pros.map((pro, pIdx) => (
                        <li key={pIdx} className="text-sm text-gray-600 flex items-center space-x-2">
                          <span className="text-blue-600">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Savings Summary */}
        <Card className="border-4 border-green-500 shadow-2xl bg-gradient-to-r from-green-50 to-teal-50">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold">Your Potential Savings</h3>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-6">
                {options.slice(1).map((option, idx) => {
                  const savings = calculateSavings(option);
                  return (
                    <div key={idx} className="bg-white rounded-xl p-4 shadow-md">
                      <div className="text-3xl mb-2">{option.icon}</div>
                      <div className="text-sm text-gray-600 mb-1">vs {option.name}</div>
                      <div className="text-2xl font-bold text-green-600">
                        ${savings.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">saved over {months} months</div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto">
                <div className="flex items-start space-x-4">
                  <DollarSign className="w-12 h-12 text-green-600 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-bold text-lg mb-2">Why We're More Affordable</div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>✓ No physical location costs to pass on to you</li>
                      <li>✓ AI-powered tutoring reduces labor costs</li>
                      <li>✓ Digital materials eliminate printing expenses</li>
                      <li>✓ Scalable technology serves thousands efficiently</li>
                      <li>✓ But we still offer 1-on-1 teacher sessions in Pro plan!</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg">
                  Start Saving Today - Free Trial →
                </button>
                <p className="text-sm text-gray-600 mt-3">
                  No credit card required • Cancel anytime • 30-day money-back guarantee
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ROI Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-4 flex items-center space-x-2">
                <span className="text-2xl">💼</span>
                <span>Return on Investment</span>
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <div className="font-medium mb-1">Russian-speaking jobs pay more</div>
                  <div className="text-gray-600">Average salary increase: <span className="font-bold text-blue-600">$15,000-30,000/year</span></div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="font-medium mb-1">Break-even time</div>
                  <div className="text-gray-600">Your investment pays back in <span className="font-bold text-blue-600">less than 1 month</span> of increased salary</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-4 flex items-center space-x-2">
                <span className="text-2xl">📚</span>
                <span>What You Get</span>
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between bg-white rounded-lg p-2">
                  <span>1000+ lesson hours</span>
                  <span className="font-bold text-purple-600">${calculateTotal(options[0])}</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-2">
                  <span>AI tutor (unlimited)</span>
                  <span className="font-bold text-purple-600">Included</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-2">
                  <span>Official certifications</span>
                  <span className="font-bold text-purple-600">Included</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-2">
                  <span>Job placement support</span>
                  <span className="font-bold text-purple-600">Included</span>
                </div>
                <div className="text-center pt-2 border-t">
                  <span className="text-xs text-gray-600">Cost per lesson hour: </span>
                  <span className="font-bold text-purple-600">${(calculateTotal(options[0]) / 1000).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

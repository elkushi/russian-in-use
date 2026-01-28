import { useState } from 'react';
import { Card, CardContent } from './ui/card-simple';
import { Badge } from './ui/badge-simple';
import { DollarSign, TrendingUp } from './ui/icons-simple';

export function CostComparisonCalculator() {
  const [months, setMonths] = useState(6);

  const options = [
    {
      name: 'Our Platform (Premium)',
      monthly: 19,
      setup: 0,
      features: 'Complete A1-C1, AI tutor, Job placement, University prep',
      color: 'bg-red-600'
    },
    {
      name: 'Traditional Russian Classes',
      monthly: 320,
      setup: 50,
      features: 'Group classes, Fixed schedule, Limited resources',
      color: 'bg-blue-600'
    },
    {
      name: 'Private Russian Tutor',
      monthly: 480,
      setup: 0,
      features: '2 sessions/week, Flexible schedule, Personalized',
      color: 'bg-green-600'
    },
    {
      name: 'Rosetta Stone',
      monthly: 36,
      setup: 0,
      features: 'Self-paced, No live support, Basic curriculum',
      color: 'bg-yellow-600'
    },
    {
      name: 'Babbel',
      monthly: 14,
      setup: 0,
      features: 'App-based, Limited interaction, No certification',
      color: 'bg-purple-600'
    }
  ];

  const calculateTotal = (monthly: number, setup: number) => {
    return (monthly * months) + setup;
  };

  const calculateSavings = (amount: number) => {
    const ourCost = calculateTotal(19, 0);
    const savings = amount - ourCost;
    const percentage = Math.round((savings / amount) * 100);
    return { savings, percentage };
  };

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-green-600 text-white mb-4">
            <DollarSign className="inline mr-2" />
            Cost Comparison
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See How Much You'll Save
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare the cost of learning Russian with different methods
          </p>
        </div>

        {/* Time Selector */}
        <Card className="mb-12 border-2 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <label className="block font-medium mb-3">
                Learning Duration: <span className="text-green-600 font-bold">{months} months</span>
              </label>
              <input
                type="range"
                min="3"
                max="24"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full max-w-md h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1 max-w-md mx-auto">
                <span>3 months</span>
                <span>12 months</span>
                <span>24 months</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <div className="space-y-4">
          {options.map((option, index) => {
            const total = calculateTotal(option.monthly, option.setup);
            const { savings, percentage } = calculateSavings(total);
            const isUs = index === 0;

            return (
              <Card 
                key={index}
                className={`${isUs ? 'border-4 border-green-500 shadow-2xl' : 'border border-gray-200 dark:border-gray-700'}`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    {/* Method Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-4 h-4 ${option.color} rounded-full`}></div>
                        <h3 className="font-bold text-lg">{option.name}</h3>
                        {isUs && (
                          <Badge className="bg-green-600 text-white">Best Value</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{option.features}</p>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">Monthly</div>
                        <div className="text-2xl font-bold">${option.monthly}</div>
                      </div>
                      
                      {option.setup > 0 && (
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground mb-1">Setup</div>
                          <div className="text-lg font-bold">${option.setup}</div>
                        </div>
                      )}

                      <div className="text-center bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2">
                        <div className="text-sm text-muted-foreground mb-1">{months} mo Total</div>
                        <div className="text-3xl font-bold text-gray-800 dark:text-white">
                          ${total.toLocaleString()}
                        </div>
                      </div>

                      {!isUs && savings > 0 && (
                        <div className="text-center bg-red-50 dark:bg-red-900/30 rounded-lg px-4 py-2">
                          <div className="text-sm text-red-600 dark:text-red-400 mb-1">You Save</div>
                          <div className="text-2xl font-bold text-red-600">
                            ${savings.toLocaleString()}
                          </div>
                          <div className="text-xs text-red-500">({percentage}% less)</div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ROI Section */}
        <Card className="mt-12 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              <TrendingUp className="inline mr-2" />
              Return on Investment
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">💼</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">+$15K/year</div>
                <div className="text-sm text-muted-foreground">
                  Average salary increase with Russian proficiency
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">🎓</div>
                <div className="text-2xl font-bold text-green-600 mb-1">$12K saved</div>
                <div className="text-sm text-muted-foreground">
                  Average scholarship value at Russian universities
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">🌍</div>
                <div className="text-2xl font-bold text-purple-600 mb-1">Priceless</div>
                <div className="text-sm text-muted-foreground">
                  Cultural experiences and opportunities unlocked
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

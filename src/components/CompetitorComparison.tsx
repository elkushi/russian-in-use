import { Card, CardContent } from './ui/card-simple';
import { Badge } from './ui/badge-simple';
import { CheckCircle, X } from './ui/icons-simple';

export function CompetitorComparison() {
  const features = [
    { name: 'Complete A1-C1 Curriculum', us: true, duo: false, babbel: true, rosetta: true },
    { name: 'AI Speaking Tutor (Unlimited)', us: true, duo: false, babbel: false, rosetta: false },
    { name: 'Russian Cultural Integration', us: true, duo: false, babbel: false, rosetta: false },
    { name: 'Job Placement Support', us: true, duo: false, babbel: false, rosetta: false },
    { name: 'University Prep Program', us: true, duo: false, babbel: false, rosetta: false },
    { name: 'Official Partnerships (Russia)', us: true, duo: false, babbel: false, rosetta: false },
    { name: 'TORFL Exam Preparation', us: true, duo: false, babbel: false, rosetta: false },
    { name: 'Mentor System (B2+ learners)', us: true, duo: false, babbel: false, rosetta: false },
    { name: 'Professional Specialization', us: true, duo: false, babbel: false, rosetta: false },
    { name: 'Pre-Arrival Russia Program', us: true, duo: false, babbel: false, rosetta: false },
    { name: 'Live Teacher Support', us: true, duo: false, babbel: true, rosetta: false },
    { name: 'Russian Movies & Media', us: true, duo: false, babbel: false, rosetta: false },
    { name: 'Cost of Living Calculator', us: true, duo: false, babbel: false, rosetta: false },
    { name: 'Free Tier Available', us: true, duo: true, babbel: false, rosetta: false },
  ];

  const pricing = [
    { name: 'Us', price: '$19/mo', annual: '$15/mo', color: 'bg-red-600' },
    { name: 'Duolingo Plus', price: '$13/mo', annual: '$7/mo', color: 'bg-green-600' },
    { name: 'Babbel', price: '$14/mo', annual: '$7/mo', color: 'bg-blue-600' },
    { name: 'Rosetta Stone', price: '$36/mo', annual: '$12/mo', color: 'bg-yellow-600' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-purple-600 text-white mb-4">
            📊 Comparison
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us Over Competitors?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're the only platform designed specifically for people who want to live, work, or study in Russia
          </p>
        </div>

        {/* Feature Comparison Table */}
        <Card className="mb-12 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="text-left p-4 font-bold">Feature</th>
                    <th className="p-4 font-bold bg-red-50 dark:bg-red-900/30">
                      <div className="text-red-600 font-bold">Our Platform</div>
                    </th>
                    <th className="p-4 font-medium text-gray-600 dark:text-gray-400">Duolingo</th>
                    <th className="p-4 font-medium text-gray-600 dark:text-gray-400">Babbel</th>
                    <th className="p-4 font-medium text-gray-600 dark:text-gray-400">Rosetta Stone</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                      <td className="p-4 font-medium">{feature.name}</td>
                      <td className="p-4 text-center bg-red-50 dark:bg-red-900/10">
                        {feature.us ? (
                          <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.duo ? (
                          <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.babbel ? (
                          <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.rosetta ? (
                          <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Comparison */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {pricing.map((item, index) => (
            <Card key={index} className={index === 0 ? 'border-2 border-red-600 shadow-2xl' : ''}>
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${item.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold`}>
                  {item.name[0]}
                </div>
                <h3 className="font-bold mb-2">{item.name}</h3>
                <div className="text-2xl font-bold mb-1">{item.price}</div>
                <div className="text-sm text-muted-foreground mb-3">or {item.annual} annually</div>
                {index === 0 && (
                  <Badge className="bg-green-600 text-white">Best Value</Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Russia-Specific Focus</h3>
              <p className="text-sm text-muted-foreground">
                Not just language learning - we prepare you for actual life in Russia with cultural integration, 
                job placement, and university prep.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold mb-2">Official Partnerships</h3>
              <p className="text-sm text-muted-foreground">
                Recognized by Russian Ministry of Education and universities. Our certificates 
                are officially accepted for admissions and visas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-bold mb-2">Career Support</h3>
              <p className="text-sm text-muted-foreground">
                Professional specialization tracks, job placement assistance, and Fast Track Work 
                program to get you employed in Russia quickly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

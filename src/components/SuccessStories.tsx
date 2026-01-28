import { Card, CardContent } from './ui/card-simple';
import { Badge } from './ui/badge-simple';
import { Trophy, Target, Clock, Star } from './ui/icons-simple';

export function SuccessStories() {
  const stories = [
    {
      name: 'Sarah Chen',
      country: '🇺🇸 USA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      journey: 'A1 → B2 in 8 months',
      goal: 'Marketing Manager in Moscow',
      quote: 'I landed my dream job at a tech company in Moscow! The professional specialization track was crucial.',
      metrics: {
        studyHours: 420,
        lessonsCompleted: 156,
        currentLevel: 'B2'
      }
    },
    {
      name: 'Ahmed Hassan',
      country: '🇪🇬 Egypt',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      journey: 'Beginner → B1 in 6 months',
      goal: 'Medical Student in St. Petersburg',
      quote: 'The university prep program got me accepted to First Pavlov State Medical University. Forever grateful!',
      metrics: {
        studyHours: 380,
        lessonsCompleted: 142,
        currentLevel: 'B1'
      }
    },
    {
      name: 'Maria Garcia',
      country: '🇲🇽 Mexico',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      journey: 'A2 → C1 in 14 months',
      goal: 'Translator & Content Creator',
      quote: 'Now I create Russian content for my 50K+ followers. The cultural integration section was game-changing.',
      metrics: {
        studyHours: 920,
        lessonsCompleted: 284,
        currentLevel: 'C1'
      }
    }
  ];

  const stats = [
    { label: 'Average time to B1', value: '6 months', icon: Clock },
    { label: 'Average study hours/week', value: '7.5 hours', icon: Target },
    { label: 'Job placement rate', value: '87%', icon: Trophy },
    { label: 'Student satisfaction', value: '4.8/5', icon: Star }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-green-600 text-white mb-4">
            🌟 Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Students, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our students achieved their Russian language goals and transformed their lives
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6 text-center">
                  <Icon className="mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <Card key={index} className="border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                {/* Profile */}
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold">{story.name}</h3>
                    <div className="text-sm text-muted-foreground">{story.country}</div>
                    <Badge className="bg-blue-600 text-white mt-1 text-xs">
                      {story.journey}
                    </Badge>
                  </div>
                </div>

                {/* Goal */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-3 mb-4">
                  <div className="text-xs text-muted-foreground mb-1">Goal Achieved:</div>
                  <div className="font-bold text-blue-600">{story.goal}</div>
                </div>

                {/* Quote */}
                <div className="mb-4">
                  <div className="text-4xl text-blue-200 dark:text-blue-800 mb-2">"</div>
                  <p className="text-sm italic text-gray-700 dark:text-gray-300">{story.quote}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-green-50 dark:bg-green-900/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-green-600">{story.metrics.studyHours}h</div>
                    <div className="text-xs text-muted-foreground">Study Time</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-purple-600">{story.metrics.lessonsCompleted}</div>
                    <div className="text-xs text-muted-foreground">Lessons</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-blue-600">{story.metrics.currentLevel}</div>
                    <div className="text-xs text-muted-foreground">Level</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Timeline */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Average Learning Timeline</h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-green-300 top-8"></div>
                
                {/* Timeline Points */}
                <div className="grid grid-cols-5 gap-4 relative">
                  {[
                    { level: 'A1', months: '0-2', color: 'bg-blue-500' },
                    { level: 'A2', months: '2-4', color: 'bg-purple-500' },
                    { level: 'B1', months: '4-6', color: 'bg-green-500' },
                    { level: 'B2', months: '6-10', color: 'bg-yellow-500' },
                    { level: 'C1', months: '10-14', color: 'bg-red-500' }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-16 h-16 ${item.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        {item.level}
                      </div>
                      <div className="font-bold">{item.months} mo</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {index === 2 && '✈️ Travel Ready!'}
                        {index === 3 && '💼 Job Ready'}
                        {index === 4 && '🎓 Expert'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">
              Based on average study time of 7-8 hours per week. Individual results may vary.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

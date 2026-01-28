import { Card, CardContent } from "./ui/card-simple";
import { Button } from "./ui/button-simple";
import { Badge } from "./ui/badge-simple";
import { Progress } from "./ui/progress-simple";
import { CheckCircle, Circle, Plane, Star, Trophy, Users } from "./ui/icons-simple";

export function LanguageLevels() {
  const levels = [
    {
      level: "A1",
      name: "Beginner",
      description: "Start your journey",
      progress: 20,
      duration: "2-3 months",
      hours: "80-120 hours",
      canDo: [
        "Introduce yourself and others",
        "Ask and answer basic questions",
        "Use simple phrases for daily needs",
        "Understand slow, clear speech"
      ],
      color: "blue",
      icon: Circle,
      completed: false
    },
    {
      level: "A2",
      name: "Elementary", 
      description: "Build foundations",
      progress: 40,
      duration: "3-4 months",
      hours: "150-200 hours",
      canDo: [
        "Describe your background and environment",
        "Express immediate needs",
        "Handle simple transactions",
        "Read simple texts"
      ],
      color: "green",
      icon: Circle,
      completed: false
    },
    {
      level: "B1",
      name: "Intermediate",
      description: "Ready for Russia!",
      progress: 60,
      duration: "4-6 months",
      hours: "250-350 hours",
      canDo: [
        "Travel independently in Russia",
        "Handle most daily situations",
        "Express opinions and experiences",
        "Understand main points of clear texts"
      ],
      color: "red",
      icon: Plane,
      completed: false,
      milestone: true,
      special: "🇷🇺 Travel & Live in Russia"
    },
    {
      level: "B2",
      name: "Upper-Intermediate",
      description: "Professional fluency",
      progress: 80,
      duration: "6-8 months",
      hours: "400-500 hours",
      canDo: [
        "Work professionally in Russian",
        "Discuss complex topics fluently",
        "Understand news and media",
        "Write clear, detailed texts"
      ],
      color: "purple",
      icon: Users,
      completed: false
    },
    {
      level: "C1",
      name: "Advanced",
      description: "Near-native mastery",
      progress: 100,
      duration: "8-12 months",
      hours: "600-750 hours",
      canDo: [
        "Express ideas fluently and spontaneously",
        "Use language effectively for academic/professional purposes",
        "Understand virtually everything",
        "Write complex, well-structured texts"
      ],
      color: "gold",
      icon: Trophy,
      completed: false
    }
  ];

  const getColorClasses = (color: string, milestone = false) => {
    if (milestone) {
      return {
        cardBg: "bg-gradient-to-br from-red-50 to-red-100 border-red-200 shadow-lg",
        iconBg: "bg-red-600",
        iconColor: "text-white",
        levelBg: "bg-red-600",
        levelText: "text-white",
        button: "bg-red-600 hover:bg-red-700"
      };
    }
    
    switch (color) {
      case "blue":
        return {
          cardBg: "bg-blue-50 border-blue-200",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          levelBg: "bg-blue-600",
          levelText: "text-white",
          button: "bg-blue-600 hover:bg-blue-700"
        };
      case "green":
        return {
          cardBg: "bg-green-50 border-green-200",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          levelBg: "bg-green-600",
          levelText: "text-white",
          button: "bg-green-600 hover:bg-green-700"
        };
      case "purple":
        return {
          cardBg: "bg-purple-50 border-purple-200",
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
          levelBg: "bg-purple-600",
          levelText: "text-white",
          button: "bg-purple-600 hover:bg-purple-700"
        };
      case "gold":
        return {
          cardBg: "bg-yellow-50 border-yellow-200",
          iconBg: "bg-yellow-100",
          iconColor: "text-yellow-600",
          levelBg: "bg-yellow-600",
          levelText: "text-white",
          button: "bg-yellow-600 hover:bg-yellow-700"
        };
      default:
        return {
          cardBg: "bg-gray-50 border-gray-200",
          iconBg: "bg-gray-100",
          iconColor: "text-gray-600",
          levelBg: "bg-gray-600",
          levelText: "text-white",
          button: "bg-gray-600 hover:bg-gray-700"
        };
    }
  };

  return (
    <section id="levels" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Path to Russian Fluency
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Follow our structured learning path based on the Common European Framework of Reference (CEFR). 
            Each level builds upon the previous one, leading you to complete fluency.
          </p>
          
          {/* Overall Progress */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-sm border border-border">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-foreground">Your Progress</span>
              <span className="text-sm text-muted-foreground">Level A1 - Beginner</span>
            </div>
            <Progress value={20} className="h-3 mb-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>A1</span>
              <span>A2</span>
              <span>B1</span>
              <span>B2</span>
              <span>C1</span>
            </div>
          </div>
        </div>

        {/* B1 Milestone Highlight */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="flex justify-center mb-4">
              <Plane className="w-12 h-12" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              B1 Level: Your Gateway to Russia! 🇷🇺
            </h3>
            <p className="text-xl text-red-100 mb-6 max-w-3xl mx-auto">
              Reach B1 level and you'll be ready to travel independently in Russia, handle daily situations with confidence, 
              and adapt to Russian life. This is the milestone that opens doors to authentic Russian experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <Plane className="w-8 h-8 mx-auto mb-2" />
                <div className="font-medium">Travel Independently</div>
                <div className="text-sm text-red-100">Navigate airports, hotels, restaurants</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-medium">Social Interactions</div>
                <div className="text-sm text-red-100">Make friends, join activities</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Star className="w-8 h-8 mx-auto mb-2" />
                <div className="font-medium">Daily Life</div>
                <div className="text-sm text-red-100">Shopping, banking, healthcare</div>
              </div>
            </div>
          </div>
        </div>

        {/* Levels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {levels.map((level, index) => {
            const colors = getColorClasses(level.color, level.milestone);
            const IconComponent = level.icon;
            
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${colors.cardBg} ${
                  level.milestone ? 'scale-105 ring-2 ring-red-200' : ''
                }`}
              >
                {level.milestone && (
                  <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-2 text-xs font-medium">
                    🇷🇺 RUSSIA READY MILESTONE
                  </div>
                )}
                
                <CardContent className={`p-6 ${level.milestone ? 'pt-12' : ''}`}>
                  {/* Level Badge and Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={`${colors.levelBg} ${colors.levelText} font-bold text-lg px-3 py-1`}>
                      {level.level}
                    </Badge>
                    <div className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-5 h-5 ${colors.iconColor}`} />
                    </div>
                  </div>

                  {/* Level Info */}
                  <div className="mb-4">
                    <h3 className="font-bold text-lg text-foreground mb-1">{level.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{level.description}</p>
                    {level.special && (
                      <p className="text-sm font-medium text-red-600 mb-2">{level.special}</p>
                    )}
                    <div className="flex flex-wrap gap-1 mb-2">
                      <div className="text-xs text-muted-foreground bg-white/50 rounded-full px-2 py-1">
                        {level.duration}
                      </div>
                      <div className="text-xs text-muted-foreground bg-white/50 rounded-full px-2 py-1">
                        {level.hours}
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mb-4">
                    <Progress value={level.progress} className="h-2" />
                  </div>

                  {/* Can Do List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-sm font-medium text-foreground">You will be able to:</div>
                    {level.canDo.slice(0, 2).map((ability, abilityIndex) => (
                      <div key={abilityIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{ability}</span>
                      </div>
                    ))}
                    {level.canDo.length > 2 && (
                      <div className="text-xs text-muted-foreground italic">
                        +{level.canDo.length - 2} more skills...
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="sm" 
                    className={`w-full ${colors.button} ${level.milestone ? 'font-bold' : ''}`}
                  >
                    {level.milestone ? 'Start B1 Journey' : `Start ${level.level} Level`}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Begin Your Russian Journey?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take our quick placement test to find your starting level and get a personalized learning path 
            that will take you all the way to fluency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8">
              Take Placement Test
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Start with A1
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { CheckCircle, Clock, Trophy, Plane, Briefcase, GraduationCap } from "./ui/icons-simple";

export function LearningPathVisualizer() {
  const levels = [
    {
      level: "A1",
      name: "Absolute Beginner",
      duration: "2-3 months",
      hours: "60-80 hours",
      description: "Learn Cyrillic, basic phrases, and simple conversations",
      milestones: ["Read Cyrillic alphabet", "Introduce yourself", "Order food", "Ask directions"],
      color: "green",
      icon: <span className="text-2xl">🌱</span>
    },
    {
      level: "A2",
      name: "Elementary",
      duration: "3-4 months",
      hours: "100-120 hours",
      description: "Build vocabulary and handle everyday situations",
      milestones: ["Discuss hobbies", "Past tense", "Shopping conversations", "Express opinions"],
      color: "blue",
      icon: <span className="text-2xl">📖</span>
    },
    {
      level: "B1",
      name: "Intermediate - Travel Ready! ✈️",
      duration: "4-5 months",
      hours: "180-200 hours",
      description: "Ready to live and travel in Russia confidently",
      milestones: ["Navigate daily life", "Work conversations", "Understand media", "Cultural fluency"],
      color: "yellow",
      icon: <Plane className="w-8 h-8" />,
      highlighted: true
    },
    {
      level: "B2",
      name: "Upper Intermediate",
      duration: "5-6 months",
      hours: "250-300 hours",
      description: "Professional competence and cultural understanding",
      milestones: ["Business meetings", "Write reports", "Debate topics", "Idiomatic expressions"],
      color: "orange",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      level: "C1",
      name: "Advanced",
      duration: "6-8 months",
      hours: "400+ hours",
      description: "Near-native fluency for professional work",
      milestones: ["Academic writing", "Lead presentations", "Literary texts", "Professional certification"],
      color: "purple",
      icon: <GraduationCap className="w-8 h-8" />
    }
  ];

  const totalDuration = "20-26 months from zero to fluency";
  const totalHours = "990-1,100 hours of study";

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-600 text-white mb-4">🗺️ Your Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clear Path to Russian Fluency
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Follow our proven curriculum from complete beginner to professional fluency
          </p>
          
          {/* Total Duration Banner */}
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-medium">
              <Clock className="w-5 h-5 inline mr-2" />
              {totalDuration}
            </div>
            <div className="bg-green-100 text-green-700 px-6 py-3 rounded-full font-medium">
              <Trophy className="w-5 h-5 inline mr-2" />
              {totalHours}
            </div>
          </div>
        </div>

        {/* Learning Path Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-yellow-400 to-purple-600 transform -translate-x-1/2"></div>

          {/* Level Cards */}
          <div className="space-y-8">
            {levels.map((level, index) => (
              <div
                key={index}
                className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
              >
                <Card className={`border-2 ${level.highlighted ? 'border-yellow-400 shadow-2xl bg-gradient-to-br from-yellow-50 to-orange-50' : 'border-border shadow-lg'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${level.highlighted ? 'bg-yellow-400' : 'bg-gray-100'} flex items-center justify-center`}>
                        {level.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge className={`${level.highlighted ? 'bg-yellow-600' : 'bg-gray-600'} text-white text-lg px-3 py-1`}>
                            {level.level}
                          </Badge>
                          <h3 className="font-bold text-xl">{level.name}</h3>
                        </div>

                        <p className="text-muted-foreground mb-4">{level.description}</p>

                        {/* Duration & Hours */}
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span className="font-medium">{level.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Trophy className="w-4 h-4 text-orange-600" />
                            <span className="font-medium">{level.hours}</span>
                          </div>
                        </div>

                        {/* Milestones */}
                        <div className="grid sm:grid-cols-2 gap-2">
                          {level.milestones.map((milestone, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span>{milestone}</span>
                            </div>
                          ))}
                        </div>

                        {level.highlighted && (
                          <div className="mt-4 p-3 bg-yellow-100 border-2 border-yellow-400 rounded-lg">
                            <div className="font-bold text-yellow-900 mb-1">
                              🎉 Major Milestone: Travel & Life Ready!
                            </div>
                            <div className="text-sm text-yellow-800">
                              At B1, you can confidently navigate daily life, work, and travel throughout Russia
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline dot */}
                <div className={`hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg ${level.highlighted ? 'bg-yellow-400' : 'bg-blue-600'}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Study Pace Calculator */}
        <Card className="mt-12 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Customize Your Pace</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">🐢</div>
                <div className="font-bold mb-2">Relaxed</div>
                <div className="text-sm text-muted-foreground mb-3">2-3 hours/week</div>
                <div className="text-lg font-bold text-blue-600">~3 years to C1</div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 text-center border-2 border-blue-400">
                <div className="text-3xl mb-2">🏃</div>
                <div className="font-bold mb-2">Recommended</div>
                <div className="text-sm text-muted-foreground mb-3">5-7 hours/week</div>
                <div className="text-lg font-bold text-blue-700">~2 years to C1</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-bold mb-2">Intensive</div>
                <div className="text-sm text-muted-foreground mb-3">10+ hours/week</div>
                <div className="text-lg font-bold text-purple-600">~1 year to C1</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

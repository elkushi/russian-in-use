import { Card, CardContent } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { CheckCircle, Clock, Plane, Briefcase, GraduationCap } from "./ui/icons-simple";

export function LearningPathVisualization() {
  const levels = [
    {
      level: "A1",
      title: "Beginner",
      duration: "2-3 months",
      hours: "100-150 hours",
      description: "Absolute basics",
      skills: ["Alphabet & pronunciation", "Basic greetings", "Numbers & dates", "Simple questions"],
      milestone: null,
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-500",
      textColor: "text-green-700"
    },
    {
      level: "A2",
      title: "Elementary",
      duration: "3-4 months",
      hours: "150-200 hours",
      description: "Basic communication",
      skills: ["Daily routines", "Shopping & dining", "Family & friends", "Past & future tenses"],
      milestone: null,
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500",
      textColor: "text-blue-700"
    },
    {
      level: "B1",
      title: "Intermediate",
      duration: "4-5 months",
      hours: "200-250 hours",
      description: "Conversational fluency",
      skills: ["Express opinions", "Handle emergencies", "Job interviews", "Social situations"],
      milestone: {
        icon: Plane,
        title: "✈️ Travel Ready!",
        description: "You can now travel to Russia and adapt to daily life",
        color: "bg-gradient-to-r from-orange-500 to-red-500"
      },
      color: "orange",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-500",
      textColor: "text-orange-700"
    },
    {
      level: "B2",
      title: "Upper Intermediate",
      duration: "5-6 months",
      hours: "250-300 hours",
      description: "Professional competency",
      skills: ["Business communication", "Complex texts", "Media & news", "Academic discussions"],
      milestone: {
        icon: Briefcase,
        title: "💼 Work Ready!",
        description: "Qualified for professional work in Russian-speaking environments",
        color: "bg-gradient-to-r from-purple-500 to-pink-500"
      },
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500",
      textColor: "text-purple-700"
    },
    {
      level: "C1",
      title: "Advanced",
      duration: "6-8 months",
      hours: "300-400 hours",
      description: "Near-native fluency",
      skills: ["Idioms & slang", "Literature", "Technical writing", "Cultural nuances"],
      milestone: {
        icon: GraduationCap,
        title: "🎓 University Ready!",
        description: "Eligible for Russian universities and professional certification",
        color: "bg-gradient-to-r from-blue-600 to-indigo-600"
      },
      color: "indigo",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700"
    }
  ];

  const totalDuration = "18-26 months to reach C1";
  const totalHours = "1000-1300 hours total";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-600 text-white mb-4">🗺️ Your Learning Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clear Path to Russian Fluency
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Visual roadmap showing exactly what you'll learn at each level and when you'll reach key milestones
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-blue-700">{totalDuration}</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full">
              <span className="text-lg">⏱️</span>
              <span className="font-medium text-purple-700">{totalHours}</span>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-green-500 via-orange-500 to-indigo-500 transform -translate-x-1/2" />

          <div className="space-y-12">
            {levels.map((level, index) => (
              <div key={level.level} className="relative">
                {/* Desktop Layout */}
                <div className={`hidden lg:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <Card className={`border-4 ${level.borderColor} shadow-xl hover:shadow-2xl transition-shadow`}>
                      <CardContent className={`p-6 ${level.bgColor}`}>
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className={`text-4xl font-bold ${level.textColor}`}>{level.level}</div>
                            <Badge className={`${level.bgColor} ${level.textColor} border-2 ${level.borderColor}`}>
                              {level.title}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-1">{level.description}</div>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>⏰ {level.duration}</span>
                            <span>📚 {level.hours}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="font-medium text-sm text-gray-700 mb-2">What you'll learn:</div>
                          {level.skills.map((skill, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Badge */}
                  <div className="w-2/12 flex justify-center z-10">
                    <div className={`w-16 h-16 rounded-full ${level.bgColor} border-4 ${level.borderColor} flex items-center justify-center bg-white font-bold text-xl shadow-lg`}>
                      {level.level}
                    </div>
                  </div>

                  {/* Milestone or Empty Space */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                    {level.milestone && (
                      <div className={`${level.milestone.color} text-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform`}>
                        <div className="text-3xl mb-3">{level.milestone.title.split(' ')[0]}</div>
                        <div className="font-bold text-xl mb-2">{level.milestone.title.split(' ').slice(1).join(' ')}</div>
                        <div className="text-sm opacity-90">{level.milestone.description}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <Card className={`border-4 ${level.borderColor} shadow-xl`}>
                    <CardContent className={`p-6 ${level.bgColor}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`text-4xl font-bold ${level.textColor}`}>{level.level}</div>
                        <Badge className={`${level.bgColor} ${level.textColor} border-2 ${level.borderColor}`}>
                          {level.title}
                        </Badge>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-3">{level.description}</div>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                        <span className="bg-white px-2 py-1 rounded">⏰ {level.duration}</span>
                        <span className="bg-white px-2 py-1 rounded">📚 {level.hours}</span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="font-medium text-sm text-gray-700">What you'll learn:</div>
                        {level.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>

                      {level.milestone && (
                        <div className={`${level.milestone.color} text-white rounded-xl p-4 mt-4`}>
                          <div className="text-2xl mb-2">{level.milestone.title}</div>
                          <div className="text-sm opacity-90">{level.milestone.description}</div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="border-2 border-red-600 bg-gradient-to-r from-red-50 to-orange-50 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-muted-foreground mb-6">
                Take our free placement test to find your starting level and get a personalized learning plan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Take Placement Test
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 px-8 py-3 rounded-lg font-medium transition-colors">
                  View Sample Lessons
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

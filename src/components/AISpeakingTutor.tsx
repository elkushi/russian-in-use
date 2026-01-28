import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Button } from "./ui/button-simple";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs-simple";
import { Progress } from "./ui/progress-simple";
import { 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  RotateCcw,
  Volume2,
  CheckCircle,
  AlertCircle,
  Star,
  Target,
  Brain,
  Zap,
  TrendingUp,
  Award,
  MessageCircle,
  Clock,
  BarChart3
} from "./ui/icons-simple";

export function AISpeakingTutor() {
  const [isRecording, setIsRecording] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [conversationStep, setConversationStep] = useState(0);

  const conversationScenarios = [
    {
      title: "Ordering Coffee",
      level: "A2",
      duration: "5-8 min",
      category: "Daily Life",
      color: "green",
      difficulty: 2,
      situation: "You're at a popular coffee shop in Moscow during lunch hour",
      goal: "Order a coffee and pastry, ask about prices, and handle payment",
      vocabulary: ["кофе", "латте", "пирожное", "сколько стоит", "карточкой"],
      steps: [
        {
          speaker: "Barista",
          text: "Добро пожаловать! Что будете заказывать?",
          translation: "Welcome! What would you like to order?",
          expectedResponse: "Express greeting and state what you want to order",
          hints: ["Start with 'Здравствуйте'", "Use 'Я хочу...' or 'Можно...'"]
        },
        {
          speaker: "You",
          text: "Expected: Здравствуйте! Можно латте и пирожное?",
          translation: "Hello! Can I have a latte and a pastry?",
          expectedResponse: "Barista will confirm and ask about size",
          hints: []
        },
        {
          speaker: "Barista", 
          text: "Конечно! Какой размер латте - маленький или большой?",
          translation: "Of course! What size latte - small or large?",
          expectedResponse: "Choose size and ask about price",
          hints: ["Use 'маленький' or 'большой'", "Ask 'Сколько это стоит?'"]
        }
      ]
    },
    {
      title: "Job Interview",
      level: "B2",
      duration: "12-15 min", 
      category: "Professional",
      color: "blue",
      difficulty: 4,
      situation: "Interview for a part-time position at a delivery company",
      goal: "Introduce yourself, discuss experience, ask about working conditions",
      vocabulary: ["опыт работы", "график", "зарплата", "обязанности", "команда"],
      steps: [
        {
          speaker: "Interviewer",
          text: "Добрый день! Расскажите немного о себе.",
          translation: "Good afternoon! Tell me a bit about yourself.",
          expectedResponse: "Introduce yourself professionally with relevant background",
          hints: ["Mention name, age, background", "Talk about relevant experience"]
        }
      ]
    },
    {
      title: "University Enrollment",
      level: "B2-C1",
      duration: "15-20 min",
      category: "Academic",
      color: "purple",
      difficulty: 5,
      situation: "Meeting with university admissions office about enrollment",
      goal: "Discuss program requirements, submit documents, ask about deadlines",
      vocabulary: ["поступление", "документы", "специальность", "семестр", "стипендия"],
      steps: [
        {
          speaker: "Administrator",
          text: "Здравствуйте! Вы хотите поступить в наш университет?",
          translation: "Hello! Do you want to enroll in our university?",
          expectedResponse: "Confirm interest and specify program",
          hints: ["Be specific about your intended major", "Show enthusiasm"]
        }
      ]
    }
  ];

  const practiceTypes = [
    {
      type: "Pronunciation Drills",
      icon: Volume2,
      description: "Practice difficult Russian sounds with AI feedback",
      features: ["ы, ж, щ sound training", "Stress pattern correction", "Intonation analysis"],
      difficulty: "All Levels"
    },
    {
      type: "Grammar Conversations",
      icon: Brain,
      description: "Practice cases and verb aspects in context",
      features: ["Case usage in sentences", "Perfective/imperfective verbs", "Real-time corrections"],
      difficulty: "A2+"
    },
    {
      type: "Vocabulary Building",
      icon: Target,
      description: "Learn new words through natural conversation",
      features: ["Context-based learning", "Synonym suggestions", "Usage examples"],
      difficulty: "All Levels"
    },
    {
      type: "Fluency Training",
      icon: Zap,
      description: "Build confidence and natural speech patterns",
      features: ["Conversation flow", "Natural responses", "Confidence building"],
      difficulty: "B1+"
    }
  ];

  const feedbackCategories = [
    {
      category: "Pronunciation",
      score: 87,
      feedback: "Great progress on soft consonants! Work on 'ы' sound.",
      color: "green"
    },
    {
      category: "Grammar",
      score: 92,
      feedback: "Excellent case usage. Minor issue with verb aspects.",
      color: "blue"
    },
    {
      category: "Vocabulary",
      score: 78,
      feedback: "Good range! Try using more advanced synonyms.",
      color: "purple"
    },
    {
      category: "Fluency",
      score: 85,
      feedback: "Natural rhythm. Reduce hesitation pauses.",
      color: "orange"
    }
  ];

  const currentScenarioData = conversationScenarios[currentScenario];
  const currentStep = currentScenarioData.steps[conversationStep];

  return (
    <section id="ai-tutor" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Learning
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Speaking Tutor 🤖
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Practice real conversations with our advanced AI tutor. Get instant feedback on pronunciation, 
            grammar, and vocabulary to sound natural and confident in any situation.
          </p>
          
          {/* AI Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm">Real-time Feedback</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <Star className="w-5 h-5 text-blue-600" />
              <span className="text-sm">Personalized Learning</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="text-sm">Progress Tracking</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="practice" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="practice">Live Practice</TabsTrigger>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
            <TabsTrigger value="drills">Skill Drills</TabsTrigger>
            <TabsTrigger value="feedback">My Progress</TabsTrigger>
          </TabsList>

          {/* Live Practice */}
          <TabsContent value="practice">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Conversation Interface */}
              <div className="lg:col-span-2">
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <MessageCircle className="w-5 h-5 text-blue-600" />
                          {currentScenarioData.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {currentScenarioData.situation}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={currentScenarioData.color === 'green' ? 'bg-green-600 text-white' :
                                          currentScenarioData.color === 'blue' ? 'bg-blue-600 text-white' :
                                          'bg-purple-600 text-white'}>
                          {currentScenarioData.level}
                        </Badge>
                        <Badge variant="outline">{currentScenarioData.duration}</Badge>
                      </div>
                    </div>
                    
                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Conversation Progress</span>
                        <span>{Math.round((conversationStep / currentScenarioData.steps.length) * 100)}%</span>
                      </div>
                      <Progress value={(conversationStep / currentScenarioData.steps.length) * 100} className="h-2" />
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Current Conversation Step */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-medium text-blue-600">
                            {currentStep.speaker === "You" ? "👤" : "🇷🇺"}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-foreground">{currentStep.speaker}</span>
                            {currentStep.speaker !== "You" && (
                              <Button size="sm" variant="outline" className="h-6 px-2">
                                <Volume2 className="w-3 h-3" />
                              </Button>
                            )}
                          </div>
                          <p className="text-foreground mb-2">{currentStep.text}</p>
                          <p className="text-sm text-muted-foreground italic">{currentStep.translation}</p>
                          
                          {currentStep.hints.length > 0 && (
                            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded">
                              <p className="text-sm text-blue-800 font-medium mb-1">💡 Hints:</p>
                              <ul className="text-sm text-blue-700 space-y-1">
                                {currentStep.hints.map((hint, index) => (
                                  <li key={index}>• {hint}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Recording Interface */}
                    <div className="text-center">
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all ${
                        isRecording ? 'bg-red-100 scale-110' : 'bg-blue-100'
                      }`}>
                        <Button
                          size="lg"
                          className={`w-16 h-16 rounded-full ${
                            isRecording 
                              ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
                              : 'bg-blue-600 hover:bg-blue-700'
                          }`}
                          onClick={() => setIsRecording(!isRecording)}
                        >
                          {isRecording ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                        </Button>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {isRecording ? "🔴 Recording... Speak naturally" : "Press to start speaking"}
                      </p>
                      
                      <div className="flex justify-center gap-2">
                        <Button variant="outline" size="sm">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Try Again
                        </Button>
                        <Button 
                          size="sm" 
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => setConversationStep(Math.min(conversationStep + 1, currentScenarioData.steps.length - 1))}
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Instant Feedback */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Instant Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {feedbackCategories.map((feedback, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">{feedback.category}</span>
                            <span className="text-sm text-muted-foreground">{feedback.score}%</span>
                          </div>
                          <Progress value={feedback.score} className="h-2 mb-2" />
                          <p className="text-xs text-muted-foreground">{feedback.feedback}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Key Vocabulary */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Vocabulary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {currentScenarioData.vocabulary.map((word, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm font-medium">{word}</span>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                            <Volume2 className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Scenarios */}
          <TabsContent value="scenarios">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conversationScenarios.map((scenario, index) => (
                <Card 
                  key={index} 
                  className={`border-border hover:shadow-lg transition-shadow cursor-pointer ${
                    index === currentScenario ? 'ring-2 ring-blue-600' : ''
                  }`}
                  onClick={() => setCurrentScenario(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className={scenario.color === 'green' ? 'bg-green-600 text-white' :
                                        scenario.color === 'blue' ? 'bg-blue-600 text-white' :
                                        'bg-purple-600 text-white'}>
                        {scenario.level}
                      </Badge>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${
                              i < scenario.difficulty ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-foreground mb-2">{scenario.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{scenario.situation}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {scenario.duration}
                      </div>
                      <Badge variant="outline" className="text-xs">{scenario.category}</Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Goal:</strong> {scenario.goal}
                    </p>
                    
                    <Button 
                      size="sm" 
                      className={`w-full ${
                        index === currentScenario 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'bg-gray-600 hover:bg-gray-700'
                      }`}
                    >
                      {index === currentScenario ? 'Current Practice' : 'Start Practice'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Skill Drills */}
          <TabsContent value="drills">
            <div className="grid md:grid-cols-2 gap-6">
              {practiceTypes.map((practice, index) => {
                const IconComponent = practice.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-indigo-600" />
                        </div>
                        {practice.type}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{practice.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <Badge variant="outline" className="mb-3">{practice.difficulty}</Badge>
                        <ul className="space-y-2">
                          {practice.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                        <Play className="w-4 h-4 mr-2" />
                        Start Drill
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Progress Feedback */}
          <TabsContent value="feedback">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Overall Progress */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Speaking Progress Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {feedbackCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{category.category}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-foreground">{category.score}%</span>
                            <TrendingUp className="w-4 h-4 text-green-600" />
                          </div>
                        </div>
                        <Progress value={category.score} className="h-3 mb-2" />
                        <p className="text-sm text-muted-foreground">{category.feedback}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-600" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                       
                      </div>
                      <div>
                        <p className="font-medium text-yellow-800">Conversation Master</p>
                        <p className="text-sm text-yellow-700">Completed 10 full conversations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        🎯
                      </div>
                      <div>
                        <p className="font-medium text-blue-800">Pronunciation Pro</p>
                        <p className="text-sm text-blue-700">90%+ accuracy for 5 sessions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        ⚡
                      </div>
                      <div>
                        <p className="font-medium text-green-800">Quick Learner</p>
                        <p className="text-sm text-green-700">7-day practice streak</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <Brain className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Sound Like a Native?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Start practicing with our AI tutor today. Get personalized feedback and build confidence 
            in real Russian conversations.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
            <Mic className="w-5 h-5 mr-2" />
            Start Speaking Practice
          </Button>
        </div>
      </div>
    </section>
  );
}
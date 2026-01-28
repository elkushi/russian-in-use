import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Button } from "./ui/button-simple";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs-simple";
import { Progress } from "./ui/progress-simple";
import { 
  FileText, 
  Clock, 
  CheckCircle,
  Play,
  Headphones,
  Mic,
  PenTool,
  Book,
  Target,
  Award,
  Calendar,
  MapPin,
  DollarSign,
  Star,
  TrendingUp,
  Download,
  BarChart3,
  AlertCircle,
  Lightbulb,
  Users,
  Globe
} from "./ui/icons-simple";

export function TORFLPreparation() {
  const [selectedLevel, setSelectedLevel] = useState("B1");
  const [currentSkill, setCurrentSkill] = useState("reading");

  const torflLevels = [
    {
      level: "A1",
      name: "Elementary Level",
      nameRu: "Элементарный уровень",
      description: "Basic survival Russian for tourists and beginners",
      duration: "2.5 hours",
      passingScore: 66,
      difficulty: 1,
      recognition: ["Tourist visa support", "Basic communication certificate"],
      testSections: {
        reading: { tasks: 3, time: 50, points: 275 },
        writing: { tasks: 2, time: 50, points: 275 },
        listening: { tasks: 3, time: 30, points: 275 },
        speaking: { tasks: 4, time: 25, points: 275 }
      }
    },
    {
      level: "A2",
      name: "Basic Level",
      nameRu: "Базовый уровень",
      description: "Pre-intermediate Russian for daily communication",
      duration: "2.75 hours",
      passingScore: 66,
      difficulty: 2,
      recognition: ["Work permit documentation", "Community college admission"],
      testSections: {
        reading: { tasks: 3, time: 50, points: 275 },
        writing: { tasks: 2, time: 50, points: 275 },
        listening: { tasks: 4, time: 35, points: 275 },
        speaking: { tasks: 4, time: 25, points: 275 }
      }
    },
    {
      level: "B1",
      name: "First Intermediate Level",
      nameRu: "Первый сертификационный уровень",
      description: "Threshold level for university admission and independent living",
      duration: "3 hours",
      passingScore: 66,
      difficulty: 3,
      recognition: ["University admission eligibility", "Work authorization", "Independent travel capability"],
      testSections: {
        reading: { tasks: 3, time: 50, points: 275 },
        writing: { tasks: 2, time: 60, points: 275 },
        listening: { tasks: 4, time: 35, points: 275 },
        speaking: { tasks: 4, time: 25, points: 275 }
      },
      milestone: true
    },
    {
      level: "B2",
      name: "Second Intermediate Level",
      nameRu: "Второй сертификационный уровень",
      description: "Advanced level for professional work and academic studies",
      duration: "3.25 hours",
      passingScore: 66,
      difficulty: 4,
      recognition: ["Full university program admission", "Professional employment", "Government positions"],
      testSections: {
        reading: { tasks: 3, time: 50, points: 275 },
        writing: { tasks: 2, time: 60, points: 275 },
        listening: { tasks: 4, time: 40, points: 275 },
        speaking: { tasks: 4, time: 25, points: 275 }
      }
    },
    {
      level: "C1",
      name: "Third Level",
      nameRu: "Третий сертификационный уровень",
      description: "Advanced proficiency for academic research and professional leadership",
      duration: "3.5 hours",
      passingScore: 66,
      difficulty: 5,
      recognition: ["Graduate program admission", "University teaching", "Translation work"],
      testSections: {
        reading: { tasks: 3, time: 60, points: 275 },
        writing: { tasks: 2, time: 60, points: 275 },
        listening: { tasks: 4, time: 40, points: 275 },
        speaking: { tasks: 4, time: 30, points: 275 }
      }
    }
  ];

  const skillSections = [
    {
      id: "reading",
      name: "Reading",
      nameRu: "Чтение",
      icon: Book,
      color: "blue",
      description: "Text comprehension and analysis"
    },
    {
      id: "writing",
      name: "Writing",
      nameRu: "Письмо",
      icon: PenTool,
      color: "green",
      description: "Written communication and grammar"
    },
    {
      id: "listening",
      name: "Listening",
      nameRu: "Аудирование",
      icon: Headphones,
      color: "purple",
      description: "Audio comprehension and understanding"
    },
    {
      id: "speaking",
      name: "Speaking",
      nameRu: "Говорение",
      icon: Mic,
      color: "orange",
      description: "Oral communication and pronunciation"
    }
  ];

  const examCenters = [
    {
      city: "Moscow",
      centers: [
        "Moscow State University",
        "Pushkin Institute",
        "Russian University of Friendship of Peoples"
      ],
      dates: ["Every month", "Weekend sessions available"],
      cost: "₽6,500-8,500"
    },
    {
      city: "St. Petersburg",
      centers: [
        "St. Petersburg State University",
        "Herzen University",
        "Polytechnic University"
      ],
      dates: ["Monthly sessions", "Online proctoring available"],
      cost: "₽6,000-8,000"
    },
    {
      city: "International",
      centers: [
        "Russian Cultural Centers worldwide",
        "Authorized testing centers",
        "Online supervised testing"
      ],
      dates: ["Quarterly sessions", "Special arrangements possible"],
      cost: "$150-250 USD"
    }
  ];

  const studyMaterials = [
    {
      category: "Official Materials",
      icon: FileText,
      materials: [
        "TORFL Test Models and Samples",
        "Official Vocabulary Lists",
        "Grammar Reference Guides",
        "Audio Practice Materials"
      ],
      price: "Free - ₽2,500"
    },
    {
      category: "Practice Tests",
      icon: Target,
      materials: [
        "Full-length practice exams",
        "Section-specific drills",
        "Timed simulation tests",
        "Score analysis tools"
      ],
      price: "₽1,500 - ₽5,000"
    },
    {
      category: "Prep Courses",
      icon: Users,
      materials: [
        "Intensive 4-week programs",
        "Weekend preparation classes",
        "Online tutoring sessions",
        "Group study programs"
      ],
      price: "₽15,000 - ₽45,000"
    }
  ];

  const currentLevel = torflLevels.find(level => level.level === selectedLevel);
  const currentSection = currentLevel?.testSections[currentSkill];

  const practiceQuestions = {
    reading: {
      B1: [
        {
          question: "Read the passage about Russian education system and answer: What percentage of Russian students pursue higher education?",
          options: ["65%", "78%", "82%", "91%"],
          correct: 2,
          explanation: "According to the text, 82% of Russian students continue to higher education."
        }
      ]
    },
    writing: {
      B1: [
        {
          task: "Write a formal letter (150-200 words) to a university admissions office inquiring about their Russian language program.",
          criteria: ["Formal tone", "Clear structure", "Appropriate vocabulary", "Correct grammar"],
          timeLimit: "30 minutes"
        }
      ]
    },
    listening: {
      B1: [
        {
          audio: "Conversation at a Moscow metro station",
          question: "Where does the tourist want to go?",
          options: ["Red Square", "Bolshoi Theatre", "Kremlin", "GUM Department Store"],
          correct: 0
        }
      ]
    },
    speaking: {
      B1: [
        {
          task: "Role-play: You're at a job interview. Introduce yourself and explain why you want to work in Russia.",
          preparation: "1 minute",
          speaking: "3 minutes",
          criteria: ["Fluency", "Pronunciation", "Vocabulary", "Grammar"]
        }
      ]
    }
  };

  const studyPlan = {
    B1: {
      weeks: 12,
      schedule: [
        { week: "1-2", focus: "Diagnostic testing and gap analysis", hours: "10-15/week" },
        { week: "3-4", focus: "Reading comprehension strategies", hours: "12-18/week" },
        { week: "5-6", focus: "Writing structure and grammar review", hours: "12-18/week" },
        { week: "7-8", focus: "Listening practice and note-taking", hours: "15-20/week" },
        { week: "9-10", focus: "Speaking fluency and pronunciation", hours: "15-20/week" },
        { week: "11-12", focus: "Full practice tests and review", hours: "20-25/week" }
      ]
    }
  };

  return (
    <section id="torfl-prep" className="py-20 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              Official Certification
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            TORFL Exam Preparation 📝
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Prepare for the Test of Russian as a Foreign Language (ТОРФЛ). Get officially certified 
            with the internationally recognized standard for Russian language proficiency.
          </p>
          
          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <Globe className="w-5 h-5 text-red-600" />
              <span className="text-sm">Internationally Recognized</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm">Government Standard</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm">University Accepted</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="practice">Practice Tests</TabsTrigger>
            <TabsTrigger value="study-plan">Study Plan</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="registration">Registration</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Level Selection */}
              <div className="lg:col-span-1">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Choose Your Target Level</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Select the TORFL level you want to achieve
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {torflLevels.map((level) => (
                        <div
                          key={level.level}
                          className={`p-3 border rounded-lg cursor-pointer transition-all ${
                            selectedLevel === level.level 
                              ? 'border-red-500 bg-red-50' 
                              : 'border-border hover:border-gray-300'
                          }`}
                          onClick={() => setSelectedLevel(level.level)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                level.level === selectedLevel ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                              }`}>
                                {level.level}
                              </span>
                              <span className="font-medium">{level.level}</span>
                            </div>
                            {level.milestone && <Badge className="bg-yellow-100 text-yellow-800 text-xs">Key Level</Badge>}
                          </div>
                          <div className="text-sm text-muted-foreground mb-1">{level.name}</div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-3 h-3 ${
                                  i < level.difficulty ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Level Details */}
              <div className="lg:col-span-2">
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-red-600" />
                          TORFL {currentLevel?.level} - {currentLevel?.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{currentLevel?.nameRu}</p>
                      </div>
                      <Badge className="bg-red-600 text-white">{currentLevel?.level}</Badge>
                    </div>
                    <p className="text-muted-foreground">{currentLevel?.description}</p>
                  </CardHeader>
                  <CardContent>
                    {/* Exam Structure */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Exam Structure</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="font-medium">{currentLevel?.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Passing Score:</span>
                            <span className="font-medium">{currentLevel?.passingScore}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Points:</span>
                            <span className="font-medium">1,100 points</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sections:</span>
                            <span className="font-medium">4 skills tested</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Recognition & Usage</h4>
                        <ul className="space-y-1">
                          {currentLevel?.recognition.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Test Sections */}
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Test Sections Breakdown</h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        {skillSections.map((skill) => {
                          const IconComponent = skill.icon;
                          const sectionData = currentLevel?.testSections[skill.id];
                          
                          const getSkillStyles = (skillId: string, isSelected: boolean) => {
                            if (skillId === 'reading') {
                              return {
                                container: isSelected ? 'border-blue-500 bg-blue-50' : 'border-border hover:border-gray-300',
                                icon: 'w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-2',
                                iconColor: 'w-4 h-4 text-blue-600'
                              };
                            } else if (skillId === 'writing') {
                              return {
                                container: isSelected ? 'border-green-500 bg-green-50' : 'border-border hover:border-gray-300',
                                icon: 'w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-2',
                                iconColor: 'w-4 h-4 text-green-600'
                              };
                            } else if (skillId === 'listening') {
                              return {
                                container: isSelected ? 'border-purple-500 bg-purple-50' : 'border-border hover:border-gray-300',
                                icon: 'w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-2',
                                iconColor: 'w-4 h-4 text-purple-600'
                              };
                            } else {
                              return {
                                container: isSelected ? 'border-orange-500 bg-orange-50' : 'border-border hover:border-gray-300',
                                icon: 'w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-2',
                                iconColor: 'w-4 h-4 text-orange-600'
                              };
                            }
                          };

                          const styles = getSkillStyles(skill.id, currentSkill === skill.id);
                          
                          return (
                            <div 
                              key={skill.id}
                              className={`p-3 border rounded-lg cursor-pointer transition-all ${styles.container}`}
                              onClick={() => setCurrentSkill(skill.id)}
                            >
                              <div className={styles.icon}>
                                <IconComponent className={styles.iconColor} />
                              </div>
                              <div className="text-sm font-medium text-foreground">{skill.name}</div>
                              <div className="text-xs text-muted-foreground mb-2">{skill.nameRu}</div>
                              <div className="text-xs text-muted-foreground">
                                <div>{sectionData?.tasks} tasks • {sectionData?.time} min</div>
                                <div>{sectionData?.points} points</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Practice Tests */}
          <TabsContent value="practice">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Practice Navigation */}
              <div className="lg:col-span-1">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Practice by Section</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Choose a skill to practice for {selectedLevel}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillSections.map((skill) => {
                        const IconComponent = skill.icon;
                        return (
                          <div
                            key={skill.id}
                            className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                              currentSkill === skill.id 
                                ? (skill.id === 'reading' ? 'border-blue-500 bg-blue-50' :
                                   skill.id === 'writing' ? 'border-green-500 bg-green-50' :
                                   skill.id === 'listening' ? 'border-purple-500 bg-purple-50' :
                                   'border-orange-500 bg-orange-50')
                                : 'border-border hover:border-gray-300'
                            }`}
                            onClick={() => setCurrentSkill(skill.id)}
                          >
                            <div className={skill.id === 'reading' ? 'w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center' :
                                            skill.id === 'writing' ? 'w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center' :
                                            skill.id === 'listening' ? 'w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center' :
                                            'w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center'}>
                              <IconComponent className={skill.id === 'reading' ? 'w-4 h-4 text-blue-600' :
                                                       skill.id === 'writing' ? 'w-4 h-4 text-green-600' :
                                                       skill.id === 'listening' ? 'w-4 h-4 text-purple-600' :
                                                       'w-4 h-4 text-orange-600'} />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">{skill.name}</div>
                              <div className="text-xs text-muted-foreground">{skill.description}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Practice Content */}
              <div className="lg:col-span-2">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className={`w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center`}>
                        <FileText className="w-4 h-4 text-red-600" />
                      </div>
                      {skillSections.find(s => s.id === currentSkill)?.name} Practice - {selectedLevel}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Section: {currentSection?.tasks} tasks • {currentSection?.time} minutes • {currentSection?.points} points
                    </p>
                  </CardHeader>
                  <CardContent>
                    {/* Sample Question/Task */}
                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-3">Sample {skillSections.find(s => s.id === currentSkill)?.name} Task</h4>
                      
                      {currentSkill === 'reading' && (
                        <div className="border border-border rounded-lg p-4 bg-blue-50">
                          <p className="text-sm font-medium text-blue-800 mb-2">Reading Comprehension</p>
                          <p className="text-sm text-blue-700 mb-3">
                            Read the passage about Russian education system and answer: What percentage of Russian students pursue higher education?
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {["65%", "78%", "82%", "91%"].map((option, index) => (
                              <Button key={index} variant="outline" size="sm" className="justify-start">
                                {String.fromCharCode(65 + index)}. {option}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}

                      {currentSkill === 'writing' && (
                        <div className="border border-border rounded-lg p-4 bg-green-50">
                          <p className="text-sm font-medium text-green-800 mb-2">Formal Letter Writing</p>
                          <p className="text-sm text-green-700 mb-3">
                            Write a formal letter (150-200 words) to a university admissions office inquiring about their Russian language program.
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>Criteria: Formal tone, Clear structure</div>
                            <div>Time limit: 30 minutes</div>
                          </div>
                        </div>
                      )}

                      {currentSkill === 'listening' && (
                        <div className="border border-border rounded-lg p-4 bg-purple-50">
                          <p className="text-sm font-medium text-purple-800 mb-2">Audio Comprehension</p>
                          <div className="flex items-center gap-2 mb-3">
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                              <Play className="w-4 h-4 mr-1" />
                              Play Audio
                            </Button>
                            <span className="text-sm text-purple-700">Metro station conversation</span>
                          </div>
                          <p className="text-sm text-purple-700 mb-2">Where does the tourist want to go?</p>
                          <div className="grid grid-cols-2 gap-2">
                            {["Red Square", "Bolshoi Theatre", "Kremlin", "GUM Store"].map((option, index) => (
                              <Button key={index} variant="outline" size="sm" className="justify-start">
                                {String.fromCharCode(65 + index)}. {option}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}

                      {currentSkill === 'speaking' && (
                        <div className="border border-border rounded-lg p-4 bg-orange-50">
                          <p className="text-sm font-medium text-orange-800 mb-2">Role-play Speaking Task</p>
                          <p className="text-sm text-orange-700 mb-3">
                            You're at a job interview. Introduce yourself and explain why you want to work in Russia.
                          </p>
                          <div className="flex items-center gap-4 text-xs text-orange-700">
                            <div>Preparation: 1 minute</div>
                            <div>Speaking: 3 minutes</div>
                          </div>
                          <Button size="sm" className="bg-orange-600 hover:bg-orange-700 mt-3">
                            <Mic className="w-4 h-4 mr-1" />
                            Start Recording
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Practice Options */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Play className="w-4 h-4 mr-2" />
                        Full Practice Test
                      </Button>
                      <Button variant="outline">
                        <Target className="w-4 h-4 mr-2" />
                        Skill Drills
                      </Button>
                      <Button variant="outline">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Progress Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Study Plan */}
          <TabsContent value="study-plan">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  12-Week TORFL {selectedLevel} Study Plan
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Structured preparation program designed to help you pass the exam with confidence
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {studyPlan[selectedLevel]?.schedule.map((phase, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-blue-600">W{phase.week}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{phase.focus}</h4>
                        <p className="text-sm text-muted-foreground">Study commitment: {phase.hours}</p>
                      </div>
                      <Badge variant="outline">{phase.week}</Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  <Card className="border-border">
                    <CardContent className="p-4 text-center">
                      <Clock className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <div className="text-lg font-bold text-foreground">12 weeks</div>
                      <div className="text-sm text-muted-foreground">Total duration</div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardContent className="p-4 text-center">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      <div className="text-lg font-bold text-foreground">180+ hours</div>
                      <div className="text-sm text-muted-foreground">Study time</div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardContent className="p-4 text-center">
                      <Target className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <div className="text-lg font-bold text-foreground">85%+</div>
                      <div className="text-sm text-muted-foreground">Success rate</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Materials */}
          <TabsContent value="materials">
            <div className="grid md:grid-cols-3 gap-6">
              {studyMaterials.map((material, index) => {
                const IconComponent = material.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-red-600" />
                        </div>
                        {material.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {material.materials.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">{material.price}</Badge>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          <Download className="w-4 h-4 mr-2" />
                          Access
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Registration */}
          <TabsContent value="registration">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Exam Centers & Dates
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Find a testing center near you
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {examCenters.map((center, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <h4 className="font-medium text-foreground mb-2">{center.city}</h4>
                        <div className="mb-3">
                          <p className="text-sm text-muted-foreground mb-1">Testing Centers:</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {center.centers.map((c, ci) => (
                              <li key={ci}>• {c}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div>
                            <p className="font-medium text-foreground">Schedule:</p>
                            {center.dates.map((date, di) => (
                              <p key={di} className="text-muted-foreground">{date}</p>
                            ))}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Cost:</p>
                            <p className="text-muted-foreground">{center.cost}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    Registration Process
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Steps to register for TORFL exam
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { step: 1, title: "Choose Level & Center", desc: "Select your target level and preferred testing location" },
                      { step: 2, title: "Complete Application", desc: "Fill out registration form with personal details" },
                      { step: 3, title: "Submit Documents", desc: "Provide passport copy and photo" },
                      { step: 4, title: "Pay Exam Fee", desc: "Complete payment via bank transfer or online" },
                      { step: 5, title: "Receive Confirmation", desc: "Get exam date, time, and location details" },
                      { step: 6, title: "Take the Exam", desc: "Arrive early with required documents" }
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-yellow-800">Important Note</p>
                        <p className="text-xs text-yellow-700">Register at least 1 month before your preferred exam date. Popular centers fill up quickly.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <Award className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Officially Certified?
          </h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Start your TORFL preparation today with our comprehensive study materials, practice tests, 
            and expert guidance. Achieve the certification you need for your goals in Russia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8">
              <Play className="w-5 h-5 mr-2" />
              Start Practice Tests
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
              <Calendar className="w-5 h-5 mr-2" />
              Find Exam Dates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
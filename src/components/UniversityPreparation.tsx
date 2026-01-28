import { Card, CardContent, CardHeader, CardTitle } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Button } from "./ui/button-simple";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs-simple";
import { Progress } from "./ui/progress-simple";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  FileText, 
  Clock, 
  CheckCircle,
  Download,
  Video,
  Headphones,
  Award,
  Building,
  Calendar,
  Star,
  Target,
  Globe,
  Briefcase
} from "./ui/icons-simple";

export function UniversityPreparation() {
  const preparationSteps = [
    {
      title: "Language Proficiency Assessment",
      description: "Achieve required B2-C1 level for academic studies",
      duration: "2-4 months",
      requirements: [
        "TORFL/ТРКИ certificate (Test of Russian as Foreign Language)",
        "Academic writing skills",
        "Lecture comprehension",
        "Scientific presentation abilities"
      ],
      progress: 90,
      color: "blue"
    },
    {
      title: "Academic Documentation",
      description: "Prepare and translate all required documents",
      duration: "1-2 months",
      requirements: [
        "Diploma translation and notarization",
        "Academic transcript preparation",
        "Medical certificate",
        "Visa and migration documents"
      ],
      progress: 75,
      color: "green"
    },
    {
      title: "Cultural Academic Integration",
      description: "Understand Russian academic culture and expectations",
      duration: "Ongoing",
      requirements: [
        "University hierarchy and protocols",
        "Academic writing style",
        "Group work dynamics", 
        "Examination procedures"
      ],
      progress: 60,
      color: "purple"
    }
  ];

  const academicSkills = [
    {
      skill: "Academic Writing",
      icon: FileText,
      description: "Master formal Russian academic writing style",
      topics: [
        "Dissertation structure (Структура диссертации)",
        "Scientific terminology (Научная терминология)", 
        "Citation methods (Методы цитирования)",
        "Research methodology (Методология исследования)"
      ]
    },
    {
      skill: "Lecture Comprehension",
      icon: Headphones,
      description: "Understand complex academic lectures",
      topics: [
        "Note-taking techniques (Техника конспектирования)",
        "Scientific vocabulary (Научная лексика)",
        "Mathematical expressions (Математические выражения)",
        "Technical terminology (Техническая терминология)"
      ]
    },
    {
      skill: "Oral Presentations",
      icon: Video,
      description: "Present research confidently in Russian",
      topics: [
        "Presentation structure (Структура презентации)",
        "Visual aids usage (Использование наглядных пособий)",
        "Q&A sessions (Вопросы и ответы)",
        "Defense preparation (Подготовка к защите)"
      ]
    },
    {
      skill: "Research Methods",
      icon: BookOpen,
      description: "Conduct academic research in Russian",
      topics: [
        "Library systems (Библиотечные системы)",
        "Database navigation (Навигация по базам данных)",
        "Source evaluation (Оценка источников)",
        "Academic ethics (Академическая этика)"
      ]
    }
  ];

  const universityTypes = [
    {
      type: "Classical Universities",
      examples: ["МГУ (Moscow State University)", "СПбГУ (St. Petersburg State)", "НГУ (Novosibirsk State)"],
      focus: "Broad academic education, research focus",
      admissionTips: "Strong emphasis on academic writing and theoretical knowledge"
    },
    {
      type: "Technical Universities", 
      examples: ["МГТУ им. Баумана", "МФТИ", "СПбПУ"],
      focus: "Engineering, technology, applied sciences",
      admissionTips: "Mathematical proficiency and technical vocabulary essential"
    },
    {
      type: "Economic Universities",
      examples: ["РЭУ им. Плеханова", "НИУ ВШЭ", "Финуниверситет"],
      focus: "Business, economics, management",
      admissionTips: "Understanding of Russian business culture and economic terminology"
    },
    {
      type: "Medical Universities",
      examples: ["1-й МГМУ им. Сеченова", "СПбГМУ", "РУДН"],
      focus: "Medicine, healthcare, biological sciences",
      admissionTips: "Extensive medical vocabulary and precision in scientific language"
    }
  ];

  const studyResources = [
    {
      category: "Academic Russian Textbooks",
      icon: BookOpen,
      resources: [
        "Научный стиль речи - Academic Style Guide",
        "Русский язык в техническом вузе - Technical Russian",
        "Деловая переписка - Business Correspondence",
        "Язык специальности - Professional Language"
      ]
    },
    {
      category: "Digital Learning Tools",
      icon: Globe,
      resources: [
        "Academic video lectures from top universities",
        "Interactive grammar exercises for scientific texts",
        "Vocabulary builders for specific fields",
        "Pronunciation guides for academic presentations"
      ]
    },
    {
      category: "Practice Materials",
      icon: Target,
      resources: [
        "Sample dissertation abstracts",
        "Mock conference presentations",
        "Academic writing templates",
        "TORFL practice tests"
      ]
    }
  ];

  return (
    <section id="university" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2">
              <GraduationCap className="w-4 h-4 mr-2" />
              Academic Excellence Program
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            University Preparation for Russia 🎓
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive preparation for academic success in Russian universities. 
            From language proficiency to cultural integration, we ensure you're ready to excel.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm">TORFL Certified Preparation</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <Building className="w-5 h-5 text-blue-600" />
              <span className="text-sm">Partner Universities</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <Star className="w-5 h-5 text-blue-600" />
              <span className="text-sm">95% Success Rate</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="preparation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="preparation">Preparation Steps</TabsTrigger>
            <TabsTrigger value="skills">Academic Skills</TabsTrigger>
            <TabsTrigger value="universities">Universities</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Preparation Steps */}
          <TabsContent value="preparation">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {preparationSteps.map((step, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={step.color === 'blue' ? 'bg-blue-600 text-white' :
                                        step.color === 'green' ? 'bg-green-600 text-white' :
                                        step.color === 'purple' ? 'bg-purple-600 text-white' :
                                        'bg-orange-600 text-white'}>
                        Step {index + 1}
                      </Badge>
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{step.progress}%</span>
                      </div>
                      <Progress value={step.progress} className="h-2" />
                    </div>
                    <ul className="space-y-2">
                      {step.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Academic Skills */}
          <TabsContent value="skills">
            <div className="grid md:grid-cols-2 gap-6">
              {academicSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        {skill.skill}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {skill.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <Button size="sm" variant="outline" className="w-full mt-4">
                        Start Learning
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Universities */}
          <TabsContent value="universities">
            <div className="grid md:grid-cols-2 gap-6">
              {universityTypes.map((uni, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-3">{uni.type}</h3>
                    <div className="mb-4">
                      <h4 className="font-medium text-sm text-foreground mb-2">Top Examples:</h4>
                      <ul className="space-y-1">
                        {uni.examples.map((example, exIndex) => (
                          <li key={exIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <Building className="w-3 h-3" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium text-sm text-foreground mb-1">Focus Areas:</h4>
                      <p className="text-sm text-muted-foreground">{uni.focus}</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <h4 className="font-medium text-sm text-blue-800 mb-1">Admission Tips:</h4>
                      <p className="text-sm text-blue-700">{uni.admissionTips}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Resources */}
          <TabsContent value="resources">
            <div className="grid md:grid-cols-3 gap-6">
              {studyResources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-indigo-600" />
                        </div>
                        {resource.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {resource.resources.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <Download className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button size="sm" className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700">
                        Access Resources
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Success Stories CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <Calendar className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Academic Journey?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of international students who successfully entered Russian universities 
            with our comprehensive preparation program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              <Users className="w-5 h-5 mr-2" />
              Join Study Group
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
              <Clock className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Button } from "./ui/button-simple";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs-simple";
import { 
  Coffee, 
  Truck, 
  ShoppingBag, 
  Users, 
  Clock, 
  DollarSign,
  MapPin,
  Phone,
  CheckCircle,
  Star,
  AlertCircle,
  Briefcase,
  Calculator,
  FileText,
  Globe,
  Target,
  Zap
} from "./ui/icons-simple";

export function QuickJobs() {
  const quickJobs = [
    {
      category: "Food Delivery",
      icon: Truck,
      avgSalary: "40,000-80,000 ₽/month",
      timeToStart: "1-3 days",
      russianLevel: "A1-A2",
      color: "green",
      jobs: [
        { name: "Яндекс.Еда", requirements: ["Phone", "Bicycle/Car"], pay: "300-500 ₽/hour" },
        { name: "Delivery Club", requirements: ["Phone", "Transport"], pay: "350-450 ₽/hour" },
        { name: "SberMarket", requirements: ["Phone", "Walking"], pay: "250-400 ₽/hour" }
      ],
      essentialPhrases: [
        "Ваш заказ готов (Your order is ready)",
        "Я курьер (I'm a courier)", 
        "Где касса? (Where's the cashier?)",
        "Спасибо за заказ (Thank you for the order)"
      ]
    },
    {
      category: "Coffee Shops & Cafes",
      icon: Coffee,
      avgSalary: "35,000-60,000 ₽/month",
      timeToStart: "3-7 days",
      russianLevel: "A2-B1",
      color: "brown",
      jobs: [
        { name: "Coffee Bean", requirements: ["Basic Russian", "Friendly attitude"], pay: "200-300 ₽/hour" },
        { name: "Starbucks", requirements: ["Customer service", "English helpful"], pay: "250-350 ₽/hour" },
        { name: "Local Cafes", requirements: ["Flexibility", "Quick learning"], pay: "180-280 ₽/hour" }
      ],
      essentialPhrases: [
        "Что будете заказывать? (What would you like to order?)",
        "С собой или здесь? (To go or here?)",
        "Это будет всё? (Will that be all?)",
        "Приятного аппетита! (Enjoy your meal!)"
      ]
    },
    {
      category: "Retail & Sales",
      icon: ShoppingBag,
      avgSalary: "40,000-70,000 ₽/month",
      timeToStart: "5-10 days",
      russianLevel: "B1-B2",
      color: "blue",
      jobs: [
        { name: "Clothing stores", requirements: ["Fashion sense", "People skills"], pay: "200-400 ₽/hour" },
        { name: "Electronics", requirements: ["Product knowledge", "Tech interest"], pay: "250-450 ₽/hour" },
        { name: "Supermarkets", requirements: ["Physical stamina", "Reliability"], pay: "180-300 ₽/hour" }
      ],
      essentialPhrases: [
        "Чем могу помочь? (How can I help?)",
        "Какой размер? (What size?)",
        "У нас есть скидка (We have a discount)",
        "Касса там (The cashier is there)"
      ]
    },
    {
      category: "Tutoring & Language Exchange",
      icon: Users,
      avgSalary: "50,000-120,000 ₽/month",
      timeToStart: "7-14 days",
      russianLevel: "B2+",
      color: "purple",
      jobs: [
        { name: "English tutoring", requirements: ["Native/fluent English", "Teaching skills"], pay: "1,000-3,000 ₽/hour" },
        { name: "Language exchange", requirements: ["Conversation skills", "Cultural knowledge"], pay: "800-1,500 ₽/hour" },
        { name: "Online lessons", requirements: ["Good internet", "Platform familiarity"], pay: "1,200-2,500 ₽/hour" }
      ],
      essentialPhrases: [
        "Давайте начнём урок (Let's start the lesson)",
        "Повторите, пожалуйста (Please repeat)",
        "Очень хорошо! (Very good!)",
        "До свидания, увидимся в следующий раз (Goodbye, see you next time)"
      ]
    }
  ];

  const jobSearchSteps = [
    {
      step: 1,
      title: "Document Preparation",
      duration: "1-2 days",
      tasks: [
        "Prepare Russian CV (резюме)",
        "Translate necessary documents",
        "Get work permit/visa check",
        "Prepare reference contacts"
      ],
      tips: "Keep documents in both Russian and English"
    },
    {
      step: 2, 
      title: "Application Strategy",
      duration: "2-3 days",
      tasks: [
        "Create profiles on job sites",
        "Apply to multiple positions daily",
        "Network through social media",
        "Visit businesses in person"
      ],
      tips: "Apply early in the morning for better response rates"
    },
    {
      step: 3,
      title: "Interview Preparation",
      duration: "1-2 days",
      tasks: [
        "Practice common interview questions",
        "Learn job-specific vocabulary",
        "Prepare questions about the role",
        "Plan your route to interviews"
      ],
      tips: "Arrive 10-15 minutes early to show reliability"
    },
    {
      step: 4,
      title: "Quick Start",
      duration: "Same day",
      tasks: [
        "Complete necessary paperwork",
        "Understand payment schedule",
        "Learn workplace procedures",
        "Meet your team/colleagues"
      ],
      tips: "Ask questions and show enthusiasm to learn"
    }
  ];

  const jobPlatforms = [
    {
      platform: "HeadHunter (hh.ru)",
      focus: "General employment",
      pros: ["Largest job site", "English interface", "Mobile app"],
      bestFor: "All skill levels and job types"
    },
    {
      platform: "SuperJob (superjob.ru)",
      focus: "Professional positions",
      pros: ["Detailed filtering", "Salary transparency", "Company reviews"],
      bestFor: "Mid-level to professional roles"
    },
    {
      platform: "Avito Jobs",
      focus: "Local and gig work",
      pros: ["Quick applications", "Local focus", "Part-time options"],
      bestFor: "Quick start positions and flexible work"
    },
    {
      platform: "Telegram Channels",
      focus: "Immediate opportunities",
      pros: ["Real-time updates", "Direct contact", "Community support"],
      bestFor: "Urgent job searches and networking"
    }
  ];

  const survivalTips = [
    {
      category: "Financial Planning",
      icon: Calculator,
      tips: [
        "Budget for first month expenses (30,000-50,000 ₽)",
        "Set aside money for transport cards",
        "Keep emergency cash for unexpected costs",
        "Understand tax obligations for foreign workers"
      ]
    },
    {
      category: "Legal Requirements", 
      icon: FileText,
      tips: [
        "Register your address within 7 days",
        "Understand work permit requirements",
        "Know your rights as a foreign worker",
        "Keep all employment documents organized"
      ]
    },
    {
      category: "Cultural Workplace Tips",
      icon: Users,
      tips: [
        "Russians value punctuality and reliability",
        "Learn workplace hierarchy and formality levels",
        "Understand Russian holiday schedule",
        "Be prepared for direct communication style"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return { bg: "bg-green-100", text: "text-green-600", button: "bg-green-600 hover:bg-green-700" };
      case "brown":
        return { bg: "bg-orange-100", text: "text-orange-600", button: "bg-orange-600 hover:bg-orange-700" };
      case "blue":
        return { bg: "bg-blue-100", text: "text-blue-600", button: "bg-blue-600 hover:bg-blue-700" };
      case "purple":
        return { bg: "bg-purple-100", text: "text-purple-600", button: "bg-purple-600 hover:bg-purple-700" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-600", button: "bg-gray-600 hover:bg-gray-700" };
    }
  };

  return (
    <section id="quick-jobs" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Quick Employment Guide
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Work Fast in Russia 💼
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start earning money within days while improving your Russian. Our guide covers the quickest 
            employment opportunities, essential phrases, and practical tips for new arrivals.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <Clock className="w-5 h-5 text-green-600" />
              <span className="text-sm">Start in 1-7 days</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="text-sm">35,000-120,000 ₽/month</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <Globe className="w-5 h-5 text-green-600" />
              <span className="text-sm">A1+ Russian level</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="jobs">Quick Jobs</TabsTrigger>
            <TabsTrigger value="process">Job Search</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="survival">Survival Tips</TabsTrigger>
          </TabsList>

          {/* Quick Jobs */}
          <TabsContent value="jobs">
            <div className="grid lg:grid-cols-2 gap-8">
              {quickJobs.map((job, index) => {
                const IconComponent = job.icon;
                const colors = getColorClasses(job.color);
                
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                          <IconComponent className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{job.category}</CardTitle>
                          <p className="text-sm text-muted-foreground">{job.avgSalary}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mb-4">
                        <Badge variant="outline">Start: {job.timeToStart}</Badge>
                        <Badge variant="outline">Level: {job.russianLevel}</Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-medium text-sm text-foreground mb-3">Available Positions:</h4>
                        <div className="space-y-3">
                          {job.jobs.map((position, posIndex) => (
                            <div key={posIndex} className="bg-gray-50 rounded-lg p-3">
                              <div className="flex justify-between items-start mb-2">
                                <span className="font-medium text-sm">{position.name}</span>
                                <Badge className={colors.button}>{position.pay}</Badge>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {position.requirements.map((req, reqIndex) => (
                                  <Badge key={reqIndex} variant="outline" className="text-xs">
                                    {req}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-medium text-sm text-foreground mb-3">Essential Phrases:</h4>
                        <div className="space-y-2">
                          {job.essentialPhrases.map((phrase, phraseIndex) => (
                            <div key={phraseIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{phrase}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className={`w-full ${colors.button}`}>
                        <Target className="w-4 h-4 mr-2" />
                        Start Applications
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Job Search Process */}
          <TabsContent value="process">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {jobSearchSteps.map((step, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-blue-700">{step.tips}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Job Platforms */}
          <TabsContent value="platforms">
            <div className="grid md:grid-cols-2 gap-6">
              {jobPlatforms.map((platform, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-2">{platform.platform}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{platform.focus}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-sm text-foreground mb-2">Advantages:</h4>
                      <ul className="space-y-1">
                        {platform.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-center gap-2">
                            <Star className="w-3 h-3 text-yellow-500" />
                            <span className="text-sm text-muted-foreground">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                      <p className="text-sm text-green-800">
                        <strong>Best for:</strong> {platform.bestFor}
                      </p>
                    </div>
                    
                    <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700">
                      <Globe className="w-4 h-4 mr-2" />
                      Visit Platform
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Survival Tips */}
          <TabsContent value="survival">
            <div className="grid md:grid-cols-3 gap-6">
              {survivalTips.map((tip, index) => {
                const IconComponent = tip.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-orange-600" />
                        </div>
                        {tip.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {tip.tips.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <Briefcase className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Working?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Combine our job search guidance with Russian language lessons to maximize your 
            employment opportunities and career growth potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8">
              <Phone className="w-5 h-5 mr-2" />
              Get Job Search Support
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
              <MapPin className="w-5 h-5 mr-2" />
              Find Local Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
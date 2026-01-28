import { Card, CardContent } from "./ui/card-simple";
import { Button } from "./ui/button-simple";
import { Badge } from "./ui/badge-simple";
import { Progress } from "./ui/progress-simple";
import { CheckCircle, FileText, Plane, Scale, Home, Briefcase } from "./ui/icons-simple";

export function PreArrivalProgram() {
  const modules = [
    {
      icon: FileText,
      title: "Legal Essentials",
      duration: "2 weeks",
      topics: [
        "Visa types and requirements",
        "Registration (постановка на учёт)",
        "Work permits and documentation",
        "Student visa regulations",
        "Migration law basics",
        "Your rights and obligations"
      ]
    },
    {
      icon: Home,
      title: "Housing & Settlement",
      duration: "1 week",
      topics: [
        "Finding accommodation",
        "Rental contracts in Russian",
        "Utilities and bills",
        "Neighborhood safety",
        "Public transportation",
        "Setting up utilities"
      ]
    },
    {
      icon: Scale,
      title: "Cultural Orientation",
      duration: "2 weeks",
      topics: [
        "Social etiquette and norms",
        "Workplace culture",
        "Healthcare system",
        "Banking and finances",
        "Emergency services",
        "Cultural dos and don'ts"
      ]
    },
    {
      icon: Briefcase,
      title: "Practical Skills",
      duration: "1 week",
      topics: [
        "Opening a bank account",
        "Getting a SIM card",
        "Using Russian apps (Yandex, etc.)",
        "Shopping essentials",
        "Medical registration",
        "Insurance requirements"
      ]
    }
  ];

  const certificationSteps = [
    {
      step: "1",
      title: "Complete Training",
      description: "Finish all 4 modules with passing scores"
    },
    {
      step: "2",
      title: "Pass Assessment",
      description: "Complete the pre-arrival knowledge test"
    },
    {
      step: "3",
      title: "Get Certified",
      description: "Receive official pre-arrival certificate"
    },
    {
      step: "4",
      title: "Arrive Prepared",
      description: "Start your Russian journey with confidence"
    }
  ];

  return (
    <section id="pre-arrival" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-indigo-600 text-white mb-4">✈️ Pre-Arrival Program</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Arrive in Russia Fully Prepared
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get certified with essential legal, cultural, and practical knowledge before you travel. 
            Know exactly what to expect and what to do from day one.
          </p>
        </div>

        {/* Certification Path */}
        <Card className="border-border shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Certification Path</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {certificationSteps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {index < certificationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-indigo-600 to-transparent" style={{ transform: 'translateX(-50%)' }}></div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Training Modules */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Training Modules</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <module.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg">{module.title}</h4>
                        <Badge className="bg-gray-200 text-gray-700">{module.duration}</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Progress value={0} className="h-2 mb-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Not started</span>
                      <span>0% complete</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Legal Requirements Highlight */}
        <Card className="border-border bg-gradient-to-r from-red-50 to-red-100 shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">⚠️</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-red-700">Critical Legal Requirements</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold mb-2">📋 Registration (7 days)</h4>
                    <p className="text-sm text-muted-foreground">
                      You must register your address within 7 working days of arrival. 
                      Learn exactly how to do this and avoid fines.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold mb-2">🏥 Medical Insurance</h4>
                    <p className="text-sm text-muted-foreground">
                      Required for visa. Understand what's covered, where to buy, 
                      and how to use Russian healthcare.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold mb-2">💼 Work Authorization</h4>
                    <p className="text-sm text-muted-foreground">
                      Know your visa limitations, work permit requirements, 
                      and legal job options for your status.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold mb-2">📱 Migration Card</h4>
                    <p className="text-sm text-muted-foreground">
                      Don't lose it! Essential document given at border. 
                      Learn why it's critical and what happens if lost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cultural Insights */}
        <Card className="border-border shadow-lg mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Cultural Insights You'll Learn</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-bold mb-2">Social Etiquette</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Greeting customs</li>
                  <li>Gift-giving traditions</li>
                  <li>Dining etiquette</li>
                  <li>Personal space norms</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💼</div>
                <h4 className="font-bold mb-2">Workplace Culture</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Hierarchy and respect</li>
                  <li>Communication styles</li>
                  <li>Meeting etiquette</li>
                  <li>Work-life balance</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h4 className="font-bold mb-2">Daily Life</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Public behavior</li>
                  <li>Transportation tips</li>
                  <li>Shopping customs</li>
                  <li>Seasonal traditions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practical Checklist */}
        <Card className="border-border bg-gradient-to-br from-green-50 to-green-100 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Your Pre-Arrival Checklist</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                "Valid passport (6+ months)",
                "Appropriate visa obtained",
                "Medical insurance purchased",
                "Accommodation confirmed",
                "Migration card knowledge",
                "Banking plan prepared",
                "Emergency contacts saved",
                "Russian SIM card researched",
                "Key apps downloaded",
                "Local customs understood",
                "Registration process learned",
                "Pre-arrival certificate earned"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-3">
                  <div className="w-5 h-5 rounded border-2 border-green-600 flex-shrink-0"></div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Start Your Pre-Arrival Training Today</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't arrive unprepared. Complete our certification program and land in Russia 
            knowing exactly what to do, where to go, and how to handle every situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-8">
              <Plane className="w-5 h-5 mr-2" />
              Begin Pre-Arrival Program
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Download Checklist
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            ✓ Included with Premium & Pro plans • ✓ Certificate provided
          </p>
        </div>
      </div>
    </section>
  );
}

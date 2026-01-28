import { Card, CardContent } from "./ui/card-simple";
import { Button } from "./ui/button-simple";
import { Badge } from "./ui/badge-simple";
import { Progress } from "./ui/progress-simple";
import { Briefcase, Clock, CheckCircle, Zap, Users, FileText } from "./ui/icons-simple";

export function FastTrackWork() {
  const modules = [
    {
      week: "Week 1",
      hours: "8 hours",
      topics: [
        "Essential workplace vocabulary",
        "Greetings and introductions",
        "Basic workplace commands",
        "Numbers and time"
      ]
    },
    {
      week: "Week 2",
      hours: "8 hours",
      topics: [
        "Job interview phrases",
        "Customer service basics",
        "Following instructions",
        "Common workplace situations"
      ]
    },
    {
      week: "Week 3",
      hours: "8 hours",
      topics: [
        "Industry-specific vocabulary",
        "Safety instructions",
        "Team communication",
        "Problem reporting"
      ]
    },
    {
      week: "Week 4",
      hours: "6 hours",
      topics: [
        "Real-world practice scenarios",
        "Cultural workplace norms",
        "Certification exam",
        "Job placement support"
      ]
    }
  ];

  const jobTypes = [
    {
      icon: "🍕",
      title: "Delivery Driver",
      examples: "Yandex.Eda, Delivery Club"
    },
    {
      icon: "☕",
      title: "Café/Restaurant",
      examples: "Barista, Server, Kitchen"
    },
    {
      icon: "🏪",
      title: "Retail",
      examples: "Sales assistant, Cashier"
    },
    {
      icon: "🏢",
      title: "Office Support",
      examples: "Data entry, Admin assistant"
    },
    {
      icon: "📦",
      title: "Warehouse",
      examples: "Packing, Sorting, Logistics"
    },
    {
      icon: "🚗",
      title: "Transportation",
      examples: "Taxi, Courier, Driver"
    }
  ];

  return (
    <section id="fast-track" className="py-20 bg-gradient-to-b from-white to-yellow-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-600 text-white mb-4">⚡ Fast Track Program</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Job-Ready Russian in 30 Hours
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fast-track intensive program designed to get you working in Russia quickly. 
            Learn the essential Russian you need for common jobs in just 4 weeks.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-border shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Only 30 Hours</h3>
              <p className="text-sm text-muted-foreground">
                Complete the program in 4 weeks with just 7-8 hours of study per week
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Job Placement</h3>
              <p className="text-sm text-muted-foreground">
                Direct connections with employers hiring international workers
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Work Certificate</h3>
              <p className="text-sm text-muted-foreground">
                Receive an official certificate upon completion to show employers
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Learning Path */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">4-Week Learning Path</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-orange-600 text-white">{module.week}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {module.hours}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Job Types */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Popular Entry-Level Jobs</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {jobTypes.map((job, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{job.icon}</div>
                <div className="font-bold text-sm mb-1">{job.title}</div>
                <div className="text-xs text-muted-foreground">{job.examples}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <Card className="border-border bg-gradient-to-r from-orange-50 to-orange-100 mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                {[
                  "Job-specific vocabulary for your field",
                  "Workplace conversation practice",
                  "Cultural workplace etiquette",
                  "Resume and interview preparation",
                  "Legal rights and requirements"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  "Live practice with native speakers",
                  "Job search strategies and resources",
                  "Employer network connections",
                  "Work permit guidance",
                  "Ongoing support after placement"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Start Working in Russia in 30 Days</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our fast-track program and get connected with employers who are actively hiring 
            international workers. Limited spots available each month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-8">
              Enroll in Fast Track Program
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Download Curriculum
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            💼 Job placement support included • 🎓 Work certificate provided
          </p>
        </div>
      </div>
    </section>
  );
}
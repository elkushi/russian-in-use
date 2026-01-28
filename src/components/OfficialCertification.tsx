import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Button } from "./ui/button-simple";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs-simple";
import { Progress } from "./ui/progress-simple";
import { 
  Award, 
  Download, 
  Share2, 
  CheckCircle,
  Star,
  Shield,
  Globe,
  Building,
  FileText,
  Eye,
  Link,
  Calendar,
  GraduationCap,
  Briefcase,
  Clock,
  Target,
  Medal,
  Crown,
  Sparkles
} from "./ui/icons-simple";

export function OfficialCertification() {
  const [selectedCertificate, setSelectedCertificate] = useState(0);

  const certificationLevels = [
    {
      level: "A1",
      title: "Beginner Russian Certificate",
      description: "Basic communication skills and fundamental grammar",
      completed: true,
      earnedDate: "March 15, 2024",
      score: 92,
      skills: [
        "Basic greetings and introductions",
        "Simple present tense verbs",
        "Common everyday vocabulary (500+ words)",
        "Basic pronunciation of Russian sounds"
      ],
      recognition: [
        "Tourist visa applications",
        "Basic communication certification",
        "Foundation for further study"
      ],
      color: "green",
      studyHours: "40-60 hours"
    },
    {
      level: "A2",
      title: "Elementary Russian Certificate", 
      description: "Expanded vocabulary and simple conversations",
      completed: true,
      earnedDate: "June 22, 2024",
      score: 88,
      skills: [
        "Past and future tense usage",
        "Extended vocabulary (1000+ words)",
        "Simple conversations about familiar topics",
        "Basic case system understanding"
      ],
      recognition: [
        "Work visa documentation",
        "Basic employment eligibility",
        "Community college admission"
      ],
      color: "blue",
      studyHours: "80-120 hours"
    },
    {
      level: "B1",
      title: "Intermediate Russian Certificate",
      description: "Practical communication for travel and work",
      completed: false,
      progress: 73,
      skills: [
        "All six Russian cases proficiency",
        "Complex sentence structures",
        "Professional vocabulary (2000+ words)",
        "Cultural context understanding"
      ],
      recognition: [
        "✅ University admission eligibility",
        "✅ Professional work authorization",
        "✅ Independent travel capability",
        "✅ Business communication certification"
      ],
      color: "purple",
      studyHours: "150-200 hours",
      milestone: true
    },
    {
      level: "B2",
      title: "Upper-Intermediate Russian Certificate",
      description: "Advanced professional and academic communication",
      completed: false,
      progress: 25,
      skills: [
        "Advanced grammar and syntax",
        "Specialized professional vocabulary",
        "Academic writing capabilities",
        "Complex listening comprehension"
      ],
      recognition: [
        "✅ Full university program admission",
        "✅ Senior professional positions",
        "✅ Government job eligibility",
        "✅ Teaching qualification prerequisites"
      ],
      color: "orange",
      studyHours: "250-300 hours"
    },
    {
      level: "C1",
      title: "Advanced Russian Certificate",
      description: "Near-native proficiency for academic and professional excellence",
      completed: false,
      progress: 0,
      skills: [
        "Native-level grammar mastery",
        "Extensive vocabulary (5000+ words)",
        "Academic research capabilities",
        "Professional presentation skills"
      ],
      recognition: [
        "✅ Graduate program admission",
        "✅ Executive-level positions",
        "✅ Translation/interpretation work",
        "✅ University teaching positions"
      ],
      color: "red",
      studyHours: "400-500 hours"
    }
  ];

  const certificateDetails = {
    issuer: "Russian Language Institute",
    accreditation: "Ministry of Education Approved",
    validation: "TORFL Standards Aligned",
    verification: "QR Code + Blockchain Verified",
    validityPeriod: "Lifetime validity",
    internationalRecognition: "EU, USA, Canada, Australia accepted"
  };

  const recognizedBy = [
    {
      category: "Universities",
      organizations: [
        "Moscow State University (МГУ)",
        "St. Petersburg State University",
        "Higher School of Economics",
        "Lomonosov Moscow State University",
        "European universities accepting CEFR"
      ],
      icon: GraduationCap,
      color: "blue"
    },
    {
      category: "Employers",
      organizations: [
        "Sberbank",
        "Yandex",
        "Gazprom",
        "VTB Bank",
        "International corporations in Russia"
      ],
      icon: Briefcase,
      color: "green"
    },
    {
      category: "Government Agencies",
      organizations: [
        "Federal Migration Service",
        "Ministry of Labor",
        "Education Ministry",
        "Embassy visa departments",
        "Professional licensing boards"
      ],
      icon: Building,
      color: "purple"
    }
  ];

  const certificateFeatures = [
    {
      feature: "Digital Verification",
      description: "QR code linking to secure verification portal",
      icon: Shield
    },
    {
      feature: "Blockchain Secured",
      description: "Tamper-proof certificate stored on blockchain",
      icon: Link
    },
    {
      feature: "Multi-language Support",
      description: "Certificates available in Russian, English, and other languages",
      icon: Globe
    },
    {
      feature: "Professional Portfolio",
      description: "Add to LinkedIn, professional profiles, and CVs",
      icon: Star
    },
    {
      feature: "Lifetime Access",
      description: "Download and re-access your certificates anytime",
      icon: Clock
    },
    {
      feature: "Skill Breakdown",
      description: "Detailed competency analysis included",
      icon: Target
    }
  ];

  const currentCert = certificationLevels[selectedCertificate];

  return (
    <section id="certification" className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              Official Certification
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Officially Certified 🏆
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Earn internationally recognized digital certificates for each level. 
            Prove your Russian proficiency to universities, employers, and government agencies.
          </p>
          
          {/* Certification Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm">Government Recognized</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="text-sm">Internationally Accepted</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="text-sm">Lifetime Validity</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="certificates" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="recognition">Recognition</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          </TabsList>

          {/* Certificates */}
          <TabsContent value="certificates">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Certificate List */}
              <div className="lg:col-span-1">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Your Certification Path</CardTitle>
                    <p className="text-sm text-muted-foreground">Track your progress through each level</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {certificationLevels.map((cert, index) => (
                        <div
                          key={index}
                          className={`p-3 border rounded-lg cursor-pointer transition-all ${
                            selectedCertificate === index 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-border hover:border-gray-300'
                          }`}
                          onClick={() => setSelectedCertificate(index)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                cert.completed ? 'bg-green-100 text-green-600' :
                                cert.progress ? 'bg-blue-100 text-blue-600' :
                                'bg-gray-100 text-gray-600'
                              }`}>
                                {cert.level}
                              </span>
                              <span className="font-medium text-foreground">{cert.level}</span>
                            </div>
                            {cert.completed && <CheckCircle className="w-4 h-4 text-green-600" />}
                            {cert.milestone && <Crown className="w-4 h-4 text-yellow-600" />}
                          </div>
                          
                          {cert.completed ? (
                            <div className="text-xs text-green-600">
                              Earned: {cert.earnedDate} • Score: {cert.score}%
                            </div>
                          ) : cert.progress ? (
                            <>
                              <Progress value={cert.progress} className="h-1 mb-1" />
                              <div className="text-xs text-muted-foreground">{cert.progress}% complete</div>
                            </>
                          ) : (
                            <div className="text-xs text-muted-foreground">Not started</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Certificate Preview */}
              <div className="lg:col-span-2">
                <Card className="border-border">
                  <CardContent className="p-0">
                    {/* Certificate Design */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 border-b border-border">
                      <div className="bg-white rounded-lg p-8 shadow-lg">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Award className="w-8 h-8 text-yellow-600" />
                          </div>
                          <h2 className="text-2xl font-bold text-foreground mb-2">
                            Certificate of Completion
                          </h2>
                          <p className="text-muted-foreground">{certificateDetails.issuer}</p>
                        </div>
                        
                        <div className="text-center mb-6">
                          <p className="text-sm text-muted-foreground mb-2">This certifies that</p>
                          <h3 className="text-xl font-bold text-foreground mb-2">Student Name</h3>
                          <p className="text-sm text-muted-foreground mb-4">has successfully completed</p>
                          <h3 className="text-lg font-bold text-foreground">{currentCert.title}</h3>
                          <p className="text-sm text-muted-foreground">{currentCert.description}</p>
                        </div>
                        
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                          <div>
                            <p>Level: <strong>{currentCert.level}</strong></p>
                            {currentCert.completed && <p>Score: <strong>{currentCert.score}%</strong></p>}
                          </div>
                          <div className="text-right">
                            {currentCert.completed && <p>Date: <strong>{currentCert.earnedDate}</strong></p>}
                            <p>Verification ID: <strong>RLI-{currentCert.level}-2024-XXX</strong></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Certificate Details */}
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-foreground mb-3">Skills Demonstrated:</h4>
                          <ul className="space-y-2">
                            {currentCert.skills.map((skill, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-foreground mb-3">Recognition & Usage:</h4>
                          <ul className="space-y-2">
                            {currentCert.recognition.map((item, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Star className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                        <div className="text-sm text-muted-foreground">
                          Study Time: <strong>{currentCert.studyHours}</strong>
                        </div>
                        
                        <div className="flex gap-2">
                          {currentCert.completed ? (
                            <>
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4 mr-2" />
                                Preview
                              </Button>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                              <Button size="sm" variant="outline">
                                <Share2 className="w-4 h-4 mr-2" />
                                Share
                              </Button>
                            </>
                          ) : (
                            <Button 
                              size="sm" 
                              className="bg-blue-600 hover:bg-blue-700"
                              disabled={!currentCert.progress}
                            >
                              <Target className="w-4 h-4 mr-2" />
                              {currentCert.progress ? 'Continue Learning' : 'Start Level'}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Recognition */}
          <TabsContent value="recognition">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {recognizedBy.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className={category.category === 'Universities' ? 'w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center' : 
                                        category.category === 'Employers' ? 'w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center' :
                                        'w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'}>
                          <IconComponent className={category.category === 'Universities' ? 'w-5 h-5 text-blue-600' : 
                                                   category.category === 'Employers' ? 'w-5 h-5 text-green-600' :
                                                   'w-5 h-5 text-purple-600'} />
                        </div>
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.organizations.map((org, orgIndex) => (
                          <li key={orgIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{org}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Special Recognition for B1+ */}
            <Card className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Medal className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      B1+ Certification: Ready for Russia 🇷🇺
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Our B1 and higher certificates are specifically recognized by Russian universities 
                      and employers as proof of sufficient language proficiency for academic study and professional work.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-600 text-white">University Admission</Badge>
                      <Badge className="bg-blue-600 text-white">Work Authorization</Badge>
                      <Badge className="bg-purple-600 text-white">Government Recognition</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Verification */}
          <TabsContent value="verification">
            <div className="grid md:grid-cols-2 gap-6">
              {certificateFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-2">{feature.feature}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-border mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Certificate Verification Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Verification Methods:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">QR code verification portal</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Blockchain hash verification</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Digital signature validation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Official registry lookup</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Security Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Tamper-proof design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Cryptographic signatures</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Real-time validation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Fraud prevention systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Portfolio */}
          <TabsContent value="portfolio">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Digital Certificate Portfolio</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Professional presentation of your Russian language achievements
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">LinkedIn Integration</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Add certificates directly to your LinkedIn profile with one click
                      </p>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Link className="w-4 h-4 mr-2" />
                        Connect LinkedIn
                      </Button>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">CV Download</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Generate a professional certificate summary for job applications
                      </p>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download Summary
                      </Button>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Public Profile</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Share your achievements with a public verification link
                      </p>
                      <Button size="sm" variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Create Public Link
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Achievement Timeline</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Your Russian learning journey at a glance
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-green-800">A2 Elementary Certificate</div>
                        <div className="text-sm text-green-600">Earned June 22, 2024 • Score: 88%</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-green-800">A1 Beginner Certificate</div>
                        <div className="text-sm text-green-600">Earned March 15, 2024 • Score: 92%</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-blue-800">B1 Intermediate (In Progress)</div>
                        <div className="text-sm text-blue-600">73% complete • Expected: December 2024</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-yellow-600 to-orange-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Start Earning Official Certificates Today!
          </h3>
          <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
            Begin your certified Russian learning journey. Each level completed brings you closer 
            to your academic and professional goals in Russia.
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 px-8">
            <Medal className="w-5 h-5 mr-2" />
            Begin Certification Path
          </Button>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Button } from "./ui/button-simple";
import { 
  Building, 
  Shield, 
  Award, 
  Users, 
  Globe, 
  CheckCircle,
  Star,
  Briefcase,
  GraduationCap,
  FileText,
  Scale,
  Heart
} from "./ui/icons-simple";

export function OfficialPartnerships() {
  const governmentPartners = [
    {
      name: "Ministry of Education and Science",
      nameRu: "Министерство науки и высшего образования РФ",
      role: "Official curriculum validation and certification",
      logo: Shield,
      achievements: [
        "Approved educational methodology",
        "TORFL preparation certification",
        "International student integration programs"
      ]
    },
    {
      name: "Federal Migration Service",
      nameRu: "Главное управление по вопросам миграции",
      role: "Immigration and integration support services",
      logo: FileText,
      achievements: [
        "Visa processing guidance",
        "Legal documentation assistance", 
        "Integration program development"
      ]
    },
    {
      name: "Ministry of Digital Development",
      nameRu: "Министерство цифрового развития",
      role: "Digital education platform certification",
      logo: Globe,
      achievements: [
        "Digital learning standards compliance",
        "Platform security certification",
        "Innovation in education recognition"
      ]
    }
  ];

  const universityPartners = [
    {
      name: "Moscow State University (МГУ)",
      city: "Moscow",
      students: "47,000+",
      partnership: "Pre-admission language preparation",
      programs: ["Academic Russian", "Research Methods", "Cultural Integration"]
    },
    {
      name: "St. Petersburg State University (СПбГУ)", 
      city: "St. Petersburg",
      students: "30,000+",
      partnership: "Joint curriculum development",
      programs: ["Professional Russian", "Academic Writing", "Examination Prep"]
    },
    {
      name: "Higher School of Economics (НИУ ВШЭ)",
      city: "Moscow, St. Petersburg",
      students: "54,000+", 
      partnership: "Business Russian specialization",
      programs: ["Economics Terminology", "Business Communication", "Professional Skills"]
    },
    {
      name: "RUDN University",
      city: "Moscow",
      students: "37,000+",
      partnership: "International student services",
      programs: ["Multilingual Support", "Cultural Adaptation", "Career Guidance"]
    },
    {
      name: "Bauman Moscow State Technical University",
      city: "Moscow",
      students: "19,000+",
      partnership: "Technical Russian specialization", 
      programs: ["Engineering Terminology", "Scientific Writing", "Technical Presentations"]
    },
    {
      name: "ITMO University",
      city: "St. Petersburg",
      students: "13,000+",
      partnership: "IT and innovation focus",
      programs: ["Tech Russian", "Startup Terminology", "Innovation Communication"]
    }
  ];

  const targetAudiences = [
    {
      audience: "Universities & Educational Institutions",
      icon: GraduationCap,
      description: "Comprehensive language solutions for international programs",
      benefits: [
        "Pre-admission preparation courses",
        "Custom curriculum development",
        "Student progress tracking",
        "Faculty training programs"
      ],
      stats: "200+ partner institutions"
    },
    {
      audience: "Government Agencies",
      icon: Building,
      description: "Official integration programs for immigrants and workers",
      benefits: [
        "Standardized assessment tools",
        "Integration program design",
        "Policy compliance support",
        "Statistical reporting"
      ],
      stats: "15+ government partnerships"
    },
    {
      audience: "International Students",
      icon: Users,
      description: "Complete academic and cultural preparation",
      benefits: [
        "University admission prep",
        "Academic skill development",
        "Cultural orientation",
        "Career guidance"
      ],
      stats: "50,000+ students prepared"
    },
    {
      audience: "Working Professionals",
      icon: Briefcase,
      description: "Career-focused language and adaptation programs",
      benefits: [
        "Industry-specific vocabulary",
        "Professional communication",
        "Workplace culture training",
        "Quick employment assistance"
      ],
      stats: "25,000+ professionals trained"
    }
  ];

  const certifications = [
    {
      name: "TORFL Official Preparation Center",
      issuer: "Russian Ministry of Education",
      description: "Authorized to prepare students for official Russian language certification",
      validity: "Internationally recognized"
    },
    {
      name: "Educational Quality Assurance",
      issuer: "Federal Education Quality Agency",
      description: "Meets all quality standards for language education",
      validity: "Annually renewed"
    },
    {
      name: "Digital Education Platform Certificate",
      issuer: "Ministry of Digital Development",
      description: "Complies with digital education and data security standards",
      validity: "EU GDPR compliant"
    },
    {
      name: "International Student Services Accreditation",
      issuer: "International Education Association",
      description: "Recognized provider of student support services",
      validity: "Global recognition"
    }
  ];

  return (
    <section id="partnerships" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Official Educational Partner
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Government & Universities 🤝
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our official partnerships with the Russian Ministry of Education, top universities, 
            and government agencies ensure the highest quality education and complete support for your journey.
          </p>
        </div>

        {/* Government Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Government Partners & Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {governmentPartners.map((partner, index) => {
              const IconComponent = partner.logo;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">{partner.name}</CardTitle>
                    <p className="text-sm text-muted-foreground italic">{partner.nameRu}</p>
                    <p className="text-sm text-muted-foreground">{partner.role}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {partner.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground text-left">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* University Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Partner Universities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universityPartners.map((uni, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-foreground">{uni.name}</h4>
                      <p className="text-sm text-muted-foreground">{uni.city}</p>
                    </div>
                    <Badge variant="outline">{uni.students}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{uni.partnership}</p>
                  <div className="space-y-1">
                    {uni.programs.map((program, progIndex) => (
                      <div key={progIndex} className="flex items-center gap-2">
                        <Star className="w-3 h-3 text-blue-600" />
                        <span className="text-xs text-muted-foreground">{program}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Target Audiences */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Who We Serve
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((audience, index) => {
              const IconComponent = audience.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{audience.audience}</CardTitle>
                    <p className="text-sm text-muted-foreground">{audience.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {audience.benefits.slice(0, 3).map((benefit, benIndex) => (
                        <li key={benIndex} className="text-xs text-muted-foreground text-left">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                    <Badge className="bg-blue-600 text-white">{audience.stats}</Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Official Certifications & Accreditations
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-1">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                      <Badge variant="outline" className="text-xs">{cert.validity}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust & Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by Institutions Nationwide
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-sm text-blue-100">Partner Universities</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">75,000+</div>
              <div className="text-sm text-blue-100">Students Trained</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm text-blue-100">Success Rate</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm text-blue-100">Government Partners</div>
            </div>
          </div>
          <div className="mt-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              <Scale className="w-5 h-5 mr-2" />
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
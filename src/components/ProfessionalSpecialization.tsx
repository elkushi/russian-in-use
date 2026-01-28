import { Card, CardContent, CardHeader, CardTitle } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Button } from "./ui/button-simple";
import { Progress } from "./ui/progress-simple";
import { 
  Briefcase, 
  TrendingUp, 
  Scale, 
  Building, 
  GraduationCap,
  Users,
  DollarSign,
  Cog,
  FileText,
  CheckCircle,
  Star,
  Globe
} from "./ui/icons-simple";

// Simple inline icons for the remaining ones
const Code = () => <span className="text-lg">💻</span>;
const Stethoscope = () => <span className="text-lg">🩺</span>;
const Wrench = () => <span className="text-lg">🔧</span>;

export function ProfessionalSpecialization() {
  const specializations = [
    {
      field: "Marketing & Sales",
      icon: TrendingUp,
      color: "blue",
      description: "Master business communication and marketing terminology",
      level: "B2+",
      duration: "3-4 months",
      hours: "80-100 hours",
      keyAreas: [
        "Digital Marketing (Цифровой маркетинг)",
        "Sales Presentations (Презентации продаж)", 
        "Market Research (Исследование рынка)",
        "Brand Management (Управление брендом)"
      ],
      vocabulary: [
        { ru: "Целевая аудитория", en: "Target audience", context: "marketing campaigns" },
        { ru: "Конверсия", en: "Conversion", context: "sales metrics" },
        { ru: "Брендинг", en: "Branding", context: "brand strategy" },
        { ru: "Воронка продаж", en: "Sales funnel", context: "customer journey" }
      ]
    },
    {
      field: "Information Technology",
      icon: Code,
      color: "purple",
      description: "Navigate the tech world with confidence in Russian",
      level: "B2+",
      duration: "4-5 months", 
      hours: "100-120 hours",
      keyAreas: [
        "Software Development (Разработка ПО)",
        "System Administration (Системное администрирование)",
        "Cybersecurity (Кибербезопасность)",
        "Data Analysis (Анализ данных)"
      ],
      vocabulary: [
        { ru: "База данных", en: "Database", context: "data storage" },
        { ru: "Алгоритм", en: "Algorithm", context: "programming logic" },
        { ru: "Облачные технологии", en: "Cloud technologies", context: "infrastructure" },
        { ru: "Машинное обучение", en: "Machine learning", context: "AI development" }
      ]
    },
    {
      field: "Engineering",
      icon: Wrench,
      color: "orange",
      description: "Technical communication for engineering professionals",
      level: "B2+",
      duration: "3-4 months",
      hours: "90-110 hours", 
      keyAreas: [
        "Project Management (Управление проектами)",
        "Technical Documentation (Техническая документация)",
        "Quality Control (Контроль качества)",
        "Safety Protocols (Протоколы безопасности)"
      ],
      vocabulary: [
        { ru: "Чертёж", en: "Blueprint/Drawing", context: "technical plans" },
        { ru: "Спецификация", en: "Specification", context: "project requirements" },
        { ru: "Испытания", en: "Testing", context: "quality assurance" },
        { ru: "Допуск", en: "Tolerance", context: "manufacturing precision" }
      ]
    },
    {
      field: "Healthcare",
      icon: Stethoscope,
      color: "red",
      description: "Medical terminology and patient communication",
      level: "B2+",
      duration: "5-6 months",
      hours: "120-150 hours",
      keyAreas: [
        "Patient Communication (Общение с пациентами)",
        "Medical Documentation (Медицинская документация)",
        "Clinical Procedures (Клинические процедуры)",
        "Emergency Situations (Экстренные ситуации)"
      ],
      vocabulary: [
        { ru: "Диагноз", en: "Diagnosis", context: "medical assessment" },
        { ru: "Симптомы", en: "Symptoms", context: "patient complaints" },
        { ru: "Лечение", en: "Treatment", context: "medical care" },
        { ru: "Рецепт", en: "Prescription", context: "medication orders" }
      ]
    },
    {
      field: "Finance & Banking",
      icon: DollarSign,
      color: "green",
      description: "Financial services and investment terminology",
      level: "B2+",
      duration: "3-4 months",
      hours: "85-105 hours",
      keyAreas: [
        "Investment Banking (Инвестиционный банкинг)",
        "Risk Management (Управление рисками)",
        "Financial Analysis (Финансовый анализ)",
        "Regulatory Compliance (Соблюдение требований)"
      ],
      vocabulary: [
        { ru: "Активы", en: "Assets", context: "balance sheet" },
        { ru: "Ликвидность", en: "Liquidity", context: "cash flow" },
        { ru: "Дивиденды", en: "Dividends", context: "investment returns" },
        { ru: "Залог", en: "Collateral", context: "loan security" }
      ]
    },
    {
      field: "Legal Services",
      icon: Scale,
      color: "indigo",
      description: "Legal terminology and court procedures",
      level: "C1",
      duration: "6-8 months",
      hours: "150-200 hours",
      keyAreas: [
        "Contract Law (Договорное право)",
        "Corporate Law (Корпоративное право)",
        "Court Proceedings (Судебные разбирательства)",
        "Legal Documentation (Правовая документация)"
      ],
      vocabulary: [
        { ru: "Договор", en: "Contract", context: "legal agreements" },
        { ru: "Иск", en: "Lawsuit", context: "legal proceedings" },
        { ru: "Свидетель", en: "Witness", context: "court testimony" },
        { ru: "Ответственность", en: "Liability", context: "legal obligations" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          levelBg: "bg-blue-600",
          button: "bg-blue-600 hover:bg-blue-700"
        };
      case "purple":
        return {
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600", 
          levelBg: "bg-purple-600",
          button: "bg-purple-600 hover:bg-purple-700"
        };
      case "orange":
        return {
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          levelBg: "bg-orange-600", 
          button: "bg-orange-600 hover:bg-orange-700"
        };
      case "red":
        return {
          iconBg: "bg-red-100",
          iconColor: "text-red-600",
          levelBg: "bg-red-600",
          button: "bg-red-600 hover:bg-red-700"
        };
      case "green":
        return {
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          levelBg: "bg-green-600",
          button: "bg-green-600 hover:bg-green-700"
        };
      case "indigo":
        return {
          iconBg: "bg-indigo-100",
          iconColor: "text-indigo-600",
          levelBg: "bg-indigo-600",
          button: "bg-indigo-600 hover:bg-indigo-700"
        };
      default:
        return {
          iconBg: "bg-gray-100",
          iconColor: "text-gray-600",
          levelBg: "bg-gray-600",
          button: "bg-gray-600 hover:bg-gray-700"
        };
    }
  };

  return (
    <section id="specialization" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2">
              Advanced Levels B2+ → C1
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Specialization Tracks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Take your Russian to the next level with industry-specific vocabulary, 
            professional communication skills, and real-world scenarios from your field.
          </p>
          
          {/* Requirements */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Star className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-800">Prerequisites</span>
            </div>
            <p className="text-sm text-blue-700">
              Complete B2 level to unlock professional tracks. Each specialization includes 
              industry-specific vocabulary, case studies, and real workplace scenarios.
            </p>
          </div>
        </div>

        {/* Specializations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specializations.map((spec, index) => {
            const IconComponent = spec.icon;
            const colors = getColorClasses(spec.color);
            
            return (
              <Card 
                key={index}
                className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${colors.iconColor}`} />
                    </div>
                    <Badge className={`${colors.levelBg} text-white`}>
                      {spec.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{spec.field}</CardTitle>
                  <p className="text-sm text-muted-foreground">{spec.description}</p>
                </CardHeader>
                
                <CardContent>
                  {/* Duration & Hours */}
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">{spec.duration}</Badge>
                    <Badge variant="outline" className="text-xs">{spec.hours}</Badge>
                  </div>

                  {/* Key Areas */}
                  <div className="mb-4">
                    <h4 className="font-medium text-sm text-foreground mb-2">Key Areas:</h4>
                    <ul className="space-y-1">
                      {spec.keyAreas.slice(0, 3).map((area, areaIndex) => (
                        <li key={areaIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{area}</span>
                        </li>
                      ))}
                      {spec.keyAreas.length > 3 && (
                        <li className="text-xs text-muted-foreground italic ml-5">
                          +{spec.keyAreas.length - 3} more areas...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Sample Vocabulary */}
                  <div className="mb-6">
                    <h4 className="font-medium text-sm text-foreground mb-2">Sample Vocabulary:</h4>
                    <div className="space-y-2">
                      {spec.vocabulary.slice(0, 2).map((vocab, vocabIndex) => (
                        <div key={vocabIndex} className="bg-gray-50 rounded-lg p-2">
                          <div className="flex justify-between items-start">
                            <span className="font-medium text-sm text-foreground">{vocab.ru}</span>
                            <span className="text-xs text-muted-foreground italic">{vocab.en}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{vocab.context}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button size="sm" className={`w-full ${colors.button}`}>
                    <Briefcase className="w-4 h-4 mr-2" />
                    Start Track
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center mb-16">
          <Globe className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Why Choose Professional Specialization?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-lg p-6">
              <Users className="w-8 h-8 mx-auto mb-3" />
              <h4 className="font-medium mb-2">Career Advancement</h4>
              <p className="text-sm text-indigo-100">
                Stand out in the Russian job market with specialized vocabulary
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <FileText className="w-8 h-8 mx-auto mb-3" />
              <h4 className="font-medium mb-2">Real-World Scenarios</h4>
              <p className="text-sm text-indigo-100">
                Practice with authentic workplace situations and documents
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Cog className="w-8 h-8 mx-auto mb-3" />
              <h4 className="font-medium mb-2">Industry Expertise</h4>
              <p className="text-sm text-indigo-100">
                Learn from professionals working in Russian companies
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Advance Your Career?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Choose your professional track and start building the specialized vocabulary 
            and communication skills you need to succeed in the Russian workplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8">
              Browse All Tracks
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Take Assessment Test
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "./ui/card-simple";
import { Button } from "./ui/button-simple";
import { GraduationCap, Briefcase } from "./ui/icons-simple";

// Simple inline icon for Plane
const Plane = () => <span className="text-lg">✈️</span>;
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TargetAudiences() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Students",
      subtitle: "Academic Excellence",
      description: "Perfect for students studying Russian literature, history, or planning to study in Russia. Our curriculum aligns with academic standards and university requirements.",
      features: [
        "University-level curriculum",
        "Academic writing skills",
        "Literature comprehension",
        "Exam preparation support"
      ],
      image: "https://images.unsplash.com/photo-1706403615881-d83dc2067c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBsYW5ndWFnZXN8ZW58MXx8fHwxNzU3MDY3NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "blue"
    },
    {
      icon: Briefcase,
      title: "Professionals",
      subtitle: "Career Advancement",
      description: "Advance your career with business Russian skills. Learn professional vocabulary, business etiquette, and communication skills for the Russian market.",
      features: [
        "Business vocabulary",
        "Professional communication",
        "Industry-specific terms",
        "Networking phrases"
      ],
      image: "https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU2OTkxMzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "green"
    },
    {
      icon: Plane,
      title: "Travelers",
      subtitle: "Cultural Immersion",
      description: "Get ready for your Russian adventure! Learn essential phrases, cultural insights, and practical vocabulary for traveling, living, or working in Russia.",
      features: [
        "Travel essentials",
        "Cultural insights",
        "Daily conversation",
        "Emergency phrases"
      ],
      image: "https://images.unsplash.com/photo-1688311305063-63c25e56f2e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBiYWNrcGFjayUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTcwMTQxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          button: "bg-blue-600 hover:bg-blue-700"
        };
      case "green":
        return {
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          button: "bg-green-600 hover:bg-green-700"
        };
      case "purple":
        return {
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
          button: "bg-purple-600 hover:bg-purple-700"
        };
      default:
        return {
          iconBg: "bg-red-100",
          iconColor: "text-red-600",
          button: "bg-red-600 hover:bg-red-700"
        };
    }
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Designed for Your Goals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a student, professional, or traveler, we have specialized courses 
            tailored to your specific needs and objectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const colors = getColorClasses(audience.color);
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={audience.image}
                    alt={`${audience.title} learning Russian`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center`}>
                    <audience.icon className={`w-6 h-6 ${colors.iconColor}`} />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">{audience.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{audience.subtitle}</p>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{audience.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {audience.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full ${colors.button}`}>
                    Start {audience.title} Course
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "./ui/card-simple";
import { 
  BookOpen, 
  Headphones, 
  Users, 
  Trophy, 
  MessageCircle,
  Target,
  Globe
} from "./ui/icons-simple";

// Simple inline icon for Clock
const Clock = () => <span className="text-lg">⏰</span>;

export function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Lessons",
      description: "Engaging lessons designed by language experts with real-world scenarios and practical vocabulary."
    },
    {
      icon: Headphones,
      title: "Native Speaker Audio",
      description: "Learn proper pronunciation from native Russian speakers with high-quality audio recordings."
    },
    {
      icon: Users,
      title: "Live Tutoring",
      description: "One-on-one sessions with certified Russian teachers for personalized learning experience."
    },
    {
      icon: Trophy,
      title: "Gamified Learning",
      description: "Earn points, unlock achievements, and compete with friends to stay motivated throughout your journey."
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Learn at your own pace with 24/7 access to lessons, perfect for busy students and professionals."
    },
    {
      icon: MessageCircle,
      title: "Conversation Practice",
      description: "Practice speaking with AI chatbots and join conversation groups with other learners."
    },
    {
      icon: Target,
      title: "Personalized Path",
      description: "AI-powered learning paths tailored to your goals, whether for travel, business, or academic purposes."
    },
    {
      icon: Globe,
      title: "Cultural Immersion",
      description: "Learn about Russian culture, traditions, and customs to truly understand the language context."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Master Russian
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with proven teaching methods 
            to make learning Russian effective and enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50,000+</div>
              <div className="text-red-100">Active Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1,200+</div>
              <div className="text-red-100">Lessons Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-red-100">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">150+</div>
              <div className="text-red-100">Expert Teachers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "./ui/card-simple";
import { Star } from "./ui/icons-simple";

// Simple inline icon for Quote
const Quote = () => <span className="text-lg">💬</span>;

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Exchange Student",
      university: "Moscow State University",
      content: "RussianAcademy helped me prepare for my semester in Moscow. The cultural insights and academic vocabulary were invaluable. I felt confident from day one!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Business Consultant",
      company: "Global Trade Corp",
      content: "As a consultant working with Russian clients, this app was a game-changer. The business Russian course taught me exactly what I needed for professional meetings.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "Travel Blogger",
      location: "Traveling through Russia",
      content: "I spent 3 months traveling across Russia and this app was my companion. The offline lessons and cultural tips made my journey so much richer!",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Kim",
      role: "Software Engineer",
      company: "Tech Innovation LLC",
      content: "The AI-powered learning path adapted perfectly to my busy schedule. I could learn during commutes and the gamification kept me motivated every day.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      role: "Graduate Student",
      university: "Harvard University",
      content: "Writing my thesis on Russian literature required deep language understanding. The advanced grammar lessons and literature modules were incredibly helpful.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      role: "Entrepreneur",
      company: "Wilson Enterprises",
      content: "I'm expanding my business to Russia and needed to learn quickly. The intensive business course got me conversational in just 3 months. Highly recommended!",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by Learners Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful students, professionals, and travelers who have 
            achieved their Russian language goals with RussianAcademy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-8 h-8 text-red-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.university || testimonial.company || testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">50,000+</div>
            <div className="text-2xl font-bold text-muted-foreground">4.8★</div>
            <div className="text-2xl font-bold text-muted-foreground">150+</div>
            <div className="text-2xl font-bold text-muted-foreground">98%</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-muted-foreground mt-2">
            <div>Happy Students</div>
            <div>App Store Rating</div>
            <div>Countries Served</div>
            <div>Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
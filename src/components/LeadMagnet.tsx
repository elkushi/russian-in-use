import { useState } from "react";
import { Card, CardContent } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Button } from "./ui/button-simple";
import { Download, CheckCircle, Mail } from "./ui/icons-simple";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, send to email service
  };

  const resources = [
    { title: "Top 100 Russian Phrases", emoji: "💬", description: "Essential phrases for travelers" },
    { title: "Cyrillic Alphabet Guide", emoji: "🔤", description: "Learn to read Russian in 1 day" },
    { title: "Pronunciation Masterclass", emoji: "🗣️", description: "Video guide with native speaker" },
    { title: "Russian Grammar Cheat Sheet", emoji: "📋", description: "Key rules simplified" },
    { title: "Cultural Etiquette Guide", emoji: "🎭", description: "Do's and don'ts in Russia" },
    { title: "Study Schedule Template", emoji: "📅", description: "Optimize your learning time" }
  ];

  if (submitted) {
    return (
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-4 border-green-400 shadow-2xl">
            <CardContent className="p-12">
              <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Success! Check Your Email 📧</h2>
              <p className="text-xl text-muted-foreground mb-6">
                We've sent your free Russian learning starter pack to <span className="font-bold text-green-600">{email}</span>
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <div className="font-bold mb-2">What's Inside:</div>
                <div className="grid sm:grid-cols-2 gap-3 text-left">
                  {resources.map((resource, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <span>{resource.emoji}</span>
                      <span>{resource.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Didn't receive it? Check your spam folder or contact support@russianacademy.com
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-4 border-yellow-400 shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              {/* Left: Offer */}
              <div className="p-8 md:p-12 bg-white">
                <Badge className="bg-red-600 text-white mb-4">🎁 FREE Download</Badge>
                <h2 className="text-3xl font-bold mb-4">
                  Get Your Free Russian Learning Starter Pack
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Download our comprehensive guide package and start learning Russian today!
                </p>

                <form onSubmit={handleSubmit} className="mb-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                    <Button type="submit" className="bg-red-600 hover:bg-red-700 px-8 py-3">
                      <Download className="w-5 h-5 mr-2" />
                      Get Free Pack
                    </Button>
                  </div>
                </form>

                <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p>
                    Join 15,000+ learners. Unsubscribe anytime. We respect your privacy.
                  </p>
                </div>
              </div>

              {/* Right: Resources Preview */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-purple-50">
                <h3 className="font-bold text-xl mb-6">What You'll Get:</h3>
                <div className="space-y-4">
                  {resources.map((resource, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-white rounded-lg p-4">
                      <div className="text-2xl">{resource.emoji}</div>
                      <div>
                        <div className="font-bold">{resource.title}</div>
                        <div className="text-sm text-muted-foreground">{resource.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-yellow-100 border-2 border-yellow-300 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <div className="font-bold text-yellow-900">Instant Access</div>
                      <div className="text-sm text-yellow-800">
                        Downloads delivered to your inbox in under 60 seconds
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Proof */}
        <div className="text-center mt-8 text-white">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-300 text-xl">★</span>
              ))}
            </div>
            <span className="font-bold">4.9/5</span>
          </div>
          <p className="text-white/90">
            "The starter pack helped me learn Cyrillic in just 2 days!" - Maria S.
          </p>
        </div>
      </div>
    </section>
  );
}

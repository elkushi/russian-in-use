import { useState } from 'react';
import { Card, CardContent } from "./ui/card-simple";
import { Button } from "./ui/button-simple";
import { Badge } from "./ui/badge-simple";
import { MessageCircle, HelpCircle, Phone, Mail, ChevronDown, ChevronUp } from "./ui/icons-simple";

export function SupportAndFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to reach B1 level?",
      answer: "Most students reach B1 level (Russia-ready) in 4-6 months with consistent daily practice of 1-2 hours. Our structured program includes 250-350 hours of total study time. However, progress varies based on your dedication, previous language learning experience, and whether you practice with native speakers."
    },
    {
      question: "Is the platform completely free?",
      answer: "We offer a generous free tier that includes access to A1-A2 lessons, basic AI chat features, community forum, and placement test. Premium features include advanced levels (B2-C1), unlimited AI tutor access, personalized learning paths, and official certification. Check our pricing page for detailed comparison."
    },
    {
      question: "Do I get an official certificate?",
      answer: "Yes! Upon completing each level, you receive a digital certificate. Premium members can get official CEFR-aligned certificates recognized by Russian universities and employers. We also offer TORFL (Test of Russian as a Foreign Language) exam preparation."
    },
    {
      question: "Can I really get a job in Russia after the Fast Track program?",
      answer: "Our Fast Track program prepares you for entry-level positions like delivery, café work, retail, etc. We partner with employers who are hiring international workers and provide job placement support. However, securing a job also depends on work permits, visas, and employer requirements."
    },
    {
      question: "How does the mentor system work?",
      answer: "Advanced learners (B2+) can become mentors and help beginners (A1-A2) for free. Mentors earn rewards like bonus points, premium features, and free certification. Beginners get personalized help and conversation practice. All sessions are scheduled through our platform."
    },
    {
      question: "What if I have no prior Russian knowledge?",
      answer: "Perfect! Our A1 level is designed for complete beginners. We start with the Cyrillic alphabet, basic pronunciation, and simple phrases. The placement test will confirm you're at A1, and you'll have a clear learning path from day one."
    },
    {
      question: "Can I practice speaking with real people?",
      answer: "Absolutely! We offer: 1) AI speaking tutor for unlimited practice, 2) Conversation groups with other learners, 3) Mentor sessions with advanced learners, 4) Optional paid sessions with certified teachers. Speaking practice is a core part of our methodology."
    },
    {
      question: "Is this suitable for university preparation?",
      answer: "Yes! We have a dedicated university preparation track that covers academic Russian, application processes, entrance exam preparation, and cultural orientation. We partner with Russian universities and can connect you with admission counselors."
    },
    {
      question: "What's the difference between TORFL and your certification?",
      answer: "TORFL (Test of Russian as a Foreign Language) is the official Russian government exam, similar to TOEFL for English. Our certificates confirm completion of our courses. We prepare students for TORFL and recommend taking it for official recognition, especially for university or work visas."
    },
    {
      question: "Can I download lessons for offline study?",
      answer: "Premium members can download lesson materials, audio files, and printable PDFs of their personal dictionary. The mobile app also allows downloading lessons for offline access during travel."
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      name: "WhatsApp Support",
      description: "Quick answers to your questions",
      contact: "+7 (XXX) XXX-XX-XX",
      available: "24/7",
      color: "green"
    },
    {
      icon: Phone,
      name: "Telegram Support",
      description: "Technical help and guidance",
      contact: "@RussianLearningSupport",
      available: "24/7",
      color: "blue"
    },
    {
      icon: MessageCircle,
      name: "Ask a Teacher",
      description: "Expert language questions",
      contact: "WhatsApp teacher line",
      available: "Mon-Fri, 9AM-6PM MSK",
      color: "purple"
    },
    {
      icon: Mail,
      name: "Email Support",
      description: "Detailed inquiries",
      contact: "support@russianlearning.com",
      available: "Response within 24h",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-100 text-green-600";
      case "blue":
        return "bg-blue-100 text-blue-600";
      case "purple":
        return "bg-purple-100 text-purple-600";
      case "red":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <section id="support-faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-600 text-white mb-4">💬 Help & Support</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We're Here to Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant answers to common questions or reach out to our support team anytime.
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${getColorClasses(channel.color)} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                  <channel.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">{channel.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{channel.description}</p>
                <div className="text-sm font-medium text-foreground mb-1">{channel.contact}</div>
                <div className="text-xs text-muted-foreground">{channel.available}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-muted-foreground">Find quick answers to the most common questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start space-x-3 flex-1">
                      <HelpCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="font-bold text-foreground">{faq.question}</span>
                    </div>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <div className="pl-8 text-muted-foreground border-l-4 border-blue-200 ml-2">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">📚</div>
              <h4 className="font-bold mb-2">Documentation</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Complete guides and tutorials
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Browse Docs
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">🎥</div>
              <h4 className="font-bold mb-2">Video Tutorials</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Step-by-step video guides
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Watch Videos
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-bold mb-2">Community Forum</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Ask other learners
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Visit Forum
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions or issues. 
            Contact us via WhatsApp, Telegram, or email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

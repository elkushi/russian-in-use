import { Card, CardContent } from "./ui/card-simple";
import { Button } from "./ui/button-simple";
import { Badge } from "./ui/badge-simple";
import { Avatar } from "./ui/avatar-simple";
import { Users, Star, Award, MessageCircle, Video, Heart } from "./ui/icons-simple";

export function MentorSystem() {
  const mentors = [
    {
      name: "Elena Petrova",
      level: "C1",
      rating: 4.9,
      students: 47,
      languages: "Russian, English",
      specialty: "Beginners (A1-A2)",
      image: "👩‍🏫",
      badge: "Top Mentor"
    },
    {
      name: "Dmitry Sokolov",
      level: "B2",
      rating: 4.8,
      students: 32,
      languages: "Russian, English, Spanish",
      specialty: "Grammar & Conversation",
      image: "👨‍🏫",
      badge: "Rising Star"
    },
    {
      name: "Anna Volkova",
      level: "C1",
      rating: 5.0,
      students: 61,
      languages: "Russian, English, German",
      specialty: "Business Russian",
      image: "👩‍💼",
      badge: "Expert"
    }
  ];

  const rewards = [
    {
      icon: "🏆",
      title: "500 Bonus Points",
      description: "For every 10 sessions completed",
      level: "Bronze Mentor"
    },
    {
      icon: "⭐",
      title: "Premium Features",
      description: "Access exclusive learning tools",
      level: "Silver Mentor"
    },
    {
      icon: "👑",
      title: "Free Certification",
      description: "Get certified at no cost",
      level: "Gold Mentor"
    },
    {
      icon: "💰",
      title: "Paid Opportunities",
      description: "Become an official tutor",
      level: "Platinum Mentor"
    }
  ];

  return (
    <section id="mentor-system" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-600 text-white mb-4">🤝 Mentor System</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Learn Together, Grow Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced learners (B2+) help beginners (A1-A2) in exchange for rewards. 
            Build community, reinforce your knowledge, and earn benefits.
          </p>
        </div>

        {/* How It Works */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* For Beginners */}
          <Card className="border-border shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">For Beginners (A1-A2)</h3>
                <p className="text-muted-foreground">Get personalized help from advanced learners</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Browse Mentors</h4>
                    <p className="text-sm text-muted-foreground">Find someone who matches your learning style and schedule</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Book Sessions</h4>
                    <p className="text-sm text-muted-foreground">Schedule 30-minute sessions for practice and questions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Learn & Practice</h4>
                    <p className="text-sm text-muted-foreground">Get real conversation practice and personalized tips</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 text-blue-700">
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">100% Free</span>
                </div>
                <p className="text-sm text-blue-600 mt-1">All mentoring sessions are completely free</p>
              </div>
            </CardContent>
          </Card>

          {/* For Advanced Learners */}
          <Card className="border-border shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">For Advanced (B2+)</h3>
                <p className="text-muted-foreground">Teach others and earn amazing rewards</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Become a Mentor</h4>
                    <p className="text-sm text-muted-foreground">Set your availability and areas of expertise</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Help Beginners</h4>
                    <p className="text-sm text-muted-foreground">Guide A1-A2 learners through conversations and questions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Earn Rewards</h4>
                    <p className="text-sm text-muted-foreground">Get points, premium features, and certification</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-600 text-white rounded-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span className="font-medium">Reinforce Your Knowledge</span>
                </div>
                <p className="text-sm text-purple-100 mt-1">Teaching is the best way to master a language</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Mentors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Mentors</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {mentors.map((mentor, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-3">{mentor.image}</div>
                    <h4 className="font-bold text-lg mb-1">{mentor.name}</h4>
                    <Badge className="bg-purple-600 text-white mb-2">{mentor.level} Level</Badge>
                    {mentor.badge && (
                      <div className="text-sm text-yellow-600 font-medium">⭐ {mentor.badge}</div>
                    )}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Rating</span>
                      <span className="flex items-center font-medium">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {mentor.rating}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Students Helped</span>
                      <span className="font-medium">{mentor.students}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Languages: </span>
                      <span className="font-medium">{mentor.languages}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Specialty: </span>
                      <span className="font-medium">{mentor.specialty}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Video className="w-4 h-4 mr-2" />
                      Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mentor Rewards */}
        <Card className="border-border shadow-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Mentor Rewards Program</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {rewards.map((reward, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-3">{reward.icon}</div>
                  <div className="font-bold mb-1">{reward.title}</div>
                  <div className="text-sm text-purple-100 mb-2">{reward.description}</div>
                  <Badge className="bg-white/20 text-white">{reward.level}</Badge>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-purple-100 mb-4">Plus: Recognition badges, leaderboard rankings, and exclusive events</p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              Find a Mentor
            </Button>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8">
              Become a Mentor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

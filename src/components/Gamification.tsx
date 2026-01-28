import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Button } from "./ui/button-simple";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs-simple";
import { Progress } from "./ui/progress-simple";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar-simple";
import { 
  Trophy, 
  Target, 
  Flame, 
  Star,
  Zap,
  Award,
  TrendingUp,
  Users,
  Crown,
  Medal,
  Gift,
  Calendar,
  BarChart3,
  CheckCircle,
  Clock,
  Brain,
  Globe,
  Heart,
  Sparkles
} from "./ui/icons-simple";

export function Gamification() {
  const [currentLevel, setCurrentLevel] = useState("B1");
  const [totalPoints, setTotalPoints] = useState(2847);
  const [currentStreak, setCurrentStreak] = useState(12);

  const userStats = {
    level: "B1",
    xp: 2847,
    xpToNext: 3200,
    streak: 12,
    longestStreak: 28,
    lessonsCompleted: 156,
    timeStudied: "89h 23m",
    rank: 23,
    badges: 18
  };

  const badges = [
    {
      id: 1,
      name: "First Steps",
      description: "Complete your first lesson",
      icon: "👶",
      rarity: "Common",
      color: "gray",
      unlocked: true,
      unlockedAt: "2 months ago"
    },
    {
      id: 2,
      name: "Week Warrior",
      description: "Maintain a 7-day streak",
      icon: "🔥",
      rarity: "Uncommon",
      color: "orange",
      unlocked: true,
      unlockedAt: "1 month ago"
    },
    {
      id: 3,
      name: "Grammar Master",
      description: "Perfect score on 10 grammar exercises",
      icon: "📚",
      rarity: "Rare",
      color: "blue",
      unlocked: true,
      unlockedAt: "3 weeks ago"
    },
    {
      id: 4,
      name: "Speaking Star",
      description: "Complete 25 speaking exercises",
      icon: "🎤",
      rarity: "Rare",
      color: "purple",
      unlocked: true,
      unlockedAt: "2 weeks ago"
    },
    {
      id: 5,
      name: "Culture Explorer",
      description: "Complete all cultural lessons",
      icon: "🏛️",
      rarity: "Epic",
      color: "yellow",
      unlocked: true,
      unlockedAt: "1 week ago"
    },
    {
      id: 6,
      name: "Marathon Runner",
      description: "Study for 3+ hours in a day",
      icon: "🏃",
      rarity: "Legendary",
      color: "red",
      unlocked: false,
      progress: 75
    }
  ];

  const leaderboard = [
    {
      rank: 1,
      name: "Anna Petrov",
      level: "C1",
      points: 4832,
      streak: 45,
      country: "🇺🇸",
      change: "up"
    },
    {
      rank: 2,
      name: "Mohammed Al",
      level: "B2",
      points: 4621,
      streak: 32,
      country: "🇦🇪",
      change: "up"
    },
    {
      rank: 3,
      name: "Liu Wei",
      level: "B2",
      points: 4203,
      streak: 28,
      country: "🇨🇳",
      change: "down"
    },
    {
      rank: 22,
      name: "Maria García",
      level: "B1",
      points: 2901,
      streak: 15,
      country: "🇪🇸",
      change: "up"
    },
    {
      rank: 23,
      name: "You",
      level: "B1",
      points: 2847,
      streak: 12,
      country: "🌍",
      change: "same",
      isUser: true
    },
    {
      rank: 24,
      name: "Ahmed Hassan",
      level: "B1",
      points: 2798,
      streak: 9,
      country: "🇪🇬",
      change: "down"
    }
  ];

  const dailyChallenges = [
    {
      title: "Vocabulary Sprint",
      description: "Learn 15 new words",
      progress: 12,
      target: 15,
      points: 50,
      icon: Brain,
      difficulty: "Easy",
      timeLeft: "4h 23m"
    },
    {
      title: "Grammar Perfect",
      description: "Get 100% on grammar quiz",
      progress: 0,
      target: 1,
      points: 100,
      icon: Target,
      difficulty: "Medium",
      timeLeft: "4h 23m"
    },
    {
      title: "Speaking Practice",
      description: "Complete 3 conversation exercises",
      progress: 1,
      target: 3,
      points: 75,
      icon: Users,
      difficulty: "Medium",
      timeLeft: "4h 23m"
    }
  ];

  const achievements = [
    {
      category: "Learning Milestones",
      items: [
        { name: "A1 Graduate", icon: "🎓", unlocked: true },
        { name: "A2 Graduate", icon: "🎓", unlocked: true },
        { name: "B1 Graduate", icon: "🎓", unlocked: false, progress: 65 },
        { name: "B2 Graduate", icon: "🎓", unlocked: false },
        { name: "C1 Graduate", icon: "🎓", unlocked: false }
      ]
    },
    {
      category: "Streaks & Consistency",
      items: [
        { name: "3-Day Streak", icon: "🔥", unlocked: true },
        { name: "Week Warrior", icon: "⚡", unlocked: true },
        { name: "Month Master", icon: "💎", unlocked: false, progress: 40 },
        { name: "Year Legend", icon: "👑", unlocked: false }
      ]
    },
    {
      category: "Skills Mastery",
      items: [
        { name: "Vocabulary Virtuoso", icon: "📖", unlocked: true },
        { name: "Grammar Guru", icon: "✍️", unlocked: true },
        { name: "Speaking Superstar", icon: "🎤", unlocked: true },
        { name: "Culture Connoisseur", icon: "🏛️", unlocked: true },
        { name: "Pronunciation Pro", icon: "🗣️", unlocked: false, progress: 85 }
      ]
    }
  ];

  const pointActivities = [
    { activity: "Daily lesson completed", points: "+25", time: "2 hours ago", type: "lesson" },
    { activity: "Speaking exercise perfect score", points: "+50", time: "3 hours ago", type: "speaking" },
    { activity: "7-day streak milestone", points: "+100", time: "Yesterday", type: "streak" },
    { activity: "Grammar quiz completed", points: "+30", time: "Yesterday", type: "quiz" },
    { activity: "Cultural lesson finished", points: "+40", time: "2 days ago", type: "culture" }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "text-gray-600 bg-gray-100";
      case "Uncommon": return "text-green-600 bg-green-100";
      case "Rare": return "text-blue-600 bg-blue-100";
      case "Epic": return "text-purple-600 bg-purple-100";
      case "Legendary": return "text-yellow-600 bg-yellow-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <section id="gamification" className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2">
              <Trophy className="w-4 h-4 mr-2" />
              Gamified Learning
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Level Up Your Russian! 🎮
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Track your progress, earn badges, maintain streaks, and compete with learners worldwide. 
            Make learning Russian fun and addictive with our gamification system.
          </p>
        </div>

        {/* User Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="border-border text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{userStats.xp.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total XP</div>
              <Progress value={(userStats.xp / userStats.xpToNext) * 100} className="h-2 mt-2" />
              <div className="text-xs text-muted-foreground mt-1">
                {userStats.xpToNext - userStats.xp} XP to {userStats.level === "B1" ? "B2" : "next level"}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Flame className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{userStats.streak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
              <div className="text-xs text-muted-foreground mt-2">
                Best: {userStats.longestStreak} days
              </div>
            </CardContent>
          </Card>

          <Card className="border-border text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Crown className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">#{userStats.rank}</div>
              <div className="text-sm text-muted-foreground">Global Rank</div>
              <div className="text-xs text-muted-foreground mt-2">
                {userStats.badges} badges earned
              </div>
            </CardContent>
          </Card>

          <Card className="border-border text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{userStats.lessonsCompleted}</div>
              <div className="text-sm text-muted-foreground">Lessons</div>
              <div className="text-xs text-muted-foreground mt-2">
                {userStats.timeStudied} studied
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="challenges" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="challenges">Daily Challenges</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="points">Points Log</TabsTrigger>
          </TabsList>

          {/* Daily Challenges */}
          <TabsContent value="challenges">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {dailyChallenges.map((challenge, index) => {
                const IconComponent = challenge.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="text-right">
                          <Badge variant="outline">{challenge.difficulty}</Badge>
                          <div className="text-xs text-muted-foreground mt-1">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {challenge.timeLeft}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{challenge.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{challenge.progress}/{challenge.target}</span>
                        </div>
                        <Progress value={(challenge.progress / challenge.target) * 100} className="h-2" />
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm font-medium">{challenge.points} XP</span>
                        </div>
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                          Continue
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Weekly Challenge */}
            <Card className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Weekly Challenge: Cultural Expert</h3>
                    <p className="text-muted-foreground mb-3">
                      Complete all cultural lessons and score 90%+ on the cultural quiz to earn a special badge!
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <Progress value={65} className="h-3" />
                        <div className="text-sm text-muted-foreground mt-1">65% complete • 3 days left</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-yellow-600">500 XP</div>
                        <div className="text-sm text-muted-foreground">Reward</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Badges */}
          <TabsContent value="badges">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {badges.map((badge) => (
                <Card 
                  key={badge.id} 
                  className={`border-border transition-all ${
                    badge.unlocked ? 'hover:shadow-lg' : 'opacity-60'
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`text-4xl mb-3 ${badge.unlocked ? '' : 'grayscale'}`}>
                      {badge.icon}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{badge.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{badge.description}</p>
                    
                    <Badge className={getRarityColor(badge.rarity)}>
                      {badge.rarity}
                    </Badge>
                    
                    {badge.unlocked ? (
                      <div className="mt-3">
                        <div className="flex items-center justify-center gap-1 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Unlocked</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {badge.unlockedAt}
                        </div>
                      </div>
                    ) : (
                      <div className="mt-3">
                        {badge.progress && (
                          <>
                            <Progress value={badge.progress} className="h-2 mb-2" />
                            <div className="text-xs text-muted-foreground">
                              {badge.progress}% complete
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Leaderboard */}
          <TabsContent value="leaderboard">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  Global Leaderboard
                </CardTitle>
                <p className="text-sm text-muted-foreground">Top learners this month</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-lg border ${
                        user.isUser ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-border'
                      }`}
                    >
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
                        user.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                        user.rank === 2 ? 'bg-gray-100 text-gray-800' :
                        user.rank === 3 ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {user.rank <= 3 ? (
                          user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'
                        ) : (
                          user.rank
                        )}
                      </div>
                      
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={`/api/placeholder/40/40`} />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-medium ${user.isUser ? 'text-blue-800' : 'text-foreground'}`}>
                            {user.name}
                          </span>
                          <span className="text-sm">{user.country}</span>
                          <Badge variant="outline" className="text-xs">{user.level}</Badge>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{user.points.toLocaleString()} XP</span>
                          <span className="flex items-center gap-1">
                            <Flame className="w-3 h-3 text-orange-500" />
                            {user.streak} days
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        {user.change === 'up' && <TrendingUp className="w-4 h-4 text-green-600" />}
                        {user.change === 'down' && <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />}
                        {user.change === 'same' && <div className="w-4 h-4" />}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">
                    View Full Leaderboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements */}
          <TabsContent value="achievements">
            <div className="space-y-6">
              {achievements.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="border-border">
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className={`text-center p-4 border rounded-lg transition-all ${
                            item.unlocked 
                              ? 'border-green-200 bg-green-50 hover:shadow-md' 
                              : 'border-border bg-gray-50'
                          }`}
                        >
                          <div className={`text-3xl mb-2 ${item.unlocked ? '' : 'grayscale opacity-60'}`}>
                            {item.icon}
                          </div>
                          <div className="text-sm font-medium text-foreground mb-1">{item.name}</div>
                          
                          {item.unlocked ? (
                            <div className="flex items-center justify-center gap-1 text-green-600">
                              <CheckCircle className="w-3 h-3" />
                              <span className="text-xs">Unlocked</span>
                            </div>
                          ) : item.progress ? (
                            <>
                              <Progress value={item.progress} className="h-1 mb-1" />
                              <div className="text-xs text-muted-foreground">{item.progress}%</div>
                            </>
                          ) : (
                            <div className="text-xs text-muted-foreground">Locked</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Points Log */}
          <TabsContent value="points">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pointActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border-l-4 border-blue-200 bg-blue-50 rounded-r-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        {activity.type === 'lesson' && <CheckCircle className="w-4 h-4 text-blue-600" />}
                        {activity.type === 'speaking' && <Users className="w-4 h-4 text-blue-600" />}
                        {activity.type === 'streak' && <Flame className="w-4 h-4 text-orange-600" />}
                        {activity.type === 'quiz' && <Brain className="w-4 h-4 text-purple-600" />}
                        {activity.type === 'culture' && <Globe className="w-4 h-4 text-green-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">{activity.activity}</div>
                        <div className="text-xs text-muted-foreground">{activity.time}</div>
                      </div>
                      <div className="text-sm font-bold text-green-600">{activity.points}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Climb the Leaderboard?
          </h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Join thousands of motivated learners competing to master Russian. Earn XP, unlock badges, 
            and celebrate your achievements along the way!
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8">
            <Trophy className="w-5 h-5 mr-2" />
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
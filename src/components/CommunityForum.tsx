import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Button } from "./ui/button-simple";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs-simple";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar-simple";
import { Input } from "./ui/input-simple";
import { Textarea } from "./ui/textarea-simple";
import { 
  MessageCircle, 
  Users, 
  Heart,
  Reply,
  Pin,
  Star,
  Search,
  Filter,
  Plus,
  Bookmark,
  Flag,
  TrendingUp,
  Clock,
  MapPin,
  Globe,
  HelpCircle,
  Lightbulb,
  Coffee,
  BookOpen
} from "./ui/icons-simple";

export function CommunityForum() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const forumCategories = [
    {
      id: "all",
      name: "All Posts",
      count: 1247,
      color: "gray",
      icon: MessageCircle
    },
    {
      id: "questions",
      name: "Questions & Help",
      count: 423,
      color: "blue",
      icon: HelpCircle
    },
    {
      id: "study-tips",
      name: "Study Tips",
      count: 186,
      color: "green",
      icon: Lightbulb
    },
    {
      id: "culture",
      name: "Russian Culture",
      count: 267,
      color: "purple",
      icon: Globe
    },
    {
      id: "jobs",
      name: "Jobs & Career",
      count: 154,
      color: "orange",
      icon: Coffee
    },
    {
      id: "university",
      name: "University Life",
      count: 217,
      color: "red",
      icon: BookOpen
    }
  ];

  const forumPosts = [
    {
      id: 1,
      title: "Best apps for practicing Russian pronunciation?",
      content: "I'm struggling with the ы sound and want to practice more. What apps or tools do you recommend for pronunciation practice?",
      author: {
        name: "Maria Santos",
        level: "A2",
        country: "🇧🇷",
        avatar: "/api/placeholder/40/40",
        points: 1247
      },
      category: "questions",
      replies: 23,
      likes: 45,
      isPinned: false,
      timeAgo: "2 hours ago",
      tags: ["pronunciation", "apps", "beginner"]
    },
    {
      id: 2,
      title: "Just got accepted to Moscow State University! 🎉",
      content: "After 2 years of studying Russian, I finally got accepted! Thank you to this community for all the support. Happy to answer questions about the application process.",
      author: {
        name: "Ahmed Hassan",
        level: "B2",
        country: "🇪🇬",
        avatar: "/api/placeholder/40/40",
        points: 3456
      },
      category: "university",
      replies: 67,
      likes: 234,
      isPinned: true,
      timeAgo: "5 hours ago",
      tags: ["мгу", "university", "success-story"]
    },
    {
      id: 3,
      title: "Russian keyboard shortcuts and typing tips",
      content: "For those struggling with typing in Russian, here are some keyboard shortcuts and tips that have helped me increase my typing speed...",
      author: {
        name: "Liu Wei",
        level: "B1",
        country: "🇨🇳",
        avatar: "/api/placeholder/40/40",
        points: 2134
      },
      category: "study-tips",
      replies: 31,
      likes: 89,
      isPinned: false,
      timeAgo: "1 day ago",
      tags: ["typing", "keyboard", "productivity"]
    },
    {
      id: 4,
      title: "Understanding Russian workplace culture",
      content: "I just started working at a Russian company and want to understand the workplace etiquette better. What should I know about meeting culture, communication style, etc.?",
      author: {
        name: "Emma Johnson",
        level: "B2",
        country: "🇺🇸",
        avatar: "/api/placeholder/40/40",
        points: 1876
      },
      category: "culture",
      replies: 45,
      likes: 78,
      isPinned: false,
      timeAgo: "2 days ago",
      tags: ["workplace", "culture", "etiquette"]
    },
    {
      id: 5,
      title: "Part-time job recommendations in St. Petersburg",
      content: "Moving to St. Petersburg next month for studies. Looking for part-time job opportunities that are friendly to international students. Any recommendations?",
      author: {
        name: "Carlos Rodriguez",
        level: "B1",
        country: "🇪🇸",
        avatar: "/api/placeholder/40/40",
        points: 987
      },
      category: "jobs",
      replies: 28,
      likes: 56,
      isPinned: false,
      timeAgo: "3 days ago",
      tags: ["petersburg", "part-time", "student-jobs"]
    }
  ];

  const trendingTopics = [
    { topic: "TORFL preparation", posts: 89, growth: "+23%" },
    { topic: "Moscow winter tips", posts: 67, growth: "+45%" },
    { topic: "Russian movies", posts: 134, growth: "+12%" },
    { topic: "Job interview help", posts: 56, growth: "+67%" },
    { topic: "Grammar cases", posts: 203, growth: "+8%" }
  ];

  const activeMembers = [
    {
      name: "Dmitri Volkov",
      role: "Native Speaker",
      level: "Mentor",
      country: "🇷🇺",
      points: 15670,
      helpfulAnswers: 234,
      isOnline: true
    },
    {
      name: "Anna Petrov",
      role: "Community Leader",
      level: "C1",
      country: "🇺🇸",
      points: 8934,
      helpfulAnswers: 156,
      isOnline: true
    },
    {
      name: "Ivan Sergeev",
      role: "Native Speaker",
      level: "Mentor",
      country: "🇷🇺",
      points: 12340,
      helpfulAnswers: 189,
      isOnline: false
    },
    {
      name: "Sofia Chen",
      role: "Study Buddy",
      level: "B2",
      country: "🇨🇳",
      points: 4567,
      helpfulAnswers: 78,
      isOnline: true
    }
  ];

  const studyGroups = [
    {
      name: "A2 Grammar Practice",
      members: 156,
      activity: "Daily exercises",
      nextSession: "Today 7 PM MSK",
      category: "grammar"
    },
    {
      name: "B1 Conversation Club",
      members: 89,
      activity: "Speaking practice",
      nextSession: "Tomorrow 6 PM MSK",
      category: "speaking"
    },
    {
      name: "Moscow Meetup Group",
      members: 234,
      activity: "In-person meetings",
      nextSession: "Saturday 3 PM",
      category: "meetup"
    },
    {
      name: "TORFL Prep Squad",
      members: 67,
      activity: "Exam preparation",
      nextSession: "Wednesday 8 PM MSK",
      category: "exam"
    }
  ];

  const getCategoryColor = (category: string) => {
    const cat = forumCategories.find(c => c.id === category);
    return cat ? cat.color : 'gray';
  };

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2">
              <Users className="w-4 h-4 mr-2" />
              Community Forum
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join the Russian Learning Community 👥
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with fellow learners, native speakers, and mentors. Ask questions, share experiences, 
            and find study partners from around the world.
          </p>
          
          {/* Community Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm">15,000+ Members</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm">50+ Daily Posts</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-border">
              <Globe className="w-5 h-5 text-purple-600" />
              <span className="text-sm">80+ Countries</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="forum" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="forum">Forum Posts</TabsTrigger>
            <TabsTrigger value="groups">Study Groups</TabsTrigger>
            <TabsTrigger value="members">Active Members</TabsTrigger>
            <TabsTrigger value="create">Create Post</TabsTrigger>
          </TabsList>

          {/* Forum Posts */}
          <TabsContent value="forum">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Categories */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {forumCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                          <div
                            key={category.id}
                            className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                              selectedCategory === category.id 
                                ? 'bg-blue-50 border border-blue-200' 
                                : 'hover:bg-gray-50'
                            }`}
                            onClick={() => setSelectedCategory(category.id)}
                          >
                            <div className="flex items-center gap-2">
                              <IconComponent className={category.id === 'all' ? 'w-4 h-4 text-gray-600' :
                                                             category.id === 'questions' ? 'w-4 h-4 text-blue-600' :
                                                             category.id === 'study-tips' ? 'w-4 h-4 text-green-600' :
                                                             category.id === 'culture' ? 'w-4 h-4 text-purple-600' :
                                                             category.id === 'jobs' ? 'w-4 h-4 text-orange-600' :
                                                             'w-4 h-4 text-red-600'} />
                              <span className="text-sm font-medium">{category.name}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">{category.count}</Badge>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Trending Topics */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                      Trending
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {trendingTopics.map((topic, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-foreground">{topic.topic}</div>
                            <div className="text-xs text-muted-foreground">{topic.posts} posts</div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            {topic.growth}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-4">
                {/* Search and Filter */}
                <Card className="border-border">
                  <CardContent className="p-4">
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder="Search posts..." className="pl-10" />
                      </div>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Plus className="w-4 h-4 mr-2" />
                        New Post
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Forum Posts */}
                <div className="space-y-4">
                  {forumPosts
                    .filter(post => selectedCategory === "all" || post.category === selectedCategory)
                    .map((post) => (
                    <Card key={post.id} className="border-border hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  {post.isPinned && <Pin className="w-4 h-4 text-orange-600" />}
                                  <h3 className="font-bold text-foreground hover:text-blue-600 cursor-pointer">
                                    {post.title}
                                  </h3>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <span>{post.author.name}</span>
                                  <span>{post.author.country}</span>
                                  <Badge variant="outline" className="text-xs">{post.author.level}</Badge>
                                  <span>•</span>
                                  <Clock className="w-3 h-3" />
                                  <span>{post.timeAgo}</span>
                                </div>
                              </div>
                              
                              <Button variant="ghost" size="sm">
                                <Bookmark className="w-4 h-4" />
                              </Button>
                            </div>
                            
                            <p className="text-muted-foreground mb-3 line-clamp-2">{post.content}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-1">
                                {post.tags.map((tag, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex items-center gap-4">
                                <Button variant="ghost" size="sm" className="text-muted-foreground">
                                  <Heart className="w-4 h-4 mr-1" />
                                  {post.likes}
                                </Button>
                                <Button variant="ghost" size="sm" className="text-muted-foreground">
                                  <Reply className="w-4 h-4 mr-1" />
                                  {post.replies}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Study Groups */}
          <TabsContent value="groups">
            <div className="grid md:grid-cols-2 gap-6">
              {studyGroups.map((group, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{group.activity}</p>
                      </div>
                      <Badge variant="outline">{group.members} members</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-muted-foreground">
                          Next session: <strong>{group.nextSession}</strong>
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                          {[...Array(4)].map((_, i) => (
                            <Avatar key={i} className="w-8 h-8 border-2 border-white">
                              <AvatarImage src={`/api/placeholder/32/32`} />
                              <AvatarFallback>U{i}</AvatarFallback>
                            </Avatar>
                          ))}
                          <div className="w-8 h-8 bg-gray-100 border-2 border-white rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium">+{group.members - 4}</span>
                          </div>
                        </div>
                        
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                          Join Group
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Active Members */}
          <TabsContent value="members">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeMembers.map((member, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <Avatar className="w-16 h-16 mx-auto">
                        <AvatarImage src={`/api/placeholder/64/64`} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {member.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-sm text-muted-foreground">{member.country}</span>
                      <Badge variant="outline" className="text-xs">{member.level}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                      <div>
                        <div className="font-medium text-foreground">{member.points.toLocaleString()}</div>
                        <div>Community Points</div>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{member.helpfulAnswers}</div>
                        <div>Helpful Answers</div>
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline" className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Create Post */}
          <TabsContent value="create">
            <Card className="border-border max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Create New Post</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Share your question, tip, or experience with the community
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                    <select className="w-full border border-border rounded-md px-3 py-2">
                      <option>Questions & Help</option>
                      <option>Study Tips</option>
                      <option>Russian Culture</option>
                      <option>Jobs & Career</option>
                      <option>University Life</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Title</label>
                    <Input placeholder="What's your post about?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Content</label>
                    <Textarea 
                      placeholder="Share your thoughts, questions, or tips..." 
                      rows={6}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Tags</label>
                    <Input placeholder="Add tags separated by commas (e.g., grammar, beginner, pronunciation)" />
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <div className="text-sm text-muted-foreground">
                      Be respectful and helpful to fellow learners
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">Save Draft</Button>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Plus className="w-4 h-4 mr-2" />
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <Users className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Learning Community Today!
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Connect with thousands of Russian learners, get answers to your questions, 
            and find study partners from around the world.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
            <MessageCircle className="w-5 h-5 mr-2" />
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "./ui/card-simple";
import { Button } from "./ui/button-simple";
import { Badge } from "./ui/badge-simple";
import { FileText, Download, Users, BookOpen, Video, CheckCircle } from "./ui/icons-simple";

export function TeacherMaterials() {
  const resources = [
    {
      category: "Lesson Plans",
      icon: BookOpen,
      items: [
        { name: "A1 Beginner Curriculum", lessons: 40, format: "PDF" },
        { name: "A2 Elementary Curriculum", lessons: 50, format: "PDF" },
        { name: "B1 Intermediate Curriculum", lessons: 60, format: "PDF" }
      ]
    },
    {
      category: "Worksheets",
      icon: FileText,
      items: [
        { name: "Grammar Exercises Pack", lessons: 200, format: "PDF + Answer Keys" },
        { name: "Vocabulary Builders", lessons: 150, format: "PDF + Audio" },
        { name: "Conversation Starters", lessons: 100, format: "PDF" }
      ]
    },
    {
      category: "Multimedia",
      icon: Video,
      items: [
        { name: "Audio Dialogues Library", lessons: 120, format: "MP3 + Transcripts" },
        { name: "Pronunciation Videos", lessons: 50, format: "Video" },
        { name: "Cultural Videos", lessons: 30, format: "Video + Notes" }
      ]
    }
  ];

  const features = [
    "Aligned with CEFR standards",
    "Ready-to-use lesson plans",
    "Printable worksheets",
    "Answer keys included",
    "Customizable materials",
    "Regular updates"
  ];

  return (
    <section id="teacher-materials" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-indigo-600 text-white mb-4">👨‍🏫 For Teachers</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Teaching Materials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Free professional teaching resources for Russian language instructors. 
            Save time with our comprehensive, CEFR-aligned curriculum and materials.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="border-border shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <resource.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{resource.category}</h3>
                    <p className="text-sm text-muted-foreground">Professional resources</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {resource.items.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm flex-1">{item.name}</h4>
                        <Badge className="bg-indigo-600 text-white ml-2">{item.lessons}+</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground mb-3">{item.format}</div>
                      <Button size="sm" variant="outline" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <Card className="border-border shadow-lg mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">What's Included</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sample Materials */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="font-bold text-xl mb-3">Sample Lesson Plan</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Level:</span>
                    <span className="font-medium">A1 - Lesson 5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Topic:</span>
                    <span className="font-medium">Introductions & Greetings</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">60 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Included:</span>
                    <span className="font-medium">Slides, Worksheets, Audio</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                <li>• Warm-up activity (5 min)</li>
                <li>• Vocabulary introduction (15 min)</li>
                <li>• Grammar practice (20 min)</li>
                <li>• Role-play exercises (15 min)</li>
                <li>• Homework assignment (5 min)</li>
              </ul>
              <Button variant="outline" className="w-full">
                Preview Full Lesson
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-bold text-xl mb-3">Assessment Tools</h3>
              <div className="space-y-3 mb-4">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="font-medium mb-1">Placement Tests</div>
                  <div className="text-sm text-muted-foreground">Determine student levels (A1-C1)</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="font-medium mb-1">Progress Tests</div>
                  <div className="text-sm text-muted-foreground">End-of-unit assessments</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="font-medium mb-1">Speaking Rubrics</div>
                  <div className="text-sm text-muted-foreground">Evaluate oral proficiency</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="font-medium mb-1">Writing Prompts</div>
                  <div className="text-sm text-muted-foreground">With grading criteria</div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Download Assessment Pack
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Teacher Community */}
        <Card className="border-border bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Join the Teacher Community</h3>
                </div>
                <p className="text-indigo-100 mb-4">
                  Connect with 500+ Russian language teachers worldwide. Share materials, 
                  exchange ideas, and collaborate on curriculum development.
                </p>
                <ul className="space-y-2 text-indigo-100">
                  <li>• Monthly webinars and training sessions</li>
                  <li>• Private forum for teachers only</li>
                  <li>• Material sharing and collaboration</li>
                  <li>• Professional development resources</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Join Community
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Teaching?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Download our complete teaching materials package and start using professional 
            resources in your classroom today. All materials are free for registered teachers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-8">
              <Download className="w-5 h-5 mr-2" />
              Download Full Package
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Browse Materials
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            ✓ Free for teachers • ✓ Regular updates • ✓ CEFR-aligned
          </p>
        </div>
      </div>
    </section>
  );
}

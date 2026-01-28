import { useState } from 'react';
import { Card, CardContent } from "./ui/card-simple";
import { Button } from "./ui/button-simple";
import { Badge } from "./ui/badge-simple";
import { Progress } from "./ui/progress-simple";
import { CheckCircle, ChevronRight, Clock, Target, Award } from "./ui/icons-simple";

export function PlacementTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [estimatedLevel, setEstimatedLevel] = useState("A1");

  const features = [
    {
      icon: Clock,
      title: "15 Minutes",
      description: "Quick and comprehensive test"
    },
    {
      icon: Target,
      title: "Accurate Results",
      description: "Find your true CEFR level"
    },
    {
      icon: Award,
      title: "Personalized Path",
      description: "Get custom learning plan"
    }
  ];

  const sampleQuestions = [
    "I can introduce myself in Russian",
    "I understand basic conversations",
    "I can read simple texts",
    "I can write about familiar topics"
  ];

  return (
    <section id="placement-test" className="py-20 bg-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-600 text-white mb-4">Free Placement Test</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Your Starting Level
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take our free CEFR-based placement test to discover your current Russian proficiency level 
            and get a personalized learning path designed just for you.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Test Preview */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-border shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {sampleQuestions.length}
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    Progress: {Math.round(((currentQuestion + 1) / sampleQuestions.length) * 100)}%
                  </span>
                </div>
                <Progress value={((currentQuestion + 1) / sampleQuestions.length) * 100} className="h-2 mb-6" />
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <p className="text-lg text-foreground mb-4">{sampleQuestions[currentQuestion]}</p>
                  <div className="space-y-3">
                    {["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"].map((option, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left px-4 py-3 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all"
                      >
                        <div className="flex items-center">
                          <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-3"></div>
                          {option}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button 
                    variant="outline"
                    disabled={currentQuestion === 0}
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  >
                    Previous
                  </Button>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      if (currentQuestion < sampleQuestions.length - 1) {
                        setCurrentQuestion(currentQuestion + 1);
                      } else {
                        setShowResults(true);
                      }
                    }}
                  >
                    {currentQuestion < sampleQuestions.length - 1 ? "Next" : "See Results"}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* What's Tested */}
              <div className="border-t border-border pt-6 mt-6">
                <h4 className="font-bold mb-3">What We Test:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Reading comprehension",
                    "Listening skills",
                    "Grammar knowledge",
                    "Vocabulary range",
                    "Writing ability",
                    "Speaking confidence"
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Start Button */}
          <div className="text-center mt-8">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 px-12">
              Start Placement Test
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              No registration required • 100% Free • Instant results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
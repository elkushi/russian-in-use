import { useState } from 'react';
import { Card, CardContent } from "./ui/card-simple";
import { Button } from "./ui/button-simple";
import { Badge } from "./ui/badge-simple";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs-simple";
import { BookOpen, Mic, Download, Search, Volume2, ChevronDown } from "./ui/icons-simple";

export function LearningTools() {
  const [selectedVerb, setSelectedVerb] = useState("говорить");

  const verbConjugations = {
    "говорить": {
      infinitive: "говорить (to speak)",
      present: {
        я: "говорю",
        ты: "говоришь",
        "он/она": "говорит",
        мы: "говорим",
        вы: "говорите",
        они: "говорят"
      },
      past: {
        он: "говорил",
        она: "говорила",
        оно: "говорило",
        они: "говорили"
      },
      future: {
        я: "буду говорить",
        ты: "будешь говорить",
        "он/она": "будет говорить",
        мы: "будем говорить",
        вы: "будете говорить",
        они: "будут говорить"
      }
    }
  };

  const dictionaryWords = [
    { russian: "здравствуйте", translation: "hello (formal)", example: "Здравствуйте! Как дела?", audio: true },
    { russian: "спасибо", translation: "thank you", example: "Спасибо большое!", audio: true },
    { russian: "пожалуйста", translation: "please / you're welcome", example: "Пожалуйста, помогите мне.", audio: true },
  ];

  return (
    <section id="learning-tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-600 text-white mb-4">🛠️ Learning Tools</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Tools for Faster Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access professional-grade learning tools designed to accelerate your Russian language journey.
          </p>
        </div>

        <Tabs defaultValue="pronunciation" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="pronunciation">Pronunciation</TabsTrigger>
            <TabsTrigger value="conjugation">Verb Tool</TabsTrigger>
            <TabsTrigger value="dictionary">My Dictionary</TabsTrigger>
          </TabsList>

          {/* Pronunciation Tool */}
          <TabsContent value="pronunciation">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Mic className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Advanced Pronunciation Mirror</h3>
                    <p className="text-muted-foreground">
                      See and hear native pronunciation with visual feedback
                    </p>
                  </div>

                  {/* Mouth Mirror Visualization */}
                  <div className="bg-gradient-to-b from-purple-50 to-white rounded-2xl p-8 mb-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Native Speaker */}
                      <div className="text-center">
                        <Badge className="bg-green-600 text-white mb-4">Native Speaker</Badge>
                        <div className="bg-white rounded-xl p-6 shadow-md mb-4">
                          <div className="text-6xl mb-4">👄</div>
                          <div className="text-2xl font-bold mb-2">здравствуйте</div>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <Volume2 className="w-4 h-4 mr-2" />
                            Play Audio
                          </Button>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>• Tongue position: mid-high</div>
                          <div>• Lips: rounded</div>
                          <div>• Voice: voiced</div>
                        </div>
                      </div>

                      {/* Your Attempt */}
                      <div className="text-center">
                        <Badge className="bg-blue-600 text-white mb-4">Your Recording</Badge>
                        <div className="bg-white rounded-xl p-6 shadow-md mb-4 border-2 border-dashed border-blue-300">
                          <div className="text-6xl mb-4">🎤</div>
                          <div className="text-lg text-muted-foreground mb-2">Record yourself</div>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Mic className="w-4 h-4 mr-2" />
                            Start Recording
                          </Button>
                        </div>
                        <div className="text-sm text-green-600 font-medium">
                          Match score: -- %
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Common Difficult Sounds */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold mb-4">Practice Difficult Sounds:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["Ы", "Щ", "Ь", "Ъ", "Ж", "Р", "Х", "Ц"].map((sound) => (
                        <button key={sound} className="px-4 py-3 bg-white rounded-lg border-2 border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all font-bold">
                          {sound}
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Verb Conjugation Tool */}
          <TabsContent value="conjugation">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Verb Conjugation Tool</h3>
                    <p className="text-muted-foreground">
                      Master Russian verb conjugations with instant references
                    </p>
                  </div>

                  {/* Verb Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search for any verb (e.g., говорить, делать, быть)..."
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Conjugation Table */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-blue-600 mb-1">
                        {verbConjugations[selectedVerb].infinitive}
                      </h4>
                      <Badge className="bg-gray-200 text-gray-700">Imperfective Verb</Badge>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Present Tense */}
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h5 className="font-bold mb-3 text-blue-600">Present Tense</h5>
                        <div className="space-y-2">
                          {Object.entries(verbConjugations[selectedVerb].present).map(([pronoun, form]) => (
                            <div key={pronoun} className="flex justify-between">
                              <span className="text-muted-foreground">{pronoun}</span>
                              <span className="font-medium">{form}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Past Tense */}
                      <div className="bg-green-50 rounded-lg p-6">
                        <h5 className="font-bold mb-3 text-green-600">Past Tense</h5>
                        <div className="space-y-2">
                          {Object.entries(verbConjugations[selectedVerb].past).map(([pronoun, form]) => (
                            <div key={pronoun} className="flex justify-between">
                              <span className="text-muted-foreground">{pronoun}</span>
                              <span className="font-medium">{form}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Future Tense */}
                      <div className="bg-purple-50 rounded-lg p-6">
                        <h5 className="font-bold mb-3 text-purple-600">Future Tense</h5>
                        <div className="space-y-2">
                          {Object.entries(verbConjugations[selectedVerb].future).map(([pronoun, form]) => (
                            <div key={pronoun} className="flex justify-between">
                              <span className="text-muted-foreground">{pronoun}</span>
                              <span className="font-medium text-sm">{form}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Common Verbs */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h5 className="font-bold mb-3">Common Verbs:</h5>
                    <div className="flex flex-wrap gap-2">
                      {["быть", "иметь", "делать", "говорить", "знать", "видеть", "хотеть", "идти"].map((verb) => (
                        <Button key={verb} variant="outline" size="sm">
                          {verb}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Personal Dictionary */}
          <TabsContent value="dictionary">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">My Personal Dictionary</h3>
                          <p className="text-sm text-muted-foreground">24 words saved</p>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>

                  {/* Add Word */}
                  <div className="mb-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Add new word..."
                        className="flex-1 px-4 py-2 border-2 border-green-200 rounded-lg focus:border-green-600 focus:outline-none"
                      />
                      <Button className="bg-green-600 hover:bg-green-700">Add</Button>
                    </div>
                  </div>

                  {/* Dictionary Entries */}
                  <div className="space-y-4">
                    {dictionaryWords.map((word, index) => (
                      <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-green-600 transition-all">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="text-2xl font-bold text-foreground">{word.russian}</span>
                              {word.audio && (
                                <button className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200">
                                  <Volume2 className="w-4 h-4 text-green-600" />
                                </button>
                              )}
                            </div>
                            <div className="text-muted-foreground mb-2">{word.translation}</div>
                            <div className="text-sm bg-gray-50 rounded px-3 py-2">
                              <span className="text-muted-foreground">Example:</span> {word.example}
                            </div>
                          </div>
                          <button className="text-gray-400 hover:text-red-600">✕</button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* PDF Features */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h5 className="font-bold mb-3">PDF Features:</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>✓</span>
                        <span>Organized by category</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>✓</span>
                        <span>Example sentences included</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>✓</span>
                        <span>Pronunciation guides</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>✓</span>
                        <span>Print-friendly format</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

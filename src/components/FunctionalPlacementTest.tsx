import { useState } from 'react';
import { Card, CardContent } from "./ui/card-simple";
import { Button } from "./ui/button-simple";
import { Badge } from "./ui/badge-simple";
import { Progress } from "./ui/progress-simple";
import { CheckCircle, X, Trophy, RotateCcw } from "./ui/icons-simple";

export function FunctionalPlacementTest() {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Как вас зовут?",
      translation: "What is your name?",
      options: [
        { text: "Меня зовут...", correct: true, level: "A1" },
        { text: "Я называюсь...", correct: false, level: "A2" },
        { text: "Мое имя есть...", correct: false, level: "Wrong" },
        { text: "I don't know", correct: false, level: "Zero" }
      ],
      difficulty: "A1"
    },
    {
      question: "Complete: Я _____ в Москве.",
      translation: "I live in Moscow",
      options: [
        { text: "живу", correct: true, level: "A1" },
        { text: "живёт", correct: false, level: "A1" },
        { text: "живём", correct: false, level: "A1" },
        { text: "I don't know", correct: false, level: "Zero" }
      ],
      difficulty: "A1"
    },
    {
      question: "Вчера я _____ в кино.",
      translation: "Yesterday I went to the cinema",
      options: [
        { text: "ходил", correct: true, level: "A2" },
        { text: "хожу", correct: false, level: "A1" },
        { text: "пойду", correct: false, level: "A2" },
        { text: "I don't know", correct: false, level: "Zero" }
      ],
      difficulty: "A2"
    },
    {
      question: "Which sentence is grammatically correct?",
      translation: "",
      options: [
        { text: "Я бы хотел поехать в Россию", correct: true, level: "B1" },
        { text: "Я хотеть поехать Россия", correct: false, level: "A1" },
        { text: "Я хочу ехать в России", correct: false, level: "A2" },
        { text: "I don't know", correct: false, level: "Zero" }
      ],
      difficulty: "B1"
    },
    {
      question: "Несмотря на плохую погоду, мы _____ гулять.",
      translation: "Despite the bad weather, we went for a walk",
      options: [
        { text: "пошли", correct: true, level: "B2" },
        { text: "идём", correct: false, level: "A2" },
        { text: "ходили", correct: false, level: "B1" },
        { text: "I don't know", correct: false, level: "Zero" }
      ],
      difficulty: "B2"
    }
  ];

  const calculateLevel = () => {
    let correctAnswers = 0;
    answers.forEach((answer, idx) => {
      if (questions[idx].options[answer].correct) {
        correctAnswers++;
      }
    });

    const percentage = (correctAnswers / questions.length) * 100;
    
    if (percentage >= 80) return "B2";
    if (percentage >= 60) return "B1";
    if (percentage >= 40) return "A2";
    if (percentage >= 20) return "A1";
    return "Zero";
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 500);
    }
  };

  const restartTest = () => {
    setTestStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const getLevelDescription = (level: string) => {
    const descriptions: { [key: string]: { title: string; description: string; next: string } } = {
      "Zero": {
        title: "Complete Beginner",
        description: "You're at the starting line! Don't worry, everyone starts here.",
        next: "Start with our A1 Absolute Beginner course"
      },
      "A1": {
        title: "Beginner",
        description: "You know the basics! You can introduce yourself and handle simple conversations.",
        next: "Continue building your foundation with A1-A2 courses"
      },
      "A2": {
        title: "Elementary",
        description: "Great progress! You can handle everyday situations and basic conversations.",
        next: "Work towards B1 to become travel-ready"
      },
      "B1": {
        title: "Intermediate - Travel Ready! ✈️",
        description: "Excellent! You're ready to live and travel in Russia independently.",
        next: "Advance to B2 for professional competence"
      },
      "B2": {
        title: "Upper Intermediate",
        description: "Outstanding! You have strong proficiency and can work professionally in Russian.",
        next: "Reach C1 for near-native fluency"
      }
    };
    return descriptions[level] || descriptions["Zero"];
  };

  if (!testStarted) {
    return (
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-blue-600 text-white mb-4">📝 Free Placement Test</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Discover Your Russian Level
            </h2>
            <p className="text-xl text-muted-foreground">
              Take our quick 5-question placement test to find your starting point
            </p>
          </div>

          <Card className="border-2 border-blue-200 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">What to Expect:</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <div className="text-3xl mb-2">⏱️</div>
                    <div className="font-bold mb-1">5 Questions</div>
                    <div className="text-sm text-muted-foreground">Takes only 2-3 minutes</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">📊</div>
                    <div className="font-bold mb-1">CEFR Aligned</div>
                    <div className="text-sm text-muted-foreground">From Zero to B2 level</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="font-bold mb-1">Instant Results</div>
                    <div className="text-sm text-muted-foreground">Get personalized recommendations</div>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-xl py-6"
                onClick={() => setTestStarted(true)}
              >
                Start Placement Test →
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Free • No sign-up required • Takes 2-3 minutes
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (showResults) {
    const level = calculateLevel();
    const levelInfo = getLevelDescription(level);
    const correctCount = answers.filter((answer, idx) => 
      questions[idx].options[answer].correct
    ).length;

    return (
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-4 border-green-400 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">Test Complete!</h2>
                <p className="text-muted-foreground">Here are your results</p>
              </div>

              {/* Score */}
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-green-600 mb-2">
                  {correctCount}/{questions.length}
                </div>
                <div className="text-xl text-muted-foreground">Correct Answers</div>
              </div>

              {/* Level Badge */}
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 mb-8">
                <div className="text-center">
                  <Badge className="bg-blue-600 text-white text-2xl px-6 py-3 mb-4">
                    Level: {level}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">{levelInfo.title}</h3>
                  <p className="text-muted-foreground mb-4">{levelInfo.description}</p>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-bold text-blue-600 mb-2">📚 Recommended Next Step:</div>
                    <div>{levelInfo.next}</div>
                  </div>
                </div>
              </div>

              {/* Question Review */}
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-4">Your Answers:</h4>
                <div className="space-y-3">
                  {questions.map((q, idx) => {
                    const userAnswer = answers[idx];
                    const isCorrect = q.options[userAnswer].correct;
                    return (
                      <div key={idx} className={`p-4 rounded-lg border-2 ${isCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
                        <div className="flex items-start space-x-3">
                          {isCorrect ? (
                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                          ) : (
                            <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                          )}
                          <div className="flex-1">
                            <div className="font-medium mb-1">{q.question}</div>
                            <div className="text-sm text-muted-foreground mb-2">{q.translation}</div>
                            <div className="text-sm">
                              <span className="font-medium">Your answer: </span>
                              {q.options[userAnswer].text}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-lg py-6">
                  Start Learning at {level}
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 text-lg py-6"
                  onClick={restartTest}
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Retake Test
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  // Test in progress
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const q = questions[currentQuestion];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Question Card */}
        <Card className="border-2 border-blue-200 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <Badge className="bg-purple-600 text-white mb-6">
              Level: {q.difficulty}
            </Badge>

            <h3 className="text-3xl font-bold mb-4">{q.question}</h3>
            {q.translation && (
              <p className="text-lg text-muted-foreground mb-8">{q.translation}</p>
            )}

            <div className="space-y-4">
              {q.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full p-6 text-left border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all text-lg font-medium"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

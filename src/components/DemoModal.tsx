import { useState } from 'react';
import { X, Play, Volume2, CheckCircle } from './ui/icons-simple';
import { Button } from './ui/button-simple';
import { Card, CardContent } from './ui/card-simple';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      title: 'Interactive Lessons',
      description: 'Learn with engaging, bite-sized lessons',
      content: (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-4">
            <h3 className="text-xl font-bold mb-4">Lesson: Greetings</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="w-12 h-12">
                  <Volume2 className="w-5 h-5" />
                </Button>
                <div>
                  <div className="text-2xl font-bold">Привет</div>
                  <div className="text-sm text-muted-foreground">Privet - Hello</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="w-12 h-12">
                  <Volume2 className="w-5 h-5" />
                </Button>
                <div>
                  <div className="text-2xl font-bold">Спасибо</div>
                  <div className="text-sm text-muted-foreground">Spasibo - Thank you</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
        </div>
      )
    },
    {
      title: 'AI Speaking Practice',
      description: 'Practice conversations with AI tutor',
      content: (
        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6">
          <div className="space-y-4">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-4 ml-12">
              <div className="font-medium mb-1">AI Tutor</div>
              <div>Привет! Как дела?</div>
              <div className="text-xs text-muted-foreground mt-1">Hello! How are you?</div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 mr-12">
              <div className="font-medium mb-1">You</div>
              <div>Хорошо, спасибо!</div>
              <div className="text-xs text-muted-foreground mt-1">Good, thank you!</div>
            </div>
            <div className="flex justify-center">
              <Button className="bg-red-600 hover:bg-red-700">
                <Volume2 className="w-4 h-4 mr-2" />
                Start Speaking
              </Button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Progress Tracking',
      description: 'Watch your skills grow day by day',
      content: (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">24</div>
              <div className="text-sm text-muted-foreground">Day Streak 🔥</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-600">A2</div>
              <div className="text-sm text-muted-foreground">Current Level</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-purple-600">856</div>
              <div className="text-sm text-muted-foreground">Words Learned</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-red-600">42h</div>
              <div className="text-sm text-muted-foreground">Study Time</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Platform Demo</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Demo Content */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">{demoSteps[currentStep].title}</h3>
            <p className="text-muted-foreground mb-4">{demoSteps[currentStep].description}</p>
            {demoSteps[currentStep].content}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {demoSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentStep ? 'bg-red-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <div className="flex space-x-2">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Previous
                </Button>
              )}
              {currentStep < demoSteps.length - 1 ? (
                <Button
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Next
                </Button>
              ) : (
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={onClose}
                >
                  Start Free Trial
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { useState } from 'react';
import { Card, CardContent } from './ui/card-simple';
import { Button } from './ui/button-simple';
import { Badge } from './ui/badge-simple';
import { Calculator, TrendingUp, Clock, Target } from './ui/icons-simple';

export function ProgressCalculator() {
  const [currentLevel, setCurrentLevel] = useState('beginner');
  const [targetLevel, setTargetLevel] = useState('b1');
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
  const [showResults, setShowResults] = useState(false);

  const levelHours = {
    'beginner': 0,
    'a1': 100,
    'a2': 200,
    'b1': 400,
    'b2': 600,
    'c1': 800
  };

  const calculateProgress = () => {
    const currentHours = levelHours[currentLevel as keyof typeof levelHours];
    const targetHours = levelHours[targetLevel as keyof typeof levelHours];
    const requiredHours = targetHours - currentHours;
    const weeks = Math.ceil(requiredHours / hoursPerWeek);
    const months = Math.ceil(weeks / 4);
    
    return { requiredHours, weeks, months };
  };

  const { requiredHours, weeks, months } = calculateProgress();

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-blue-600 text-white mb-4">
            <Calculator className="inline mr-2" />
            Progress Calculator
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Long to Fluency?
          </h2>
          <p className="text-xl text-muted-foreground">
            Get a personalized timeline based on your goals and schedule
          </p>
        </div>

        <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-2xl">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Current Level */}
              <div>
                <label className="block font-medium mb-3">Current Level</label>
                <select
                  value={currentLevel}
                  onChange={(e) => setCurrentLevel(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-lg"
                >
                  <option value="beginner">Complete Beginner</option>
                  <option value="a1">A1 - Beginner</option>
                  <option value="a2">A2 - Elementary</option>
                  <option value="b1">B1 - Intermediate</option>
                  <option value="b2">B2 - Upper Intermediate</option>
                </select>
              </div>

              {/* Target Level */}
              <div>
                <label className="block font-medium mb-3">Target Level</label>
                <select
                  value={targetLevel}
                  onChange={(e) => setTargetLevel(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-lg"
                >
                  <option value="a1">A1 - Basic Communication</option>
                  <option value="a2">A2 - Everyday Situations</option>
                  <option value="b1">B1 - Travel Ready 🎯</option>
                  <option value="b2">B2 - Professional Fluency</option>
                  <option value="c1">C1 - Advanced Mastery</option>
                </select>
              </div>
            </div>

            {/* Study Hours */}
            <div className="mb-8">
              <label className="block font-medium mb-3">
                Study Hours Per Week: <span className="text-blue-600 font-bold">{hoursPerWeek}h</span>
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1h/week</span>
                <span>10h/week</span>
                <span>20h/week</span>
              </div>
            </div>

            <Button
              onClick={() => setShowResults(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
            >
              Calculate My Timeline
            </Button>

            {/* Results */}
            {showResults && requiredHours > 0 && (
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                <h3 className="text-xl font-bold mb-6 text-center">Your Personalized Timeline</h3>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                    <Clock className="mx-auto mb-2" />
                    <div className="text-3xl font-bold text-blue-600">{requiredHours}h</div>
                    <div className="text-sm text-muted-foreground">Total Study Hours</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                    <TrendingUp className="mx-auto mb-2" />
                    <div className="text-3xl font-bold text-green-600">{weeks}</div>
                    <div className="text-sm text-muted-foreground">Weeks to Goal</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                    <Target className="mx-auto mb-2" />
                    <div className="text-3xl font-bold text-purple-600">{months}</div>
                    <div className="text-sm text-muted-foreground">Months Estimated</div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2">What You'll Achieve:</h4>
                  <ul className="space-y-2 text-sm">
                    {targetLevel === 'b1' && (
                      <>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Travel to Russia and communicate confidently</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Handle everyday situations independently</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Make Russian friends and socialize</span>
                        </li>
                      </>
                    )}
                    {targetLevel === 'b2' && (
                      <>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Work in Russian-speaking environments</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Study at Russian universities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Understand movies and news</span>
                        </li>
                      </>
                    )}
                    {targetLevel === 'c1' && (
                      <>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Near-native fluency in professional contexts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Lead teams and give presentations in Russian</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Read literature and write professionally</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <p className="text-sm">
                    <span className="font-bold">💡 Pro Tip:</span> Students who study consistently reach their goals 
                    40% faster than those who study sporadically. Set a daily reminder!
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

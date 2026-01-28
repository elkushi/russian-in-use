import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card-simple';
import { Button } from './ui/button-simple';
import { Badge } from './ui/badge-simple';
import { Trophy, RotateCcw } from './ui/icons-simple';

export function KeyboardTrainer() {
  const [currentWord, setCurrentWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);

  const words = [
    { russian: 'привет', english: 'hello' },
    { russian: 'спасибо', english: 'thank you' },
    { russian: 'пожалуйста', english: 'please' },
    { russian: 'хорошо', english: 'good' },
    { russian: 'до свидания', english: 'goodbye' },
    { russian: 'здравствуйте', english: 'hello (formal)' },
    { russian: 'извините', english: 'excuse me' },
    { russian: 'я люблю', english: 'I love' },
  ];

  const keyboard = [
    ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
    ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
    ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ' ']
  ];

  useEffect(() => {
    if (round === 0) {
      newRound();
    }
  }, []);

  const newRound = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord.russian);
    setUserInput('');
    setStartTime(Date.now());
  };

  const handleKeyClick = (char: string) => {
    const newInput = userInput + char;
    setUserInput(newInput);

    if (newInput === currentWord) {
      setScore(score + 1);
      setRound(round + 1);
      
      // Calculate WPM
      if (startTime) {
        const timeElapsed = (Date.now() - startTime) / 1000 / 60; // minutes
        const wordsTyped = currentWord.split(' ').length;
        setWpm(Math.round(wordsTyped / timeElapsed));
      }
      
      setTimeout(newRound, 500);
    } else if (!currentWord.startsWith(newInput)) {
      // Wrong character - shake animation
      setUserInput(userInput);
    }
  };

  const handleReset = () => {
    setScore(0);
    setRound(0);
    setWpm(0);
    newRound();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-purple-600 text-white mb-4">
            ⌨️ Interactive Tool
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Russian Keyboard Trainer
          </h2>
          <p className="text-xl text-muted-foreground">
            Master typing in Cyrillic with our interactive keyboard practice
          </p>
        </div>

        <Card className="border-2 border-purple-200 dark:border-purple-800 shadow-2xl mb-8">
          <CardContent className="p-8">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">Score</div>
                <div className="text-3xl font-bold text-purple-600">{score}</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">Round</div>
                <div className="text-3xl font-bold text-blue-600">{round}</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">WPM</div>
                <div className="text-3xl font-bold text-green-600">{wpm || '-'}</div>
              </div>
            </div>

            {/* Word Display */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 mb-6">
              <div className="text-center mb-4">
                <div className="text-sm text-muted-foreground mb-2">Type this word:</div>
                <div className="text-4xl font-bold mb-2">{currentWord}</div>
                <div className="text-sm text-muted-foreground">
                  ({words.find(w => w.russian === currentWord)?.english})
                </div>
              </div>
              
              {/* User Input Display */}
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center min-h-[60px] flex items-center justify-center">
                <div className="text-2xl font-mono">
                  {userInput || <span className="text-gray-400">Start typing...</span>}
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>

            {/* Virtual Keyboard */}
            <div className="space-y-2 mb-6">
              {keyboard.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center space-x-2">
                  {row.map((char) => (
                    <button
                      key={char}
                      onClick={() => handleKeyClick(char)}
                      className={`
                        w-12 h-12 rounded-lg font-bold text-lg
                        transition-all transform active:scale-95
                        ${char === ' ' ? 'w-32' : ''}
                        ${userInput.endsWith(char) 
                          ? 'bg-green-500 text-white' 
                          : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-gray-300 dark:border-gray-600'
                        }
                      `}
                    >
                      {char === ' ' ? 'Space' : char}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {/* Backspace and Reset */}
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setUserInput(userInput.slice(0, -1))}
                className="px-8"
              >
                ← Backspace
              </Button>
              <Button
                onClick={handleReset}
                className="bg-purple-600 hover:bg-purple-700 px-8"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-bold mb-2">Learn Layout</h3>
              <p className="text-sm text-muted-foreground">
                Practice daily to memorize the Cyrillic keyboard layout naturally
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Build Speed</h3>
              <p className="text-sm text-muted-foreground">
                Aim for 40+ WPM to type as fast as you think in Russian
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">⌨️</div>
              <h3 className="font-bold mb-2">Physical Keyboard</h3>
              <p className="text-sm text-muted-foreground">
                You can also use your physical keyboard with Russian layout enabled
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

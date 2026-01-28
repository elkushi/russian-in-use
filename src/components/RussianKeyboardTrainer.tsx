import { useState } from "react";
import { Card, CardContent } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Button } from "./ui/button-simple";
import { CheckCircle, RotateCcw, Target } from "./ui/icons-simple";

export function RussianKeyboardTrainer() {
  const [inputText, setInputText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const phrases = [
    { russian: "Привет", english: "Hello", phonetic: "Privet" },
    { russian: "Спасибо", english: "Thank you", phonetic: "Spasibo" },
    { russian: "Как дела?", english: "How are you?", phonetic: "Kak dela?" },
    { russian: "До свидания", english: "Goodbye", phonetic: "Do svidaniya" },
    { russian: "Меня зовут", english: "My name is", phonetic: "Menya zovut" },
  ];

  const cyrillicLayout = [
    ["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ"],
    ["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"],
    ["Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", " "],
  ];

  const qwertyMapping: Record<string, string> = {
    'q': 'Й', 'w': 'Ц', 'e': 'У', 'r': 'К', 't': 'Е', 'y': 'Н', 'u': 'Г', 'i': 'Ш', 'o': 'Щ', 'p': 'З',
    'a': 'Ф', 's': 'Ы', 'd': 'В', 'f': 'А', 'g': 'П', 'h': 'Р', 'j': 'О', 'k': 'Л', 'l': 'Д',
    'z': 'Я', 'x': 'Ч', 'c': 'С', 'v': 'М', 'b': 'И', 'n': 'Т', 'm': 'Ь'
  };

  const handleKeyClick = (char: string) => {
    setInputText(prev => prev + char);
  };

  const checkAccuracy = () => {
    const target = phrases[currentPhrase].russian.toLowerCase();
    const input = inputText.toLowerCase();
    
    let correct = 0;
    const minLength = Math.min(target.length, input.length);
    
    for (let i = 0; i < minLength; i++) {
      if (target[i] === input[i]) correct++;
    }
    
    const acc = Math.round((correct / target.length) * 100);
    setAccuracy(acc);
    
    if (acc === 100) {
      setTimeout(() => {
        if (currentPhrase < phrases.length - 1) {
          setCurrentPhrase(prev => prev + 1);
          setInputText("");
          setAccuracy(0);
        }
      }, 1500);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setIsActive(true);
  };

  const reset = () => {
    setInputText("");
    setAccuracy(0);
    setIsActive(false);
  };

  const nextPhrase = () => {
    if (currentPhrase < phrases.length - 1) {
      setCurrentPhrase(prev => prev + 1);
      setInputText("");
      setAccuracy(0);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-indigo-600 text-white mb-4">⌨️ Keyboard Trainer</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Master the Russian Keyboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn to type in Cyrillic with our interactive keyboard trainer. Practice typing Russian characters efficiently.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Keyboard Layout Reference */}
          <Card className="lg:col-span-1 border-2 border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">🗺️ QWERTY → Cyrillic</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="font-medium mb-2">Common mappings:</div>
                  <div className="space-y-1 text-xs">
                    <div>Q → Й • W → Ц • E → У</div>
                    <div>R → К • T → Е • Y → Н</div>
                    <div>A → Ф • S → Ы • D → В</div>
                    <div>F → А • G → П • H → Р</div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="font-medium mb-2">💡 Quick Tips:</div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Use Russian keyboard layout</li>
                    <li>• Or use phonetic mappings</li>
                    <li>• Practice daily for muscle memory</li>
                  </ul>
                </div>

                <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="text-xs">
                    <div className="font-medium mb-1">🔧 Setup Guide:</div>
                    <div className="text-gray-600">
                      <strong>Windows:</strong> Settings → Time & Language → Language<br/>
                      <strong>Mac:</strong> System Preferences → Keyboard → Input Sources
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Trainer */}
          <div className="lg:col-span-2 space-y-6">
            {/* Practice Area */}
            <Card className="border-4 border-indigo-200 shadow-xl">
              <CardContent className="p-8">
                {/* Progress */}
                <div className="flex items-center justify-between mb-6">
                  <Badge className="bg-indigo-600 text-white">
                    Phrase {currentPhrase + 1} of {phrases.length}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-medium">
                      Accuracy: <span className={`text-lg ${accuracy === 100 ? 'text-green-600' : 'text-gray-600'}`}>
                        {isActive ? accuracy : '-'}%
                      </span>
                    </span>
                  </div>
                </div>

                {/* Target Phrase */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-600 mb-2">Type this phrase:</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {phrases[currentPhrase].russian}
                    </div>
                    <div className="text-lg text-gray-600 mb-1">
                      {phrases[currentPhrase].phonetic}
                    </div>
                    <div className="text-sm text-gray-500">
                      "{phrases[currentPhrase].english}"
                    </div>
                  </div>

                  {/* Character by character comparison */}
                  <div className="flex justify-center space-x-1 mt-4">
                    {phrases[currentPhrase].russian.split('').map((char, idx) => {
                      const isCorrect = inputText[idx] === char;
                      const isTyped = idx < inputText.length;
                      
                      return (
                        <div
                          key={idx}
                          className={`w-10 h-12 rounded-lg flex items-center justify-center text-xl font-bold border-2 ${
                            isTyped
                              ? isCorrect
                                ? 'bg-green-100 border-green-500 text-green-700'
                                : 'bg-red-100 border-red-500 text-red-700'
                              : 'bg-white border-gray-300 text-gray-400'
                          }`}
                        >
                          {isTyped ? inputText[idx] : char}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Input Area */}
                <div className="mb-6">
                  <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyUp={checkAccuracy}
                    placeholder="Start typing in Russian..."
                    className="w-full text-2xl p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    autoFocus
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <Button
                    onClick={reset}
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset</span>
                  </Button>

                  {accuracy === 100 && (
                    <div className="flex items-center space-x-2 text-green-600 font-bold animate-bounce">
                      <CheckCircle className="w-6 h-6" />
                      <span>Perfect! 🎉</span>
                    </div>
                  )}

                  <Button
                    onClick={nextPhrase}
                    disabled={currentPhrase === phrases.length - 1}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Next Phrase →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Virtual Keyboard */}
            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 text-center">Virtual Cyrillic Keyboard</h3>
                <div className="space-y-2">
                  {cyrillicLayout.map((row, rowIdx) => (
                    <div key={rowIdx} className="flex justify-center space-x-1">
                      {row.map((char, charIdx) => (
                        <button
                          key={charIdx}
                          onClick={() => handleKeyClick(char.toLowerCase())}
                          className={`${char === ' ' ? 'w-32' : 'w-10'} h-10 bg-white hover:bg-gray-100 border-2 border-gray-300 rounded-lg font-bold text-lg transition-colors hover:border-indigo-600 active:bg-indigo-100`}
                        >
                          {char === ' ' ? 'SPACE' : char}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="text-center text-xs text-gray-500 mt-3">
                  Click keys or use your physical keyboard
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-700">{currentPhrase + 1}/{phrases.length}</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-700">{accuracy}%</div>
                  <div className="text-sm text-gray-600">Current Accuracy</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-700">{inputText.length}</div>
                  <div className="text-sm text-gray-600">Characters Typed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <Card className="border-2 border-yellow-200 bg-yellow-50 max-w-3xl mx-auto">
            <CardContent className="p-6">
              <h4 className="font-bold mb-3">🎯 Why Practice Cyrillic Typing?</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-medium mb-1">Faster Learning</div>
                  <div className="text-gray-600">Type your notes and practice faster</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">💼</div>
                  <div className="font-medium mb-1">Work Ready</div>
                  <div className="text-gray-600">Essential for Russian jobs & studies</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">🧠</div>
                  <div className="font-medium mb-1">Better Retention</div>
                  <div className="text-gray-600">Muscle memory reinforces learning</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

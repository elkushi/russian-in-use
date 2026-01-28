import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card-simple';
import { Button } from './ui/button-simple';
import { Volume2, Share2, Bookmark } from './ui/icons-simple';

export function DailyWord() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const dailyWords = [
    { 
      russian: 'Мечта', 
      transliteration: 'Mechta', 
      english: 'Dream', 
      pronunciation: 'myech-TAH',
      example: 'Моя мечта - жить в России',
      exampleEn: 'My dream is to live in Russia',
      tip: 'This word represents both "dream" as in aspiration and the act of dreaming'
    }
  ];

  const word = dailyWords[0];

  return (
    <div className="fixed top-20 right-4 z-40 w-80 hidden xl:block">
      <Card className="border-2 border-yellow-400 dark:border-yellow-600 shadow-2xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📚</span>
              <span className="font-bold text-sm">Word of the Day</span>
            </div>
            <div className="flex space-x-1">
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="p-1 hover:bg-white/50 rounded transition"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'text-yellow-600' : 'text-gray-400'}`} />
              </button>
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
              {word.russian}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {word.transliteration} • {word.pronunciation}
            </div>
            <div className="text-lg font-medium text-yellow-700 dark:text-yellow-400">
              {word.english}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 mb-3">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Example:</div>
            <div className="font-medium mb-1">{word.example}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{word.exampleEn}</div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 mb-3">
            <div className="text-xs text-blue-700 dark:text-blue-400 mb-1">💡 Tip:</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">{word.tip}</div>
          </div>

          <div className="flex space-x-2">
            <Button className="flex-1 bg-yellow-600 hover:bg-yellow-700" size="sm">
              <Volume2 className="w-4 h-4 mr-1" />
              Listen
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-3 text-center">
            <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
              Subscribe for daily words via email →
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card-simple';
import { Users, TrendingUp } from './ui/icons-simple';

export function SocialProof() {
  const [recentSignups, setRecentSignups] = useState(425);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    
    // Simulate live counter
    const interval = setInterval(() => {
      setRecentSignups(prev => prev + Math.floor(Math.random() * 3));
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-4 z-40 hidden md:block">
      <Card className="w-72 border-2 border-green-200 dark:border-green-800 shadow-2xl bg-white dark:bg-gray-800 animate-slide-in">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-bold">Live Activity</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-bold text-green-600">{recentSignups} people</span> started learning this week
              </p>
              <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                <Users className="w-3 h-3" />
                <span>Join the community</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

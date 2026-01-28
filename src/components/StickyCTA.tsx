import { useState, useEffect } from 'react';
import { Button } from './ui/button-simple';
import { X } from './ui/icons-simple';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past hero section
      if (window.scrollY > 800 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-2xl z-40 transform transition-transform duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <div className="font-bold text-lg">Start Learning Russian Today</div>
              <div className="text-sm text-red-100">7-day free trial • No credit card required</div>
            </div>
            <div className="sm:hidden">
              <div className="font-bold">Start Free Trial</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              className="bg-white text-red-600 hover:bg-red-50 font-bold"
              size="lg"
            >
              Get Started Free
            </Button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-2 hover:bg-red-800 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

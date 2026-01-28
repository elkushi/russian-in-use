import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card-simple';
import { Button } from './ui/button-simple';
import { Badge } from './ui/badge-simple';
import { Zap, Clock } from './ui/icons-simple';

export function LimitedTimeOffer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-4 border-yellow-400 shadow-2xl bg-white dark:bg-gray-800 overflow-hidden">
          <CardContent className="p-0">
            {/* Animated Banner */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 py-2 px-4 text-center font-bold animate-pulse">
              🎉 SPECIAL LAUNCH OFFER - LIMITED TIME ONLY 🎉
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <Badge className="bg-red-600 text-white mb-4 text-lg px-6 py-2">
                  <Zap className="inline mr-2" />
                  First 100 Students Only
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                  Get 3 Months FREE Mentorship
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Plus 50% OFF Premium for Life + Exclusive Career Coaching
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 rounded-lg p-6 mb-8">
                <div className="text-center mb-4">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-red-600" />
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Offer Ends In:</div>
                </div>
                <div className="flex justify-center space-x-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 min-w-[80px] shadow-lg">
                    <div className="text-4xl font-bold text-red-600">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Hours</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-400 self-center">:</div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 min-w-[80px] shadow-lg">
                    <div className="text-4xl font-bold text-red-600">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Minutes</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-400 self-center">:</div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 min-w-[80px] shadow-lg">
                    <div className="text-4xl font-bold text-red-600">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Seconds</div>
                  </div>
                </div>
              </div>

              {/* What You Get */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6 text-center border-2 border-green-200 dark:border-green-800">
                  <div className="text-4xl mb-3">🎓</div>
                  <div className="font-bold text-gray-800 dark:text-white mb-2">3 Months Mentorship</div>
                  <div className="text-2xl font-bold text-green-600 mb-1">FREE</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 line-through">$147 value</div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 text-center border-2 border-blue-200 dark:border-blue-800">
                  <div className="text-4xl mb-3">💎</div>
                  <div className="font-bold text-gray-800 dark:text-white mb-2">Premium Lifetime</div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">50% OFF</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Only $9.50/month</div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-6 text-center border-2 border-purple-200 dark:border-purple-800">
                  <div className="text-4xl mb-3">💼</div>
                  <div className="font-bold text-gray-800 dark:text-white mb-2">Career Coaching</div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">FREE</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 line-through">$99 value</div>
                </div>
              </div>

              {/* Spots Remaining */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Spots Remaining</span>
                  <span className="text-sm font-bold text-red-600">27 / 100</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-500" style={{ width: '27%' }}></div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button 
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white text-xl px-12 py-6 shadow-2xl transform hover:scale-105 transition-transform"
                >
                  <Zap className="w-6 h-6 mr-2" />
                  Claim My Spot Now - 50% OFF
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  ✓ No credit card required for trial • ✓ 30-day money-back guarantee
                </p>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>Cancel Anytime</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>Money-Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

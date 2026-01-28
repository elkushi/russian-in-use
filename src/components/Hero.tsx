import { Button } from "./ui/button-simple";
import { Play, Star } from "./ui/icons-simple";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { DemoModal } from "./DemoModal";

export function Hero() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section id="hero" className="pt-16 pb-20 bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-1 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-muted-foreground ml-2">Trusted by 50,000+ learners</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Master Russian 
              <span className="text-red-600"> Fluently</span>
            </h1>

            <p className="text-lg text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl">
              Whether you're studying abroad, advancing your career, or exploring Russia, 
              our comprehensive Russian learning platform makes fluency achievable. 
              <span className="font-semibold text-red-600"> Reach B1 level and you'll be ready to travel and live in Russia!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3"
                onClick={() => setShowDemo(true)}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642425380184-94b9b60f83aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXNzaWFuJTIwYXJjaGl0ZWN0dXJlJTIwbW9zY293fGVufDF8fHx8MTc1NzA2NzU0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Beautiful Russian architecture in Moscow"
                className="w-full h-96 object-cover"
              />
              {/* Overlay with app preview */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Р</span>
                    </div>
                    <h3 className="font-bold mb-2">Interactive Lessons</h3>
                    <p className="text-sm text-muted-foreground">Learn with native speakers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">50K+</div>
                <div className="text-sm text-muted-foreground">Active Learners</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </section>
  );
}
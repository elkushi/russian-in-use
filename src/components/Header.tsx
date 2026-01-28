import { Button } from "./ui/button-simple";
import { Menu, X } from "./ui/icons-simple";
import { useState } from "react";
import { useDarkMode } from "./contexts/DarkModeContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Р</span>
              </div>
              <span className="text-xl font-bold">RussianAcademy</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-3">
            <a href="#features" className="hover:text-red-600 transition-colors text-sm">
              Features
            </a>
            <a href="#levels" className="hover:text-red-600 transition-colors text-sm">
              Levels
            </a>
            <a href="#placement-test" className="hover:text-red-600 transition-colors text-sm">
              Test
            </a>
            <a href="#learning-tools" className="hover:text-red-600 transition-colors text-sm">
              Tools
            </a>
            <a href="#fast-track-work" className="hover:text-red-600 transition-colors text-sm">
              Fast Track
            </a>
            <a href="#mentor-system" className="hover:text-red-600 transition-colors text-sm">
              Mentors
            </a>
            <a href="#pricing" className="hover:text-red-600 transition-colors text-sm">
              Pricing
            </a>
            <a href="#support-faq" className="hover:text-red-600 transition-colors text-sm">
              Support
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-red-600 hover:bg-red-700">Start Learning</Button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border max-h-96 overflow-y-auto">
              <a
                href="#features"
                className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#levels"
                className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Levels
              </a>
              <a
                href="#placement-test"
                className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Placement Test
              </a>
              <a
                href="#ai-tutor"
                className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Speaking Tutor
              </a>
              <a
                href="#learning-tools"
                className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Learning Tools
              </a>
              <a
                href="#movies-media"
                className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Movies & Media
              </a>
              <a
                href="#fast-track-work"
                className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Fast Track Work
              </a>
              <a
                href="#university"
                className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                University Prep
              </a>
              <a
                href="#pre-arrival"
                className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pre-Arrival Program
              </a>
              <a
                href="#mentor-system"
                className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Mentor System
              </a>
              <a
                href="#teacher-materials"
                className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Teacher Materials
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#support-faq"
                className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Support & FAQ
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full">Sign In</Button>
                <Button className="w-full bg-red-600 hover:bg-red-700">Start Learning</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
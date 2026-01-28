import { useState, useEffect } from 'react';
import { ChevronRight } from './ui/icons-simple';

export function StickyNavigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'levels', label: 'Levels' },
    { id: 'placement-test', label: 'Placement Test' },
    { id: 'ai-tutor', label: 'AI Tutor' },
    { id: 'culture', label: 'Culture' },
    { id: 'specialization', label: 'Specialization' },
    { id: 'fast-track', label: 'Fast Track' },
    { id: 'university', label: 'University' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'support', label: 'Support' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past hero
      setIsVisible(window.scrollY > 500);

      // Detect active section
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-2 max-h-[80vh] overflow-y-auto">
        <div className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center justify-between w-full px-3 py-2 text-sm rounded transition-all ${
                activeSection === section.id
                  ? 'bg-red-600 text-white font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span className="whitespace-nowrap">{section.label}</span>
              {activeSection === section.id && (
                <ChevronRight className="w-3 h-3 ml-2" />
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Progress Indicator */}
      <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-3 text-center">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Progress</div>
        <div className="text-2xl font-bold text-red-600">
          {Math.round(((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100)}%
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { ChevronRight } from "./ui/icons-simple";

export function NavigationMenu() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: "features", label: "Features", emoji: "✨" },
    { id: "levels", label: "Levels", emoji: "📊" },
    { id: "learning-path", label: "Path", emoji: "🗺️" },
    { id: "placement-test", label: "Test", emoji: "📝" },
    { id: "tools", label: "Tools", emoji: "🛠️" },
    { id: "culture", label: "Culture", emoji: "🎭" },
    { id: "professional", label: "Career", emoji: "💼" },
    { id: "fast-track-work", label: "Fast Track", emoji: "⚡" },
    { id: "university", label: "University", emoji: "🎓" },
    { id: "pricing", label: "Pricing", emoji: "💰" },
    { id: "calculator", label: "Calculator", emoji: "📊" },
    { id: "teachers", label: "Teachers", emoji: "👨‍🏫" },
    { id: "success", label: "Success", emoji: "🏆" },
    { id: "support-faq", label: "Support", emoji: "💬" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past hero
      setIsVisible(window.scrollY > 600);

      // Determine active section
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-gray-200 p-2 max-h-[80vh] overflow-y-auto">
        <div className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-left transition-all ${
                activeSection === section.id
                  ? "bg-red-600 text-white shadow-md"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <span className="text-lg">{section.emoji}</span>
              <span className="text-sm font-medium">{section.label}</span>
              {activeSection === section.id && (
                <ChevronRight className="w-4 h-4 ml-auto" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

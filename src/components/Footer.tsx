import { MapPin } from "./ui/icons-simple";

// Simple inline icons for social media
const Facebook = () => <span className="text-lg">📘</span>;
const Twitter = () => <span className="text-lg">🐦</span>;
const Instagram = () => <span className="text-lg">📷</span>;
const Youtube = () => <span className="text-lg">📺</span>;
const Mail = () => <span className="text-lg">📧</span>;
const Phone = () => <span className="text-lg">📞</span>;

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { 
      title: "Product", 
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Placement Test", href: "#placement-test" },
        { name: "Learning Tools", href: "#learning-tools" }
      ]
    },
    { 
      title: "Learning", 
      links: [
        { name: "Language Levels", href: "#levels" },
        { name: "AI Tutor", href: "#ai-tutor" },
        { name: "Fast Track Work", href: "#fast-track-work" },
        { name: "Movies & Media", href: "#movies-media" }
      ]
    },
    { 
      title: "Programs", 
      links: [
        { name: "University Prep", href: "#university" },
        { name: "Pre-Arrival", href: "#pre-arrival" },
        { name: "TORFL Prep", href: "#torfl-prep" },
        { name: "Mentor System", href: "#mentor-system" }
      ]
    },
    { 
      title: "Support", 
      links: [
        { name: "Help Center", href: "#support-faq" },
        { name: "Teacher Materials", href: "#teacher-materials" },
        { name: "Community", href: "#community" },
        { name: "Contact Us", href: "#support-faq" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Р</span>
              </div>
              <span className="text-xl font-bold">RussianAcademy</span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              The most effective way to learn Russian online. Trusted by students, 
              professionals, and travelers worldwide.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>support@russianacademy.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2025 RussianAcademy. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
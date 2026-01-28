// Simple SVG icons to replace lucide-react
export function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function ChevronUp({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  );
}

export function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function X({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function Menu({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

export function Play({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1M9 10v5a2 2 0 002 2h2a2 2 0 002-2v-5" />
    </svg>
  );
}

// Export all other icons as emoji components for simplicity
export const Trophy = () => <span className="text-lg">🏆</span>;
export const Target = () => <span className="text-lg">🎯</span>;
export const Flame = () => <span className="text-lg">🔥</span>;
export const Heart = () => <span className="text-lg">❤️</span>;
export const MessageCircle = () => <span className="text-lg">💬</span>;
export const BookOpen = () => <span className="text-lg">📚</span>;
export const Globe = () => <span className="text-lg">🌍</span>;
export const Award = () => <span className="text-lg">🏅</span>;
export const Calendar = () => <span className="text-lg">📅</span>;
export const MapPin = () => <span className="text-lg">📍</span>;
export const Calculator = () => <span className="text-lg">🧮</span>;
export const Brain = () => <span className="text-lg">🧠</span>;
export const Mic = () => <span className="text-lg">🎤</span>;
export const Headphones = () => <span className="text-lg">🎧</span>;
export const Home = () => <span className="text-lg">🏠</span>;
export const Coffee = () => <span className="text-lg">☕</span>;
export const Building = () => <span className="text-lg">🏢</span>;
export const GraduationCap = () => <span className="text-lg">🎓</span>;
export const Briefcase = () => <span className="text-lg">💼</span>;
export const FileText = () => <span className="text-lg">📄</span>;
export const Download = () => <span className="text-lg">⬇️</span>;
export const Share2 = () => <span className="text-lg">📤</span>;
export const CheckCircle = () => <span className="text-lg">✅</span>;
export const Circle = () => <span className="text-lg">⭕</span>;
export const Plane = () => <span className="text-lg">✈️</span>;
export const Users = () => <span className="text-lg">👥</span>;
export const Clock = () => <span className="text-lg">⏰</span>;
export const Volume2 = () => <span className="text-lg">🔊</span>;
export const DollarSign = () => <span className="text-lg">💰</span>;
export const TrendingUp = () => <span className="text-lg">📈</span>;
export const Shield = () => <span className="text-lg">🛡️</span>;
export const Zap = () => <span className="text-lg">⚡</span>;
export const AlertCircle = () => <span className="text-lg">⚠️</span>;
export const Plus = () => <span className="text-lg">➕</span>;
export const Search = () => <span className="text-lg">🔍</span>;
export const Filter = () => <span className="text-lg">🔽</span>;
export const Pin = () => <span className="text-lg">📌</span>;
export const Bookmark = () => <span className="text-lg">🔖</span>;
export const Flag = () => <span className="text-lg">🚩</span>;
export const Reply = () => <span className="text-lg">↩️</span>;
export const Eye = () => <span className="text-lg">👁️</span>;
export const Link = () => <span className="text-lg">🔗</span>;
export const Medal = () => <span className="text-lg">🏅</span>;
export const Crown = () => <span className="text-lg">👑</span>;
export const Sparkles = () => <span className="text-lg">✨</span>;
export const HelpCircle = () => <span className="text-lg">❓</span>;
export const Lightbulb = () => <span className="text-lg">💡</span>;
export const PiggyBank = () => <span className="text-lg">🐷</span>;
export const CreditCard = () => <span className="text-lg">💳</span>;
export const PenTool = () => <span className="text-lg">✏️</span>;
export const BarChart3 = () => <span className="text-lg">📊</span>;
export const Scale = () => <span className="text-lg">⚖️</span>;
export const Cog = () => <span className="text-lg">⚙️</span>;
export const UtensilsCrossed = () => <span className="text-lg">🍽️</span>;
export const Bus = () => <span className="text-lg">🚌</span>;
export const Shirt = () => <span className="text-lg">👕</span>;
export const Wifi = () => <span className="text-lg">📶</span>;
export const Phone = () => <span className="text-lg">📞</span>;
export const Car = () => <span className="text-lg">🚗</span>;
export const RotateCcw = () => <span className="text-lg">↶</span>;
export const Pause = () => <span className="text-lg">⏸️</span>;
export const MicOff = () => <span className="text-lg">🔇</span>;

// Additional missing icons
export const Truck = () => <span className="text-lg">🚚</span>;
export const ShoppingBag = () => <span className="text-lg">🛍️</span>;
export const Book = () => <span className="text-lg">📖</span>;
export const Video = () => <span className="text-lg">📹</span>;
export const Film = () => <span className="text-lg">🎬</span>;
export const Subtitles = () => <span className="text-lg">💬</span>;
export const Mail = () => <span className="text-lg">📧</span>;
import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Reviews', id: 'testimonials' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 focus:outline-none group"
          >
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform">
              <Scissors className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-navy leading-tight tracking-tight">AJ Salon</div>
              <div className="text-[10px] text-amber-500 font-semibold tracking-widest uppercase leading-none">Style · Beauty · Confidence</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-all duration-150"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-3 btn-gold text-sm"
            >
              Book Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 py-3 space-y-1 bg-white">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-gold w-full text-center"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header = ({ onOpenModal }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <svg 
                className="w-8 h-8 text-brand-600" 
                viewBox="0 0 32 32" 
                fill="currentColor"
              >
                <path d="M2 8C2 6.89543 2.89543 6 4 6H28C29.1046 6 30 6.89543 30 8V24C30 25.1046 29.1046 26 28 26H4C2.89543 26 2 25.1046 2 24V8Z" />
                <path d="M8 12L16 18L24 12" stroke="white" strokeWidth="2" fill="none" />
                <path d="M26 10L28 12L26 14" stroke="#3FA9F5" strokeWidth="2" fill="none" />
              </svg>
              <span className="ml-2 text-xl font-bold text-brand-800">
                Oderland <span className="text-brand-600">Digitalpartner</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { label: 'Leistungen', id: 'services' },
              { label: 'Pakete', id: 'packages' },
              { label: 'Referenzen', id: 'references' },
              { label: 'Ablauf', id: 'process' },
              { label: 'Über uns', id: 'about' },
              { label: 'FAQ', id: 'faq' },
              { label: 'Kontakt', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-brand-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={onOpenModal}
              className="btn-primary flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Kostenloses Erstgespräch</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-brand-600"
            aria-label="Menu öffnen"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              {[
                { label: 'Leistungen', id: 'services' },
                { label: 'Pakete', id: 'packages' },
                { label: 'Referenzen', id: 'references' },
                { label: 'Ablauf', id: 'process' },
                { label: 'Über uns', id: 'about' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Kontakt', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-600 hover:text-brand-600 transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => {
                  onOpenModal();
                  setIsMenuOpen(false);
                }}
                className="btn-primary flex items-center justify-center space-x-2 mt-4"
              >
                <Phone className="w-4 h-4" />
                <span>Kostenloses Erstgespräch</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 wave-decoration pointer-events-none"></div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 200" 
          className="w-full h-32 text-brand-400 opacity-10"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,100 C300,150 900,50 1200,100 L1200,200 L0,200 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-800 leading-tight mb-6">
              Ihr Digitalpartner in{' '}
              <span className="text-brand-600 bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                Märkisch-Oderland
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Websites, Social Media & KI-Automatisierung – speziell für kleine Businesses.
            </p>

            {/* Value Propositions */}
            <div className="space-y-4 mb-8">
              {[
                'Mehr Sichtbarkeit lokal & online',
                'Prozesse automatisieren statt Papierkram',
                'Fair kalkuliert, schnell umgesetzt'
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-emerald flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://calendly.com/oderlanddigitalpartner" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Erstgespräch buchen</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Button 
                onClick={scrollToServices}
                variant="outline"
                className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Play className="w-4 h-4" />
                <span>Leistungen ansehen</span>
              </Button>
            </div>

            {/* Trust indicator */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Bewährte Lösungen für lokale Unternehmen</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Digitale Lösungen für Unternehmen in Brandenburg"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-800/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent-emerald text-white p-3 rounded-full shadow-lg animate-bounce">
              <CheckCircle className="w-6 h-6" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-brand-400 text-white p-3 rounded-full shadow-lg" style={{ animationDelay: '1s' }}>
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
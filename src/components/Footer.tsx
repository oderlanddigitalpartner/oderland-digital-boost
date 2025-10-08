import { useState, useEffect } from 'react';
import { ArrowUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationLinks = [
    { label: 'Leistungen', id: 'services' },
    { label: 'Pakete', id: 'packages' },
    { label: 'Referenzen', id: 'references' },
    { label: 'Ablauf', id: 'process' },
    { label: 'Über uns', id: 'about' },
    { label: 'FAQ', id: 'faq' }
  ];

  const serviceLinks = [
    'Websites',
    'Social Media',
    'KI-Automatisierung',
    'SEO-Optimierung',
    'E-Mail-Marketing',
    'Bestandsaufnahme'
  ];

  return (
    <footer className="bg-brand-800 text-white relative">
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-accent-emerald hover:bg-accent-emerald/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
          aria-label="Zurück nach oben"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
            <img
                src="/favicon.ico"
                alt="Oderland Digitalpartner"
                className="w-8 h-8"
              />
                            <span className="text-xl font-bold">
                Oderland <span className="text-brand-400">Digitalpartner</span>
              </span>
            </div>
            
            <p className="text-brand-200 mb-6 leading-relaxed">
              Ihr regionaler Partner für digitale Lösungen in Brandenburg. 
              Wir bringen kleine Unternehmen erfolgreich ins Netz.
            </p>

            <div className="border-l-4 border-accent-emerald pl-4">
              <p className="text-brand-100 italic">
                "Digital. Regional. Partnerhaft."
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-100">Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-brand-200 hover:text-white transition-colors block w-full text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-accent-emerald hover:text-white transition-colors font-medium"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-100">Leistungen</h3>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-brand-200 hover:text-white transition-colors block w-full text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-100">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:contact@oderlanddigitalpartner.de"
                    className="text-brand-200 hover:text-white transition-colors"
                  >
                    contact@oderlanddigitalpartner.de
                  </a>
                  <p className="text-brand-300 text-sm">Antwort in 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+49017624961833"
                    className="text-brand-200 hover:text-white transition-colors"
                  >
                    +49 (0) 33xx 123456
                  </a>
                  <p className="text-brand-300 text-sm">Mo-Fr 9-17 Uhr</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-brand-200">Märkisch-Oderland</p>
                  <p className="text-brand-300 text-sm">Brandenburg, Deutschland</p>
                </div>
              </div>
            </div>

            {/* Social Media Placeholder */}
            <div className="mt-8">
              <h4 className="font-medium text-brand-100 mb-3">Folgen Sie uns</h4>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={() => alert('Impressum würde hier angezeigt')}
                className="text-brand-200 hover:text-white transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={() => alert('Datenschutz würde hier angezeigt')}
                className="text-brand-200 hover:text-white transition-colors"
              >
                Datenschutz
              </button>
            </div>

            {/* Copyright */}
            <div className="text-center text-brand-300 text-sm">
              <p>© {currentYear} Oderland Digitalpartner. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
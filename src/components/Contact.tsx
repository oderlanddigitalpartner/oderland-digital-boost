import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'E-Mail',
      info: 'contact@oderlanddigitalpartner.de',
      subtitle: 'Antwort innerhalb von 24h',
      action: 'mailto:contact@oderlanddigitalpartner.de'
    },
    {
      icon: Phone,
      title: 'Termin buchen',
      info: 'Kostenloses Erstgespräch',
      subtitle: 'Calendly Terminbuchung',
      action: 'https://calendly.com/oderlanddigitalpartner'
    },
    {
      icon: MapPin,
      title: 'Standort',
      info: 'Märkisch-Oderland',
      subtitle: 'Brandenburg, Deutschland',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bereit für Ihre digitale Transformation? Kontaktieren Sie uns für ein kostenloses Erstgespräch.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Cards */}
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            
            const CardContent = (
              <div className="card p-8 text-center h-full hover:-translate-y-1 transition-all duration-300">
                <div className="bg-gradient-to-r from-brand-600 to-brand-400 text-white p-4 rounded-full inline-flex mb-6">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-brand-800 mb-3">
                  {contact.title}
                </h3>
                
                <p className="text-lg font-medium text-gray-800 mb-2">
                  {contact.info}
                </p>
                
                <p className="text-sm text-gray-500">
                  {contact.subtitle}
                </p>
                
                {contact.action && (
                  <div className="mt-4">
                    <span className="text-brand-600 font-medium">
                      Klicken zum Kontaktieren →
                    </span>
                  </div>
                )}
              </div>
            );

            return contact.action ? (
              <a
                key={index}
                href={contact.action}
                className="block focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 rounded-xl"
              >
                {CardContent}
              </a>
            ) : (
              <div key={index}>
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 text-center">
          <div className="card p-8 bg-white max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <Clock className="w-12 h-12 text-brand-600 mx-auto md:mx-0 mb-4" />
                <h3 className="text-2xl font-bold text-brand-800 mb-4">
                  Soforttermin gewünscht?
                </h3>
                <p className="text-gray-600 mb-6">
                  Buchen Sie direkt einen Termin in unserem Kalender. 
                  Kostenlos, unverbindlich und ohne Wartezeit.
                </p>
                <a href="https://calendly.com/oderlanddigitalpartner" target="_blank" rel="noopener noreferrer">
                  <button 
                    className="btn-secondary flex items-center space-x-2 mx-auto md:mx-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Termin direkt buchen</span>
                  </button>
                </a>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-brand-50 to-brand-100 p-8 rounded-2xl">
                  <h4 className="text-xl font-bold text-brand-800 mb-4">
                    Schnelle Antwort garantiert
                  </h4>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-accent-emerald rounded-full"></div>
                      <span>24h E-Mail-Antwort</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-accent-emerald rounded-full"></div>
                      <span>Kostenlose Erstberatung</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-accent-emerald rounded-full"></div>
                      <span>Unverbindliches Angebot</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Focus */}
        <div className="mt-12 text-center">
          <div className="bg-brand-800 text-white p-8 rounded-2xl max-w-3xl mx-auto">
            <MapPin className="w-12 h-12 text-brand-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Ihr Partner vor Ort
            </h3>
            <p className="text-brand-100 text-lg">
              Als regionaler Anbieter in Märkisch-Oderland verstehen wir die besonderen 
              Herausforderungen und Chancen für Unternehmen in Brandenburg.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { Shield, Eye, Target, MapPin, Clock, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Verlässlichkeit',
      description: 'Termine halten wir ein, Versprechen werden erfüllt. Darauf können Sie sich verlassen.'
    },
    {
      icon: Eye,
      title: 'Transparenz', 
      description: 'Klare Kommunikation, faire Preise, keine versteckten Kosten. Sie wissen immer, woran Sie sind.'
    },
    {
      icon: Target,
      title: 'Wirkung',
      description: 'Messbare Ergebnisse statt schöner Worte. Ihr Erfolg ist unser Erfolgsmaßstab.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Zufriedene Kunden', icon: Award },
    { number: '3J+', label: 'Erfahrung in der Region', icon: MapPin },
    { number: '24h', label: 'Durchschnittliche Antwortzeit', icon: Clock }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-6">
              Regional verankert in Brandenburg
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Wir sprechen Klartext, liefern schnell und messbar. Als digitaler Partner für kleine 
                und mittelständische Unternehmen in Märkisch-Oderland verstehen wir die besonderen 
                Herausforderungen der Region.
              </p>
              
              <p>
                Handwerk, lokale Dienstleister und Einzelhandel brauchen keine komplexen Enterprise-Lösungen, 
                sondern praktische, bezahlbare Digitalisierung, die sofort wirkt.
              </p>

              <p>
                <strong className="text-brand-800">Unser Versprechen:</strong> Digitale Lösungen, 
                die Ihren Alltag erleichtern und Ihr Geschäft voranbringen – ohne Technik-Kauderwelsch 
                und überteuerte Beratung.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 space-y-6">
              <h3 className="text-2xl font-bold text-brand-800 mb-6">Unsere Werte</h3>
              
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-brand-600 text-white p-3 rounded-full flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-800 mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Content */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="card p-6 text-center">
                    <div className="flex items-center justify-center space-x-4">
                      <IconComponent className="w-8 h-8 text-brand-600" />
                      <div>
                        <div className="text-3xl font-bold text-brand-800">{stat.number}</div>
                        <div className="text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Team placeholder */}
            <div className="card p-8 bg-gradient-to-br from-brand-50 to-brand-100">
              <div className="text-center">
                <div className="w-24 h-24 bg-brand-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">OD</span>
                </div>
                <h4 className="text-xl font-bold text-brand-800 mb-2">
                  Ihr Team vor Ort
                </h4>
                <p className="text-gray-600 mb-4">
                  Persönlicher Kontakt, regionale Verbundenheit und die Leidenschaft für digitale Innovation.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-brand-600">
                  <MapPin className="w-4 h-4" />
                  <span>Märkisch-Oderland, Brandenburg</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="card p-8 bg-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-800 mb-4">
              "Digital. Regional. Partnerhaft."
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Lernen Sie uns persönlich kennen und erfahren Sie, wie wir Ihr Unternehmen 
              digital voranbringen können.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Persönliches Gespräch vereinbaren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
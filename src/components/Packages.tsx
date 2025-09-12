import { Check, Star, ArrowRight } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: 'Starter Website',
      price: '890',
      description: 'Perfekt für den Einstieg in die digitale Welt',
      features: [
        'One-Pager, responsiv',
        'On-Page-SEO optimiert',
        'Kontaktformular integriert',
        '1 Korrekturschleife',
        'SSL-Zertifikat inklusive',
        '3 Monate Basis-Support'
      ],
      popular: false,
      gradient: 'from-gray-600 to-gray-800',
      textColor: 'text-gray-800'
    },
    {
      name: 'Wachstum Digital',
      price: '1.790',
      description: 'Für Unternehmen, die durchstarten wollen',
      features: [
        'Mehrseitige Website',
        'Blog/News-Bereich',
        'DSGVO-konformes Tracking',
        '2 Korrekturschleifen',
        'Basic Social-Media-Setup',
        'Google My Business Optimierung',
        '6 Monate Premium-Support',
        'Monatliche Performance-Reports'
      ],
      popular: true,
      gradient: 'from-brand-600 to-brand-400',
      textColor: 'text-brand-800'
    },
    {
      name: 'Pro Automatisierung',
      price: '2.490',
      description: 'Vollautomatisierte Lösungen für maximale Effizienz',
      features: [
        'Komplette Website',
        'KI-gestützte Workflows',
        'Lead-Qualifizierung automatisch',
        'E-Mail-Marketing-Sequenzen',
        'CRM-Integration (Zapier/Make)',
        'Chatbot-Integration',
        '12 Monate Full-Service',
        'Persönlicher Ansprechpartner',
        'Monatliche Optimierungen'
      ],
      popular: false,
      gradient: 'from-accent-emerald to-brand-400',
      textColor: 'text-accent-emerald'
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
            Transparente Preise für jeden Bedarf
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wählen Sie das Paket, das am besten zu Ihren Zielen und Ihrem Budget passt. Alle Preise verstehen sich netto.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative ${pkg.popular ? 'transform scale-105' : ''}`}>
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-accent-emerald text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Beliebteste Wahl</span>
                  </div>
                </div>
              )}

              <div className={`card h-full ${pkg.popular ? 'ring-2 ring-accent-emerald shadow-xl' : ''}`}>
                {/* Header */}
                <div className={`p-8 text-center bg-gradient-to-r ${pkg.gradient} text-white rounded-t-xl`}>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">€{pkg.price}</span>
                    <span className="text-sm ml-1 opacity-75">netto</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className={`w-5 h-5 ${pkg.popular ? 'text-accent-emerald' : 'text-brand-600'} mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-8 pt-0">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                      pkg.popular 
                        ? 'btn-accent' 
                        : 'btn-secondary'
                    }`}
                  >
                    <span>Unverbindlich anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            Alle Preise netto, individuelle Angebote möglich.
          </p>
          <div className="bg-brand-50 p-6 rounded-xl max-w-4xl mx-auto">
            <h4 className="font-bold text-brand-800 mb-2">Nicht das Richtige dabei?</h4>
            <p className="text-gray-600">
              Wir erstellen gerne ein maßgeschneidertes Angebot für Ihre spezifischen Anforderungen. 
              Kontaktieren Sie uns für eine individuelle Beratung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
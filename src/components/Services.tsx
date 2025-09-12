import { Globe, Share2, Zap, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Websites',
      description: 'Individuelle, schnelle Websites – mobil optimiert, suchmaschinenfreundlich.',
      features: [
        'One-Pager/Mehrseiter',
        'Termin-/Anfrage-Formulare',
        'On-Page-SEO',
        'Wartung'
      ],
      gradient: 'from-brand-800 to-brand-600'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Planung, Content, Redaktionskalender und Community-Management.',
      features: [
        'Profilaufbau',
        'Content-Pakete',
        'Anzeigen-Setup',
        'Reportings'
      ],
      gradient: 'from-brand-600 to-brand-400'
    },
    {
      icon: Zap,
      title: 'KI-Automatisierung',
      description: 'Abläufe automatisieren: Anfragen klassifizieren, Termine, Follow-ups.',
      features: [
        'Chatbots',
        'E-Mail-Automationen',
        'CRM-Anbindung',
        'Workflows'
      ],
      gradient: 'from-accent-emerald to-brand-400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
            Unsere Leistungen für Ihren Erfolg
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maßgeschneiderte digitale Lösungen für Handwerk, lokale Dienstleister und Einzelhandel in Brandenburg.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="card p-8 text-center group hover:-translate-y-2 transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-brand-800 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent-emerald mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Lassen Sie uns gemeinsam Ihr digitales Potenzial entdecken.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-accent"
          >
            Kostenlose Beratung anfragen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
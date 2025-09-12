import { MessageCircle, FileText, Rocket, Headphones } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: '01',
      title: 'Erstgespräch',
      description: 'Wir lernen Sie und Ihre Ziele kennen. Gemeinsam definieren wir Ihren Bedarf und die gewünschten Ergebnisse.',
      duration: '30-45 Min',
      color: 'from-brand-800 to-brand-600'
    },
    {
      icon: FileText,
      number: '02', 
      title: 'Konzept & Angebot',
      description: 'Transparente Planung mit klaren Zielen, Zeitrahmen und fairen Preisen. Sie wissen genau, was Sie bekommen.',
      duration: '2-3 Tage',
      color: 'from-brand-600 to-brand-400'
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Umsetzung',
      description: 'Schnelle, iterative Entwicklung mit regelmäßigen Updates. Sie sind immer im Bild über den Fortschritt.',
      duration: '7-21 Tage',
      color: 'from-brand-400 to-accent-emerald'
    },
    {
      icon: Headphones,
      number: '04',
      title: 'Launch & Betreuung',
      description: 'Erfolgreicher Go-Live mit fortlaufender Optimierung und Support. Skalierbar nach Ihren Wünschen.',
      duration: 'Langfristig',
      color: 'from-accent-emerald to-brand-600'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
            Unser bewährter Ablauf
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Idee bis zum erfolgreichen Launch - transparent, schnell und professionell.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-brand-400 to-brand-200 z-0 transform translate-x-4"></div>
                )}
                
                <div className="card p-8 text-center relative z-10 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${step.color} text-white mb-6 mt-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-brand-800 mb-3">
                    {step.title}
                  </h3>

                  {/* Duration */}
                  <div className="inline-block bg-brand-100 text-brand-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {step.duration}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-800 mb-4">
              Bereit für den ersten Schritt?
            </h3>
            <p className="text-gray-600 mb-6">
              Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wie wir Ihr Unternehmen digital voranbringen können.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Kostenloses Erstgespräch vereinbaren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
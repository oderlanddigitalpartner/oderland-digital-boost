import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Wie schnell ist die Umsetzung?',
      answer: 'Je nach Umfang dauert die Umsetzung 7-21 Tage. Ein einfacher One-Pager ist oft schon nach einer Woche online, komplexere Projekte mit KI-Automatisierung benötigen 2-3 Wochen. Wir halten Sie während des gesamten Prozesses auf dem Laufenden.'
    },
    {
      question: 'Übernehmt ihr bestehende Websites?',
      answer: 'Ja, gerne! Wir führen zunächst ein kostenloses Audit Ihrer bestehenden Website durch und erstellen dann einen detaillierten Relaunch-Plan. Dabei achten wir darauf, dass wichtige SEO-Rankings und bestehende Inhalte erhalten bleiben.'
    },
    {
      question: 'Benötige ich Hosting/Domain?',
      answer: 'Wir beraten Sie gerne bei der Auswahl des richtigen Hosting-Anbieters und richten alles für Sie ein. Falls Sie bereits Hosting haben, können wir auch damit arbeiten. Domain-Registrierung und technisches Setup übernehmen wir komplett für Sie.'
    },
    {
      question: 'Wie messt ihr Erfolg?',
      answer: 'Wir definieren gemeinsam konkrete Ziel-KPIs wie Anfragen, Anrufe oder Online-Termine. Mit DSGVO-konformem, cookiefreiem Tracking messen wir dann den Fortschritt und erstellen regelmäßige Reports. So sehen Sie schwarz auf weiß, was Ihre Investition bringt.'
    },
    {
      question: 'Was kostet die laufende Betreuung?',
      answer: 'Das hängt von Ihren Bedürfnissen ab. Basis-Wartung (Updates, Backups, Sicherheit) gibt es ab 89€/Monat. Social-Media-Betreuung ab 299€/Monat. KI-Automatisierung und erweiterte Services werden individuell kalkuliert. Keine Überraschungen, alles transparent.'
    },
    {
      question: 'Arbeitet ihr nur in Brandenburg?',
      answer: 'Unser Fokus liegt auf Brandenburg und besonders Märkisch-Oderland, weil wir die Region und ihre Unternehmen kennen. Für größere Projekte arbeiten wir auch deutschlandweit – der persönliche Kontakt ist uns aber sehr wichtig.'
    },
    {
      question: 'Was passiert, wenn ich nicht zufrieden bin?',
      answer: 'Ihre Zufriedenheit ist unser Ziel. Deshalb arbeiten wir mit Korrekturschleifen und regelmäßigem Feedback. Sollten Sie trotzdem nicht zufrieden sein, finden wir gemeinsam eine Lösung – bis hin zur kostenfreien Überarbeitung oder Geld-zurück-Garantie bei berechtigten Reklamationen.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen. Haben Sie weitere Fragen? 
            Kontaktieren Sie uns gerne direkt.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-6 px-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 rounded-lg"
                aria-expanded={openItem === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-brand-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItem === index ? (
                      <ChevronUp className="w-5 h-5 text-brand-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-600" />
                    )}
                  </div>
                </div>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openItem !== index}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-brand-50 p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-800 mb-4">
              Weitere Fragen?
            </h3>
            <p className="text-gray-600 mb-6">
              Wir beantworten gerne alle Ihre Fragen in einem persönlichen Gespräch. 
              Kostenlos und unverbindlich.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Fragen stellen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
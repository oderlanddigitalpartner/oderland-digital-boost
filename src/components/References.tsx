import { ArrowRight, TrendingUp, Users, Calendar } from 'lucide-react';
import caseStudy1 from '@/assets/case-study-1.jpg';
import caseStudy2 from '@/assets/case-study-2.jpg';

const References = () => {
  const cases = [
    {
      title: 'Handwerk Schmidt - Website Relaunch',
      description: 'Moderne Website für Tischlerei mit Online-Terminbuchung und Projekt-Galerie',
      image: caseStudy1,
      metrics: [
        { icon: TrendingUp, label: 'Anfragen', value: '+38%', period: '3 Monaten' },
        { icon: Users, label: 'Webseitenbesucher', value: '+156%', period: '6 Monaten' },
        { icon: Calendar, label: 'Online-Termine', value: '24/Monat', period: 'durchschnittlich' }
      ],
      industry: 'Handwerk'
    },
    {
      title: 'Restaurant Oderblick - Social Media',
      description: 'Komplette Social-Media-Strategie mit automatisierter Terminplanung und Community-Management',
      image: caseStudy2,
      metrics: [
        { icon: Users, label: 'Follower-Wachstum', value: '+284%', period: '4 Monaten' },
        { icon: TrendingUp, label: 'Reservierungen', value: '+67%', period: '3 Monaten' },
        { icon: Calendar, label: 'Engagement-Rate', value: '8.4%', period: 'durchschnittlich' }
      ],
      industry: 'Gastronomie'
    }
  ];

  return (
    <section id="references" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
            Erfolgsgeschichten aus der Region
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wie wir lokalen Unternehmen in Brandenburg zu digitalem Erfolg verholfen haben.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cases.map((case_item, index) => (
            <div key={index} className="card overflow-hidden group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={case_item.image}
                  alt={case_item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-800/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-accent-emerald text-white px-3 py-1 rounded-full text-sm font-medium">
                    {case_item.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-800 mb-3">
                  {case_item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {case_item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {case_item.metrics.map((metric, metricIndex) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={metricIndex} className="text-center p-4 bg-gray-50 rounded-lg">
                        <IconComponent className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-brand-800 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {metric.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          in {metric.period}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500">Kunde seit 2023</span>
                  <button className="text-brand-600 hover:text-brand-800 font-medium flex items-center space-x-1 group">
                    <span>Details ansehen</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="card p-8 bg-gradient-to-r from-brand-800 to-brand-600 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ihr Erfolg ist unser Ziel
            </h3>
            <p className="text-brand-100 mb-6 max-w-2xl mx-auto">
              Werden Sie unser nächster Erfolgsfall. Lassen Sie uns gemeinsam Ihre digitale Transformation vorantreiben.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-brand-800 hover:bg-brand-50 px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 mx-auto"
            >
              <span>Mehr Beispiele anfragen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
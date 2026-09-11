import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceModal } from './ServiceModal';
import type { ServiceModalData } from './ServiceModal';
import { ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import type { MainServiceCard } from '../data/types';

export const Services: React.FC = () => {
  const { mainServices, isRTL, ui } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceModalData | null>(null);

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const handleLearnMore = (service: MainServiceCard) => {
    setSelectedService({
      title: service.title,
      category: service.category,
      description: service.shortDesc,
      image: service.image,
      items: service.bullets,
    });
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-white/80 backdrop-blur-sm relative overflow-hidden">
      {/* Letterhead-inspired soft wave decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="absolute -top-12 left-0 right-0 w-full h-40"
          viewBox="0 0 1440 180"
          fill="none"
        >
          <path
            d="M0 60C360 140 720 0 1080 80C1260 120 1380 100 1440 80V0H0V60Z"
            fill="#1ea84b"
            fillOpacity="0.03"
          />
        </svg>
      </div>

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-50 text-brand-green-dark text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>{ui.ourServices}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            {ui.ourServices}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {ui.ourServicesSub}
          </p>
        </div>

        {/* 8 Large Service Cards (Desktop 3-col, Tablet 2-col, Mobile 1-col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service) => (
            <div
              key={service.id}
              className="clean-card overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/60 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/95 text-brand-navy text-xs font-bold shadow-sm backdrop-blur-sm">
                  {service.category}
                </span>
              </div>

              {/* Card Content: ONLY Service Name, One short sentence, Learn More button */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-brand-navy group-hover:text-brand-green-dark transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleLearnMore(service)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-green transition-colors focus:outline-none"
                  >
                    <span>{ui.learnMore}</span>
                    <ArrowIcon className="w-4 h-4 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        data={selectedService}
      />
    </section>
  );
};

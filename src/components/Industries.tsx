import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Factory, ArrowRight, ArrowLeft } from 'lucide-react';

export const Industries: React.FC = () => {
  const { industries, isRTL, ui, openQuoteModal } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="industries" className="py-24 lg:py-32 bg-white/80 backdrop-blur-sm relative overflow-hidden">
      {/* Subtle letterhead wave element */}
      <div className="absolute -bottom-16 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-wider mb-3">
            <Factory className="w-4 h-4 text-brand-green" />
            <span>{ui.industriesHeading}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            {ui.industriesHeading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {ui.industriesSub}
          </p>
        </div>

        {/* 6 Clean Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <div
              key={ind.id}
              onClick={() => openQuoteModal(ind.title)}
              className="clean-card overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              {/* Image Container with Gradient */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/85 via-brand-navy-950/30 to-transparent" />
                <h3 className="absolute bottom-5 left-5 right-5 text-xl font-extrabold text-white">
                  {ind.title}
                </h3>
              </div>

              {/* Short Description */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {ind.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-green">
                    {isRTL ? 'معايير سلامة متخصصة' : 'UAE Sector Compliance'}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy group-hover:text-brand-green transition-colors">
                    <span>{isRTL ? 'استفسار' : 'Inquire'}</span>
                    <ArrowIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Award, Wrench, CheckCircle2, ThumbsUp } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { whyChooseUs, isRTL, ui } = useLanguage();

  const getFeatureIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Award className="w-9 h-9 text-amber-400" />;
      case 1:
        return <ShieldCheck className="w-9 h-9 text-brand-green-light" />;
      case 2:
        return <Wrench className="w-9 h-9 text-brand-green-light" />;
      case 3:
      default:
        return <ThumbsUp className="w-9 h-9 text-amber-400" />;
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-brand-navy text-white relative overflow-hidden">
      {/* Background glow and subtle curves */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-green-light text-xs font-black uppercase tracking-wider mb-4 border border-white/15 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
            <span>{isRTL ? 'معايير الاختيار' : 'Core Strategic Advantages'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {ui.whyChooseHeading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {isRTL
              ? 'نقدم حلول سلامة هندسية موثوقة تلبي احتياجات المشاريع الصناعية والإنشائية بدولة الإمارات.'
              : 'Delivering practical safety excellence, uncompromising statutory rigor, and dependable engineering support across the Emirates.'}
          </p>
        </div>

        {/* 4 Large Visual Feature Cards - Expansive Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {whyChooseUs.map((card, idx) => (
            <div
              key={card.number}
              className="luxury-dark-card rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-brand-green/50 shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2"
            >
              <div>
                {/* Header with Icon and Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 group-hover:bg-brand-green/20 border border-white/10 group-hover:border-brand-green/40 flex items-center justify-center transition-all duration-300 shadow-sm">
                    {getFeatureIcon(idx)}
                  </div>
                  <span className="text-3xl font-black font-mono text-white/25 group-hover:text-brand-green-light transition-colors">
                    {card.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3.5 group-hover:text-brand-green-light transition-colors leading-snug">
                  {card.title}
                </h3>

                {/* Short text */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Accent Line */}
              <div className="w-full h-1.5 bg-white/10 group-hover:bg-brand-green rounded-full mt-10 transition-colors" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

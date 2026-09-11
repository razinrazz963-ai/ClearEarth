import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, GraduationCap, Gauge, Award, ArrowRight } from 'lucide-react';

export const QuickOverview: React.FC = () => {
  const { quickOverview, ui } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-brand-green" />;
      case 'GraduationCap':
        return <GraduationCap className="w-8 h-8 text-brand-green" />;
      case 'Award':
        return <Award className="w-8 h-8 text-brand-green" />;
      case 'Gauge':
      default:
        return <Gauge className="w-8 h-8 text-brand-green" />;
    }
  };

  return (
    <section className="py-24 bg-slate-50/80 backdrop-blur-sm border-y border-slate-200/80 relative overflow-hidden">
      {/* Subtle background aura */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-black uppercase tracking-wider mb-3.5 border border-brand-navy/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span>{ui.whatWeDo}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            Core Safety & Technical Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {ui.whatWeDoSub}
          </p>
        </div>

        {/* 4 Major Pillars Grid - Expansive full-width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {quickOverview.map((item) => (
            <div
              key={item.number}
              className="clean-card p-7 sm:p-8 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 bg-white border border-slate-200/80 hover:border-brand-green/40 shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Header with Number & Large Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-green/10 group-hover:bg-brand-green/15 border border-brand-green/20 flex items-center justify-center transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-3xl font-black font-mono text-slate-300 group-hover:text-brand-green transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-brand-navy group-hover:text-brand-green-dark transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <a
                href={`#${item.linkId}`}
                className="inline-flex items-center gap-2 text-xs font-black text-brand-navy group-hover:text-brand-green transition-colors pt-5 border-t border-slate-100 uppercase tracking-wider"
              >
                <span>Learn Details</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

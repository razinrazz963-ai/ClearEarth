import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  MessageSquare,
  FileSearch,
  CalendarCheck,
  ShieldCheck,
  Award,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export const Process: React.FC = () => {
  const { processSteps, isRTL, ui, openQuoteModal } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-brand-green" />;
      case 1:
        return <FileSearch className="w-5 h-5 text-brand-green" />;
      case 2:
        return <CalendarCheck className="w-5 h-5 text-brand-green" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-brand-green" />;
      case 4:
      default:
        return <Award className="w-5 h-5 text-brand-green" />;
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-50/70 border-b border-slate-100 relative overflow-hidden">
      {/* Letterhead-inspired soft flowing wave curve */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg viewBox="0 0 1440 240" className="w-full h-full" fill="none">
          <path
            d="M0 80C360 160 720 0 1080 100C1260 140 1380 120 1440 100V240H0V80Z"
            fill="#1ea84b"
            fillOpacity="0.03"
          />
        </svg>
      </div>

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-50 text-brand-green-dark text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>{isRTL ? 'خطوات العمل' : 'Straightforward Workflow'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            {ui.howItWorksHeading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {ui.howItWorksSub}
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-0.5 bg-gradient-to-r from-brand-green/20 via-brand-green to-brand-green/20 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="clean-card p-6 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Step Icon & Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black font-mono px-3 py-1 rounded-lg bg-brand-navy text-white group-hover:bg-brand-green transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-green/10 group-hover:bg-brand-green/20 flex items-center justify-center transition-colors">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-brand-navy group-hover:text-brand-green-dark transition-colors mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="w-full h-1 bg-slate-100 group-hover:bg-brand-green rounded-full mt-6 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA prompt below timeline */}
        <div className="mt-16 text-center">
          <button
            onClick={() => openQuoteModal()}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-green to-brand-green-dark text-white font-extrabold text-base shadow-[0_8px_25px_rgba(30,168,75,0.3)] hover:shadow-[0_12px_32px_rgba(30,168,75,0.4)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>{ui.getQuote}</span>
            <ArrowIcon className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

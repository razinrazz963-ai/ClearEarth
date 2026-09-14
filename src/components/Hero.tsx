import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, ArrowRight, CheckCircle2, Award, Building2, ChevronRight, Wrench } from 'lucide-react';

export const Hero: React.FC = () => {
  const { heroContent, openQuoteModal } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 overflow-hidden bg-white"
    >
      {/* Subtle Background Watermark Layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 sm:opacity-15 -z-0"
        style={{
          backgroundImage: "url('/images/clearearth-watermark.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-slate-50/50 pointer-events-none -z-0" />

      <div className="site-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Clear, Powerful Safety Headline & Actions */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center text-start">
            
            {/* ClearEarth Luxury Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs sm:text-sm font-black tracking-wide w-fit mb-5 sm:mb-7 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
              <span className="truncate">{heroContent.badge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping hidden sm:inline-block" />
            </div>

            {/* Main Headline - Bold & Expansive */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-brand-navy tracking-tight leading-[1.08] mb-4 sm:mb-5">
              Build Skills.{' '}
              <span className="text-brand-green block sm:inline">Work Safely.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-brand-navy-light mb-4 leading-snug">
              {heroContent.subheadline}
            </p>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-3xl">
              {heroContent.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={() => openQuoteModal()}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-brand-green via-brand-green to-brand-green-dark text-white font-extrabold text-base shadow-[0_10px_30px_rgba(30,168,75,0.38)] hover:shadow-[0_16px_36px_rgba(30,168,75,0.48)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>{heroContent.ctaQuote}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#training"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:py-4.5 rounded-2xl bg-white hover:bg-slate-50 border-2 border-brand-navy/15 hover:border-brand-navy text-brand-navy font-bold text-base transition-all duration-200 shadow-sm hover:-translate-y-0.5"
              >
                <span>{heroContent.ctaTraining}</span>
                <ChevronRight className="w-5 h-5" />
              </a>

              <a
                href="#equipment"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all duration-200"
              >
                <Wrench className="w-4 h-4 text-brand-navy" />
                <span>Equipment Scope</span>
              </a>
            </div>

            {/* Visual Trust Pillars */}
            <div className="pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs sm:text-sm font-bold text-slate-700">
              {heroContent.trustStrip.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>{item}</span>
                  {idx < heroContent.trustStrip.length - 1 && (
                    <span className="text-slate-300 hidden md:inline">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Burj Khalifa Downtown Dubai Visual (User Supplied Photo) */}
          <div className="col-span-12 lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto w-full">
              
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-green/20 via-transparent to-brand-navy/20 rounded-3xl transform rotate-1 blur-xl -z-10" />

              {/* Main Skyline Container - Tall & Expansive */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(15,32,66,0.22)] border-4 border-white bg-slate-900 group">
                <img
                  src="/images/dubai-hero.png"
                  alt="ClearEarth Dubai Operations - Burj Khalifa and Downtown Dubai"
                  className="w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px] xl:h-[600px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/90 via-brand-navy-950/25 to-transparent pointer-events-none" />



                {/* Top Right Location Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-navy/90 text-white backdrop-blur-md text-xs font-extrabold shadow-md border border-white/15">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Dubai, UAE</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 font-bold border border-brand-green/20">
                    <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-brand-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Statutory Dubai Compliance
                    </p>
                    <p className="text-sm sm:text-base font-black text-brand-navy truncate">
                      On-Shore & Off-Shore Equipment
                    </p>
                    <p className="text-[11px] text-brand-green-dark font-extrabold flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-brand-green animate-ping inline-block flex-shrink-0" />
                      <span className="truncate">Dubai Municipality Aligned</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* STATUTORY CAPABILITIES TICKER BAR (Expansive full-width layout) */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-6 text-sm sm:text-base font-bold text-slate-700">
            <div className="text-sm sm:text-base font-black uppercase tracking-wider text-brand-navy bg-brand-green-50 border border-brand-green/25 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl flex items-center gap-2.5 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span>Certified Scope</span>
            </div>
            <span className="flex items-center gap-2.5 text-brand-navy font-extrabold">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green flex-shrink-0" />
              <span>Mobile Cranes & Lifting Gear</span>
            </span>
            <span className="flex items-center gap-2.5 text-brand-navy font-extrabold">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green flex-shrink-0" />
              <span>Earth Moving Machinery</span>
            </span>
            <span className="flex items-center gap-2.5 text-brand-navy font-extrabold">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green flex-shrink-0" />
              <span>Pressure Vessels & Boilers</span>
            </span>
            <span className="flex items-center gap-2.5 text-brand-navy font-extrabold">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green flex-shrink-0" />
              <span>Scaffolding Green Tagging</span>
            </span>
            <span className="flex items-center gap-2.5 text-brand-navy font-extrabold">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green flex-shrink-0" />
              <span>Non-Destructive Testing (NDT)</span>
            </span>
            <span className="flex items-center gap-2.5 text-brand-navy font-extrabold">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green flex-shrink-0" />
              <span>Instrumentation Calibration</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

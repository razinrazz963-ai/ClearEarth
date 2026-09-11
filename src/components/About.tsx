import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, CheckCircle2, ArrowRight, Building2 } from 'lucide-react';

export const About: React.FC = () => {
  const { aboutContent, openQuoteModal } = useLanguage();

  return (
    <section id="about" className="py-24 lg:py-32 bg-slate-50/70 relative overflow-hidden border-t border-slate-200/70">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs font-black uppercase tracking-wider mb-3.5 shadow-sm">
            <Building2 className="w-4 h-4 text-brand-green" />
            <span>{aboutContent.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            {aboutContent.heading}
          </h2>
          <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full" />
        </div>

        {/* 2-Column Corporate Presentation - Expansive 6-6 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto w-full">
              
              {/* Image Frame with Luxury Elevation */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(15,32,66,0.14)] border-4 border-white bg-white group">
                <img
                  src="/images/about-consultant.jpg"
                  alt="ClearEarth Safety Consultancy Lead Engineer"
                  className="w-full h-[480px] sm:h-[540px] lg:h-[580px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/85 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-slate-100 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 font-bold border border-brand-green/20">
                    <ShieldCheck className="w-7 h-7 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Government Licensed & Approved
                    </p>
                    <p className="text-sm sm:text-base font-black text-brand-navy">
                      Dubai DET License #1639056
                    </p>
                    <p className="text-xs text-brand-green font-extrabold flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-brand-green animate-ping inline-block" />
                      <span>EIAC NOC Approval #1787307</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Corporate Logo Emblem */}
              <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-4 bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-[220px]">
                <img
                  src="/images/logo.jpg"
                  alt="ClearEarth Safety Logo"
                  className="w-12 h-12 object-contain rounded-lg"
                />
                <div>
                  <p className="text-[11px] font-black text-brand-navy leading-none">CLEAREARTH</p>
                  <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Safety Consultancy</p>
                </div>
              </div>

            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Direct Opening Statement as explicitly requested */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md border-s-4 border-s-brand-green">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-semibold">
                {aboutContent.shortBio}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {aboutContent.commitmentText}
            </p>

            {/* 4 Clean Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {aboutContent.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-brand-green/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <h3 className="text-base font-extrabold text-brand-navy">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed ps-8 font-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Established</p>
                <p className="text-base font-black text-brand-navy mt-0.5">July 27, 2026</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Location</p>
                <p className="text-base font-black text-brand-navy mt-0.5">Dubai, UAE</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Scope</p>
                <p className="text-base font-black text-brand-green-dark mt-0.5">On & Off-Shore</p>
              </div>
            </div>

            {/* Bottom Action Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openQuoteModal()}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-brand-navy hover:bg-brand-navy-light text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 text-brand-green" />
              </button>

              <a
                href="#company-profile"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-sm transition-colors"
              >
                <span>Company Profile</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Gauge, ArrowRight, CheckCircle2, Sliders } from 'lucide-react';

export const InstrumentationSection: React.FC = () => {
  const { instrumentationShowcase, openQuoteModal } = useLanguage();

  return (
    <section id="instrumentation" className="py-24 lg:py-32 bg-slate-50/70 relative overflow-hidden border-t border-slate-200/70">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs font-black uppercase tracking-wider mb-3">
            <Gauge className="w-4 h-4 text-brand-green" />
            <span>Precision & Calibration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            Industrial Instrumentation
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Supply, testing, precision calibration, and statutory certification of high-accuracy industrial instruments and environmental sensors.
          </p>
        </div>

        {/* 6 High-Impact Instrumentation Cards with Interactive Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {instrumentationShowcase.map((inst) => (
            <div
              key={inst.id}
              className="clean-card overflow-hidden flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div>
                {/* Visual Image with Hover Zoom & Transition */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={inst.image}
                    alt={inst.name}
                    className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/90 via-brand-navy-950/40 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[11px] font-black text-brand-navy shadow-sm flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-brand-green" />
                    <span>Calibrated & Tested</span>
                  </div>

                  {/* Floating Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-black text-white group-hover:text-brand-green-light transition-colors leading-tight">
                      {inst.name}
                    </h3>
                  </div>
                </div>

                {/* Card Information Body */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {inst.description}
                  </p>

                  {/* Key Capabilities Checklist */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {inst.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => openQuoteModal(`Instrumentation Calibration: ${inst.name}`)}
                  className="w-full py-3 rounded-xl bg-slate-100 hover:bg-brand-navy hover:text-white text-brand-navy text-xs font-black transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Request Calibration Quote</span>
                  <ArrowRight className="w-4 h-4 text-brand-green group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Calibration Standards Trust Box */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 font-black">
              <Gauge className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-black text-brand-navy">
                Traceable Calibration Certificates
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                All sensor and instrument calibrations are provided with official test reports, uncertainty calculations, and validity color stickers.
              </p>
            </div>
          </div>
          <button
            onClick={() => openQuoteModal('Instrumentation & Calibration Inquiry')}
            className="px-6 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-extrabold text-sm shadow-md whitespace-nowrap flex-shrink-0"
          >
            Inquire Calibration Service
          </button>
        </div>

      </div>
    </section>
  );
};

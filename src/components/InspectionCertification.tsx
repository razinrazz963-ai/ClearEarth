import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Shield,
  FileCheck2,
  Activity,
} from 'lucide-react';
import {
  CraneHoistAnimation,
  ExcavatorAnimation,
  PressureGaugeAnimation,
  NDTLaserAnimation,
  ScaffoldTagAnimation,
} from './EquipmentAnimations';

const checklistItems = [
  'Lifting Equipment',
  'Lifting Accessories',
  'Pressure Vessel',
  'Earth Moving Machinery',
  'Scaffolding',
  'NDT (Non Destructive Test)',
];

export const InspectionCertification: React.FC = () => {
  const { mainServices, openQuoteModal } = useLanguage();
  const [activeAnimationCard, setActiveAnimationCard] = useState<string | null>(null);

  const renderEquipmentAnimation = (serviceId: string, compact = true) => {
    switch (serviceId) {
      case 'lifting-equipment':
        return <CraneHoistAnimation compact={compact} />;
      case 'earth-moving-machinery':
        return <ExcavatorAnimation compact={compact} />;
      case 'pressure-vessel':
        return <PressureGaugeAnimation compact={compact} />;
      case 'ndt-testing':
        return <NDTLaserAnimation compact={compact} />;
      case 'scaffolding':
        return <ScaffoldTagAnimation compact={compact} />;
      case 'lifting-accessories':
      default:
        return <CraneHoistAnimation compact={compact} />;
    }
  };

  return (
    <section id="certification" className="py-24 lg:py-32 bg-slate-50/70 relative overflow-hidden border-t border-slate-200/70">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs font-black uppercase tracking-wider mb-3.5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>Third-Party Verification & Testing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight mb-4">
            Inspection & Certification
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Inspection and certification of on-shore and off-shore equipment. Ensuring statutory Dubai compliance, asset structural integrity, and safe jobsite operations.
          </p>
        </div>

        {/* EXPANSIVE FULL-WIDTH CHECKLIST BANNER */}
        <div className="mb-16 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-md w-full">
          <div className="flex items-center justify-between flex-wrap gap-y-4 gap-x-8 text-xs sm:text-sm font-black text-brand-navy">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6 MAIN INSPECTION SERVICE CARDS WITH INTEGRATED EQUIPMENT ANIMATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {mainServices.slice(0, 6).map((service) => {
            const isShowingLiveDiagnostic = activeAnimationCard === service.id;

            return (
              <div
                key={service.id}
                className="clean-card overflow-hidden flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 bg-white border border-slate-200/90 shadow-md hover:shadow-2xl"
              >
                <div>
                  {/* Card Media Header - Toggle between Real Photo and Live Equipment Animation */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                    {isShowingLiveDiagnostic ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 p-4 animate-fade-in">
                        {renderEquipmentAnimation(service.id, false)}
                      </div>
                    ) : (
                      <>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/85 via-brand-navy-950/20 to-transparent pointer-events-none" />
                      </>
                    )}

                    {/* Statutory Inspection Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[11px] font-black text-brand-navy border border-slate-100 shadow-sm flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-brand-green" />
                      <span>Statutory Inspection</span>
                    </div>

                    {/* Live Equipment Animation Diagnostic Toggle Button */}
                    <button
                      onClick={() => setActiveAnimationCard(isShowingLiveDiagnostic ? null : service.id)}
                      className={`absolute top-4 right-4 px-2.5 py-1 rounded-xl text-[10px] font-mono font-bold flex items-center gap-1.5 transition-all shadow-md ${
                        isShowingLiveDiagnostic
                          ? 'bg-emerald-500 text-white shadow-emerald-500/40 ring-2 ring-white'
                          : 'bg-brand-navy-950/85 text-emerald-400 hover:bg-brand-navy border border-white/20'
                      }`}
                      title="Toggle live equipment inspection animation"
                    >
                      <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                      <span>{isShowingLiveDiagnostic ? 'Show Photo' : 'Live Motion'}</span>
                    </button>

                    {/* Bottom overlay info */}
                    {!isShowingLiveDiagnostic && (
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                        <span className="font-bold uppercase tracking-wider text-[11px] bg-black/40 px-2.5 py-1 rounded backdrop-blur-sm">
                          On-Shore & Off-Shore
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-black text-brand-navy mb-2.5 group-hover:text-brand-green-dark transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                      {service.shortDesc}
                    </p>

                    {/* Bullet Checklist */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      {service.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 sm:p-7 pt-0">
                  <button
                    onClick={() => openQuoteModal(service.title)}
                    className="w-full py-3.5 rounded-2xl bg-slate-100 hover:bg-brand-green hover:text-white text-brand-navy text-xs font-black transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                  >
                    <FileCheck2 className="w-4 h-4 text-brand-green group-hover/btn:text-white" />
                    <span>Request Inspection Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

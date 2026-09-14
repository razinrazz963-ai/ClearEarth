import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, ArrowRight, ShieldCheck, CheckCircle2, Activity, Sparkles } from 'lucide-react';
import {
  CraneHoistAnimation,
  ExcavatorAnimation,
  PressureGaugeAnimation,
  NDTLaserAnimation,
  ScaffoldTagAnimation,
} from './EquipmentAnimations';

export const EquipmentSection: React.FC = () => {
  const { equipmentShowcase, openQuoteModal } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLabTab, setActiveLabTab] = useState<'excavator' | 'crane' | 'gauge' | 'ndt' | 'scaffold'>('excavator');

  const categories = ['All', 'Earth Moving Machinery', 'Lifting Machinery', 'Plant & Utilities', 'Temporary Works'];

  const filteredEquipment = equipmentShowcase.filter((item) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Earth Moving Machinery') {
      return item.category.includes('Earth Moving') || item.category.includes('Multi-Purpose');
    }
    if (activeCategory === 'Lifting Machinery') {
      return item.category.includes('Lifting') || item.category.includes('High-Rise') || item.category.includes('Material');
    }
    if (activeCategory === 'Plant & Utilities') {
      return item.category.includes('Power') || item.category.includes('Pneumatic') || item.category.includes('MEWP') || item.category.includes('Instrumentation');
    }
    if (activeCategory === 'Temporary Works') {
      return item.category.includes('Temporary') || item.category.includes('Rigging');
    }
    return true;
  });

  return (
    <section id="equipment" className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs font-black uppercase tracking-wider mb-3.5 shadow-sm">
            <Truck className="w-4 h-4 text-brand-green" />
            <span>Machinery Verification & Field Testing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            Our Equipment & Inspection Scope
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Certified third-party inspection, proof load testing, hydraulic integrity checks, and operator training across UAE industrial jobsites.
          </p>
        </div>

        {/* INTERACTIVE EQUIPMENT ANIMATION INSPECTION LAB */}
        <div className="mb-20 rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl luxury-dark-card p-6 sm:p-10 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Equipment Motion & Diagnostics</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Statutory Engineering Diagnostics Simulator
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Explore real-time mechanical and non-destructive inspection parameters executed by ClearEarth engineers.
              </p>
            </div>

            {/* Switchable Equipment Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveLabTab('excavator')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeLabTab === 'excavator'
                    ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/30'
                    : 'bg-white/10 text-white hover:bg-white/15'
                }`}
              >
                Earth Moving Machinery
              </button>
              <button
                onClick={() => setActiveLabTab('crane')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeLabTab === 'crane'
                    ? 'bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/30'
                    : 'bg-white/10 text-white hover:bg-white/15'
                }`}
              >
                Cranes & Hoists
              </button>
              <button
                onClick={() => setActiveLabTab('gauge')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeLabTab === 'gauge'
                    ? 'bg-sky-500 text-slate-950 font-black shadow-lg shadow-sky-500/30'
                    : 'bg-white/10 text-white hover:bg-white/15'
                }`}
              >
                Pressure Vessel
              </button>
              <button
                onClick={() => setActiveLabTab('ndt')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeLabTab === 'ndt'
                    ? 'bg-emerald-400 text-slate-950 font-black shadow-lg shadow-emerald-400/30'
                    : 'bg-white/10 text-white hover:bg-white/15'
                }`}
              >
                NDT Laser Scan
              </button>
              <button
                onClick={() => setActiveLabTab('scaffold')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeLabTab === 'scaffold'
                    ? 'bg-green-500 text-slate-950 font-black shadow-lg shadow-green-500/30'
                    : 'bg-white/10 text-white hover:bg-white/15'
                }`}
              >
                Scaffolding Tag
              </button>
            </div>
          </div>

          {/* Interactive Display Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
            {/* Visual Animation Stage */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 sm:p-10 rounded-2xl bg-slate-950/60 border border-white/10 min-h-[300px]">
              {activeLabTab === 'excavator' && <ExcavatorAnimation />}
              {activeLabTab === 'crane' && <CraneHoistAnimation />}
              {activeLabTab === 'gauge' && <PressureGaugeAnimation />}
              {activeLabTab === 'ndt' && <NDTLaserAnimation />}
              {activeLabTab === 'scaffold' && <ScaffoldTagAnimation />}
            </div>

            {/* Diagnostic Details Pane */}
            <div className="lg:col-span-6 space-y-4">
              {activeLabTab === 'excavator' && (
                <>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                    Earth Moving Equipment Verification
                  </span>
                  <h4 className="text-2xl font-black text-white">
                    Hydraulic Boom & Bucket Articulation Audit
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Inspection of main boom pivot pins, hydraulic cylinder seals, relief pressure valves, dipper stick structural welds, and bucket wear plates in accordance with BS EN 474 and UAE safety codes.
                  </p>
                  <div className="space-y-2 pt-2 text-xs font-semibold text-slate-200">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Hydraulic system pressure relief valve calibration</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Roll-Over Protective Structure (ROPS/FOPS) compliance</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Operator cabin controls & travel alarm functional check</span>
                    </p>
                  </div>
                </>
              )}

              {activeLabTab === 'crane' && (
                <>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                    Lifting Machinery & Hoists
                  </span>
                  <h4 className="text-2xl font-black text-white">
                    Crane Hoist Wire Rope & Hook Proof Load Testing
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Proof load test up to 125% rated capacity, hoist winch braking efficiency test, wire rope non-destructive magnetic scanning, and Safe Working Load (SWL) safety tag issuance.
                  </p>
                  <div className="space-y-2 pt-2 text-xs font-semibold text-slate-200">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Safe Load Indicator (SLI) calibration & cut-off limits</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Hook shank ultrasonic flaw detection & safety latch check</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Statutory compliance inspection certificate issued</span>
                    </p>
                  </div>
                </>
              )}

              {activeLabTab === 'gauge' && (
                <>
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                    Pressure Equipment & Boilers
                  </span>
                  <h4 className="text-2xl font-black text-white">
                    Hydrostatic Pressure & Safety Relief Valve Calibration
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Thorough internal and external visual examination, ultrasonic wall thickness measurement, hydrostatic pressure test to 1.5x design pressure, and safety relief valve pop-pressure test.
                  </p>
                  <div className="space-y-2 pt-2 text-xs font-semibold text-slate-200">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>ASME Sec. VIII & BS 5500 code verification</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Dual-scale calibrated pressure gauge verification</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Inspection tag with test pressure & re-inspection due date</span>
                    </p>
                  </div>
                </>
              )}

              {activeLabTab === 'ndt' && (
                <>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                    Non-Destructive Testing (NDT)
                  </span>
                  <h4 className="text-2xl font-black text-white">
                    Ultrasonic & Magnetic Particle Weld Joint Examination
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    High-frequency sound wave velocity and attenuation analysis to detect internal flaws, inclusions, porosity, or fatigue cracks without damaging structural steel integrity.
                  </p>
                  <div className="space-y-2 pt-2 text-xs font-semibold text-slate-200">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>UT thickness measurement on corroded steel surfaces</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Liquid Penetrant Testing (PT) for surface breaking cracks</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>ISO 9712 / ASNT Level II certified inspectors</span>
                    </p>
                  </div>
                </>
              )}

              {activeLabTab === 'scaffold' && (
                <>
                  <span className="text-xs font-mono font-bold text-green-400 uppercase tracking-widest">
                    Work At Height & Scaffolding
                  </span>
                  <h4 className="text-2xl font-black text-white">
                    Scaffolding Structural Audit & Green Tag Certification
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Independent structural audit of facade scaffolds, birdcage towers, and mobile access platforms. Direct issuance of the official Dubai Statutory Green Tag ("SAFE FOR USE") or Yellow/Red Tag.
                  </p>
                  <div className="space-y-2 pt-2 text-xs font-semibold text-slate-200">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Base plate stability & sole board load distribution</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Guard rails, toe boards, and fully boarded decking audit</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Tie-in anchor pull-out test and wind load calculation</span>
                    </p>
                  </div>
                </>
              )}

              <div className="pt-4">
                <button
                  onClick={() => openQuoteModal(`Machinery Inspection Booking: ${activeLabTab.toUpperCase()}`)}
                  className="px-6 py-3 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-2"
                >
                  <Activity className="w-4 h-4" />
                  <span>Book This Inspection Schedule</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-brand-navy text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Equipment Cards Grid - Expansive Full-Width 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 mb-16">
          {filteredEquipment.map((eq) => (
            <div
              key={eq.id}
              className="clean-card overflow-hidden flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Equipment Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={eq.image}
                    alt={eq.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-transparent to-transparent pointer-events-none" />

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-white/95 text-[10px] font-black uppercase tracking-wider text-brand-navy shadow-sm">
                    {eq.category}
                  </span>
                </div>

                {/* Equipment Content */}
                <div className="p-6">
                  <h3 className="text-lg font-black text-brand-navy mb-2 group-hover:text-brand-green-dark transition-colors leading-snug">
                    {eq.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                    {eq.description}
                  </p>

                  {/* Specs / Scope Checklist */}
                  {eq.specs && (
                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {eq.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => openQuoteModal(`Equipment Inspection: ${eq.name}`)}
                  className="w-full py-3 rounded-xl bg-slate-100 hover:bg-brand-navy hover:text-white text-brand-navy text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                  <span>Inquire Inspection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner - Expansive Full Width */}
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-navy text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl w-full">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center flex-shrink-0 font-bold border border-amber-400/30">
              <Truck className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-black mb-1.5">
                Have Specialized Plant or Unlisted Machinery in Dubai?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                ClearEarth certified engineers carry calibrated diagnostic tools to inspect any custom industrial machinery, lifting tackle, or power plant across the UAE.
              </p>
            </div>
          </div>
          <button
            onClick={() => openQuoteModal('Specialized Machinery Audit')}
            className="w-full lg:w-auto px-8 py-4 rounded-2xl bg-brand-green hover:bg-brand-green-hover text-white font-extrabold text-sm shadow-xl whitespace-nowrap flex-shrink-0 hover:-translate-y-0.5 transition-all text-center"
          >
            Consult Our Inspectors
          </button>
        </div>

      </div>
    </section>
  );
};

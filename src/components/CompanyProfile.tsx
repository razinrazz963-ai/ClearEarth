import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  ShieldCheck,
  Target,
  Compass,
  Users,
  Briefcase,
  Building2,
  UserCheck,
  CheckCircle2,
  FileText,
  ArrowRight,
} from 'lucide-react';

export const CompanyProfile: React.FC = () => {
  const { companyIntroduction, openQuoteModal, openLicenseModal } = useLanguage();

  return (
    <section id="company-profile" className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Subtle ambient gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs font-black uppercase tracking-wider mb-3.5 shadow-sm">
            <Building2 className="w-4 h-4 text-brand-green" />
            <span>Corporate Profile & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            Safety Engineering & Technical Compliance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            ClearEarth Safety Consultancy LLC delivers independent third-party inspection, technical certification, and accredited safety training across the UAE.
          </p>
        </div>

        {/* 2-Column Corporate Narrative - Expansive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center mb-20">
          
          {/* Left: Detailed Overview */}
          <div className="lg:col-span-7 space-y-6 text-start">
            <div className="inline-block px-3.5 py-1.5 rounded-xl bg-brand-navy/5 text-brand-navy text-xs font-black uppercase tracking-wide border border-brand-navy/10">
              Official Establishment & Scope
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy leading-snug">
              Your Trusted Partner for UAE Safety Compliance & Third-Party Inspection
            </h3>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <strong className="text-brand-navy font-bold">ClearEarth Safety Consultancy LLC</strong> is established in Dubai, UAE, licensed under Commercial License No. <strong className="font-mono text-brand-navy font-bold">1639056</strong> by the Department of Economy and Tourism (DET), Government of Dubai.
            </p>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              We provide specialized third-party technical inspection of on-shore and off-shore equipment, certified workforce safety training, and instrumentation calibration. Every operation conforms strictly to Dubai Municipality statutory codes, UAE Federal safety regulations, and international ISO directives.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">DET License</p>
                <p className="text-xl font-black text-brand-navy font-mono mt-1">#1639056</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dubai Chamber</p>
                <p className="text-xl font-black text-brand-green-dark font-mono mt-1">#695698</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Headquarters</p>
                <p className="text-sm font-extrabold text-brand-navy mt-1">Hor Al Anz, Dubai</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={openLicenseModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-brand-green" />
                <span>View Official License</span>
              </button>
              <button
                onClick={() => openQuoteModal('Corporate Profile Consultation')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:-translate-y-0.5"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 text-brand-green" />
              </button>
            </div>
          </div>

          {/* Right: Quality Policy Box - Luxury Styling */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 luxury-dark-card p-8 sm:p-10 text-white">
              <div className="inline-block px-4 py-1.5 rounded-lg bg-brand-green text-white text-xs font-black uppercase tracking-widest mb-5 shadow-sm">
                {companyIntroduction.qualityPolicy.title}
              </div>
              <p className="text-base text-slate-200 leading-relaxed font-normal mb-8">
                {companyIntroduction.qualityPolicy.description}
              </p>
              <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-xs sm:text-sm font-bold text-emerald-400">
                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                <span>Continuous Compliance & Certified Engineering Oversight</span>
              </div>
            </div>
          </div>

        </div>

        {/* Vision & Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className="clean-card p-8 sm:p-12 flex flex-col justify-between border-t-4 border-t-brand-navy hover:shadow-2xl">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-lg bg-brand-navy text-white text-xs font-black uppercase tracking-widest mb-6">
                {companyIntroduction.vision.title}
              </div>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {companyIntroduction.vision.description}
              </p>
            </div>
            <div className="pt-6 mt-8 border-t border-slate-100 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-brand-navy">
              <Target className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span>Regional Leadership & Sustainable Safety Operations</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="clean-card p-8 sm:p-12 flex flex-col justify-between border-t-4 border-t-brand-green hover:shadow-2xl">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-lg bg-brand-green text-white text-xs font-black uppercase tracking-widest mb-6">
                {companyIntroduction.mission.title}
              </div>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {companyIntroduction.mission.description}
              </p>
            </div>
            <div className="pt-6 mt-8 border-t border-slate-100 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-brand-navy">
              <Compass className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span>Certified Engineers & High Training Rigor</span>
            </div>
          </div>
        </div>

        {/* Standard of Services Grid */}
        <div className="clean-card p-8 sm:p-12 bg-slate-50/70 border border-slate-200 mb-20">
          <div className="text-center sm:text-start mb-8">
            <div className="inline-block px-4 py-1.5 rounded-lg bg-brand-navy text-white text-xs font-black uppercase tracking-widest mb-3">
              {companyIntroduction.standardsOfServices.title}
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold">
              Foundational service standards governing every technical engagement across UAE jobsites
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyIntroduction.standardsOfServices.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-green/40 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2.5 text-brand-navy mb-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <h4 className="text-base font-extrabold text-brand-navy">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed ps-7 font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM & MANAGEMENT SECTION - Full Wide Layout */}
        <div id="management" className="pt-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs font-bold uppercase tracking-wider mb-3.5 shadow-sm">
              <Users className="w-4 h-4 text-brand-green" />
              <span>Executive Leadership</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy tracking-tight mb-3">
              Management & Technical Governance
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Experienced leadership ensuring certified engineering precision, regulatory compliance, and client trust across the UAE.
            </p>
          </div>

          {/* Full Wide Grid - No max-w-4xl restriction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
            
            {/* Card 1: Ms. Christel Alvarez Acula */}
            <div className="clean-card p-8 sm:p-10 flex flex-col justify-between border-t-4 border-t-brand-green hover:shadow-2xl">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-green/15 text-brand-green-dark flex items-center justify-center font-black text-2xl flex-shrink-0 border border-brand-green/30 shadow-sm">
                    CA
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                      Ms. Christel Alvarez Acula
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-brand-green">
                      General Manager & Shareholder
                    </p>
                    <p className="text-xs font-mono text-slate-400">
                      100% Shares Owner (LLC - Single Owner)
                    </p>
                  </div>
                </div>

                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Leads strategic corporate governance, client relations, and regulatory compliance. Holds authorized managerial signatory powers under official Dubai Commercial License No. 1639056.
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-slate-500">
                <UserCheck className="w-4 h-4 text-brand-green" />
                <span>Executive Operational Management</span>
              </div>
            </div>

            {/* Card 2: Mr. Rodel Lausin Acula */}
            <div className="clean-card p-8 sm:p-10 flex flex-col justify-between border-t-4 border-t-brand-navy hover:shadow-2xl">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-navy/10 text-brand-navy flex items-center justify-center font-black text-2xl flex-shrink-0 border border-brand-navy/20 shadow-sm">
                    RA
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                      Mr. Rodel Lausin Acula
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-brand-navy">
                      Technical Manager / Mechanical Engineer
                    </p>
                    <p className="text-xs font-mono text-slate-400">
                      Certified Safety & Inspection Specialist
                    </p>
                  </div>
                </div>

                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Directs technical inspection protocols, crane & lifting gear certification, scaffolding evaluations, non-destructive testing (NDT), and workforce equipment training across UAE jobsites.
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-slate-500">
                <Briefcase className="w-4 h-4 text-brand-navy" />
                <span>Technical Inspection & Engineering</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

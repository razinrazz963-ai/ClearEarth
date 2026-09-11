import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, ShieldCheck, ArrowRight, Award } from 'lucide-react';

export const AssessmentTraining: React.FC = () => {
  const { assessmentTraining, openQuoteModal } = useLanguage();

  return (
    <section id="assessment" className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs font-black uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-brand-green" />
            <span>Practical Field Competency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            Assessment & Training
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Rigorous hands-on competency evaluations and certified skill certifications designed for high-risk industrial plant, lifting operations, and statutory compliance.
          </p>
        </div>

        {/* 2-Column / Multi-Card Clean Grid with Checkmarks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-16 max-w-5xl mx-auto">
          {assessmentTraining.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openQuoteModal(item.title)}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-green/40 hover:shadow-lg transition-all duration-300 flex items-start gap-4 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 group-hover:bg-brand-green text-brand-green group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all">
                <CheckCircle2 className="w-5 h-5" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 font-mono">
                    Module 0{idx + 1} • {item.category}
                  </span>
                  <span className="text-[11px] font-extrabold text-brand-green group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-brand-navy group-hover:text-brand-green-dark transition-colors mb-1.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="text-center">
          <button
            onClick={() => openQuoteModal('Assessment & Training Consultation')}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-brand-navy hover:bg-brand-navy-light text-white font-black text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>Book On-Site Technical Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

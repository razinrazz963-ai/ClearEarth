import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

export const CTASection: React.FC = () => {
  const { openQuoteModal, companyInfo } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-brand-navy-950 text-white relative overflow-hidden">
      {/* Background Image with Dark Industrial Tint */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <img
          src="/images/dubai-skyline.png"
          alt="Dubai Construction Safety Background"
          className="w-full h-full object-cover object-center filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950 via-brand-navy-950/90 to-brand-navy-950/80" />
      </div>

      <div className="site-container relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green-light text-xs font-black uppercase tracking-wider mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-brand-green" />
          <span>Statutory Safety Leadership</span>
        </div>

        {/* Main CTA Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
          Ready to Build a <span className="text-brand-green">Safer Workforce?</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
          Get in touch with us for professional training, inspection, certification and consultancy services across Dubai and the UAE.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl bg-gradient-to-r from-brand-green via-brand-green to-brand-green-dark text-white font-black text-base shadow-[0_8px_30px_rgba(30,168,75,0.4)] hover:shadow-[0_12px_36px_rgba(30,168,75,0.55)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-base transition-all duration-200 backdrop-blur-md"
          >
            <PhoneCall className="w-4 h-4 text-brand-green" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Quick Phone Text */}
        <div className="mt-8 text-xs text-slate-400">
          <span>Call our Dubai technical desk: </span>
          <a
            href={`tel:${companyInfo.phone1}`}
            className="text-white font-black hover:text-brand-green underline transition-colors"
          >
            {companyInfo.phone1Display}
          </a>
        </div>
      </div>
    </section>
  );
};

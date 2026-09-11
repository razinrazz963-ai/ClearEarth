import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navItems, companyInfo } = useLanguage();

  return (
    <footer className="bg-brand-navy-950 text-slate-300 relative overflow-hidden border-t border-white/10">
      {/* Ambient background lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container pt-16 sm:pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10 text-start">
          
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="flex items-center gap-3">
              <div className="p-2 rounded-2xl bg-white shadow-md inline-block">
                <img
                  src="/images/logo.jpg"
                  alt="ClearEarth Safety Consultancy LLC"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white">
                  ClearEarth
                </span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Safety Consultancy LLC
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Official Dubai Department of Economy & Tourism Commercial License No. 1639056. Dedicated to independent third-party equipment inspection, statutory certification, practical workforce training, and industrial instrumentation across the UAE.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>EIAC Approval & Statutory Dubai Compliant</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-green" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Safety Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-400">
              <li>
                <a href="#certification" className="hover:text-white transition-colors">
                  Lifting Equipment & Mobile Cranes
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition-colors">
                  Earth Moving Machinery & JCB Audits
                </a>
              </li>
              <li>
                <a href="#certification" className="hover:text-white transition-colors">
                  Pressure Vessels & Air Receivers
                </a>
              </li>
              <li>
                <a href="#certification" className="hover:text-white transition-colors">
                  Scaffolding Inspection & Green Tagging
                </a>
              </li>
              <li>
                <a href="#certification" className="hover:text-white transition-colors">
                  Non-Destructive Testing (NDT)
                </a>
              </li>
              <li>
                <a href="#instrumentation" className="hover:text-white transition-colors">
                  Instrumentation & Sensor Calibration
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition-colors">
                  Accredited Safety Training (60+ Courses)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                <span>{companyInfo.addressEn}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-green flex-shrink-0" />
                <a href={`tel:${companyInfo.phone1}`} className="hover:text-white transition-colors font-bold text-white">
                  {companyInfo.phone1Display}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-green flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors break-all">
                  {companyInfo.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 text-xs font-bold transition-colors"
                >
                  <span>Chat on WhatsApp: {companyInfo.phone1Display}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ClearEarth Safety Consultancy LLC. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Dubai, United Arab Emirates</span>
            <span>•</span>
            <span>Licensed Inspection & Safety Consultancy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

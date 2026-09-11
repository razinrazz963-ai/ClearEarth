import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, CheckCircle2, Eye, Download, ExternalLink, Award } from 'lucide-react';

export const CommercialLicenseSection: React.FC = () => {
  const { commercialLicense, isRTL, openLicenseModal, ui } = useLanguage();

  return (
    <section id="license" className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-200/60 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>{isRTL ? 'الرخصة التجارية الرسمية' : 'Official Commercial License'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            {isRTL ? 'رخصة تجارية معتمدة - حكومة دبي' : 'Commercial License'}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {isRTL
              ? 'شركة كلير ايرث لاستشارات السلامة ش.ذ.م.م مرخصة رسمياً من دائرة الاقتصاد والسياحة في دبي لممارسة استشارات السلامة والصحة المهنية.'
              : 'ClearEarth Safety Consultancy LLC is officially licensed by the Department of Economy and Tourism (DET), Government of Dubai, authorizing professional occupational safety consultancy across the UAE.'}
          </p>
        </div>

        {/* Verified Credential Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">{ui.licenseNoLabel}</p>
            <p className="text-sm sm:text-base font-extrabold text-brand-navy font-mono">{commercialLicense.licenseNo}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">{ui.registerNoLabel}</p>
            <p className="text-sm sm:text-base font-extrabold text-brand-navy font-mono">{commercialLicense.registerNo}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">{ui.dcciNoLabel}</p>
            <p className="text-sm sm:text-base font-extrabold text-brand-navy font-mono">{commercialLicense.dcciNo}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">{ui.statusLabel}</p>
            <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full mt-0.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isRTL ? commercialLicense.statusAr : commercialLicense.statusEn}</span>
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center col-span-2 sm:col-span-1">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">{ui.issueDateLabel}</p>
            <p className="text-xs sm:text-sm font-bold text-slate-700 font-mono">{commercialLicense.issueDate}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center col-span-2 sm:col-span-1">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">{ui.expiryDateLabel}</p>
            <p className="text-xs sm:text-sm font-bold text-slate-700 font-mono">{commercialLicense.expiryDate}</p>
          </div>
        </div>

        {/* Large Centered License Image Display Container */}
        <div className="max-w-[920px] mx-auto">
          <div className="clean-card p-4 sm:p-6 lg:p-8 bg-white border-2 border-slate-200 shadow-xl relative group">
            
            {/* Action Bar Above Image */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <Award className="w-4 h-4 text-brand-green" />
                <span>
                  {isRTL
                    ? 'وثيقة رسمية صادرة من دائرة الاقتصاد والسياحة بدبي'
                    : 'Government of Dubai — Commercial License Document'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={openLicenseModal}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold shadow-sm transition-all transform hover:-translate-y-0.5"
                  title="Open in Full Lightbox"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isRTL ? 'عرض بالحجم الكامل' : 'View Full License'}</span>
                </button>

                <a
                  href="/images/commercial-license.png"
                  download="ClearEarth-Commercial-License-1639056.png"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                  title="Download Official Document"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isRTL ? 'تحميل' : 'Download'}</span>
                </a>

                <a
                  href="/images/commercial-license.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                  title="Open Original in New Tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isRTL ? 'نافذة جديدة' : 'New Tab'}</span>
                </a>
              </div>
            </div>

            {/* Clickable High-Resolution Document Display */}
            <div
              onClick={openLicenseModal}
              className="relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 cursor-pointer shadow-inner transition-transform group-hover:shadow-md"
            >
              <img
                src="/images/commercial-license.png"
                alt="ClearEarth Safety Consultancy LLC Commercial License - Government of Dubai"
                className="w-full h-auto object-contain mx-auto select-none max-h-[850px]"
                loading="lazy"
              />
              
              {/* Subtle hover overlay hint */}
              <div className="absolute inset-0 bg-brand-navy-950/0 group-hover:bg-brand-navy-950/20 transition-all flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-brand-navy-950/90 text-white text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2">
                  <Eye className="w-4 h-4 text-brand-green" />
                  <span>{isRTL ? 'انقر لتكبير الوثيقة وفحص التفاصيل' : 'Click to inspect in Full Screen Lightbox'}</span>
                </span>
              </div>
            </div>

            {/* License Official Details Summary Strip */}
            <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
              <div>
                <p className="font-bold text-slate-700 uppercase mb-0.5">{isRTL ? 'النشاط المرخص' : 'Licensed Activity'}:</p>
                <p className="font-semibold text-brand-navy">{isRTL ? commercialLicense.activityAr : commercialLicense.activityEn}</p>
              </div>
              <div>
                <p className="font-bold text-slate-700 uppercase mb-0.5">{isRTL ? 'الشكل القانوني' : 'Legal Form'}:</p>
                <p className="font-semibold text-brand-navy">{isRTL ? commercialLicense.legalTypeAr : commercialLicense.legalTypeEn}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ShieldCheck, CheckCircle2, Download, Printer, ExternalLink, Award, ZoomIn, ZoomOut } from 'lucide-react';

export const CommercialLicenseModal: React.FC = () => {
  const { commercialLicense, licenseModalOpen, closeLicenseModal, isRTL, ui } = useLanguage();
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsZoomed(false);
        closeLicenseModal();
      }
    };
    if (licenseModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [licenseModalOpen, closeLicenseModal]);

  const handleClose = () => {
    setIsZoomed(false);
    closeLicenseModal();
  };

  if (!licenseModalOpen) return null;

  const handlePrint = () => {
    const printWindow = window.open(commercialLicense.documentImage, '_blank');
    if (printWindow) {
      printWindow.focus();
      setTimeout(() => printWindow.print(), 500);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-brand-navy-950/85 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="license-modal-title"
    >
      <div
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy p-5 sm:p-6 text-white flex items-center justify-between flex-shrink-0 border-b border-brand-navy-light/40">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-brand-green/20 text-brand-green-light border border-brand-green/30 flex items-center justify-center flex-shrink-0 shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider border border-emerald-500/30">
                  {ui.verifiedLicenseTag}
                </span>
                <span className="text-xs text-slate-300 font-mono">
                  #{commercialLicense.licenseNo}
                </span>
              </div>
              <h3 id="license-modal-title" className="text-lg sm:text-xl font-black tracking-tight text-white mt-0.5">
                {isRTL ? 'رخصة تجارية معتمدة - حكومة دبي' : 'Commercial License - Government of Dubai'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors"
              title={isZoomed ? 'Fit to Screen' : 'Zoom to 100%'}
              aria-label="Toggle Zoom"
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors"
              title="Print License"
              aria-label="Print License"
            >
              <Printer className="w-4 h-4" />
            </button>
            <a
              href={commercialLicense.documentImage}
              download="ClearEarth-Commercial-License-1639056.png"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors"
              title="Download License"
              aria-label="Download License"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={handleClose}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-red-500/80 text-slate-200 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Quick Credential Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase">{ui.licenseNoLabel}</p>
              <p className="text-sm font-extrabold text-brand-navy font-mono">{commercialLicense.licenseNo}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase">{ui.registerNoLabel}</p>
              <p className="text-sm font-extrabold text-brand-navy font-mono">{commercialLicense.registerNo}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase">{ui.dcciNoLabel}</p>
              <p className="text-sm font-extrabold text-brand-navy font-mono">{commercialLicense.dcciNo}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase">{ui.statusLabel}</p>
              <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full mt-0.5">
                <CheckCircle2 className="w-3 h-3" />
                <span>{isRTL ? commercialLicense.statusAr : commercialLicense.statusEn}</span>
              </span>
            </div>
          </div>

          {/* High-Resolution Document Display Container */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-100 text-center">
            <div className="py-2.5 px-4 bg-slate-100 border-b border-slate-200 text-xs font-semibold text-slate-600 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-brand-green" />
                <span className="font-bold">{ui.officialDocumentNotice}</span>
              </div>
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-navy hover:text-brand-green transition-colors"
              >
                {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                <span>{isZoomed ? (isRTL ? 'ملاءمة الإطار' : 'Fit to Frame') : (isRTL ? 'تكبير بكامل الدقة' : 'Zoom 100% Details')}</span>
              </button>
            </div>

            <div className={`w-full overflow-auto bg-slate-900/5 ${isZoomed ? 'max-h-none' : 'max-h-[660px]'}`}>
              <img
                src={commercialLicense.documentImage}
                alt="Dubai Economy and Tourism Commercial License - ClearEarth Safety Consultancy LLC"
                className={`mx-auto select-none transition-all duration-200 ${
                  isZoomed ? 'w-full max-w-none' : 'w-full h-auto object-contain max-h-[660px]'
                }`}
              />
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 flex-shrink-0">
          <p className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>{isRTL ? 'وثيقة رسمية صادرة برقم تسجيل 2896808' : 'Official DET License certified under Registration No. 2896808'}</span>
          </p>
          <div className="flex items-center gap-3">
            <a
              href={commercialLicense.documentImage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-brand-navy font-bold transition-colors"
            >
              <span>{isRTL ? 'فتح في نافذة كاملة' : 'Open Full Image'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={handleClose}
              className="px-5 py-2 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold transition-colors"
            >
              {ui.close}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

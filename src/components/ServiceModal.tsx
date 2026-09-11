import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Phone, MessageSquare } from 'lucide-react';

export interface ServiceModalData {
  title: string;
  category: string;
  description: string;
  image?: string;
  items?: string[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ServiceModalData | null;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, data }) => {
  const { ui, isRTL, openQuoteModal, companyInfo } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform transition-all animate-slide-up flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image banner */}
        <div className="relative h-44 sm:h-52 bg-brand-navy overflow-hidden flex-shrink-0">
          {data.image && (
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover object-center filter brightness-90"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-900/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors focus:outline-none`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on banner */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-green text-white text-[11px] font-bold uppercase tracking-wider mb-2">
              {data.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {data.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Short Explanation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {isRTL ? 'نظرة عامة' : 'Service Overview'}
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {data.description}
            </p>
          </div>

          {/* Structured Bullet Checklist */}
          {data.items && data.items.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {isRTL ? 'نطاق الفحص والتغطية' : 'Inspection Scope & Coverage'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {data.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-semibold text-brand-navy"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Direct Phone / WhatsApp Assistance */}
          <div className="p-4 rounded-2xl bg-brand-green/5 border border-brand-green/15 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-slate-600 font-medium">
              {isRTL ? 'تواصل فوري مع المهندس المعتمد:' : 'Direct Engineer Consultation:'}
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${companyInfo.phone1}`}
                className="flex items-center gap-1 font-bold text-brand-navy hover:text-brand-green"
              >
                <Phone className="w-3.5 h-3.5 text-brand-green" />
                <span dir="ltr">{companyInfo.phone1Display}</span>
              </a>
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-bold text-emerald-600 hover:text-emerald-700"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-sm transition-colors"
          >
            {ui.close}
          </button>
          <button
            onClick={() => {
              onClose();
              openQuoteModal(data.title);
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-bold text-sm shadow-md transition-all duration-200"
          >
            <span>{ui.getQuote}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

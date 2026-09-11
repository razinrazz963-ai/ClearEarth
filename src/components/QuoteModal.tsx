import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Send, CheckCircle, ShieldCheck, MessageSquare, Mail } from 'lucide-react';

export const QuoteModal: React.FC = () => {
  const { quoteModalOpen, closeQuoteModal, preselectedService, ui, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: preselectedService || '',
    message: '',
  });
  const [prevSelected, setPrevSelected] = useState(preselectedService);

  if (preselectedService !== prevSelected) {
    setPrevSelected(preselectedService);
    setFormData((prev) => ({ ...prev, serviceRequired: preselectedService }));
  }

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeQuoteModal();
    };
    if (quoteModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [quoteModalOpen, closeQuoteModal]);

  if (!quoteModalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const messageContent = `Hello ClearEarth Safety Consultancy LLC,\n\n• Name: ${formData.fullName}\n• Company: ${formData.companyName || 'N/A'}\n• Phone: ${formData.phone}\n• Email: ${formData.email}\n• Service: ${formData.serviceRequired}\n• Details: ${formData.message || 'N/A'}`;
    const whatsappUrl = `https://wa.me/971524848216?text=${encodeURIComponent(messageContent)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  const serviceOptions = [
    'Lifting Equipment Inspection',
    'Lifting Accessories',
    'Pressure Vessel Inspection',
    'Earth Moving Machinery',
    'Scaffolding Inspection',
    'Non-Destructive Testing',
    'Safety & Operator Training',
    'Instrumentation',
    'General Safety Consultancy',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy-950/75 backdrop-blur-sm animate-fade-in"
      onClick={closeQuoteModal}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform transition-all animate-slide-up flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean Modal Header */}
        <div className="bg-brand-navy p-6 sm:p-8 text-white relative flex-shrink-0">
          <button
            onClick={closeQuoteModal}
            className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand-green-light mb-2">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>ClearEarth Safety Consultancy LLC</span>
          </div>

          {/* Simple Title */}
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
            {ui.requestQuoteHeading}
          </h3>

          {/* Clean Short Text */}
          <p className="text-sm text-slate-300 font-normal">
            {ui.requestQuoteSub}
          </p>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center animate-fade-in">
              <div className="w-16 h-16 bg-brand-green-50 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-brand-navy mb-2">
                {ui.enquirySent}
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto mb-4 leading-relaxed">
                {ui.enquirySuccessMsg}
              </p>

              {/* Explicit Routing Notice */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-md mx-auto mb-6 space-y-1">
                <p className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">
                  {isRTL ? 'الوجهة المباشرة للطلب:' : 'Enquiry Routed Directly To:'}
                </p>
                <p className="font-extrabold text-brand-navy font-mono text-base">
                  +971 52 484 8216
                </p>
                <p className="text-brand-green font-bold">
                  clearearthsafety@gmail.com
                </p>
              </div>

              {/* Direct Send Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6">
                <a
                  href={`https://wa.me/971524848216?text=${encodeURIComponent(
                    `Hello ClearEarth Safety Consultancy LLC,\n\n• Name: ${formData.fullName}\n• Company: ${formData.companyName || 'N/A'}\n• Phone: ${formData.phone}\n• Email: ${formData.email}\n• Service: ${formData.serviceRequired}\n• Details: ${formData.message || 'N/A'}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isRTL ? 'إرسال عبر واتساب (+971 52 484 8216)' : 'Open WhatsApp (+971 52 484 8216)'}</span>
                </a>

                <a
                  href={`mailto:clearearthsafety@gmail.com?subject=${encodeURIComponent(`Quotation Request: ${formData.serviceRequired} - ${formData.fullName}`)}&body=${encodeURIComponent(
                    `Hello ClearEarth Safety Consultancy LLC,\n\n• Name: ${formData.fullName}\n• Company: ${formData.companyName || 'N/A'}\n• Phone: ${formData.phone}\n• Email: ${formData.email}\n• Service: ${formData.serviceRequired}\n• Message: ${formData.message || 'N/A'}`
                  )}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>{isRTL ? 'إرسال عبر البريد الإلكتروني' : 'Send via Email'}</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  closeQuoteModal();
                }}
                className="px-8 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-brand-navy font-bold text-xs transition-colors"
              >
                {ui.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {ui.fullName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {ui.companyName}
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {ui.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {ui.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {ui.serviceRequired} <span className="text-red-500">*</span>
                </label>
                <select
                  name="serviceRequired"
                  required
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all"
                >
                  <option value="">{ui.selectService}</option>
                  {serviceOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {ui.message}
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-green to-brand-green-dark text-white font-extrabold text-base shadow-[0_6px_20px_rgba(30,168,75,0.3)] hover:shadow-[0_8px_25px_rgba(30,168,75,0.4)] flex items-center justify-center gap-2 transition-all disabled:opacity-75"
                >
                  {loading ? (
                    <span>{isRTL ? 'جاري الإرسال...' : 'Submitting...'}</span>
                  ) : (
                    <>
                      <span>{ui.submitRequest}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

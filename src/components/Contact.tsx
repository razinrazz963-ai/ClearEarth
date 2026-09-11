import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Clock,
  Send,
  Building2,
  ShieldCheck,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { companyInfo } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: 'Safety Training',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Form submission feedback simulation
    setTimeout(() => {
      // keep submitted state or allow reset
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs font-black uppercase tracking-wider mb-3">
            <Mail className="w-4 h-4 text-brand-green" />
            <span>Inquiry & Technical Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            Get in Touch / Request a Quote
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Connect with ClearEarth Safety Consultancy LLC for equipment inspection schedules, workforce training bookings, and technical calibration quotes across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start max-w-6xl mx-auto">
          
          {/* LEFT: Official Contact Cards */}
          <div className="lg:col-span-5 space-y-6 text-start">
            
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <h3 className="text-lg font-black text-brand-navy mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-brand-green" />
                <span>Head Office & Operations</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-500 uppercase text-[10px]">Direct Lines</p>
                    <a href={`tel:${companyInfo.phone1}`} className="font-black text-brand-navy hover:text-brand-green block">
                      {companyInfo.phone1Display}
                    </a>
                    {companyInfo.phone2Display && (
                      <a href={`tel:${companyInfo.phone2}`} className="font-semibold text-slate-600 hover:text-brand-green block">
                        {companyInfo.phone2Display}
                      </a>
                    )}
                    {companyInfo.phone3Display && (
                      <a href={`tel:${companyInfo.phone3}`} className="font-semibold text-slate-600 hover:text-brand-green block">
                        {companyInfo.phone3Display}
                      </a>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-500 uppercase text-[10px]">Email Address</p>
                    <a href={`mailto:${companyInfo.email}`} className="font-black text-brand-navy hover:text-brand-green break-all">
                      {companyInfo.email}
                    </a>
                    {companyInfo.emailAlt && (
                      <a href={`mailto:${companyInfo.emailAlt}`} className="font-medium text-slate-500 hover:text-brand-green block break-all text-xs mt-0.5">
                        {companyInfo.emailAlt}
                      </a>
                    )}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-500 uppercase text-[10px]">WhatsApp Rapid Response</p>
                    <a
                      href={companyInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-black text-emerald-600 hover:text-emerald-700 block"
                    >
                      {companyInfo.phone1Display} (Chat Now)
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-500 uppercase text-[10px]">Office Address</p>
                    <p className="font-semibold text-slate-800 leading-snug">
                      {companyInfo.addressEn}
                    </p>
                  </div>
                </div>

                {/* Operational Hours */}
                <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-slate-200/70 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-500 uppercase text-[10px]">Operational Coverage</p>
                    <p className="font-semibold text-slate-700">
                      Saturday – Thursday: 8:00 AM – 6:00 PM
                    </p>
                    <p className="text-[11px] text-brand-green font-bold">
                      24/7 Rapid Mobilization for Critical Rigging & Emergency Audits
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statutory Compliance Badge */}
            <div className="p-5 rounded-2xl bg-brand-navy-950 text-white flex items-center gap-3.5 shadow-md">
              <ShieldCheck className="w-8 h-8 text-brand-green flex-shrink-0" />
              <div className="text-xs">
                <p className="font-extrabold text-white">Government of Dubai Licensed</p>
                <p className="text-slate-300">DET Commercial License #1639056 • EIAC Aligned</p>
              </div>
            </div>

          </div>

          {/* RIGHT: Clean Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="clean-card p-6 sm:p-9 bg-white border border-slate-200 shadow-xl">
              
              {formSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-navy mb-2">Inquiry Received Successfully!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-brand-navy">{formData.name}</strong>. Your inquiry for <strong className="text-brand-green-dark">{formData.serviceRequired}</strong> has been logged with our technical desk. An engineer will reach out to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        serviceRequired: 'Safety Training',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-start">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-black text-brand-navy mb-1">
                      Request a Technical Service Quote
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Fill out the form below and our certified safety specialists will contact you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Dubai Industrial Ltd"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 5X XXX XXXX"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                    >
                      <option value="Safety Training">Safety Training Programs (60+ Courses)</option>
                      <option value="Lifting Equipment Inspection">Lifting Equipment & Cranes Inspection</option>
                      <option value="Earth Moving Machinery Inspection">Earth Moving & JCB Machinery Inspection</option>
                      <option value="Pressure Vessel Inspection">Pressure Vessel & Air Receiver Inspection</option>
                      <option value="Scaffolding Inspection & Tagging">Scaffolding Inspection & Green Tagging</option>
                      <option value="NDT Testing">Non-Destructive Testing (NDT)</option>
                      <option value="Instrumentation Calibration">Instrumentation & Sensor Calibration</option>
                      <option value="Occupational Health & Safety Consultancy">Occupational Health & Safety Consultancy</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify machinery models, number of personnel to train, or project site location in UAE..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-green via-brand-green to-brand-green-dark text-white font-black text-sm shadow-[0_4px_16px_rgba(30,168,75,0.35)] hover:shadow-[0_8px_24px_rgba(30,168,75,0.45)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request a Quote</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    Your inquiry is handled strictly by authorized ClearEarth safety personnel under UAE data protection standards.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

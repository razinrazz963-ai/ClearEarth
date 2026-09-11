import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Award,
  Eye,
  Download,
  X,
  Building2,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import type { GovernmentApprovalItem } from '../data/types';

export const GovernmentApprovals: React.FC = () => {
  const { governmentApprovals } = useLanguage();
  const [selectedDoc, setSelectedDoc] = useState<GovernmentApprovalItem | null>(null);

  return (
    <section id="approvals" className="py-24 lg:py-32 bg-slate-50/80 relative overflow-hidden border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <Award className="w-4 h-4 text-brand-green" />
            <span>Official Government Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            Statutory Dubai Approvals & Licensing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            ClearEarth Safety Consultancy LLC operates under authentic, verifiable statutory approvals issued by Dubai's premier regulatory authorities for inspection and occupational safety consultancy.
          </p>
        </div>

        {/* 2-COLUMN LUXURY CREDENTIAL SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 mb-16">
          {governmentApprovals.map((item) => (
            <div
              key={item.id}
              className="luxury-glass rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Top Header Badge */}
                <div className="p-6 bg-brand-navy text-white flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green-light">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono font-bold text-brand-green-light uppercase tracking-wider">
                        {item.docNumber}
                      </p>
                      <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                        {item.authority}
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span>{item.status}</span>
                  </span>
                </div>

                {/* Document Preview Frame */}
                {item.documentImage && (
                  <div
                    onClick={() => setSelectedDoc(item)}
                    className="relative h-64 sm:h-72 w-full bg-slate-900/5 overflow-hidden cursor-pointer group/img border-b border-slate-200"
                  >
                    <img
                      src={item.documentImage}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-brand-navy-950/20 to-transparent opacity-60 group-hover/img:opacity-80 transition-opacity" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                      <div className="px-5 py-3 rounded-2xl bg-white/95 text-brand-navy font-black text-xs shadow-2xl flex items-center gap-2 transform group-hover/img:scale-105 transition-transform">
                        <Eye className="w-4 h-4 text-brand-green" />
                        <span>Click to Enlarge Full Certificate</span>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-mono font-bold bg-brand-navy-950/80 px-3 py-1 rounded-lg backdrop-blur-md border border-white/10">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-bold text-amber-300 bg-black/60 px-2.5 py-1 rounded-md">
                        Date: {item.date}
                      </span>
                    </div>
                  </div>
                )}

                {/* Description & Scope */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-brand-green-dark bg-brand-green-50 px-3 py-1 rounded-md inline-block mb-2">
                      Approved Scope / Activity
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-brand-navy">
                      {item.approvalType}
                    </h4>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.summary}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-y-2 gap-x-4 text-xs font-bold text-slate-600">
                    <span className="flex items-center gap-1.5 text-brand-navy">
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                      <span>Statutory Dubai Compliance</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-brand-navy">
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                      <span>Third-Party Verification Ready</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-brand-navy">
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                      <span>Direct EIAC / DET Verifiable</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Strip */}
              <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setSelectedDoc(item)}
                  className="flex-1 py-3.5 rounded-2xl bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-black transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5"
                >
                  <Eye className="w-4 h-4 text-brand-green" />
                  <span>Inspect Official Certificate</span>
                </button>
                {item.pdfUrl && (
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                    <span>View PDF</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* AUTHENTIC CORPORATE REGISTRATION BANNER */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-brand-navy text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 font-bold">
              <Building2 className="w-8 h-8 text-brand-green-light" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-500/30">
                  Registered Legal Entity
                </span>
                <span className="text-xs text-slate-400">• Dubai, UAE</span>
              </div>
              <h4 className="text-lg sm:text-xl font-black text-white">
                ClearEarth Safety Consultancy LLC
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Commercial License No. <strong className="text-white font-mono font-bold">1639056</strong> (Department of Economy & Tourism, Dubai) • Approval NOC No. <strong className="text-brand-green-light font-mono font-bold">1787307</strong> (EIAC) • Dubai Chamber of Commerce No. <strong className="text-white font-mono font-bold">695698</strong>
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full lg:w-auto px-8 py-4 rounded-2xl bg-brand-green hover:bg-brand-green-hover text-white font-black text-xs sm:text-sm whitespace-nowrap shadow-[0_4px_20px_rgba(30,168,75,0.4)] transition-all hover:-translate-y-0.5 text-center"
          >
            Request Official Accreditation Dossier
          </a>
        </div>

        {/* FULL DOCUMENT LIGHTBOX MODAL */}
        {selectedDoc && selectedDoc.documentImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
            <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl flex flex-col max-h-[92vh]">
              {/* Header Bar */}
              <div className="p-4 sm:p-5 bg-brand-navy text-white flex items-center justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-black">{selectedDoc.title}</h4>
                  <p className="text-[11px] text-slate-300">{selectedDoc.authority} • {selectedDoc.docNumber}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedDoc.documentImage}
                    download={`${selectedDoc.id}.png`}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                    title="Download document image"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    onClick={() => setSelectedDoc(null)}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Document Image Scroll Area */}
              <div className="p-4 overflow-y-auto flex-1 bg-slate-100 flex items-center justify-center">
                <img
                  src={selectedDoc.documentImage}
                  alt={selectedDoc.title}
                  className="max-h-[72vh] w-auto object-contain rounded-xl shadow-lg border border-slate-300"
                />
              </div>

              {/* Footer Notice */}
              <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold">Official Record — ClearEarth Safety Consultancy LLC (Dubai, UAE)</span>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold"
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

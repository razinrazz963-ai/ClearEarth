import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Briefcase,
  ShieldCheck,
  GraduationCap,
  Gauge,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Search,
} from 'lucide-react';
import type { ActivityDivision } from '../data/types';

export const CompanyActivities: React.FC = () => {
  const { activityDivisions, isRTL, openQuoteModal, ui } = useLanguage();
  const [selectedDivisionId, setSelectedDivisionId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const filteredDivisions = activityDivisions
    .map((div) => {
      if (selectedDivisionId !== 'all' && div.id !== selectedDivisionId) {
        return null;
      }
      const matchingItems = div.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      if (searchQuery.trim() && matchingItems.length === 0) {
        return null;
      }
      return {
        ...div,
        items: searchQuery.trim() ? matchingItems : div.items,
      };
    })
    .filter(Boolean) as ActivityDivision[];

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'div-inspection':
        return <ShieldCheck className="w-5 h-5 text-white" />;
      case 'div-training':
        return <GraduationCap className="w-5 h-5 text-white" />;
      case 'div-instrumentation':
      default:
        return <Gauge className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="activities" className="py-24 lg:py-32 bg-white/80 backdrop-blur-sm relative overflow-hidden">
      {/* Subtle Letterhead Wave Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-brand-green" />
            <span>{ui.activitiesHeading}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            {ui.activitiesHeading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {ui.activitiesSub}
          </p>
        </div>

        {/* Division Tab Selector & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Tab Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 w-full md:w-auto">
            <button
              onClick={() => setSelectedDivisionId('all')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                selectedDivisionId === 'all'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-slate-600 hover:text-brand-navy hover:bg-white/60'
              }`}
            >
              {ui.allDivisions}
            </button>
            {activityDivisions.map((div) => (
              <button
                key={div.id}
                onClick={() => setSelectedDivisionId(div.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center gap-2 ${
                  selectedDivisionId === div.id
                    ? div.themeColor === 'blue'
                      ? 'bg-brand-navy text-white shadow-sm'
                      : 'bg-brand-green text-white shadow-sm'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-white/60'
                }`}
              >
                <span>{div.divisionNumber}.</span>
                <span className="truncate max-w-[150px] sm:max-w-none">
                  {isRTL
                    ? div.id === 'div-inspection'
                      ? 'فحص واعتماد المعدات'
                      : div.id === 'div-training'
                      ? 'التقييم والتدريب'
                      : 'أجهزة القياس'
                    : div.id === 'div-inspection'
                    ? 'Inspection & Certification'
                    : div.id === 'div-training'
                    ? 'Assessment & Training'
                    : 'Instrumentation'}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Filter Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRTL ? 'بحث في الأنشطة...' : 'Filter activities...'}
              className="w-full ps-10 pe-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
            />
          </div>
        </div>

        {/* Divisions Cards (Mirrors the Exact 3-Part Layout of Image 3) */}
        <div className="space-y-10">
          {filteredDivisions.map((division) => {
            const isBlueTheme = division.themeColor === 'blue';
            return (
              <div
                key={division.id}
                className="clean-card rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Division Header Banner (Directly Styled like Image 3 Business Card) */}
                <div
                  className={`p-5 sm:p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    isBlueTheme
                      ? 'bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy'
                      : 'bg-gradient-to-r from-brand-green via-brand-green-hover to-brand-green-dark'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-inner">
                      {getDivisionIcon(division.id)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-black uppercase tracking-widest text-white/80 block">
                        DIVISION {division.divisionNumber}
                      </span>
                      <h3 className="text-base sm:text-xl font-black uppercase tracking-wide text-white">
                        {division.title}
                      </h3>
                    </div>
                  </div>

                  {division.subtitle && (
                    <p className="text-xs text-white/90 font-medium sm:text-end max-w-sm">
                      {division.subtitle}
                    </p>
                  )}
                </div>

                {/* Division Activities Grid (2 Columns on Tablet+, 1 on Mobile - just like the card!) */}
                <div className="p-6 sm:p-8 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {division.items.map((item, idx) => (
                      <div
                        key={item.id || idx}
                        onClick={() => openQuoteModal(item.name)}
                        className={`group p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-3 ${
                          isBlueTheme
                            ? 'bg-slate-50/60 hover:bg-brand-navy/5 border-slate-200/80 hover:border-brand-navy/30'
                            : 'bg-slate-50/60 hover:bg-brand-green/5 border-slate-200/80 hover:border-brand-green/30'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black transition-colors ${
                              isBlueTheme
                                ? 'bg-brand-navy/10 text-brand-navy group-hover:bg-brand-navy group-hover:text-white'
                                : 'bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white'
                            }`}
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <div>
                            <h4
                              className={`text-sm sm:text-base font-extrabold text-brand-navy transition-colors ${
                                isBlueTheme
                                  ? 'group-hover:text-brand-navy-light'
                                  : 'group-hover:text-brand-green-dark'
                              }`}
                            >
                              {item.name}
                            </h4>
                            {item.description && (
                              <p className="text-xs text-slate-500 leading-relaxed mt-1 font-normal">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Quick Quote Trigger Icon */}
                        <div
                          className={`p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ${
                            isBlueTheme
                              ? 'bg-brand-navy text-white'
                              : 'bg-brand-green text-white'
                          }`}
                          title={ui.getQuote}
                        >
                          <ArrowIcon className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Strip for Division */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                      <span>
                        {isRTL
                          ? 'خدمات فنية وتأهيلية معتمدة وفق أرقى المعايير الهندسية في دبي'
                          : 'Certified technical compliance and workforce solutions delivered across UAE'}
                      </span>
                    </p>

                    <button
                      onClick={() => openQuoteModal(division.title)}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-colors text-white ${
                        isBlueTheme
                          ? 'bg-brand-navy hover:bg-brand-navy-light'
                          : 'bg-brand-green hover:bg-brand-green-hover'
                      }`}
                    >
                      <span>{ui.getQuote}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

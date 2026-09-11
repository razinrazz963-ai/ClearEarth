import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  GraduationCap,
  Search,
  Clock,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const categories = [
  'All Courses',
  'Heavy Equipment',
  'Lifting & Rigging',
  'Scaffolding & Height',
  'Fire & Emergency',
  'Hazardous Workplace',
  'Electrical & Technical',
  'Welding & Hot Work',
  'HSE & Industrial',
  'ISO & Compliance',
];

export const TrainingSection: React.FC = () => {
  const { fullTrainingCourses, openQuoteModal } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All Courses');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = useMemo(() => {
    return fullTrainingCourses.filter((course) => {
      const matchesCategory =
        activeCategory === 'All Courses' || course.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [fullTrainingCourses, activeCategory, searchQuery]);

  return (
    <section id="training" className="py-24 lg:py-32 bg-slate-50/70 relative overflow-hidden border-t border-slate-200/70">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs font-black uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4 text-brand-green" />
            <span>Accredited Workforce Competency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            Comprehensive Training Programs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Practical, industry-aligned training programs designed to enhance jobsite skills and statutory safety compliance. Browse our 60+ certified courses.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-10 max-w-5xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses (e.g., Excavator, Crane, Fire, H2S, Scaffolding, First Aid, ISO)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green text-sm text-slate-800 placeholder-slate-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs Pill Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                  activeCategory === cat
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-brand-navy border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Count Strip */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 px-1">
            <span>
              Showing <strong className="text-brand-navy font-black">{filteredCourses.length}</strong> of{' '}
              {fullTrainingCourses.length} courses
            </span>
            {searchQuery && (
              <span className="text-brand-green font-bold">
                Filtered by "{searchQuery}"
              </span>
            )}
          </div>
        </div>

        {/* COURSES CARD GRID */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-xl mx-auto p-8 shadow-sm">
            <Sparkles className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-brand-navy mb-1">No courses found</h4>
            <p className="text-xs text-slate-500 mb-5">
              Try adjusting your search terms or select another category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All Courses');
              }}
              className="px-5 py-2.5 rounded-xl bg-brand-green text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="clean-card p-6 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Category Pill & ID */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-brand-green-50 text-brand-green-dark border border-brand-green/20">
                      {course.category}
                    </span>
                    {course.duration && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{course.duration}</span>
                      </span>
                    )}
                  </div>

                  {/* Course Title */}
                  <h3 className="text-base sm:text-lg font-black text-brand-navy group-hover:text-brand-green-dark transition-colors mb-2.5 leading-snug">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                    <Award className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{course.certification || 'Certified Syllabus'}</span>
                  </div>

                  <button
                    onClick={() => openQuoteModal(course.title)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-brand-navy/5 hover:bg-brand-green hover:text-white text-brand-navy text-xs font-extrabold transition-all"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-brand-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-black mb-1">
              Need a Custom Corporate Safety Syllabus?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We design specialized on-site safety programs tailored to your industrial equipment fleet and project risks.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal('Corporate Custom Safety Training')}
            className="px-6 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-extrabold text-sm whitespace-nowrap shadow-lg flex-shrink-0"
          >
            Request Group Training Quote
          </button>
        </div>

      </div>
    </section>
  );
};

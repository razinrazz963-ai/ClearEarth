import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Images, X, ZoomIn } from 'lucide-react';
import type { GalleryItem } from '../data/types';

export const GallerySection: React.FC = () => {
  const { galleryItems } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Heavy Equipment', 'Cranes & Lifting', 'Scaffolding', 'Inspections', 'Safety Training', 'Dubai Projects'];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green-50 border border-brand-green/20 text-brand-green-dark text-xs font-black uppercase tracking-wider mb-3">
            <Images className="w-4 h-4 text-brand-green" />
            <span>Field Operations & Project Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-4">
            Operations & Project Gallery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Visual highlights from our heavy equipment inspections, crane load testing, scaffolding certifications, and hands-on workforce training across the UAE.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 cursor-pointer bg-slate-900 transition-all duration-500 h-[280px] sm:h-[320px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/90 via-brand-navy-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-brand-navy shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Center Zoom Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-brand-green/90 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-start">
                <h3 className="text-base font-black text-white group-hover:text-brand-green-light transition-colors mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX MODAL */}
        {lightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
            <div className="relative max-w-4xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative max-h-[70vh] overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-brand-green/20 text-brand-green-light text-[10px] font-black uppercase mb-1.5">
                    {lightboxItem.category}
                  </span>
                  <h4 className="text-lg font-black text-white">{lightboxItem.title}</h4>
                  <p className="text-xs text-slate-300 mt-1">{lightboxItem.caption}</p>
                </div>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors self-start sm:self-auto"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

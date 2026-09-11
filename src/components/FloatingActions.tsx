import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const { companyInfo, ui } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label={ui.backToTop}
          className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-navy hover:bg-brand-navy-light text-white shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none border border-white/20"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Floating WhatsApp Quick Contact Button */}
      <a
        href={companyInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with ClearEarth"
        className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
        
        {/* Tooltip on Desktop */}
        <span className="hidden lg:block absolute right-16 whitespace-nowrap bg-brand-navy text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
          WhatsApp: {companyInfo.phone1Display}
        </span>
      </a>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { navItems, ui, openQuoteModal } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (_e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Sticky Main Navigation */}
      <nav
        className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled
            ? 'py-2 sm:py-2.5 shadow-[0_10px_30px_rgba(15,32,66,0.08)] border-slate-200/80'
            : 'py-2.5 sm:py-3.5 shadow-sm border-slate-100'
        }`}
      >
        <div className="site-container flex items-center justify-between w-full">
          {/* Logo with enlarged, prominent sizing */}
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-3 focus:outline-none group flex-shrink-0"
            aria-label="ClearEarth Safety Consultancy LLC Home"
          >
            <div className="relative overflow-hidden rounded-xl p-0.5 sm:p-1 bg-white transition-transform duration-300 group-hover:scale-105 flex items-center">
              <img
                src="/images/logo.jpg"
                alt="ClearEarth Safety Consultancy LLC"
                className={`w-auto object-contain object-left transition-all duration-300 ${
                  isScrolled
                    ? 'h-11 sm:h-13 md:h-14 lg:h-16'
                    : 'h-12 sm:h-15 md:h-16 lg:h-20'
                }`}
              />
            </div>
            <div className="hidden xl:flex flex-col text-start leading-tight">
              <span className="text-base font-black tracking-tight text-brand-navy group-hover:text-brand-green-dark transition-colors">
                ClearEarth
              </span>
              <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                Safety Consultancy LLC
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-2 text-xs xl:text-sm font-bold text-slate-700 hover:text-brand-navy hover:bg-slate-50 rounded-xl transition-all relative group"
              >
                {item.label}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-brand-green rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </a>
            ))}
          </div>

          {/* Right Actions: Get a Quote button on md+, Hamburger on mobile */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop / Tablet prominent Get a Quote button */}
            <button
              onClick={() => openQuoteModal()}
              className="hidden md:inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-brand-green to-brand-green-dark text-white font-extrabold text-xs sm:text-sm shadow-[0_4px_16px_rgba(30,168,75,0.35)] hover:shadow-[0_8px_24px_rgba(30,168,75,0.45)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{ui.getQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-slate-700 hover:text-brand-navy hover:bg-slate-100 focus:outline-none lg:hidden border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-5 pt-4 pb-6 shadow-2xl animate-slide-up">
            <div className="flex flex-col gap-1 mb-5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, item.href);
                  }}
                  className="px-4 py-3 text-sm font-bold text-slate-800 hover:bg-brand-green-50 hover:text-brand-green-dark rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-green to-brand-green-dark text-white font-extrabold text-sm text-center shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>{ui.getQuote}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

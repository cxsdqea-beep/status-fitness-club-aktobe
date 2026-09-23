import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, MapPin, Clock, MessageSquare, Instagram, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data/content';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: (prefill?: string | { RU: string; KZ: string; EN: string }) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dict = DICTIONARY.nav;

  // Handle scroll detection for sticky background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: dict.home[language], href: '#hero', num: '01' },
    { label: dict.about[language], href: '#about', num: '02' },
    { label: dict.zones[language], href: '#zones', num: '03' },
    { label: dict.trainers[language], href: '#trainers', num: '04' },
    { label: dict.pricing[language], href: '#pricing', num: '05' },
    { label: dict.community[language], href: '#community', num: '06' },
    { label: dict.contacts[language], href: '#contacts', num: '07' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#262626] py-2.5 sm:py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/95 via-black/70 to-transparent py-3 sm:py-4.5'
        }`}
      >
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-1.5 sm:gap-4 min-w-0">
          {/* Logo */}
          <a
            href="#hero"
            id="brand-logo"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
          >
            <div className="relative w-8 h-8 sm:w-11 sm:h-11 rounded-xs overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md bg-black border border-white/20 shrink-0">
              <img
                src="/images/status_shield_logo.jpg"
                alt="STATUS Fitness Club Logo"
                className="w-full h-full object-cover filter contrast-[110%] group-hover:brightness-110 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-base sm:text-xl tracking-[0.15em] sm:tracking-[0.2em] text-white leading-none group-hover:text-neutral-300 transition-colors">
                STATUS
              </span>
              <span className="text-[7.5px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] text-[#A0A0A0] uppercase font-medium mt-0.5 sm:mt-1 hidden xs:inline-block">
                AKTOBE • FITNESS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (>= xl) */}
          <nav id="desktop-nav" className="hidden xl:flex items-center gap-2.5 2xl:gap-4 shrink min-w-0">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-[11px] 2xl:text-xs font-semibold uppercase tracking-[0.08em] 2xl:tracking-[0.1em] text-[#C0C0C0] hover:text-white transition-colors duration-200 py-1 whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-200 shrink-0"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Area: Language Switcher, Phone, CTA Button, Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 2xl:gap-3.5 shrink-0">
            {/* Language Switcher - Compact & neat on all screens */}
            <div
              id="language-switcher"
              className="flex items-center bg-[#161616] p-0.5 rounded-xs border border-[#2D2D2D] text-[9px] sm:text-[11px] font-bold tracking-wider shrink-0"
            >
              {(['KZ', 'RU', 'EN'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  id={`lang-btn-${lang.toLowerCase()}`}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-[2px] transition-all duration-200 cursor-pointer ${
                    language === lang
                      ? 'bg-white text-black font-extrabold shadow-sm'
                      : 'text-[#9E9E9E] hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Clickable Phone Link: Icon on mobile / xl, full number on sm-lg & 2xl */}
            <a
              id="header-phone-link"
              href="tel:+77079418515"
              className="flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-[#E0E0E0] hover:text-white transition-colors group shrink-0 whitespace-nowrap"
              title={language === 'KZ' ? 'STATUS клубына қоңырау шалу' : language === 'EN' ? 'Call STATUS club' : 'Позвонить в клуб STATUS'}
            >
              <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full bg-[#1E1E1E] border border-[#333333] flex items-center justify-center group-hover:border-white transition-colors shrink-0">
                <Phone className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-mono text-xs 2xl:text-sm tracking-wide text-white whitespace-nowrap font-bold hidden md:inline xl:hidden 2xl:inline">
                +7 (707) 941-85-15
              </span>
            </a>

            {/* CTA Button: Visible on tablet & desktop (>= sm), hidden on narrow phone (< sm) to prevent header overflow */}
            <button
              id="header-action-btn"
              onClick={() => onOpenBooking()}
              className="btn-elevate hidden sm:inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 bg-white hover:bg-[#E5E5E5] text-black font-display text-[10px] sm:text-[11px] font-bold tracking-[0.06em] uppercase transition-all duration-200 hover:shadow-[0_0_16px_rgba(255,255,255,0.2)] cursor-pointer rounded-xs shrink-0 whitespace-nowrap"
            >
              {dict.bookBtn[language]}
            </button>

            {/* Mobile / Tablet Menu Toggle (< xl screens) */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-white hover:text-gray-300 focus:outline-none xl:hidden cursor-pointer shrink-0 rounded-xs bg-[#1C1C1C] sm:bg-transparent border border-[#333] sm:border-transparent"
              aria-label={language === 'KZ' ? 'Мәзірді ашу/жабу' : language === 'EN' ? 'Toggle menu' : 'Открыть/закрыть меню'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Fullscreen Mobile & Tablet Menu Drawer (< xl) */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-[60] bg-[#0A0A0A]/98 backdrop-blur-2xl xl:hidden flex flex-col justify-between overflow-y-auto p-5 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between border-b border-[#222] pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xs overflow-hidden flex items-center justify-center bg-black border border-white/20">
                <img
                  src="/images/status_shield_logo.jpg"
                  alt="STATUS Logo"
                  className="w-full h-full object-cover filter contrast-[110%]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-base text-white tracking-widest leading-none">
                  STATUS
                </span>
                <span className="text-[8px] font-mono tracking-widest text-[#888] uppercase mt-0.5">
                  AKTOBE • FITNESS
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-white bg-[#1A1A1A] border border-[#333] rounded-xs cursor-pointer transition-colors"
              aria-label="Закрыть меню"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="py-6 flex flex-col space-y-1">
            <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] text-[#666] mb-2 px-2">
              {language === 'KZ' ? 'МӘЗІР • БӨЛІМДЕР' : language === 'EN' ? 'NAVIGATION • SECTIONS' : 'НАВИГАЦИЯ ПО САЙТУ'}
            </span>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="group flex items-center justify-between px-3 py-3 rounded-xs hover:bg-[#161616] border-b border-[#1A1A1A] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#555] group-hover:text-white transition-colors">
                    {item.num}
                  </span>
                  <span className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-white group-hover:translate-x-1 transition-transform">
                    {item.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#555] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          {/* Bottom Actions & Contacts */}
          <div className="space-y-4 pt-4 border-t border-[#222]">
            {/* Primary CTA Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-elevate w-full py-4 bg-white text-black font-display text-xs font-black tracking-widest uppercase rounded-xs cursor-pointer shadow-xl flex items-center justify-center gap-2"
            >
              <span>{dict.bookBtn[language]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Quick Contact & Info Card */}
            <div className="p-3.5 bg-[#141414] border border-[#262626] rounded-xs space-y-2.5">
              <a
                href="tel:+77079418515"
                className="flex items-center gap-3 text-white text-sm font-bold hover:text-gray-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#202020] flex items-center justify-center border border-[#333] shrink-0">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-sm text-white">+7 (707) 941-85-15</span>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    {language === 'KZ' ? 'Дс-Сб 07:00–23:00 • Жс 09:00–22:00' : language === 'EN' ? 'Mon-Sat 07:00–23:00 • Sun 09:00–22:00' : 'Пн-Сб 07:00–23:00 • Вс 09:00–22:00'}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 pt-1 border-t border-[#222] text-xs text-[#888]">
                <MapPin className="w-4 h-4 text-[#888] shrink-0" />
                <span>
                  {language === 'KZ' ? 'Ақтөбе қ., Маресьев көш., 4Д' : language === 'EN' ? 'Aktobe, 4D Maresyeva St.' : 'г. Актобе, ул. Маресьева, 4Д'}
                </span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://wa.me/77079418515"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-[#141414] hover:bg-[#1E1E1E] border border-[#2B2B2B] text-white text-xs font-bold rounded-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/status__aktobe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-[#141414] hover:bg-[#1E1E1E] border border-[#2B2B2B] text-white text-xs font-bold rounded-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-white" />
                <span>Instagram</span>
              </a>

              <a
                href="https://2gis.kz/aktobe/firm/70000001045736137"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 bg-[#141414] hover:bg-[#1E1E1E] border border-[#2B2B2B] text-white text-xs font-bold rounded-xs flex items-center justify-center font-mono transition-colors"
              >
                2GIS
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data/content';
import { getAssetUrl } from '../utils/assets';

interface HeroProps {
  language: Language;
  onOpenBooking: () => void;
}

const HERO_SLIDES = [
  {
    image: '/images/gym/status_main_hall.jpg',
    tag: {
      RU: 'STATUS GYM AKTOBE • ГЛАВНЫЙ ТРЕНАЖЕРНЫЙ ЗАЛ',
      KZ: 'STATUS GYM AKTOBE • БАСТЫ ЖАТТЫҒУ ЗАЛЫ',
      EN: 'STATUS GYM AKTOBE • MAIN TRAINING HALL',
    },
  },
  {
    image: '/images/gym/status_cardio_treadmills.jpg',
    tag: {
      RU: 'STATUS GYM AKTOBE • КАРДИО-ЗОНА И ТРЕНАЖЕРЫ',
      KZ: 'STATUS GYM AKTOBE • КАРДИО-АЙМАҚ ЖӘНЕ ТРЕНАЖЕРЛЕР',
      EN: 'STATUS GYM AKTOBE • CARDIO MEZZANINE & TREADMILLS',
    },
  },
  {
    image: '/images/gym/status_dumbbell_zone.jpg',
    tag: {
      RU: 'STATUS GYM AKTOBE • СВОБОДНЫЕ ВЕСА И ГАНТЕЛЬНЫЙ РЯД',
      KZ: 'STATUS GYM AKTOBE • ЕРКІН САЛМАҚТАР ЖӘНЕ ГАНТЕЛЬ ҚАТАРЫ',
      EN: 'STATUS GYM AKTOBE • FREE WEIGHTS & DUMBBELL DECK',
    },
  },
  {
    image: '/images/gym/status_leverage_machines.jpg',
    tag: {
      RU: 'STATUS GYM AKTOBE • СИЛОВАЯ ЛИНИЯ НА МАРЕСЬЕВА 4Д',
      KZ: 'STATUS GYM AKTOBE • МАРЕСЬЕВ 4Д КҮШТІК ҚАТАРЫ',
      EN: 'STATUS GYM AKTOBE • STRENGTH MACHINES AT 4D MARESYEVA',
    },
  },
  {
    image: '/images/gym/status_free_weights.jpg',
    tag: {
      RU: 'STATUS GYM AKTOBE • ПРОФЕССИОНАЛЬНОЕ ОБОРУДОВАНИЕ',
      KZ: 'STATUS GYM AKTOBE • КӘСІБИ ЖАБДЫҚТАУ',
      EN: 'STATUS GYM AKTOBE • PRO-GRADE GYM EQUIPMENT',
    },
  },
];

export const Hero: React.FC<HeroProps> = ({ language, onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dict = DICTIONARY.hero;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between pt-20 sm:pt-28 pb-4 sm:pb-8 overflow-hidden bg-[#0D0D0D]"
    >
      {/* Background Slides with soft dark overlay */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <img
              src={getAssetUrl(slide.image)}
              alt={slide.tag[language]}
              className="w-full h-full object-cover object-center filter grayscale-[35%] brightness-[45%] contrast-[115%]"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Sophisticated Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/70 to-black/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0D0D0D]/40 to-[#0D0D0D]/90" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center my-auto w-full">
        <div className="max-w-4xl">
          {/* Eyebrow / Location badge */}
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xs bg-black/60 border border-[#333333] backdrop-blur-md mb-4 sm:mb-6">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[9px] sm:text-xs font-mono font-bold tracking-[0.16em] sm:tracking-[0.22em] text-[#E0E0E0] uppercase">
              {dict.locationBadge[language]}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight text-white uppercase leading-[1.12] mb-4 sm:mb-6">
            {language === 'KZ' ? (
              <>
                Тренажер залы және фитнес клубы{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 underline decoration-white/30 underline-offset-4 sm:underline-offset-8">
                  STATUS
                </span>
              </>
            ) : language === 'EN' ? (
              <>
                Gym & Fitness Club{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 underline decoration-white/30 underline-offset-4 sm:underline-offset-8">
                  STATUS
                </span>
              </>
            ) : (
              <>
                Тренажёрный зал и спортивный клуб{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 underline decoration-white/30 underline-offset-4 sm:underline-offset-8">
                  STATUS
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="font-body text-sm sm:text-base md:text-lg text-[#B5B5B5] max-w-2xl font-normal leading-relaxed mb-6 sm:mb-10">
            {dict.subtitle[language]}
          </p>

          {/* CTA Buttons (Solid and Outline) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {/* Solid Button: Book */}
            <button
              id="hero-cta-book"
              onClick={onOpenBooking}
              className="btn-elevate group px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-neutral-200 text-black font-display text-xs font-black tracking-[0.14em] sm:tracking-[0.16em] uppercase transition-all duration-200 flex items-center justify-center gap-2.5 sm:gap-3 rounded-xs shadow-[0_4px_25px_rgba(255,255,255,0.15)] cursor-pointer"
            >
              <span>{dict.ctaBook[language]}</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Outline Button: Pricing */}
            <button
              id="hero-cta-pricing"
              onClick={handleScrollToPricing}
              className="btn-elevate px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent hover:bg-white/10 text-white border border-[#444] hover:border-white font-display text-xs font-bold tracking-[0.14em] sm:tracking-[0.16em] uppercase transition-all duration-200 flex items-center justify-center gap-2 rounded-xs cursor-pointer backdrop-blur-xs"
            >
              <span>{dict.ctaPrice[language]}</span>
            </button>
          </div>

          {/* Key Quick Stats (2x2 on mobile, 4 in row on sm+) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-4 sm:pt-6 border-t border-[#222]">
            <div>
              <div className="font-condensed font-bold text-xl sm:text-3xl text-white tracking-wider">
                {dict.stats.floors[language]}
              </div>
              <div className="text-[10px] sm:text-xs text-[#888] uppercase tracking-wider font-medium mt-0.5">
                {dict.stats.floorsDesc[language]}
              </div>
            </div>
            <div>
              <div className="font-condensed font-bold text-xl sm:text-3xl text-white tracking-wider">
                {dict.stats.area[language]}
              </div>
              <div className="text-[10px] sm:text-xs text-[#888] uppercase tracking-wider font-medium mt-0.5">
                {dict.stats.areaDesc[language]}
              </div>
            </div>
            <div>
              <div className="font-condensed font-bold text-xl sm:text-3xl text-white tracking-wider">
                {dict.stats.equipment[language]}
              </div>
              <div className="text-[10px] sm:text-xs text-[#888] uppercase tracking-wider font-medium mt-0.5">
                {dict.stats.equipmentDesc[language]}
              </div>
            </div>
            <div>
              <div className="font-condensed font-bold text-xl sm:text-3xl text-white tracking-wider">
                {dict.stats.hours[language]}
              </div>
              <div className="text-[10px] sm:text-xs text-[#888] uppercase tracking-wider font-medium mt-0.5">
                {dict.stats.hoursDesc[language]}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar: 1Fit Partner Badge & Slider Controls */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-[#1C1C1C]">
        {/* 1Fit Partner Plaque */}
        <a
          id="hero-1fit-badge"
          href="https://1fit.app/ru/aktobe/studios/2580-status"
          target="_blank"
          rel="noopener noreferrer"
          title="Открыть страницу STATUS на 1Fit"
          className="group flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#141414] hover:bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#4B4B4B] rounded-xs shadow-inner transition-all duration-300 cursor-pointer w-full sm:w-auto"
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-white text-black font-black flex items-center justify-center text-[10px] sm:text-xs tracking-tighter group-hover:scale-105 transition-transform">
            1F
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-bold text-white group-hover:text-gray-200 tracking-wider uppercase transition-colors">
              {dict.partner1Fit[language]}
            </span>
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
          </div>
        </a>

        {/* Slide navigation controls */}
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  i === currentSlide ? 'w-6 sm:w-8 bg-white' : 'w-2 bg-[#444]'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))
              }
              aria-label="Previous slide"
              className="p-1.5 rounded bg-[#181818] border border-[#333] text-[#AAA] hover:text-white hover:border-[#666] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              aria-label="Next slide"
              className="p-1.5 rounded bg-[#181818] border border-[#333] text-[#AAA] hover:text-white hover:border-[#666] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

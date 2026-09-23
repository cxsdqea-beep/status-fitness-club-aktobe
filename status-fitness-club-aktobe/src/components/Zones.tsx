import React, { useState } from 'react';
import { Check, ArrowRight, Dumbbell, Activity, UserCheck, Scale, QrCode } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY, ZONES_DATA } from '../data/content';

interface ZonesProps {
  language: Language;
  onOpenBooking: (prefill?: string | { RU: string; KZ: string; EN: string }) => void;
}

export const Zones: React.FC<ZonesProps> = ({ language, onOpenBooking }) => {
  const [activeZoneId, setActiveZoneId] = useState(ZONES_DATA[0].id);
  const dict = DICTIONARY.zones;

  const currentZone = ZONES_DATA.find((z) => z.id === activeZoneId) || ZONES_DATA[0];

  const zoneIcons: Record<string, React.ReactNode> = {
    strength: <Dumbbell className="w-4 h-4" />,
    cardio: <Activity className="w-4 h-4" />,
    personal: <UserCheck className="w-4 h-4" />,
    diagnostics: <Scale className="w-4 h-4" />,
    onefit: <QrCode className="w-4 h-4" />,
  };

  return (
    <section id="zones" className="py-24 bg-[#0A0A0A] border-t border-[#1C1C1C] reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#2B2B2B] rounded-xs mb-4">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#AAA] uppercase font-bold">
              {dict.sectionTag[language]}
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
            {dict.heading[language]}
          </h2>
        </div>


        {/* Featured Zone Card & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch bg-[#121212] border border-[#262626] rounded-xs overflow-hidden shadow-2xl">
          {/* Left Column: Image with badges */}
          <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[420px]">
            <img
              src={currentZone.image}
              alt={currentZone.title[language]}
              className="w-full h-full object-cover filter brightness-[75%] contrast-[110%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/40" />

            <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-black/80 backdrop-blur-md border border-[#3A3A3A] font-mono text-[9px] sm:text-xs font-bold tracking-widest text-white uppercase rounded-xs">
                {currentZone.tag}
              </span>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#B0B0B0]">
                {currentZone.level[language]}
              </span>
              <h3 className="font-display font-black text-lg sm:text-2xl text-white uppercase tracking-tight mt-1">
                {currentZone.title[language]}
              </h3>
            </div>
          </div>

          {/* Right Column: Detailed Breakdown & Checklist */}
          <div className="lg:col-span-6 p-5 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#777] mb-2">
                {language === 'KZ'
                  ? 'СИПАТТАМАЛАРЫ МЕН ЖАБДЫҚТАРЫ'
                  : language === 'EN'
                  ? 'SPECIFICATIONS & EQUIPMENT'
                  : 'ХАРАКТЕРИСТИКИ И ОБОРУДОВАНИЕ'}
              </div>
              <h4 className="font-display font-bold text-base sm:text-xl text-white uppercase mb-3 sm:mb-4">
                {currentZone.subtitle[language]}
              </h4>

              <p className="text-xs sm:text-base text-[#A8A8A8] leading-relaxed mb-6 sm:mb-8">
                {currentZone.description[language]}
              </p>

              {/* Equipment & Features list */}
              <div className="space-y-2.5 sm:space-y-3.5 mb-6 sm:mb-8">
                {currentZone.features[language].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4.5 sm:w-5 h-4.5 sm:h-5 rounded-xs bg-white text-black flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#D4D4D4] font-medium leading-normal">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom action bar */}
            <div className="pt-5 sm:pt-6 border-t border-[#242424] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-[11px] sm:text-xs text-[#888]">
                {language === 'KZ'
                  ? 'Клубтық абонементтердің барлық түрлері мен 1Fit бойынша қолжетімді'
                  : language === 'EN'
                  ? 'Accessible via all club membership tiers and 1Fit'
                  : 'Доступно по всем видам клубных абонементов и 1Fit'}
              </div>
              <button
                onClick={() =>
                  onOpenBooking({
                    RU: `Запись в зону: ${currentZone.title.RU}`,
                    KZ: `Аймаққа жазылу: ${currentZone.title.KZ}`,
                    EN: `Zone Booking: ${currentZone.title.EN}`,
                  })
                }
                className="btn-elevate px-5 sm:px-6 py-3 bg-white hover:bg-[#EAEAEA] text-black font-display text-xs font-black tracking-widest uppercase transition-all rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-md shrink-0"
              >
                <span>
                  {language === 'KZ'
                    ? 'АЙМАҚҚА ЖАЗЫЛУ'
                    : language === 'EN'
                    ? 'BOOK A SESSION'
                    : 'ЗАПИСАТЬСЯ В ЗОНУ'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Grid of all 5 zones summary: 2 cols on mobile, 3 on tablet, 5 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5 mt-6 sm:mt-8">
          {ZONES_DATA.map((z) => (
            <div
              key={z.id}
              onClick={() => setActiveZoneId(z.id)}
              className={`p-3.5 sm:p-4 border rounded-xs cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                z.id === activeZoneId
                  ? 'bg-[#181818] border-white shadow-lg'
                  : 'bg-[#111111] border-[#222] hover:border-[#444]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-[11px] font-mono text-[#888] uppercase tracking-wider">
                  {z.level[language]}
                </span>
                <span className="text-white shrink-0">{zoneIcons[z.id]}</span>
              </div>
              <div className="font-display font-bold text-[11px] sm:text-xs text-white uppercase leading-snug tracking-tight">
                {z.title[language]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, QrCode, Shield, Zap, ChevronDown, Clock, Calendar } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY, PRICING_DATA, FULL_OFFICIAL_PRICING } from '../data/content';

interface MembershipsProps {
  language: Language;
  onOpenBookingWithPlan: (planChoice: string | { RU: string; KZ: string; EN: string }) => void;
}

export const Memberships: React.FC<MembershipsProps> = ({ language, onOpenBookingWithPlan }) => {
  const dict = DICTIONARY.pricing;
  const [activeCategory, setActiveCategory] = useState<string>('unlimited');

  return (
    <section id="pricing" className="py-24 bg-[#0A0A0A] border-t border-[#1C1C1C] reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#2B2B2B] rounded-xs mb-4">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#AAA] uppercase font-bold">
              {dict.sectionTag[language]}
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
            {dict.heading[language]}
          </h2>
          <p className="text-sm sm:text-base text-[#9E9E9E] mt-4 font-normal leading-relaxed">
            {dict.subtitle[language]}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16 items-stretch">
          {PRICING_DATA.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-[#121212] rounded-xs flex flex-col justify-between p-5 sm:p-7 transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-white shadow-[0_0_30px_rgba(255,255,255,0.07)]'
                  : 'border border-[#262626] hover:border-[#404040]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-white text-black font-display font-black text-[10px] tracking-widest uppercase rounded-xs shadow-md">
                    {plan.badge ? plan.badge[language] : 'ХИТ ВЫБОРА'}
                  </span>
                </div>
              )}

              <div>
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.16em] text-[#777] mb-2">
                  {plan.access[language]}
                </div>
                <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-tight mb-4">
                  {plan.name[language]}
                </h3>

                <div className="mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-[#222]">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-xs text-[#888] font-mono mt-1 block">
                    / {plan.period[language]}
                  </span>
                </div>

                <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features[language].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#CCCCCC] leading-normal font-normal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() =>
                  onOpenBookingWithPlan({
                    RU: `${plan.name.RU} (${plan.price})`,
                    KZ: `${plan.name.KZ} (${plan.price})`,
                    EN: `${plan.name.EN} (${plan.price})`,
                  })
                }
                className={`btn-elevate w-full py-3.5 font-display text-xs font-black tracking-widest uppercase transition-all rounded-xs cursor-pointer flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-white hover:bg-neutral-200 text-black shadow-lg'
                    : 'bg-[#1C1C1C] hover:bg-white text-white hover:text-black border border-[#333] hover:border-white'
                }`}
              >
                <span>
                  {language === 'KZ' ? 'ТАРИФТІ ТАҢДАУ' : language === 'EN' ? 'SELECT PLAN' : 'ВЫБРАТЬ ТАРИФ'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Complete Official Price List Accordion / Tabs */}
        <div className="bg-[#111] border border-[#262626] rounded-xs p-4 sm:p-8 md:p-10 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-5 sm:pb-6 border-b border-[#222] mb-6 sm:mb-8">
            <div>
              <div className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#888] uppercase mb-1">
                {language === 'KZ' ? 'КЛУБТЫҢ РЕСМИ БАҒА ТІЗБЕСІ' : language === 'EN' ? 'OFFICIAL CLUB PRICE LIST' : 'ОФИЦИАЛЬНЫЙ ПРАЙС-ЛИСТ КЛУБА'}
              </div>
              <h3 className="font-display font-black text-lg sm:text-2xl text-white uppercase tracking-tight">
                {language === 'KZ' ? 'STATUS клубының барлық тарифтері' : language === 'EN' ? 'All active STATUS memberships' : 'Все действующие тарифы STATUS'}
              </h3>
            </div>

            {/* Category Selector Tabs */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {FULL_OFFICIAL_PRICING.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 sm:px-4 py-2 text-xs font-display font-bold uppercase tracking-wider transition-all rounded-xs cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-white text-black shadow-md'
                      : 'bg-[#1C1C1C] text-[#999] hover:text-white border border-[#2B2B2B]'
                  }`}
                >
                  {cat.title[language]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Items */}
          {FULL_OFFICIAL_PRICING.filter((cat) => cat.id === activeCategory).map((cat) => (
            <div key={cat.id}>
              <div className="text-xs text-[#888] mb-5 sm:mb-6">
                {cat.subtitle[language]}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 bg-[#161616] border border-[#2A2A2A] hover:border-[#444] rounded-xs transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-3 mb-2">
                        <h4 className="font-display font-black text-sm sm:text-base text-white uppercase tracking-tight">
                          {item.name[language]}
                        </h4>
                        <span className="font-display font-black text-sm sm:text-base text-white whitespace-nowrap self-start sm:self-auto shrink-0 bg-white/5 px-2.5 py-1 rounded-xs border border-white/10">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#A0A0A0] leading-relaxed mb-3">
                        {item.description[language]}
                      </p>
                      {item.freeze && (
                        <div className="inline-flex items-center gap-1.5 text-[11px] text-[#CCC] bg-[#202020] px-2.5 py-1 rounded-xs border border-[#333] mb-4">
                          <Clock className="w-3 h-3 text-white" />
                          <span>{item.freeze[language]}</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() =>
                        onOpenBookingWithPlan({
                          RU: `${item.name.RU} (${item.price})`,
                          KZ: `${item.name.KZ} (${item.price})`,
                          EN: `${item.name.EN} (${item.price})`,
                        })
                      }
                      className="btn-elevate mt-3 w-full py-2 bg-[#222] hover:bg-white text-white hover:text-black font-display text-[11px] font-bold uppercase tracking-wider transition-all rounded-xs border border-[#333] hover:border-white cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>
                        {language === 'KZ' ? 'Осы тарифті рәсімдеу' : language === 'EN' ? 'Choose this plan' : 'Оформить этот тариф'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight 1Fit Partner Special Box */}
        <div
          id="1fit-partner-section"
          className="relative bg-gradient-to-r from-[#141414] via-[#181818] to-[#141414] border border-[#2E2E2E] rounded-xs p-8 sm:p-12 overflow-hidden shadow-2xl"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-black font-mono text-[10px] font-black uppercase tracking-widest rounded-xs mb-4">
                <QrCode className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>{language === 'KZ' ? '1FIT БІРЫҢҒАЙ АБОНЕМЕНТІ' : language === 'EN' ? '1FIT UNIFIED PASS' : 'ЕДИНЫЙ АБОНЕМЕНТ 1FIT'}</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-4">
                {dict.oneFitTitle[language]}
              </h3>

              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed max-w-2xl font-normal">
                {dict.oneFitDesc[language]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#262626]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#222] border border-[#333] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs text-[#CCC] font-medium">
                    {language === 'KZ' ? 'QR арқылы тегін кіру' : language === 'EN' ? 'Free entry via QR' : 'Бесплатный вход по QR'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#222] border border-[#333] flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs text-[#CCC] font-medium">
                    {language === 'KZ' ? '2 қабат және барлық тренажерлер' : language === 'EN' ? '2 floors & all equipment' : '2 этажа и все тренажеры'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#222] border border-[#333] flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs text-[#CCC] font-medium">
                    {language === 'KZ' ? 'Шкафтар мен душ бөлмелері' : language === 'EN' ? 'Lockers and hot showers' : 'Шкафчики и душевые'}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center">
              <div className="bg-black/90 p-6 border border-[#333] rounded-xs text-center w-full max-w-xs shadow-xl">
                <div className="w-16 h-16 bg-white text-black rounded-xs mx-auto flex items-center justify-center mb-3">
                  <QrCode className="w-10 h-10 stroke-[2]" />
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#AAA]">
                  {language === 'KZ' ? 'ЗАЛДА ТІРКЕЛУ' : language === 'EN' ? 'CHECK-IN AT RECEPTION' : 'РЕГИСТРАЦИЯ В ЗАЛЕ'}
                </div>
                <div className="text-base font-bold text-white mt-1">
                  1Fit Aktobe • STATUS
                </div>
                <a
                  href="https://1fit.app/ru/aktobe/studios/2580-status"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-elevate w-full mt-4 py-2.5 bg-white hover:bg-gray-200 text-black font-display text-[11px] font-black uppercase tracking-wider transition-colors rounded-xs cursor-pointer text-center block"
                >
                  {dict.oneFitAction[language]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

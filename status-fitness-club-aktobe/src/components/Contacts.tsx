import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Send, ExternalLink, Check, Navigation } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data/content';
import { formatPhoneInput, handlePhoneFocus, handlePhoneBlur, handlePhoneKeyDown } from '../utils/phone';

interface ContactsProps {
  language: Language;
}

export const Contacts: React.FC<ContactsProps> = ({ language }) => {
  const dict = DICTIONARY.contacts;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.replace(/\D/g, '').length < 11) return;

    // Format WhatsApp message to club in active language
    const greeting = language === 'KZ'
      ? 'Сәлеметсіз бе, STATUS фитнес-клубы!'
      : language === 'EN'
      ? 'Hello, STATUS fitness club!'
      : 'Здравствуйте, фитнес-клуб STATUS!';
    const nameLabel = language === 'KZ' ? 'Аты-жөні' : language === 'EN' ? 'Name' : 'Имя';
    const clientWord = language === 'KZ' ? 'Клиент' : language === 'EN' ? 'Client' : 'Клиент';
    const phoneLabel = language === 'KZ' ? 'Телефон' : language === 'EN' ? 'Phone' : 'Телефон';
    const goalLabel = language === 'KZ' ? 'Мақсаты/сұрағы' : language === 'EN' ? 'Goal/Question' : 'Цель/вопрос';
    const defaultGoal = language === 'KZ'
      ? 'Абонементтер мен жаттығулар туралы толығырақ білгім келеді'
      : language === 'EN'
      ? 'I want to know more about memberships and training'
      : 'Хочу узнать подробнее об абонементах и тренировках';

    const message = `${greeting}%0A• ${nameLabel}: ${name || clientWord}%0A• ${phoneLabel}: ${phone}%0A• ${goalLabel}: ${goal || defaultGoal}`;
    const whatsappUrl = `https://wa.me/77079344533?text=${message}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
      setName('');
      setPhone('');
      setGoal('');
    }, 800);
  };

  return (
    <section id="contacts" className="py-24 bg-[#0A0A0A] border-t border-[#1C1C1C] reveal-on-scroll">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Details & Working Hours */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Box */}
            <div className="p-6 bg-[#121212] border border-[#242424] rounded-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xs bg-[#1C1C1C] border border-[#333] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#777]">
                    {dict.addressLabel[language]}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mt-1">
                    {dict.addressValue[language]}
                  </div>
                  <div className="text-xs text-[#888] mt-1">
                    {language === 'KZ'
                      ? 'Бағдар: Маресьев көшесі мен Әбілқайыр хан даңғылының қиылысы / орталық маңы'
                      : language === 'EN'
                      ? 'Landmark: Maresev St. & Abulkhair Khan Ave. intersection / city center'
                      : 'Ориентир: пересечение ул. Маресьева и пр. Абулхаир хана / рядом с центром города'}
                  </div>
                </div>
              </div>
            </div>

            {/* Phones Box */}
            <div className="p-6 bg-[#121212] border border-[#242424] rounded-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xs bg-[#1C1C1C] border border-[#333] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#777]">
                    {dict.phoneLabel[language]}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-2">
                    <a
                      href="tel:+77079344533"
                      className="font-condensed font-bold text-lg text-white hover:text-gray-300 transition-colors flex items-center gap-2"
                    >
                      <span className="underline decoration-white/40 underline-offset-4">+7 (707) 934-45-33</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded">
                        WhatsApp
                      </span>
                    </a>
                    <a
                      href="tel:+77754599523"
                      className="font-condensed font-bold text-lg text-[#AAA] hover:text-white transition-colors"
                    >
                      +7 (775) 459-95-23
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours Box */}
            <div className="p-6 bg-[#121212] border border-[#242424] rounded-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xs bg-[#1C1C1C] border border-[#333] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#777]">
                    {dict.hoursLabel[language]}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1">
                    {dict.hoursWeekdays[language]}
                  </div>
                  <div className="text-sm font-semibold text-[#BBB] mt-0.5">
                    {dict.hoursSunday[language]}
                  </div>
                  <div className="text-xs text-emerald-400 font-mono mt-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{dict.nonStop ? dict.nonStop[language] : 'Работаем без перерывов и выходных'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Map Routing Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://2gis.kz/aktobe/firm/70000001045736137"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-[#181818] hover:bg-white text-white hover:text-black border border-[#333] hover:border-white text-xs font-bold uppercase tracking-wider transition-all rounded-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>{dict.twoGisBtn[language]}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="https://yandex.kz/maps/163/aktobe/?text=%D0%9C%D0%B0%D1%80%D0%B5%D1%81%D1%8C%D0%B5%D0%B2%D0%B0%2C%204%D0%94&ll=57.14275%2C50.30885&z=17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-[#181818] hover:bg-white text-white hover:text-black border border-[#333] hover:border-white text-xs font-bold uppercase tracking-wider transition-all rounded-xs"
              >
                <span>{dict.yandexBtn[language]}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Preview + Quick Contact Form */}
          <div className="lg:col-span-6 space-y-6">
            {/* Interactive Location Visual Card */}
            <div className="relative rounded-xs border border-[#262626] overflow-hidden bg-[#141414] shadow-xl">
              {/* Stylized Map View */}
              <div className="relative h-64 sm:h-72 w-full bg-[#121212] overflow-hidden">
                {/* Embedded High-Res OpenStreetMap Geo frame precisely for Maresyeva 4D Aktobe (50.30885, 57.14275) */}
                <iframe
                  title="STATUS Aktobe Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=57.13675%2C50.30535%2C57.14875%2C50.31235&layer=mapnik&marker=50.30885%2C57.14275"
                  className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-80"
                  loading="lazy"
                />

                {/* Custom Branded Gym Marker Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <div className="relative flex flex-col items-center">
                    <div className="px-3 py-1.5 bg-black border-2 border-white text-white text-[11px] font-display font-black tracking-widest uppercase rounded-xs shadow-[0_4px_20px_rgba(0,0,0,0.8)] flex items-center gap-1.5 whitespace-nowrap">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      {language === 'KZ'
                        ? 'STATUS FITNESS • МАРЕСЬЕВ 4Д'
                        : language === 'EN'
                        ? 'STATUS FITNESS • 4D MARESYEVA'
                        : 'STATUS FITNESS • МАРЕСЬЕВА 4Д'}
                    </div>
                    <div className="w-3 h-3 bg-black border-r-2 border-b-2 border-white transform rotate-45 -mt-1.5" />
                  </div>
                </div>

                {/* Bottom Bar inside Map */}
                <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 bg-black/90 backdrop-blur-md px-3 sm:px-4 py-2 border border-[#333] rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2">
                  <div className="text-[10px] sm:text-[11px] font-mono text-white">
                    {dict.addressValue[language]}
                  </div>
                  <a
                    href="https://2gis.kz/aktobe/firm/70000001045736137"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-gray-300 hover:text-white uppercase font-bold tracking-wider"
                  >
                    {dict.gisNav ? dict.gisNav[language] : '2GIS НАВИГАЦИЯ →'}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Inquiry Form */}
            <div className="p-5 sm:p-8 bg-[#121212] border border-[#262626] rounded-xs">
              <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase mb-2">
                {dict.formTitle[language]}
              </h3>
              <p className="text-xs sm:text-sm text-[#999] mb-6 leading-relaxed">
                {dict.formDesc[language]}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={dict.namePlaceholder[language]}
                    className="w-full px-4 py-3 bg-[#181818] border border-[#2D2D2D] focus:border-white focus:outline-none text-sm text-white placeholder-[#666] rounded-xs transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    value={phone}
                    onFocus={() => handlePhoneFocus(phone, setPhone)}
                    onBlur={() => handlePhoneBlur(phone, setPhone)}
                    onKeyDown={(e) => handlePhoneKeyDown(e, phone, setPhone)}
                    onChange={(e) => setPhone(formatPhoneInput(e.target.value))}
                    placeholder={dict.phonePlaceholder[language]}
                    className="w-full px-4 py-3 bg-[#181818] border border-[#2D2D2D] focus:border-white focus:outline-none text-base sm:text-sm text-white placeholder-[#666] rounded-xs transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder={dict.goalPlaceholder[language]}
                    className="w-full px-4 py-3 bg-[#181818] border border-[#2D2D2D] focus:border-white focus:outline-none text-sm text-white placeholder-[#666] rounded-xs transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="btn-elevate w-full py-3.5 bg-white hover:bg-neutral-200 text-black font-display text-xs font-black tracking-widest uppercase transition-all duration-200 rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-4 h-4 text-black" />
                      <span>{dict.successMsg[language]}</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4 text-black" />
                      <span>{dict.submitBtn[language]}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

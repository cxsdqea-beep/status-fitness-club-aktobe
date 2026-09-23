import React from 'react';
import { Instagram, ExternalLink, Check, Flame, Video, Award, Bell } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY, MOTIVATIONAL_MANIFESTO } from '../data/content';

interface InstagramFeedProps {
  language: Language;
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({ language }) => {
  const dict = DICTIONARY.instagram;
  const manifesto = MOTIVATIONAL_MANIFESTO;
  const currentAcrostic = manifesto.acrostic[language];

  const statusLabel = {
    RU: 'АКТУАЛЬНОЕ • @STATUS__AKTOBE',
    KZ: 'ӨЗЕКТІ • @STATUS__AKTOBE',
    EN: 'LIVE • @STATUS__AKTOBE',
  };

  const communityHighlights = [
    {
      icon: <Video className="w-4 h-4 text-red-500 shrink-0" />,
      title: {
        RU: 'Ежедневные сторис и жизнь зала',
        KZ: 'Күнделікті стористер мен зал өмірі',
        EN: 'Daily Stories & Gym Workouts',
      },
      desc: {
        RU: 'Атмосфера силового и кардио этажей в реальном времени',
        KZ: 'Күштік және кардио қабаттарының нақты уақыттағы атмосферасы',
        EN: 'Live real-time footage from both strength & cardio decks',
      },
    },
    {
      icon: <Award className="w-4 h-4 text-amber-500 shrink-0" />,
      title: {
        RU: 'Советы и техника от чемпионов',
        KZ: 'Чемпиондардан жаттығу кеңестері',
        EN: 'Coaching Form & Pro Advice',
      },
      desc: {
        RU: 'Разборы упражнений и прогресса от Анатолия Коваленко и наставников',
        KZ: 'Анатолий Коваленко мен тәжірибелі жаттықтырушылардан сабақтар',
        EN: 'Form breakdown and powerlifting tips from elite coaches',
      },
    },
    {
      icon: <Bell className="w-4 h-4 text-white shrink-0" />,
      title: {
        RU: 'Специальные акции и анонсы',
        KZ: 'Арнайы акциялар мен жаңалықтар',
        EN: 'Exclusive Perks & Announcements',
      },
      desc: {
        RU: 'Закрытые скидки на абонементы и клубные челленджи',
        KZ: 'Абонементтерге жеңілдіктер мен клубтық сайыстар',
        EN: 'Member membership discounts, seasonal deals, and challenges',
      },
    },
  ];

  return (
    <section id="community" className="py-24 bg-[#0B0B0C] border-t border-[#1C1C1E] reveal-on-scroll">
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

          <p className="text-sm sm:text-base text-[#9E9E9E] mt-4 font-normal leading-relaxed">
            {dict.subtitle[language]}
          </p>
        </div>

        {/* 2-Column Showcase: Authentic Gym Wall Acrostic + Instagram Life */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: The Authentic Motivation Wall */}
          <div className="lg:col-span-6 bg-[#141417] border-2 border-[#29292F] rounded-xs p-4 sm:p-7 md:p-9 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-[#3D3D45] transition-colors duration-300">
            {/* Subtle gym wall ambiance effect */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-950/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Wall Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5 sm:mb-6 pb-4 border-b border-[#26262B]">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-950/40 border border-red-800/50 text-red-300 rounded-xs text-[10px] font-mono font-bold tracking-widest uppercase">
                  <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500/30" />
                  <span>{manifesto.badge[language]}</span>
                </div>

                <div className="text-[10px] font-mono text-[#7E7E88] uppercase tracking-wider">
                  {language === 'KZ'
                    ? 'АҚТӨБЕ • МАРЕСЬЕВ КӨШ., 4Д'
                    : language === 'EN'
                      ? 'AKTOBE • 4D MARESYEVA ST.'
                      : 'АКТОБЕ • УЛ. МАРЕСЬЕВА, 4Д'}
                </div>
              </div>

              {/* Wall Title */}
              <div className="mb-6 sm:mb-8">
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#8C8C96] mb-1.5 font-bold">
                  {manifesto.tag[language]}
                </div>
                <h3 className="font-display font-black text-lg sm:text-2xl text-white uppercase tracking-tight">
                  {manifesto.title[language]}
                </h3>
                <p className="text-xs text-[#9E9EA8] mt-1.5 sm:mt-2 leading-relaxed">
                  {manifesto.subtitle[language]}
                </p>
              </div>

              {/* Authentic Wall Acrostic Rows */}
              <div className="bg-[#0E0E10] border border-[#222227] rounded-xs p-3.5 sm:p-6 space-y-3 sm:space-y-4 shadow-inner">
                {currentAcrostic.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 sm:gap-4 group/item transition-transform duration-200 hover:translate-x-1"
                  >
                    {/* Big Crimson Letter */}
                    <span className="font-display font-black text-xl sm:text-3xl text-[#991B1B] w-6 sm:w-9 text-center shrink-0 drop-shadow-[0_2px_8px_rgba(153,27,27,0.4)] select-none">
                      {item.letter}
                    </span>

                    {/* Vertical Divider Bar */}
                    <span className="text-[#4D1111] font-light text-xl sm:text-3xl select-none -mt-0.5">
                      |
                    </span>

                    {/* Phrase & Checkmark */}
                    <div className="flex items-center justify-between flex-1 min-w-0">
                      <span className="font-display font-black text-xs sm:text-base text-[#F0F0F2] tracking-tight uppercase group-hover/item:text-white transition-colors truncate sm:whitespace-normal">
                        {item.phrase}
                      </span>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-red-950/40 border border-red-900/60 flex items-center justify-center shrink-0 ml-1.5 sm:ml-2">
                        <Check className="w-3 sm:w-4 h-3 sm:h-4 text-[#EF4444] stroke-[3]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Authentic Footnote */}
            <div className="mt-5 sm:mt-6 pt-4 border-t border-[#222227] flex items-center justify-between gap-2 text-[10px] sm:text-[11px] text-[#7E7E88] font-mono">
              <span>
                {language === 'KZ'
                  ? '* Ақтөбедегі STATUS залының қабырғасындағы ресми мотивациялық жазба'
                  : language === 'EN'
                    ? '* Authentic wall mural inside STATUS fitness facility in Aktobe'
                    : '* Реальная мотивационная надпись на стене спортклуба STATUS в Актобе'}
              </span>
            </div>
          </div>

          {/* Right Column: Instagram Community (Clean, Compact, No empty space) */}
          <div className="lg:col-span-6 p-6 sm:p-9 bg-gradient-to-br from-[#141417] via-[#101012] to-[#0A0A0C] border border-[#26262B] rounded-xs shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div>
              {/* Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#242428]">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1E] border border-[#303036] rounded-xs text-[11px] font-mono font-bold tracking-wider text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{statusLabel[language]}</span>
                </div>

                <span className="text-[10px] font-mono text-[#888] uppercase tracking-wider">
                  INSTAGRAM COMMUNITY
                </span>
              </div>

              {/* Instagram Banner Body */}
              <div className="mb-6">
                <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                  {language === 'KZ'
                    ? 'Клубтың күнделікті жаттығу атмосферасы'
                    : language === 'EN'
                      ? 'Daily High-Energy Gym Atmosphere'
                      : 'Атмосфера тренировок и побед каждый день'}
                </h3>
                <p className="text-xs sm:text-sm text-[#9E9E9E] mt-2 leading-relaxed">
                  {language === 'KZ'
                    ? 'Жаттығу видеолары, жаттықтырушылардың шеберлік сабақтары, клиенттердің нәтижелері және клубтың жаңалықтары — күн сайын біздің ресми парақшамызда.'
                    : language === 'EN'
                      ? 'Watch live athlete training videos, coaching tutorials, transformation stories, and club events on our official page.'
                      : 'Видео тренировок атлетов, разборы техники от наставников, преображения клиентов и акции клуба — ежедневно в наших сторис.'}
                </p>
              </div>

              {/* Community Features List */}
              <div className="space-y-3 mb-6">
                {communityHighlights.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#17171B] border border-[#26262C] hover:border-[#383842] rounded-xs transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-xs bg-black/40 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      {feat.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-tight">
                        {feat.title[language]}
                      </div>
                      <div className="text-[11px] text-[#8E8E98] mt-0.5 leading-snug">
                        {feat.desc[language]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions & Follow Button */}
            <div className="pt-6 border-t border-[#222226] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                <span className="text-xs text-[#BBB] leading-relaxed">
                  {language === 'KZ' ? (
                    <>
                      Жаттығу стористеріңізде бізді{' '}
                      <span className="text-white font-bold">@status__aktobe</span> деп белгілеңіздер!
                    </>
                  ) : language === 'EN' ? (
                    <>
                      Tag us <span className="text-white font-bold">@status__aktobe</span> in your workout stories!
                    </>
                  ) : (
                    <>
                      Отмечайте нас <span className="text-white font-bold">@status__aktobe</span> в своих сторис с тренировок!
                    </>
                  )}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.instagram.com/status__aktobe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-elevate w-full flex items-center justify-center gap-3 px-6 py-4 bg-white hover:bg-[#F0F0F0] text-black transition-all rounded-xs shadow-xl cursor-pointer font-display text-xs sm:text-sm font-black uppercase tracking-wider group"
                >
                  <Instagram className="w-4.5 h-4.5 text-black group-hover:scale-110 transition-transform shrink-0" />
                  <span className="whitespace-nowrap">
                    {dict.followAction ? dict.followAction[language] : 'ПОДПИСАТЬСЯ В INSTAGRAM'}
                  </span>
                  <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

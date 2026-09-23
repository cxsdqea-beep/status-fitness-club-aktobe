import React, { useState } from 'react';
import { Layers, Wind, Droplets, Coffee, MapPin, Check, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data/content';
import { getAssetUrl } from '../utils/assets';

const CLUB_PHOTOS = [
  {
    src: '/images/gym/status_main_hall.jpg',
    tag: { RU: 'ГЛАВНЫЙ ЗАЛ • ПАНОРАМА', KZ: 'НЕГІЗГІ ЗАЛ • ПАНОРАМА', EN: 'MAIN HALL • PANORAMA' },
    title: { RU: 'Основной зал и силовые станции', KZ: 'Негізгі зал және күш станциялары', EN: 'Main gym floor & stations' },
    level: { RU: '1 УРОВЕНЬ', KZ: '1 ДЕҢГЕЙ', EN: 'TIER 1' },
  },
  {
    src: '/images/gym/status_cardio_treadmills.jpg',
    tag: { RU: 'КАРДИО-ЗОНА С ВИДОМ', KZ: 'ПАНОРАМАЛЫҚ КАРДИО АЙМАҒЫ', EN: 'PANORAMIC CARDIO DECK' },
    title: { RU: 'Беговые дорожки и кардио-линия', KZ: 'Жүгіру жолдары мен кардио-линиясы', EN: 'Treadmills & cardio line' },
    level: { RU: '2 УРОВЕНЬ', KZ: '2 ДЕҢГЕЙ', EN: 'TIER 2' },
  },
  {
    src: '/images/gym/status_dumbbell_zone.jpg',
    tag: { RU: 'ГАНТЕЛЬНЫЙ РЯД И СКАМЬИ', KZ: 'ГАНТЕЛЬ ҚАТАРЫ ЖӘНЕ ОРЫНДЫҚТАР', EN: 'DUMBBELL RACK & BENCHES' },
    title: { RU: 'Свободные веса и скамьи для жима', KZ: 'Еркін салмақтар мен жим орындықтары', EN: 'Dumbbells & workout benches' },
    level: { RU: '1 УРОВЕНЬ', KZ: '1 ДЕҢГЕЙ', EN: 'TIER 1' },
  },
  {
    src: '/images/gym/status_leverage_machines.jpg',
    tag: { RU: 'СИЛОВЫЕ РЫЧАЖНЫЕ ТРЕНАЖЕРЫ', KZ: 'ИІНТІРЕКТІ КҮШТІК ТРЕНАЖЕРЛЕР', EN: 'STRENGTH & LEVERAGE MACHINES' },
    title: { RU: 'Изолированные силовые тренажеры', KZ: 'Оқшауланған күштік тренажерлер', EN: 'Plate-loaded leverage equipment' },
    level: { RU: '1 УРОВЕНЬ', KZ: '1 ДЕҢГЕЙ', EN: 'TIER 1' },
  },
  {
    src: '/images/gym/status_free_weights.jpg',
    tag: { RU: 'СВОБОДНЫЕ ВЕСА И БЛИНЫ', KZ: 'ЕРКІН САЛМАҚТАР МЕН ДИСКІЛЕР', EN: 'FREE WEIGHTS & OLYMPIC PLATES' },
    title: { RU: 'Стойки с дисками и зоны базы', KZ: 'Дискілері бар тіреуіштер және базалық аймақ', EN: 'Olympic plates and racks' },
    level: { RU: '1 УРОВЕНЬ', KZ: '1 ДЕҢГЕЙ', EN: 'TIER 1' },
  },
];

interface AboutProps {
  language: Language;
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ language, onOpenBooking }) => {
  const [activePhoto, setActivePhoto] = useState(0);
  const dict = DICTIONARY.about;

  const featureIcons = [
    <Layers className="w-6 h-6 text-white" key="layers" />,
    <Wind className="w-6 h-6 text-white" key="wind" />,
    <Droplets className="w-6 h-6 text-white" key="droplets" />,
    <Coffee className="w-6 h-6 text-white" key="coffee" />,
  ];

  return (
    <section id="about" className="py-24 bg-[#0F0F0F] relative border-t border-[#1F1F1F] reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#2B2B2B] rounded-xs mb-4">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#AAA] uppercase font-bold">
              {dict.sectionTag[language]}
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight mb-6">
            {dict.heading[language]}
          </h2>

          <p className="text-base sm:text-lg text-[#A6A6A6] leading-relaxed font-normal">
            {dict.intro[language]}
          </p>
        </div>

        {/* Location Banner Callout */}
        <div className="mb-12 sm:mb-16 p-5 sm:p-8 bg-[#141414] border border-[#262626] rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xs bg-[#222222] border border-[#3A3A3A] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs uppercase font-mono tracking-[0.16em] text-[#888]">
                {language === 'KZ' ? 'АҚТӨБЕДЕГІ ОРНАЛАСҚАН ЖЕРІМІЗ' : language === 'EN' ? 'LOCATION IN AKTOBE' : 'ЛОКАЦИЯ В АКТОБЕ'}
              </div>
              <div className="text-base sm:text-xl font-bold text-white mt-1">
                {language === 'KZ' ? 'Ақтөбе қ., Астана ауданы, Маресьев көш., 4Д (1 қабат)' : language === 'EN' ? 'Aktobe, Astana district, 4D Maresyeva St. (1st floor)' : 'г. Актобе, район Астана, ул. Маресьева, 4Д (1 этаж)'}
              </div>
              <div className="text-xs sm:text-sm text-[#999] mt-1">
                {language === 'KZ' ? 'Негізгі көлік жолдарынан ыңғайлы кіру, жеке есік және кең автотұрақ' : language === 'EN' ? 'Convenient access from primary avenues, private entrance, and spacious parking' : 'Удобный подъезд с основных магистралей, отдельный вход и просторная парковка'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full md:w-auto">
            <a
              href="https://2gis.kz/aktobe/firm/70000001045736137"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-elevate flex-1 sm:flex-none text-center px-4 sm:px-5 py-2.5 bg-transparent border border-[#3D3D3D] hover:border-white text-xs font-bold uppercase tracking-wider text-white transition-all rounded-xs"
            >
              {language === 'KZ' ? '2GIS БАҒЫТ' : language === 'EN' ? '2GIS ROUTE' : '2GIS МАРШРУТ'}
            </a>
            <button
              onClick={onOpenBooking}
              className="btn-elevate flex-1 sm:flex-none text-center px-4 sm:px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-all rounded-xs cursor-pointer"
            >
              {language === 'KZ' ? 'КЛУБҚА КЕЛУ' : language === 'EN' ? 'VISIT CLUB' : 'ПРИЙТИ В ГОСТИ'}
            </button>
          </div>
        </div>

        {/* 4 Key Pillars of Status Gym */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-16">
          {dict.features.map((feat, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-[#141414] hover:bg-[#181818] border border-[#242424] hover:border-[#404040] rounded-xs transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner Index */}
              <div className="absolute top-4 right-6 font-mono text-2xl sm:text-3xl font-black text-[#262626] group-hover:text-[#333] transition-colors">
                0{index + 1}
              </div>

              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xs bg-[#1E1E1E] border border-[#333333] flex items-center justify-center mb-5 sm:mb-6">
                {featureIcons[index]}
              </div>

              <h3 className="font-display font-bold text-base sm:text-xl text-white tracking-wide uppercase mb-2.5 sm:mb-3">
                {feat.title[language]}
              </h3>

              <p className="text-xs sm:text-base text-[#9E9E9E] leading-relaxed font-normal">
                {feat.description[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Architecture & Atmosphere Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-black p-5 sm:p-8 md:p-12 border border-[#242424] rounded-xs">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#888] uppercase">
              {language === 'KZ' ? 'ЕКІ ДЕҢГЕЙЛІ ҚҰРЫЛЫМ' : language === 'EN' ? 'TWO-TIER ARCHITECTURE' : 'ДВУХУРОВНЕВАЯ СТРУКТУРА'}
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              {language === 'KZ' ? 'Ағындарды сауатты бөлу және күштік сектордағы еркіндік' : language === 'EN' ? 'Intelligent floor zoning and high-focus training atmosphere' : 'Грамотное разделение потоков и тишина в силовом секторе'}
            </h3>
            <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
              {language === 'KZ'
                ? 'Жоғарғы қабаттағы кардио-аймақ пен төменгі қабаттағы ауыр күштік аймақтың бөлінуі арқасында спортшылар бір-біріне кедергі жасамайды. Сіз кезексіз кең залда жаттығасыз.'
                : language === 'EN'
                ? 'With dedicated separation between our second-floor cardio panorama and ground-floor heavy iron sector, members train with complete focus without equipment congestion.'
                : 'Благодаря физическому разделению кардио-зоны на верхнем ярусе и зоны тяжелого железа на нижнем этаже, спортсмены не мешают друг другу. Вы тренируетесь в просторном зале без очередей к снарядам.'}
            </p>

            <ul className="space-y-3 pt-2">
              {(language === 'KZ'
                ? [
                    'Қарбалас уақытта жаттығу орындықтары мен рамаларға кезек жоқ',
                    'Сағатына 4 есе ауа алмастыратын сүзу жүйесі',
                    'Сенімді құлыптары бар шкафтар және кең душ кабиналары',
                    'Протеин, аминқышқылдары және кофесі бар фитнес-бар',
                  ]
                : language === 'EN'
                ? [
                    'Zero bottleneck delays at bench press stations and power racks',
                    'Industrial multi-stage air exchange cycling clean air 4x per hour',
                    'Secure personal lockers with keycards and spacious hot showers',
                    'Full nutrition shake and pre-workout recovery bar on-site',
                  ]
                : [
                    'Никаких очередей к жимовым скамьям и рамам в часы пик',
                    'Система фильтрации воздуха с 4-кратным обменом в час',
                    'Шкафчики с надежными замками и просторные душевые кабины',
                    'Спортивный бар с протеином, аминокислотами и кофе',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#CCCCCC]">
                  <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 relative flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-xs border border-[#333] group">
              <img
                src={getAssetUrl(CLUB_PHOTOS[activePhoto].src)}
                alt={CLUB_PHOTOS[activePhoto].title[language]}
                className="w-full h-80 sm:h-96 object-cover filter brightness-[90%] contrast-[105%] transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Prev / Next buttons on main preview */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 z-10">
                <button
                  type="button"
                  onClick={() => setActivePhoto((prev) => (prev === 0 ? CLUB_PHOTOS.length - 1 : prev - 1))}
                  className="btn-elevate p-2 rounded-xs bg-black/70 hover:bg-black border border-[#444] hover:border-white text-white transition-all cursor-pointer backdrop-blur-sm"
                  aria-label={language === 'KZ' ? 'Алдыңғы фото' : language === 'EN' ? 'Previous photo' : 'Предыдущее фото'}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhoto((prev) => (prev + 1) % CLUB_PHOTOS.length)}
                  className="btn-elevate p-2 rounded-xs bg-black/70 hover:bg-black border border-[#444] hover:border-white text-white transition-all cursor-pointer backdrop-blur-sm"
                  aria-label={language === 'KZ' ? 'Келесі фото' : language === 'EN' ? 'Next photo' : 'Следующее фото'}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Photo badge & title */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-4 border border-[#333] rounded-xs flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-[#AAA] uppercase">
                    {CLUB_PHOTOS[activePhoto].tag[language]}
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {CLUB_PHOTOS[activePhoto].title[language]}
                  </div>
                </div>
                <div className="px-2.5 py-1 bg-white text-black font-bold text-xs uppercase tracking-wider shrink-0">
                  {CLUB_PHOTOS[activePhoto].level[language]}
                </div>
              </div>
            </div>

            {/* Thumbnails row */}
            <div className="grid grid-cols-5 gap-2">
              {CLUB_PHOTOS.map((photo, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePhoto(idx)}
                  className={`relative aspect-[4/3] rounded-xs overflow-hidden border transition-all duration-200 cursor-pointer ${
                    activePhoto === idx
                      ? 'border-white ring-1 ring-white opacity-100 scale-[1.02]'
                      : 'border-[#333] opacity-60 hover:opacity-90 hover:border-[#666]'
                  }`}
                  aria-label={photo.title[language]}
                >
                  <img
                    src={getAssetUrl(photo.src)}
                    alt={photo.title[language]}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

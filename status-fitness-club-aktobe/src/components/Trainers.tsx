import React, { useState } from 'react';
import { Award, Clock, ArrowRight, Instagram, Check, Filter } from 'lucide-react';
import { Trainer, Language } from '../types';
import { DICTIONARY, TRAINERS_DATA } from '../data/content';
import { getAssetUrl } from '../utils/assets';

interface TrainersProps {
  language: Language;
  onOpenBookingWithCoach: (coachChoice: string | { RU: string; KZ: string; EN: string }) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ language, onOpenBookingWithCoach }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const dict = DICTIONARY.trainers;

  const categories = [
    { id: 'all', label: { RU: 'Все наставники (6)', KZ: 'Барлық жаттықтырушылар (6)', EN: 'All Coaches (6)' } },
    { id: 'strength', label: { RU: 'Силовой тренинг & Пауэрлифтинг', KZ: 'Күштік & Пауэрлифтинг', EN: 'Strength & Powerlifting' } },
    { id: 'weight-loss', label: { RU: 'Похудение & Диетология', KZ: 'Салмақ тастау & Диетология', EN: 'Weight Loss & Nutrition' } },
    { id: 'rehab', label: { RU: 'Реабилитация & ЛФК', KZ: 'Оңалту & ЕДШ', EN: 'Rehab & Spine Health' } },
  ];

  const filteredTrainers =
    selectedCategory === 'all'
      ? TRAINERS_DATA
      : TRAINERS_DATA.filter((t) => t.category === selectedCategory);

  return (
    <section id="trainers" className="py-24 bg-[#0D0D0D] border-t border-[#1C1C1C] reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
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

          {/* Quick Instagram link to trainers highlights */}
          <a
            href="https://www.instagram.com/status__aktobe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-gray-300 transition-colors py-2 px-4 bg-[#181818] border border-[#2D2D2D] rounded-xs shrink-0 self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-white" />
            <span>@status__aktobe</span>
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-10 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-black font-extrabold shadow-sm'
                  : 'bg-[#141414] hover:bg-[#1C1C1C] text-[#888] hover:text-white border border-[#262626]'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Trainer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredTrainers.map((coach) => (
            <div
              key={coach.id}
              className="group bg-[#121212] border border-[#242424] hover:border-[#4A4A4A] rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              {/* Coach Photo */}
              <div className="relative h-72 sm:h-96 overflow-hidden bg-[#181818]">
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out">
                  <img
                    src={getAssetUrl(coach.image)}
                    alt={coach.name[language]}
                    className="w-full h-full object-cover filter grayscale-[10%] contrast-[108%] group-hover:grayscale-0 transition-all duration-500"
                    style={{
                      objectPosition: coach.imagePosition || 'center center',
                      transform: coach.imageTransform,
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Soft gradient that guarantees text contrast without obscuring faces */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/35 to-transparent pointer-events-none" />

                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-[#333] text-[10px] font-mono font-bold text-white tracking-wider rounded-xs flex items-center gap-1 shadow-md">
                    <Clock className="w-3 h-3 text-gray-400" />
                    {coach.experience[language]}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-neutral-300 block mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    {coach.role[language]}
                  </span>
                  <h3 className="font-display font-black text-lg text-white uppercase tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                    {coach.name[language]}
                  </h3>
                </div>
              </div>

              {/* Coach Info & Specializations */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#B5B5B5] leading-relaxed mb-4">
                    {coach.bio[language]}
                  </p>

                  {/* Coach Achievements if present */}
                  {coach.achievements && coach.achievements[language] && (
                    <div className="mb-4 p-2.5 bg-white/5 border border-white/10 rounded-xs">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-white uppercase tracking-wider mb-1">
                        <Award className="w-3.5 h-3.5 text-white" />
                        <span>{language === 'KZ' ? 'ЖЕТІСТІКТЕРІ:' : language === 'EN' ? 'ACHIEVEMENTS:' : 'ДОСТИЖЕНИЯ:'}</span>
                      </div>
                      <p className="text-[11px] text-[#DDD] leading-tight font-medium">
                        {coach.achievements[language]}
                      </p>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#666] mb-2">
                      {language === 'KZ' ? 'МАМАНДАНУЫ:' : language === 'EN' ? 'SPECIALIZATION:' : 'СПЕЦИАЛИЗАЦИЯ:'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {coach.specialization[language].map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-[#1C1C1C] border border-[#2D2D2D] text-[10px] text-[#CCC] font-medium rounded-xs"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <button
                  onClick={() =>
                    onOpenBookingWithCoach({
                      RU: `Тренер: ${coach.name.RU}`,
                      KZ: `Жаттықтырушы: ${coach.name.KZ}`,
                      EN: `Coach: ${coach.name.EN}`,
                    })
                  }
                  className="btn-elevate w-full mt-4 py-2.5 bg-transparent hover:bg-white text-white hover:text-black border border-[#3A3A3A] hover:border-white font-display text-[11px] font-bold tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 rounded-xs cursor-pointer"
                >
                  <span>{dict.bookCoach[language]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coach Consultation Banner */}
        <div className="mt-12 p-6 bg-[#161616] border border-[#2A2A2A] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                {language === 'KZ' ? 'Мақсатыңызға сәйкес жаттықтырушыны таңдауда күмәніңіз бар ма?' : language === 'EN' ? 'Unsure which trainer fits your exact training goal?' : 'Не знаете, какого тренера выбрать под вашу задачу?'}
              </div>
              <div className="text-xs text-[#999] mt-0.5">
                {language === 'KZ' ? 'Әкімші кіріспе кеңестен кейін сізге ең қолайлы наставникті таңдап береді' : language === 'EN' ? 'Our front desk concierge will match you with the ideal coach upon consultation' : 'Администратор подберёт подходящего наставника после вводной консультации'}
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              onOpenBookingWithCoach({
                RU: 'Подбор наставника с администратором',
                KZ: 'Әкімшімен жаттықтырушы таңдау',
                EN: 'Match coach with administrator',
              })
            }
            className="btn-elevate px-5 py-2.5 bg-white text-black font-display text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all rounded-xs shrink-0 cursor-pointer"
          >
            {language === 'KZ' ? 'ЖАТТЫҚТЫРУШЫ ТАҢДАУ' : language === 'EN' ? 'MATCH ME WITH A COACH' : 'ПОДОБРАТЬ НАСТАВНИКА'}
          </button>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { getAssetUrl } from '../utils/assets';
import {
  Instagram,
  MessageCircle,
  Phone,
  MapPin,
  ArrowUp,
  Shield,
  Building2,
  ShieldCheck,
  Clock,
  FileText,
  X,
  ExternalLink,
  Dumbbell,
} from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY, CLUB_RULES_LEGAL_DATA } from '../data/content';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const dict = DICTIONARY.footer;
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowPrivacyModal(false);
      }
    };
    if (showPrivacyModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showPrivacyModal]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="main-footer" className="bg-[#080808] border-t border-[#1C1C1C] pt-16 pb-12 text-[#9E9E9E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xs overflow-hidden flex items-center justify-center bg-black border border-white/20 shrink-0 shadow-md">
                  <img
                    src={getAssetUrl('/images/status_shield_logo.jpg')}
                    alt="STATUS Logo"
                    className="w-full h-full object-cover filter contrast-[110%]"
                  />
                </div>
                <span className="font-display font-black text-xl tracking-[0.2em] text-white">
                  STATUS
                </span>
              </div>
              <p className="text-xs leading-relaxed text-[#888] mb-6">
                {language === 'KZ'
                  ? 'Ақтөбе қаласындағы жоғары деңгейлі тренажер залы және спорт клубы. Екі деңгейлі аймақтар, кәсіби тренажерлер, жеке жаттықтырушылар және 1Fit серіктестігі.'
                  : language === 'EN'
                  ? 'Premier gym and fitness club in Aktobe. Two-tier zoning, professional biomechanical machines, certified personal trainers, and 1Fit partnership.'
                  : 'Премиальный тренажёрный зал и спортивный клуб в городе Актобе. Двухуровневое зонирование, профессиональные тренажёры, персональные тренеры и партнерство с 1Fit.'}
              </p>
              <div className="text-xs font-mono text-[#666]">
                {language === 'KZ' ? 'АҚТӨБЕ • АСТАНА АУДАНЫ • МАРЕСЬЕВ, 4Д' : language === 'EN' ? 'AKTOBE • ASTANA DISTRICT • 4D MARESYEVA' : 'АКТОБЕ • РАЙОН АСТАНА • МАРЕСЬЕВА, 4Д'}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
                {language === 'KZ' ? 'НАВИГАЦИЯ' : language === 'EN' ? 'NAVIGATION' : 'НАВИГАЦИЯ'}
              </div>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    {language === 'KZ' ? 'Клуб және аймақтар туралы' : language === 'EN' ? 'About Club & Levels' : 'О клубе и зонировании'}
                  </a>
                </li>
                <li>
                  <a href="#zones" className="hover:text-white transition-colors">
                    {language === 'KZ' ? 'Күштік және кардио аймақтары' : language === 'EN' ? 'Strength & Cardio Zones' : 'Силовая и кардио зоны'}
                  </a>
                </li>
                <li>
                  <a href="#trainers" className="hover:text-white transition-colors">
                    {language === 'KZ' ? 'Жаттықтырушылар құрамы' : language === 'EN' ? 'Training Staff' : 'Тренерский штаб'}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    {language === 'KZ' ? 'Бағалар мен абонементтер' : language === 'EN' ? 'Prices & Memberships' : 'Цены и абонементы'}
                  </a>
                </li>
                <li>
                  <a href="#1fit-partner-section" className="hover:text-white transition-colors">
                    {language === 'KZ' ? '1Fit бойынша бару' : language === 'EN' ? '1Fit Access' : 'Посещение по 1Fit'}
                  </a>
                </li>
                <li>
                  <a href="#contacts" className="hover:text-white transition-colors">
                    {language === 'KZ' ? 'Байланыс және жұмыс кестесі' : language === 'EN' ? 'Contacts & Working Hours' : 'Контакты и режим работы'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Direct Contacts */}
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
                {language === 'KZ' ? 'БАЙЛАНЫС' : language === 'EN' ? 'CONTACTS' : 'КОНТАКТЫ'}
              </div>
              <ul className="space-y-3 text-xs">
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-white shrink-0" />
                  <a href="tel:+77079418515" className="text-white hover:underline font-mono">
                    +7 (707) 941-85-15
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#888] shrink-0" />
                  <a href="tel:+77079348515" className="hover:text-white transition-colors font-mono">
                    +7 (707) 934-85-15
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>
                    {language === 'KZ'
                      ? 'Қазақстан, Ақтөбе қ., Маресьев көш., 4Д (1 қабат)'
                      : language === 'EN'
                      ? 'Kazakhstan, Aktobe, 4D Maresyeva St. (1st floor)'
                      : 'Казахстан, г. Актобе, ул. Маресьева, 4Д (1 этаж)'}
                  </span>
                </li>
                <li className="pt-2">
                  <span className="text-[11px] text-emerald-400 font-mono block">
                    {language === 'KZ'
                      ? 'Дс-Сб: 07:00 – 23:00 | Жс: 09:00 – 22:00'
                      : language === 'EN'
                      ? 'Mon-Sat: 07:00 – 23:00 | Sun: 09:00 – 22:00'
                      : 'Пн-Сб: 07:00 – 23:00 | Вс: 09:00 – 22:00'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Community */}
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
                {language === 'KZ' ? 'ӘЛЕУМЕТТІК ЖЕЛІЛЕР' : language === 'EN' ? 'FOLLOW US' : 'МЫ В СОЦСЕТЯХ'}
              </div>
              <p className="text-xs text-[#888] leading-relaxed mb-4">
                {language === 'KZ'
                  ? 'Клуб жаңалықтарын, абонементтер акцияларын және жаттығу видеоларын ресми Instagram-нан көріңіз:'
                  : language === 'EN'
                  ? 'Follow club updates, membership promos, and video workouts on our official Instagram:'
                  : 'Следите за новостями клуба, акциями на абонементы и видео-тренировками в официальном Instagram:'}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/status__aktobe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xs bg-[#141414] border border-[#2D2D2D] hover:border-white text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram @status__aktobe"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/77079418515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xs bg-[#141414] border border-[#2D2D2D] hover:border-white text-white flex items-center justify-center transition-colors"
                  aria-label="WhatsApp +77079418515"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://2gis.kz/aktobe/firm/70000001045736137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 h-10 rounded-xs bg-[#141414] border border-[#2D2D2D] hover:border-white text-white flex items-center justify-center text-xs font-mono font-bold transition-colors"
                  aria-label="2GIS Aktobe"
                >
                  2GIS
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright, Unified Legal Rules Link & Back to Top */}
          <div className="pt-8 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777]">
            <div>{dict.copy[language]}</div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(true)}
                className="hover:text-white text-[#AAA] transition-colors cursor-pointer underline decoration-[#444] hover:decoration-white flex items-center gap-2 text-xs"
              >
                <Shield className="w-3.5 h-3.5 text-neutral-400" />
                <span>{dict.rulesAndPolicy ? dict.rulesAndPolicy[language] : dict.privacy[language]}</span>
              </button>
              <button
                type="button"
                onClick={scrollToTop}
                className="btn-elevate p-2 bg-[#161616] border border-[#2D2D2D] hover:border-white text-white rounded-xs transition-colors cursor-pointer"
                aria-label={language === 'KZ' ? 'Жоғарыға' : language === 'EN' ? 'Back to top' : 'Наверх'}
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Comprehensive Club Rules, Amenities & Legal Policy Modal */}
      {showPrivacyModal && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-2.5 sm:p-6 bg-black/90 backdrop-blur-md animate-modal-backdrop"
          onClick={() => setShowPrivacyModal(false)}
        >
          <div
            className="bg-[#111111] border border-[#2C2C2C] rounded-xs max-w-4xl w-full text-white max-h-[94dvh] flex flex-col shadow-2xl overflow-hidden animate-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-[#242424] bg-[#161616] relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded-xs mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-[#AAA] uppercase font-bold">
                      {language === 'KZ'
                        ? 'STATUS FITNESS CLUB • АҚТӨБЕ Қ., МАРЕСЬЕВ КӨШ., 4Д'
                        : language === 'EN'
                        ? 'STATUS FITNESS CLUB • AKTOBE, 4D MARESYEVA ST.'
                        : 'STATUS FITNESS CLUB • Г. АКТОБЕ, УЛ. МАРЕСЬЕВА, 4Д'}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-lg sm:text-2xl text-white tracking-tight uppercase">
                    {CLUB_RULES_LEGAL_DATA.modalTitle[language]}
                  </h3>
                  <p className="text-xs text-[#9E9E9E] mt-1.5 leading-relaxed max-w-2xl">
                    {CLUB_RULES_LEGAL_DATA.modalSubtitle[language]}
                  </p>
                </div>

                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="w-8 h-8 rounded-xs bg-[#202020] hover:bg-white hover:text-black border border-[#333] flex items-center justify-center text-gray-400 transition-colors cursor-pointer shrink-0"
                  aria-label={language === 'KZ' ? 'Терезені жабу' : language === 'EN' ? 'Close modal' : 'Закрыть'}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Address & Hours Ribbon */}
              <div className="mt-4 pt-3 border-t border-[#262626] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#AAA]">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>{CLUB_RULES_LEGAL_DATA.addressBadge[language]}</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+77079418515"
                    className="text-white hover:underline font-bold"
                  >
                    +7 (707) 941-85-15
                  </a>
                  <span>•</span>
                  <a
                    href="https://2gis.kz/aktobe/firm/70000001045736137"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    2GIS <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Body - Structured Sections */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-xs leading-relaxed max-h-[calc(92vh-220px)]">
              {CLUB_RULES_LEGAL_DATA.sections.map((section) => {
                const getSectionIcon = () => {
                  switch (section.iconName) {
                    case 'dumbbell':
                      return <Dumbbell className="w-4 h-4 text-white" />;
                    case 'building':
                      return <Building2 className="w-4 h-4 text-white" />;
                    case 'shield':
                      return <ShieldCheck className="w-4 h-4 text-white" />;
                    case 'clock':
                      return <Clock className="w-4 h-4 text-white" />;
                    case 'file-text':
                      return <FileText className="w-4 h-4 text-white" />;
                    case 'map-pin':
                      return <MapPin className="w-4 h-4 text-white" />;
                    default:
                      return <Shield className="w-4 h-4 text-white" />;
                  }
                };

                const items = section.items[language];

                return (
                  <div
                    key={section.id}
                    className="bg-[#161616] border border-[#262626] rounded-xs p-5 transition-all hover:border-[#3A3A3A]"
                  >
                    {/* Section Header */}
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#222]">
                      <div className="w-7 h-7 rounded-xs bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                        {getSectionIcon()}
                      </div>
                      <div>
                        <div className="text-[10px] font-mono tracking-widest text-[#888] uppercase font-bold">
                          {section.badge[language]}
                        </div>
                        <h4 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-tight">
                          {section.title[language]}
                        </h4>
                      </div>
                    </div>

                    {/* Section Items */}
                    <div className="space-y-3.5">
                      {items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#202020] border border-[#303030] text-[10px] font-mono font-bold text-white flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div>
                            <span className="font-bold text-white block mb-0.5">
                              {item.label}
                            </span>
                            <span className="text-[#B5B5B5] block leading-relaxed">
                              {item.text}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-[#242424] bg-[#141414] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] text-[#888] font-mono text-center sm:text-left">
                {language === 'KZ'
                  ? 'Сұрақтар туындаған жағдайда әкімшіге хабарласыңыз: '
                  : language === 'EN'
                  ? 'For any inquiries, contact our front desk concierge: '
                  : 'По всем вопросам вы можете обратиться к администратору: '}
                <a href="https://wa.me/77079418515" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-bold">
                  WhatsApp +7 (707) 941-85-15
                </a>
              </div>

              <button
                onClick={() => setShowPrivacyModal(false)}
                className="btn-elevate w-full sm:w-auto px-6 py-2.5 bg-white text-black font-display text-xs font-black tracking-widest uppercase hover:bg-neutral-200 transition-colors rounded-xs cursor-pointer shrink-0"
              >
                {language === 'KZ' ? 'ТҮСІНІКТІ' : language === 'EN' ? 'GOT IT' : 'ПОНЯТНО'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

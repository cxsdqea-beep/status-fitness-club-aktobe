import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Language } from '../types';

interface FloatingWhatsAppProps {
  language: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ language }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const tooltips: Record<Language, string> = {
    RU: 'WhatsApp • Онлайн',
    KZ: 'WhatsApp • Онлайн',
    EN: 'WhatsApp • Online',
  };

  const textPresets: Record<Language, string> = {
    RU: 'Здравствуйте, клуб STATUS! Хочу узнать о записи на тренировку.',
    KZ: 'Сәлеметсіз бе, STATUS клубы! Жаттығуға жазылу туралы білгім келеді.',
    EN: 'Hello, STATUS club! I would like to inquire about training sessions.',
  };

  const whatsappUrl = `https://wa.me/77079344533?text=${encodeURIComponent(textPresets[language])}`;

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-3.5 sm:right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {showTooltip && (
        <div className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 bg-[#141414]/95 border border-[#333] rounded-full shadow-2xl text-[10px] sm:text-[11px] text-white backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="font-semibold whitespace-nowrap">{tooltips[language]}</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white ml-1 p-0.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={language === 'KZ' ? 'Жабу' : language === 'EN' ? 'Close' : 'Закрыть'}
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={language === 'KZ' ? 'WhatsApp арқылы хабарласу' : language === 'EN' ? 'Contact via WhatsApp' : 'Связаться в WhatsApp'}
        className="btn-elevate pointer-events-auto group relative w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_6px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <MessageCircle className="w-5.5 h-5.5 sm:w-7 sm:h-7 fill-white text-white relative z-10" />
      </a>
    </div>
  );
};

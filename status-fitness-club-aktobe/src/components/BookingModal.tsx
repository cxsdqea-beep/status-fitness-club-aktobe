import React, { useState, useMemo, useEffect } from 'react';
import { X, Check, Dumbbell, Shield, MessageSquare, ChevronDown, Sparkles, Tag } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data/content';
import { formatPhoneInput, handlePhoneFocus, handlePhoneBlur, handlePhoneKeyDown } from '../utils/phone';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  prefillChoice?: string | { RU: string; KZ: string; EN: string };
}

interface ServiceItem {
  id: string;
  category: 'all' | 'memberships' | 'coaching' | 'single';
  categoryLabel: { RU: string; KZ: string; EN: string };
  name: { RU: string; KZ: string; EN: string };
  price: string | { RU: string; KZ: string; EN: string };
  badge?: { RU: string; KZ: string; EN: string };
  desc: { RU: string; KZ: string; EN: string };
}

const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'drop-in',
    category: 'single',
    categoryLabel: { RU: 'Разовое / Вход', KZ: 'Бір реттік кіру', EN: 'Drop-In / Single' },
    name: { RU: 'Разовое посещение зала', KZ: 'Бір реттік кіру', EN: 'Single Gym Day Pass' },
    price: '3 000 ₸',
    desc: {
      RU: 'Разовый вход без ограничения времени на 2 этажа (силовая и кардио зоны)',
      KZ: 'Залда болу уақытына шектеусіз екі қабатқа бір реттік кіру',
      EN: 'Single-day entry across all decks without workout duration limits',
    },
  },
  {
    id: 'monthly-unlimited',
    category: 'memberships',
    categoryLabel: { RU: 'Безлимитные абонементы', KZ: 'Лимитсіз абонементтер', EN: 'Unlimited Memberships' },
    name: { RU: 'Месячный Безлимит (1 месяц)', KZ: 'Лимитсіз (1 ай)', EN: 'Monthly Unlimited Pass' },
    price: '20 000 ₸',
    badge: { RU: 'ПОПУЛЯРНО', KZ: 'ТАҢДАУЛЫ', EN: 'POPULAR' },
    desc: {
      RU: 'Свободное посещение в любые дни недели и в любое время работы клуба',
      KZ: 'Аптаның кез келген күнінде және кез келген жұмыс уақытында еркін кіру',
      EN: 'Free access any day at any operating hour of the club',
    },
  },
  {
    id: 'quarter-unlimited',
    category: 'memberships',
    categoryLabel: { RU: 'Безлимитные абонементы', KZ: 'Лимитсіз абонементтер', EN: 'Unlimited Memberships' },
    name: { RU: '3 месяца Безлимит (заморозка 15 дней)', KZ: '3 айға лимитсіз (тоқтату 15 күн)', EN: '3-Month Unlimited (15d freeze)' },
    price: '47 000 ₸',
    badge: { RU: 'ХИТ', KZ: 'ХИТ', EN: 'TOP VALUE' },
    desc: {
      RU: '90 дней безлимита (~15 660 ₸/мес) + 15 календарных дней заморозки',
      KZ: '90 күн шексіз қатысу (~15 660 ₸/ай) + 15 күн тоқтата тұру',
      EN: '90 days unrestricted access (~15,660 ₸/mo) + 15 freeze days',
    },
  },
  {
    id: 'half-year-unlimited',
    category: 'memberships',
    categoryLabel: { RU: 'Безлимитные абонементы', KZ: 'Лимитсіз абонементтер', EN: 'Unlimited Memberships' },
    name: { RU: '6 месяцев Безлимит (заморозка 30 дней)', KZ: '6 ай лимитсіз (тоқтату 30 күн)', EN: '6-Month Unlimited (30d freeze)' },
    price: '80 000 ₸',
    desc: {
      RU: 'Полгода безлимитных тренировок + 30 дней заморозки',
      KZ: 'Жарты жыл еркін жаттығулар + 30 күн тоқтата тұру мүмкіндігі',
      EN: '6 months unlimited workouts + 30 freeze days',
    },
  },
  {
    id: 'annual-vip',
    category: 'memberships',
    categoryLabel: { RU: 'Безлимитные абонементы', KZ: 'Лимитсіз абонементтер', EN: 'Unlimited Memberships' },
    name: { RU: 'Годовой Безлимит (заморозка 40 дней)', KZ: '1 жыл лимитсіз (тоқтату 40 күн)', EN: '1-Year Unlimited (40d freeze)' },
    price: '130 000 ₸',
    badge: { RU: 'ЛУЧШАЯ ЦЕНА', KZ: 'ЕҢ ТИІМДІ', EN: 'BEST VALUE' },
    desc: {
      RU: '365 дней безлимита (~10 830 ₸/мес) + 40 дней заморозки',
      KZ: '365 күн шексіздік (~10 830 ₸/ай) + 40 күнтізбелік күн тоқтату',
      EN: 'Full year access (~10,830 ₸/mo) + 40 hold days',
    },
  },
  {
    id: 'pass-12',
    category: 'memberships',
    categoryLabel: { RU: 'Другие абонементы', KZ: 'Басқа абонементтер', EN: 'Other Memberships' },
    name: { RU: 'Абонемент «12 занятий» (1 месяц)', KZ: '«12 жаттығу» (1 ай)', EN: '12 Sessions Pass' },
    price: '18 000 ₸',
    desc: {
      RU: '12 посещений в месяц в любые дни недели в любое время работы',
      KZ: 'Кез келген жұмыс уақытында айына 12 рет келу',
      EN: '12 visits per month anytime during club operating hours',
    },
  },
  {
    id: 'pass-daytime',
    category: 'memberships',
    categoryLabel: { RU: 'Другие абонементы', KZ: 'Басқа абонементтер', EN: 'Other Memberships' },
    name: { RU: 'Дневной абонемент (12 занятий, до 16:00)', KZ: 'Күндізгі абонемент (16:00-ге дейін)', EN: 'Daytime Pass (until 16:00)' },
    price: '16 000 ₸',
    desc: {
      RU: '12 посещений в месяц с 07:00 до 16:00 в любые дни недели',
      KZ: 'Ай ішінде сағат 07:00-ден 16:00-ге дейін 12 рет келу',
      EN: '12 daytime visits between 07:00 and 16:00',
    },
  },
  {
    id: 'pass-schedule',
    category: 'memberships',
    categoryLabel: { RU: 'Другие абонементы', KZ: 'Басқа абонементтер', EN: 'Other Memberships' },
    name: { RU: '«Вт / Чт / Сб» (12 занятий)', KZ: '«Сейсенбі / Бейсенбі / Сенбі» (12 жаттығу)', EN: 'Tue / Thu / Sat Pass' },
    price: '16 000 ₸',
    desc: {
      RU: '12 посещений во вторник, четверг и субботу в любое время',
      KZ: 'Сейсенбі, бейсенбі және сенбі күндері 12 рет келу',
      EN: '12 visits on Tuesday, Thursday, and Saturday',
    },
  },
  {
    id: 'pass-8',
    category: 'memberships',
    categoryLabel: { RU: 'Другие абонементы', KZ: 'Басқа абонементтер', EN: 'Other Memberships' },
    name: { RU: 'Абонемент «8 занятий» (1 месяц)', KZ: '«8 жаттығу» (1 ай)', EN: '8 Sessions Pass' },
    price: '15 000 ₸',
    desc: {
      RU: '8 посещений в течение 1 месяца в любое время',
      KZ: '1 ай ішінде кез келген уақытта 8 рет қатысу',
      EN: '8 visits per month anytime',
    },
  },
  {
    id: 'pass-student',
    category: 'memberships',
    categoryLabel: { RU: 'Другие абонементы', KZ: 'Басқа абонементтер', EN: 'Other Memberships' },
    name: { RU: 'Студенческий абонемент (12 занятий)', KZ: 'Студенттік абонемент (12 жаттығу)', EN: 'Student Pass (12 sessions)' },
    price: '15 000 ₸',
    desc: {
      RU: '12 посещений в месяц в любое время по студенческому билету',
      KZ: 'Студенттік билет бойынша кез келген уақытта 12 рет келу',
      EN: '12 visits per month for students with valid student ID',
    },
  },
  {
    id: 'pass-senior',
    category: 'memberships',
    categoryLabel: { RU: 'Другие абонементы', KZ: 'Басқа абонементтер', EN: 'Other Memberships' },
    name: { RU: 'Для пенсионеров и ЛОВ (12 занятий)', KZ: 'Зейнеткерлер мен барлық МШЖ-ға (12 сабақ)', EN: 'Senior & Disability Pass' },
    price: '15 000 ₸',
    desc: {
      RU: '12 посещений в месяц для пенсионеров и людей с ограниченными возможностями',
      KZ: 'Зейнеткерлер мен мүмкіндігі шектеулі жандарға айына 12 рет келу',
      EN: '12 monthly sessions for seniors and individuals with disabilities',
    },
  },
  {
    id: 'coach-12',
    category: 'coaching',
    categoryLabel: { RU: 'С тренером', KZ: 'Жаттықтырушымен', EN: 'With Coach' },
    name: { RU: 'С персональным тренером (12 занятий)', KZ: 'Жеке жаттықтырушымен 12 сабақ', EN: 'Personal Coach (12 Sessions)' },
    price: '40 000 – 45 000 ₸',
    badge: { RU: 'РЕЗУЛЬТАТ', KZ: 'НӘТИЖЕ', EN: 'RESULT' },
    desc: {
      RU: '1 месяц, 12 занятий тет-а-тет с тренером в рабочее время + заморозка 10 дней',
      KZ: '1 ай, жаттықтырушымен 12 сабақ + 10 күн тоқтата тұру',
      EN: '1 month, 12 one-on-one sessions + 10 freeze days',
    },
  },
  {
    id: 'coach-10',
    category: 'coaching',
    categoryLabel: { RU: 'С тренером', KZ: 'Жаттықтырушымен', EN: 'With Coach' },
    name: { RU: 'С персональным тренером (10 занятий)', KZ: 'Жеке жаттықтырушымен 10 сабақ', EN: 'Personal Coach (10 Sessions)' },
    price: '35 000 – 40 000 ₸',
    desc: {
      RU: '1 месяц, 10 занятий с персональным тренером + заморозка 10 дней',
      KZ: '1 ай, жеке жаттықтырушымен 10 сабақ + 10 күн тоқтату',
      EN: '1 month, 10 guided sessions + 10 freeze days',
    },
  },
  {
    id: 'coach-minigroup',
    category: 'coaching',
    categoryLabel: { RU: 'С тренером', KZ: 'Жаттықтырушымен', EN: 'With Coach' },
    name: { RU: 'Мини-группа 3 человека (10 занятий)', KZ: '3 адамдық шағын топ (10 сабақ)', EN: 'Mini-Group 3 People (10 Sessions)' },
    price: '30 000 – 35 000 ₸',
    desc: {
      RU: '10 занятий в группе из 3 человек по согласованным дням (цена за 1 человека)',
      KZ: '3 адамдық шағын топта 10 сабақ (бір адамға)',
      EN: '10 sessions in a group of 3 athletes (price per person)',
    },
  },
  {
    id: 'coach-kids',
    category: 'coaching',
    categoryLabel: { RU: 'С тренером', KZ: 'Жаттықтырушымен', EN: 'With Coach' },
    name: { RU: 'Детский до 16 лет с тренером (10 занятий)', KZ: '16 жасқа дейінгі балалар (10 сабақ)', EN: 'Kids under 16 with Coach (10 Sessions)' },
    price: '30 000 ₸',
    desc: {
      RU: '1 месяц, 10 занятий под руководством тренера в любое время + заморозка 10 дней',
      KZ: '1 ай, жаттықтырушымен 10 сабақ + 10 күн тоқтата тұру',
      EN: '1 month, 10 coached sessions for teens under 16 + 10 freeze days',
    },
  },
  {
    id: 'coach-single',
    category: 'coaching',
    categoryLabel: { RU: 'С тренером', KZ: 'Жаттықтырушымен', EN: 'With Coach' },
    name: { RU: 'Разовый персональный с тренером', KZ: 'Бір реттік жеке жаттығу', EN: 'Single Personal Training' },
    price: '5 000 ₸',
    desc: {
      RU: 'Разовое занятие с персональным контролем тренера и постановкой техники',
      KZ: 'Жаттықтырушының жеке бақылауымен бір реттік жаттығу',
      EN: 'Single session with dedicated trainer form supervision',
    },
  },
  {
    id: 'coach-rehab',
    category: 'coaching',
    categoryLabel: { RU: 'С тренером', KZ: 'Жаттықтырушымен', EN: 'With Coach' },
    name: { RU: 'С тренером-реабилитологом (разовый)', KZ: 'Оңалту жаттықтырушысымен (бір реттік)', EN: 'Rehab Specialist Session' },
    price: '8 000 ₸',
    desc: {
      RU: 'Разовое занятие: восстановление после травм, осанка, опорно-двигательный аппарат',
      KZ: 'Жарақаттан кейін қалпына келтіру, мүсінді түзету және оңалту сабағы',
      EN: 'Rehabilitation, musculoskeletal recovery, and posture realignment',
    },
  },
  {
    id: 'trainer-kovalenko',
    category: 'coaching',
    categoryLabel: { RU: 'Выбор тренера', KZ: 'Жаттықтырушыны таңдау', EN: 'Trainer Selection' },
    name: { RU: 'Тренер: Анатолий Коваленко (МСМК)', KZ: 'Жаттықтырушы: Анатолий Коваленко (ХДСШ)', EN: 'Coach: Anatoliy Kovalenko' },
    price: { RU: 'По записи', KZ: 'Жазылу бойынша', EN: 'By appointment' },
    badge: { RU: 'МСМК', KZ: 'ХДСШ', EN: 'ELITE' },
    desc: {
      RU: 'МСМК по пауэрлифтингу, чемпион мира и Европы. Сила, мышечная масса, помост',
      KZ: 'Пауэрлифтингтен ХДСШ, Еуропа мен ҚР чемпионы. Күш және бұлшықет жинау',
      EN: 'International Master of Sport, heavy powerlifting peaking and hypertrophy',
    },
  },
  {
    id: 'trainer-gordeev',
    category: 'coaching',
    categoryLabel: { RU: 'Выбор тренера', KZ: 'Жаттықтырушыны таңдау', EN: 'Trainer Selection' },
    name: { RU: 'Тренер: Игорь Гордеев (Реабилитолог)', KZ: 'Жаттықтырушы: Игорь Гордеев (Оңалтушы)', EN: 'Coach: Igor Gordeev' },
    price: { RU: 'По записи', KZ: 'Жазылу бойынша', EN: 'By appointment' },
    badge: { RU: 'РЕАБИЛИТАЦИЯ', KZ: 'ОҢАЛТУ', EN: 'REHAB' },
    desc: {
      RU: 'Опыт 13+ лет, реабилитация после травм, пожилые люди, подростки, биомеханика',
      KZ: '13 жылдан астам тәжірибе, жарақаттан соң оңалту, жасөспірімдермен жұмыс',
      EN: '13+ years experience, rehab mechanics, youth and senior mobility specialist',
    },
  },
  {
    id: 'trainer-tsoy',
    category: 'coaching',
    categoryLabel: { RU: 'Выбор тренера', KZ: 'Жаттықтырушыны таңдау', EN: 'Trainer Selection' },
    name: { RU: 'Тренер: Римма Цой (Диетолог)', KZ: 'Жаттықтырушы: Римма Цой (Диетолог)', EN: 'Coach: Rimma Tsoy' },
    price: { RU: 'По записи', KZ: 'Жазылу бойынша', EN: 'By appointment' },
    badge: { RU: 'ДИЕТОЛОГ', KZ: 'ДИЕТОЛОГ', EN: 'DIETITIAN' },
    desc: {
      RU: 'Призёр чемпионата ЗКО по бодибилдингу, диетология, коррекция веса, рельеф',
      KZ: 'БҚО бодибилдинг чемпионатының жүлдегері, салмақ тастау, тамақтану жоспары',
      EN: 'WKO bodybuilding medalist, body sculpting, nutritional guidance, weight loss',
    },
  },
  {
    id: 'trainer-fomin',
    category: 'coaching',
    categoryLabel: { RU: 'Выбор тренера', KZ: 'Жаттықтырушыны таңдау', EN: 'Trainer Selection' },
    name: { RU: 'Тренер: Сергей Фомин (Эндокринолог/Нутрициолог)', KZ: 'Жаттықтырушы: Сергей Фомин (Нутрициолог)', EN: 'Coach: Sergey Fomin' },
    price: { RU: 'По записи', KZ: 'Жазылу бойынша', EN: 'By appointment' },
    badge: { RU: 'НУТРИЦИОЛОГИЯ', KZ: 'НУТРИЦИОЛОГИЯ', EN: 'NUTRITION' },
    desc: {
      RU: 'Коррекция веса по анализам, гормональный фон, долгосрочный результат без срывов',
      KZ: 'Медициналық талдаулар бойынша тамақтану, гормондық баланс және қауіпсіз жаттығу',
      EN: 'Bloodwork analysis, endocrine support, safe progressive physique recomposition',
    },
  },
  {
    id: 'trainer-tambovtsev',
    category: 'coaching',
    categoryLabel: { RU: 'Выбор тренера', KZ: 'Жаттықтырушыны таңдау', EN: 'Trainer Selection' },
    name: { RU: 'Тренер: Денис Тамбовцев (Чемпион Мира)', KZ: 'Жаттықтырушы: Денис Тамбовцев (Әлем чемпионы)', EN: 'Coach: Denis Tambovtsev' },
    price: { RU: 'По записи', KZ: 'Жазылу бойынша', EN: 'By appointment' },
    badge: { RU: 'ЧЕМПИОН МИРА', KZ: 'ӘЛЕМ ЧЕМПИОНЫ', EN: 'WORLD CHAMPION' },
    desc: {
      RU: 'Чемпион мира по пауэрлифтингу (сумма 407 кг), чемпион Азии по становой тяге',
      KZ: 'Пауэрлифтингтен Әлем чемпионы (407 кг), становой тартудан Азия чемпионы',
      EN: 'World Powerlifting Champion (407kg total), peak strength and deadlift form',
    },
  },
  {
    id: 'trainer-ismagulov',
    category: 'coaching',
    categoryLabel: { RU: 'Выбор тренера', KZ: 'Жаттықтырушыны таңдау', EN: 'Trainer Selection' },
    name: { RU: 'Тренер: Станислав Исмагулов (Армрестлинг)', KZ: 'Жаттықтырушы: Станислав Исмагулов (Қол күресі)', EN: 'Coach: Stanislav Ismagulov' },
    price: { RU: 'По записи', KZ: 'Жазылу бойынша', EN: 'By appointment' },
    badge: { RU: 'АРМРЕСТЛИНГ', KZ: 'АРМРЕСТЛИНГ', EN: 'ARMWRESTLING' },
    desc: {
      RU: 'Пропорциональная атлетичная форма, техника армрестлинга, сила хвата и связок',
      KZ: 'Үйлесімді дене пішіні, армрестлинг техникасы, білек пен ұстау күшін арттыру',
      EN: 'Armwrestling leverage, unbreakable grip and tendon strength, athletic form',
    },
  },
  {
    id: 'onefit',
    category: 'single',
    categoryLabel: { RU: 'Партнёрские программы', KZ: 'Серіктестік бағдарлама', EN: 'Partnership' },
    name: { RU: 'Посещение по единому абонементу 1Fit (QR)', KZ: '1Fit бірыңғай абонементімен қатысу (QR)', EN: '1Fit Network Check-In (QR Code)' },
    price: { RU: 'По подписке 1Fit', KZ: '1Fit жазылымымен', EN: 'Via 1Fit Pass' },
    badge: { RU: '1FIT', KZ: '1FIT', EN: '1FIT' },
    desc: {
      RU: 'Быстрый чек-ин через приложение 1Fit на стойке ресепшн STATUS',
      KZ: 'STATUS ресепшнінде 1Fit қосымшасы арқылы жылдам сканерлеу',
      EN: 'Instant QR reception check-in via 1Fit mobile app at STATUS front desk',
    },
  },
  {
    id: 'diagnostics',
    category: 'single',
    categoryLabel: { RU: 'Анализ и диагностика', KZ: 'Диагностика', EN: 'Diagnostics' },
    name: { RU: 'Биоимпедансный замер состава тела', KZ: 'Дене құрамын биоимпеданстық талдау', EN: 'Body Composition Scan' },
    price: { RU: '2 000 ₸ (бесплатно в абонементах)', KZ: '2 000 ₸ (абонементтерде тегін)', EN: '2 000 ₸ (free with passes)' },
    desc: {
      RU: 'Точный процент мышц, висцерального жира, воды и скорость метаболизма',
      KZ: 'Бұлшықет пен майдың нақты пайызы, су көлемі және зат алмасу жылдамдығы',
      EN: 'Objective skeletal mass, body fat percentage, and BMR metrics',
    },
  },
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  language,
  prefillChoice,
}) => {
  const dict = DICTIONARY.modal;

  const formatPrice = (p: string | { RU: string; KZ: string; EN: string }) => {
    if (!p) return '';
    return typeof p === 'string' ? p : p[language];
  };

  // Find initial service matching prefillChoice, or default to monthly unlimited
  const initialService = useMemo(() => {
    if (!prefillChoice) return ALL_SERVICES[1];

    if (typeof prefillChoice === 'string') {
      const byId = ALL_SERVICES.find((s) => s.id.toLowerCase() === prefillChoice.toLowerCase());
      if (byId) return byId;
    }

    const searchStr = typeof prefillChoice === 'string' ? prefillChoice : prefillChoice[language] || prefillChoice.RU;

    const found = ALL_SERVICES.find(
      (s) =>
        s.id.toLowerCase() === searchStr.toLowerCase() ||
        s.name.RU.toLowerCase().includes(searchStr.toLowerCase()) ||
        s.name.KZ.toLowerCase().includes(searchStr.toLowerCase()) ||
        s.name.EN.toLowerCase().includes(searchStr.toLowerCase()) ||
        searchStr.toLowerCase().includes(s.name.RU.toLowerCase()) ||
        searchStr.toLowerCase().includes(s.name.KZ.toLowerCase()) ||
        searchStr.toLowerCase().includes(s.name.EN.toLowerCase())
    );

    if (found) return found;

    const localizedName =
      typeof prefillChoice === 'string'
        ? { RU: prefillChoice, KZ: prefillChoice, EN: prefillChoice }
        : prefillChoice;

    return {
      id: 'custom',
      category: 'memberships' as const,
      categoryLabel: { RU: 'Выбранная услуга', KZ: 'Таңдалған қызмет', EN: 'Selected Service' },
      name: localizedName,
      price: { RU: 'Уточняется', KZ: 'Нақтыланады', EN: 'To be confirmed' },
      desc: { RU: 'Выбрано на сайте', KZ: 'Сайтта таңдалды', EN: 'Selected from website' },
    };
  }, [prefillChoice, language]);

  const [selectedService, setSelectedService] = useState<ServiceItem>(initialService);

  useEffect(() => {
    setSelectedService(initialService);
  }, [initialService]);
  const [activeCategory, setActiveCategory] = useState<'all' | 'memberships' | 'coaching' | 'single'>('all');
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Filtered services list based on category & search
  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const formattedPrice = formatPrice(item.price);
      const matchSearch =
        !searchQuery ||
        item.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        formattedPrice.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery, language]);

  const categoryTabs = useMemo(() => [
    { id: 'all', label: language === 'KZ' ? 'Барлық қызметтер' : language === 'EN' ? 'All Services' : 'Все услуги' },
    { id: 'memberships', label: language === 'KZ' ? 'Абонементтер' : language === 'EN' ? 'Memberships' : 'Абонементы' },
    { id: 'coaching', label: language === 'KZ' ? 'Жаттықтырушылар' : language === 'EN' ? 'Coaches' : 'Тренеры' },
    { id: 'single', label: language === 'KZ' ? 'Бір реттік & 1Fit' : language === 'EN' ? 'Drop-In & 1Fit' : 'Разовые & 1Fit' },
  ], [language]);

  // Sync selected service when modal opens with a new prefillChoice
  useEffect(() => {
    if (prefillChoice) {
      setSelectedService(initialService);
    }
  }, [prefillChoice, initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.replace(/\D/g, '').length < 11) return;

    const chosenTitle = `${selectedService.name[language]} (${formatPrice(selectedService.price)})`;
    const greeting = language === 'KZ'
      ? 'Сәлеметсіз бе, STATUS фитнес-клубы! Сайттан өтінім:'
      : language === 'EN'
      ? 'Hello, STATUS fitness club! Website request:'
      : 'Здравствуйте, фитнес-клуб STATUS! Заявка с сайта:';
    
    const clientWord = language === 'KZ' ? 'Клиент' : language === 'EN' ? 'Client' : 'Клиент';
    const nameLabel = language === 'KZ' ? 'Аты' : language === 'EN' ? 'Name' : 'Имя';
    const phoneLabel = language === 'KZ' ? 'Телефон' : language === 'EN' ? 'Phone' : 'Телефон';
    const serviceLabel = language === 'KZ' ? 'Таңдалған қызмет' : language === 'EN' ? 'Selected service' : 'Выбранная услуга';
    const notesLabel = language === 'KZ' ? 'Қосымша мәлімет' : language === 'EN' ? 'Notes' : 'Пожелания';
    const defaultComment = language === 'KZ'
      ? 'Ыңғайлы уақытқа жазылғым келеді'
      : language === 'EN'
      ? 'Looking to schedule at a convenient time'
      : 'Хочу записаться на удобное время';

    const text = `${greeting}%0A• ${nameLabel}: ${name || clientWord}%0A• ${phoneLabel}: ${phone}%0A• ${serviceLabel}: ${chosenTitle}%0A• ${notesLabel}: ${comments || defaultComment}`;

    setIsSuccess(true);
    setTimeout(() => {
      window.open(`https://wa.me/77079344533?text=${text}`, '_blank');
      setIsSuccess(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/85 backdrop-blur-md animate-modal-backdrop">
      <div className="relative w-full max-w-xl max-h-[94dvh] flex flex-col bg-[#141414] border border-[#2D2D2D] rounded-xs shadow-2xl text-white overflow-hidden animate-modal-card">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 p-2 text-gray-400 hover:text-white bg-[#1A1A1A] hover:bg-[#252525] border border-[#333] rounded-xs transition-colors cursor-pointer"
          aria-label={language === 'KZ' ? 'Терезені жабу' : language === 'EN' ? 'Close modal' : 'Закрыть окно'}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Container */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-5 sm:space-y-6">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/10 text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-xs mb-3">
              <Dumbbell className="w-3 h-3 text-white" />
              <span>
                {language === 'KZ'
                  ? 'STATUS FITNESS AKTOBE • МАРЕСЬЕВ КӨШ., 4Д'
                  : language === 'EN'
                  ? 'STATUS FITNESS AKTOBE • 4D MARESYEVA ST.'
                  : 'STATUS FITNESS AKTOBE • УЛ. МАРЕСЬЕВА, 4Д'}
              </span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-white">
              {dict.title[language]}
            </h3>
            <p className="text-xs sm:text-sm text-[#9E9E9E] mt-1.5 leading-relaxed">
              {language === 'KZ'
                ? 'Қажетті қызметті немесе абонементті таңдаңыз — әкімші дереу WhatsApp арқылы жауап береді.'
                : language === 'EN'
                ? 'Select your preferred gym service or pass — our receptionist will reply immediately on WhatsApp.'
                : 'Выберите интересующую услугу или абонемент — администратор моментально ответит в WhatsApp.'}
            </p>
          </div>

          {/* SERVICE SELECTOR SECTION */}
          <div className="bg-[#191919] border border-[#2F2F2F] rounded-xs p-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#AAA] flex items-center gap-1.5 font-bold">
                <Tag className="w-3.5 h-3.5 text-white" />
                <span>
                  {language === 'KZ'
                    ? 'ҚЫЗМЕТТІ НЕМЕСЕ ТАРИФТІ ТАҢДАҢЫЗ:'
                    : language === 'EN'
                    ? 'SELECT SERVICE OR MEMBERSHIP:'
                    : 'ВЫБЕРИТЕ УСЛУГУ ИЛИ ТАРИФ:'}
                </span>
              </label>
              <button
                type="button"
                onClick={() => setIsSelectorOpen(!isSelectorOpen)}
                className="text-xs font-semibold text-white underline underline-offset-4 hover:text-gray-300 transition-colors cursor-pointer"
              >
                {isSelectorOpen
                  ? (language === 'KZ' ? 'Тізімді жинау' : language === 'EN' ? 'Collapse list' : 'Свернуть список')
                  : (language === 'KZ' ? 'Басқа қызмет таңдау ▼' : language === 'EN' ? 'Change service ▼' : 'Выбрать другую услугу ▼')}
              </button>
            </div>

            {/* Currently Active Service Card */}
            <div
              onClick={() => setIsSelectorOpen(!isSelectorOpen)}
              className="group p-3.5 bg-[#202020] hover:bg-[#262626] border border-[#3D3D3D] hover:border-white/50 rounded-xs cursor-pointer transition-all flex items-start justify-between gap-3"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 bg-white/10 text-[#DDD] rounded-xs">
                    {selectedService.categoryLabel[language]}
                  </span>
                  {selectedService.badge && (
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 bg-white text-black rounded-xs">
                      {selectedService.badge[language]}
                    </span>
                  )}
                </div>
                <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {selectedService.name[language]}
                </div>
                <p className="text-xs text-[#888] mt-0.5 line-clamp-1">
                  {selectedService.desc[language]}
                </p>
              </div>

              <div className="text-right shrink-0">
                <div className="text-sm sm:text-base font-display font-black text-white whitespace-nowrap">
                  {formatPrice(selectedService.price)}
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-mono text-[#AAA] mt-1 group-hover:text-white">
                  <span>{language === 'KZ' ? 'Өзгерту' : language === 'EN' ? 'Change' : 'Изменить'}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isSelectorOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* EXPANDABLE SERVICES CATALOG */}
            {isSelectorOpen && (
              <div className="mt-3 pt-3 border-t border-[#333] space-y-3 animate-in fade-in duration-150">
                {/* Search & Category Filter Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {categoryTabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveCategory(tab.id as any)}
                      className={`px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                        activeCategory === tab.id
                          ? 'bg-white text-black font-bold'
                          : 'bg-[#252525] text-[#888] hover:text-white hover:bg-[#303030]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Quick Search */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    language === 'KZ'
                      ? 'Қызметті жылдам іздеу (мысалы: шексіз, 1Fit, жаттықтырушы...)'
                      : language === 'EN'
                      ? 'Quick search (e.g. unlimited, 1Fit, coach, daytime...)'
                      : 'Быстрый поиск услуги (например: безлимит, 1Fit, тренер...)'
                  }
                  className="w-full px-3 py-2 text-xs bg-[#121212] border border-[#333] focus:border-white focus:outline-none text-white placeholder-[#666] rounded-xs"
                />

                {/* Services List */}
                <div className="max-h-56 overflow-y-auto space-y-1.5 pr-1 divide-y divide-[#262626]">
                  {filteredServices.map((service) => {
                    const isSelected = selectedService.id === service.id;
                    return (
                      <div
                        key={service.id}
                        onClick={() => {
                          setSelectedService(service);
                          setIsSelectorOpen(false);
                        }}
                        className={`pt-2 pb-2 px-2.5 rounded-xs flex items-center justify-between gap-2 cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-white/10 border-l-2 border-white'
                            : 'hover:bg-[#222]'
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white tracking-tight">
                              {service.name[language]}
                            </span>
                            {service.badge && (
                              <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-[#333] text-[#EEE] rounded-xs">
                                {service.badge[language]}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-[#777] line-clamp-1 mt-0.5">
                            {service.desc[language]}
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="text-xs font-bold text-white whitespace-nowrap">
                            {formatPrice(service.price)}
                          </div>
                          {isSelected && (
                            <span className="text-[10px] font-mono text-white flex items-center gap-0.5 justify-end mt-0.5">
                              <Check className="w-3 h-3 text-white" />{' '}
                              {language === 'KZ' ? 'Таңдалды' : language === 'EN' ? 'Selected' : 'Выбрано'}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {filteredServices.length === 0 && (
                    <div className="py-4 text-center text-xs text-[#777]">
                      {language === 'KZ'
                        ? 'Сұраныс бойынша қызмет табылмады. Сүзгіні өзгертіп көріңіз.'
                        : language === 'EN'
                        ? 'No services found matching search query. Try adjusting filters.'
                        : 'Услуг по запросу не найдено. Попробуйте изменить фильтр.'}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#888] mb-1 font-bold">
                {language === 'KZ' ? 'Сіздің атыңыз: *' : language === 'EN' ? 'Your Name: *' : 'Ваше имя: *'}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={language === 'KZ' ? 'Сізді қалай атаған дұрыс' : language === 'EN' ? 'How should we address you' : 'Как к вам обращаться'}
                className="w-full px-4 py-2.5 bg-[#1C1C1C] border border-[#333] focus:border-white focus:outline-none text-sm text-white placeholder-[#666] rounded-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#888] mb-1 font-bold">
                {language === 'KZ' ? 'Телефон нөмірі (WhatsApp): *' : language === 'EN' ? 'Phone number (WhatsApp): *' : 'Номер телефона (WhatsApp): *'}
              </label>
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
                placeholder="+7 (___) ___-__-__"
                className="w-full px-4 py-2.5 bg-[#1C1C1C] border border-[#333] focus:border-white focus:outline-none text-base sm:text-sm text-white placeholder-[#666] rounded-xs transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#888] mb-1 font-bold">
                {language === 'KZ'
                  ? 'Ыңғайлы уақыт немесе сұрақ (міндетті емес):'
                  : language === 'EN'
                  ? 'Preferred time or inquiry (optional):'
                  : 'Удобное время или вопрос (необязательно):'}
              </label>
              <input
                type="text"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder={
                  language === 'KZ'
                    ? 'Мысалы: жұмыс күндері сағат 19:00-ден кейін ыңғайлы'
                    : language === 'EN'
                    ? 'E.g., prefer weekday evenings after 19:00'
                    : 'Например: удобны тренировки в будни после 19:00'
                }
                className="w-full px-4 py-2.5 bg-[#1C1C1C] border border-[#333] focus:border-white focus:outline-none text-sm text-white placeholder-[#666] rounded-xs"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSuccess}
                className="btn-elevate w-full px-6 py-4 bg-white hover:bg-neutral-200 text-black rounded-xs shadow-xl cursor-pointer disabled:opacity-50 transition-all flex flex-col items-center justify-center text-center"
              >
                {isSuccess ? (
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-black shrink-0" />
                    <span className="font-display text-xs font-black tracking-widest uppercase">
                      {language === 'KZ'
                        ? 'ӨТІНІММЕН WHATSAPP АШЫЛУДА...'
                        : language === 'EN'
                        ? 'OPENING WHATSAPP WITH REQUEST...'
                        : 'ОТКРЫВАЕМ WHATSAPP С ЗАЯВКОЙ...'}
                    </span>
                  </div>
                ) : (
                  <div className="w-full flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center gap-2.5">
                      <MessageSquare className="w-4 h-4 text-black shrink-0" />
                      <span className="font-display text-xs font-black tracking-widest uppercase">
                        {language === 'KZ'
                          ? 'ӨТІНІМДІ WHATSAPP АРҚЫЛЫ ЖІБЕРУ'
                          : language === 'EN'
                          ? 'SEND REQUEST VIA WHATSAPP'
                          : 'ОТПРАВИТЬ ЗАЯВКУ В WHATSAPP'}
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-neutral-700 font-bold mt-1 px-2 truncate max-w-full">
                      {selectedService.name[language]} • {formatPrice(selectedService.price)}
                    </div>
                  </div>
                )}
              </button>
            </div>

            <div className="text-center">
              <p className="text-[10px] text-[#777] font-mono">
                {language === 'KZ'
                  ? '* Чат тікелей STATUS Aktobe ресми әкімшісімен ашылады: +7 (707) 934-45-33'
                  : language === 'EN'
                  ? '* Chat opens directly with official STATUS Aktobe reception: +7 (707) 934-45-33'
                  : '* Чат открывается напрямую с официальным администратором STATUS Aktobe: +7 (707) 934-45-33'}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


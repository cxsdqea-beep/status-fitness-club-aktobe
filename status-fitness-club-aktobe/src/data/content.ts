import { Trainer, ZoneItem, PricingPlan, InstagramPost, Language } from '../types';

export const DICTIONARY = {
  nav: {
    home: { RU: 'Главная', KZ: 'Басты бет', EN: 'Home' },
    about: { RU: 'О клубе', KZ: 'Клуб туралы', EN: 'About' },
    zones: { RU: 'Зоны зала', KZ: 'Аймақтар', EN: 'Gym Zones' },
    trainers: { RU: 'Тренеры', KZ: 'Тренерлер', EN: 'Trainers' },
    pricing: { RU: 'Абонементы', KZ: 'Абонементтер', EN: 'Memberships' },
    community: { RU: 'Instagram', KZ: 'Instagram', EN: 'Instagram' },
    contacts: { RU: 'Контакты', KZ: 'Байланыс', EN: 'Contacts' },
    bookBtn: { RU: 'КУПИТЬ АБОНЕМЕНТ', KZ: 'АБОНЕМЕНТ АЛУ', EN: 'GET MEMBERSHIP' },
    quickBook: { RU: 'Записаться', KZ: 'Жазылу', EN: 'Book Session' },
  },
  hero: {
    locationBadge: {
      RU: 'АКТОБЕ • РАЙОН АСТАНА • УЛ. МАРЕСЬЕВА, 4Д',
      KZ: 'АҚТӨБЕ • АСТАНА АУДАНЫ • МАРЕСЬЕВ КӨШЕСІ, 4Д',
      EN: 'AKTOBE • ASTANA DISTRICT • 4D MARESEV STR.',
    },
    title: {
      RU: 'Тренажёрный зал и спортивный клуб STATUS',
      KZ: 'STATUS тренажер залы және спорт клубы',
      EN: 'STATUS Gym & Athletic Club',
    },
    subtitle: {
      RU: 'Современное профессиональное оборудование, зоны силового и кардио-тренинга, персональный тренинг и комфортная атмосфера в центре Актобе.',
      KZ: 'Заманауи кәсіби жабдықтар, күш және кардио-жаттығу аймақтары, жеке жаттығулар және Ақтөбе орталығындағы жайлы атмосфера.',
      EN: 'Modern professional equipment, power and cardio training zones, elite personal coaching, and a focused athletic atmosphere in the heart of Aktobe.',
    },
    ctaBook: {
      RU: 'ЗАПИСАТЬСЯ НА ТРЕНИРОВКУ',
      KZ: 'ЖАТТЫҒУҒА ЖАЗЫЛУ',
      EN: 'BOOK A WORKOUT',
    },
    ctaPrice: {
      RU: 'УЗНАТЬ ЦЕНЫ',
      KZ: 'БАҒАЛАРДЫ БІЛУ',
      EN: 'VIEW PRICING',
    },
    partner1Fit: {
      RU: 'ОФИЦИАЛЬНЫЙ ПАРТНЁР СЕТИ 1FIT',
      KZ: '1FIT ЖЕЛІСІНІҢ РЕСМИ СЕРІКТЕСІ',
      EN: 'OFFICIAL 1FIT NETWORK PARTNER',
    },
    stats: {
      floors: { RU: '2 уровня', KZ: '2 деңгей', EN: '2 Levels' },
      floorsDesc: { RU: 'Кардио + силовая зона', KZ: 'Кардио + күштік аймақ', EN: 'Cardio + Power decks' },
      area: { RU: '1 000+ м²', KZ: '1 000+ м²', EN: '1,000+ m²' },
      areaDesc: { RU: 'Пространство силы', KZ: 'Жаттығу кеңістігі', EN: 'Functional gym space' },
      equipment: { RU: '60+ тренажёров', KZ: '60+ тренажер', EN: '60+ Machines' },
      equipmentDesc: { RU: 'Биомеханика премиум-класса', KZ: 'Премиум деңгейлі құралдар', EN: 'Biomechanics tech' },
      hours: { RU: '07:00 – 23:00', KZ: '07:00 – 23:00', EN: '07:00 – 23:00' },
      hoursDesc: { RU: 'Тренируйтесь в удобное время', KZ: 'Ыңғайлы жұмыс кестесі', EN: 'Open 7 days a week' },
    },
  },
  about: {
    sectionTag: { RU: 'О КЛУБЕ STATUS', KZ: 'STATUS КЛУБЫ ТУРАЛЫ', EN: 'ABOUT STATUS CLUB' },
    heading: {
      RU: 'ПРОСТРАНСТВО СИЛЫ, ДИСЦИПЛИНЫ И ТВОИХ РЕЗУЛЬТАТОВ',
      KZ: 'КҮШ, ТӘРТІП ЖӘНЕ СІЗДІҢ НӘТИЖЕЛЕРІҢІЗ МЕКЕНІ',
      EN: 'A SANCTUARY OF STRENGTH, FOCUS, AND MEASURABLE RESULTS',
    },
    intro: {
      RU: 'Клуб STATUS — это двухуровневый спортивный комплекс в центре Актобе, созданный для тех, кто ценит качество оборудования, безупречный порядок и профессиональный подход к тренировкам.',
      KZ: 'STATUS клубы — жабдықтардың жоғары сапасын, мінсіз тәртіпті және кәсіби жаттығуларды бағалайтындар үшін Ақтөбе орталығында жасалған екі деңгейлі спорт кешені.',
      EN: 'STATUS is a multi-level athletic gym situated in the central hub of Aktobe, engineered for those who demand professional biomechanics, pristine hygiene, and real athletic progress.',
    },
    features: [
      {
        title: {
          RU: 'Двухуровневое зонирование',
          KZ: 'Екі деңгейлі аймақтандыру',
          EN: 'Two-Level Smart Architecture',
        },
        description: {
          RU: 'Верхний уровень отведён под панорамную кардио-зону. Нижний уровень — силовые тренажёры, тяжелые свободные веса и зона кросс-тренинга.',
          KZ: 'Жоғарғы деңгей кардио аймағына арналған. Төменгі деңгей — күштік тренажерлер, еркін салмақтар және кросс-тренинг аймағы.',
          EN: 'The upper deck is dedicated to cardio and endurance, while the lower ground floor hosts heavy free weights, power racks, and strength machines.',
        },
      },
      {
        title: {
          RU: 'Вентиляция и микроклимат',
          KZ: 'Желдету және микроклимат',
          EN: 'High-Flow Industrial Climate',
        },
        description: {
          RU: 'Мощная приточно-вытяжная вентиляция и промышленное кондиционирование обеспечивают постоянный приток свежего кислорода даже в часы пик.',
          KZ: 'Қуатты сору-айдау желдету жүйесі және өндірістік салқындатқыш жүйесі қарбалас сәттерде де таза оттегінің тұрақты берілуін қамтамасыз етеді.',
          EN: 'Dedicated high-capacity intake ventilation and active cooling maintain clean oxygen flow even during peak training hours.',
        },
      },
      {
        title: {
          RU: 'Премиум раздевалки и сервис',
          KZ: 'Ыңғайлы киім ауыстыру бөлмелері',
          EN: 'Pristine Locker Rooms & Showers',
        },
        description: {
          RU: 'Просторные персональные шкафчики, горячие душевые, мощные фены, питьевые кулеры и идеальная чистота в течение всего дня.',
          KZ: 'Кең жеке шкафтар, ыстық душ кабиналары, фендер, салқындатылған су және күні бойғы мінсіз тазалық.',
          EN: 'Full-size secure lockers, rain showers, blow-dryers, filtered water points, and rigorous all-day sanitation standards.',
        },
      },
      {
        title: {
          RU: 'Фитнес-бар и спортпит',
          KZ: 'Фитнес-бар және спорттық тамақтану',
          EN: 'Fitness Cafe & Protein Bar',
        },
        description: {
          RU: 'Свежие протеиновые коктейли, предтренировочные комплексы, BCAA, изотоники, качественный кофе и полезные фитнес-перекусы.',
          KZ: 'Жаңа дайындалған протеин коктейльдері, BCAA, изотониктер, сапалы кофе және пайдалы фитнес батончиктер.',
          EN: 'Fresh whey shakes, amino electrolytes, clean pre-workouts, speciality espresso, and nutrient-dense recovery snacks.',
        },
      },
    ],
    locationTag: { RU: 'ЛОКАЦИЯ В АКТЮБИНСКЕ', KZ: 'АҚТӨБЕДЕГІ ОРНАЛАСУЫ', EN: 'LOCATION IN AKTOBE' },
    locationAddress: {
      RU: 'г. Актобе, район Астана, ул. Маресьева, 4Д (1 этаж)',
      KZ: 'Ақтөбе қ., Астана ауданы, Маресьев көшесі, 4Д (1-қабат)',
      EN: 'Aktobe, Astana district, 4D Maresev St. (1st floor)',
    },
    locationDesc: {
      RU: 'Удобный подъезд с основных магистралей, отдельный вход и просторная парковка',
      KZ: 'Негізгі көлік жолдарынан ыңғайлы кіру, бөлек есік және кең автотұрақ',
      EN: 'Direct arterial access, private entrance, and spacious parking lot',
    },
    gisRouteBtn: { RU: '2GIS МАРШРУТ', KZ: '2GIS БАҒЫТЫ', EN: '2GIS ROUTE' },
    visitBtn: { RU: 'ПРИЙТИ В ГОСТИ', KZ: 'КЛУБҚА КЕЛУ', EN: 'VISIT CLUB' },
    structureTag: { RU: 'ДВУХУРОВНЕВАЯ СТРУКТУРА', KZ: 'ЕКІ ДЕҢГЕЙЛІ ҚҰРЫЛЫМ', EN: 'TWO-TIER ARCHITECTURE' },
    structureTitle: {
      RU: 'Грамотное разделение потоков и тишина в силовом секторе',
      KZ: 'Атлеттер ағынын сауатты бөлу және күштік аймақтағы тәртіп',
      EN: 'Logical floor layout and dedicated high-intensity strength zones',
    },
    structureDesc: {
      RU: 'Благодаря физическому разделению кардио-зоны на верхнем ярусе и зоны тяжелого железа на нижнем этаже, спортсмены не мешают друг другу. Вы тренируетесь в просторном зале без очередей к снарядам.',
      KZ: 'Жоғарғы деңгейдегі кардио және төменгі қабаттағы күштік аймақтың бөлінуі арқасында атлеттер бір-біріне кедергі жасамайды. Кең залда кезек күтпей жаттығасыз.',
      EN: 'With clear spatial separation between the upper cardio deck and the ground powerlifting floor, you experience seamless training without machine bottlenecks.',
    },
    bullets: {
      RU: [
        'Никаких очередей к жимовым скамьям и рамам в часы пик',
        'Система фильтрации воздуха с 4-кратным обменом в час',
        'Шкафчики с надежными замками и просторные душевые кабины',
        'Спортивный бар с протеином, аминокислотами и кофе',
      ],
      KZ: [
        'Қарбалас уақытта да тренажерлерге кезек болмайды',
        'Сағатына 4 рет ауа алмастыратын сүзгілеу жүйесі',
        'Сенімді құлпы бар жеке шкафтар және кең душ бөлмелері',
        'Протеин, аминқышқылдары мен кофесі бар спорттық бар',
      ],
      EN: [
        'No equipment bottlenecks even during evening peak hours',
        'Continuous industrial air exchange (4 full cycles per hour)',
        'Private key-lock lockers and spacious shower cubicles',
        'Protein shake bar, electrolytes, and premium espresso',
      ],
    },
    twoLevelsTag: { RU: 'ВЕРХНИЙ И НИЖНИЙ ЭТАЖИ', KZ: 'ЖОҒАРҒЫ ЖӘНЕ ТӨМЕНГІ ҚАБАТТАР', EN: 'UPPER & LOWER TIERS' },
    twoLevelsPill: { RU: '2 УРОВНЯ', KZ: '2 ДЕҢГЕЙ', EN: '2 LEVELS' },
  },
  zones: {
    sectionTag: { RU: 'УСЛУГИ И ЗОНЫ', KZ: 'ҚЫЗМЕТТЕР МЕН АЙМАҚТАР', EN: 'SERVICES & ZONES' },
    heading: {
      RU: 'ПРОФЕССИОНАЛЬНОЕ ОСНАЩЕНИЕ ДЛЯ ЛЮБЫХ ЦЕЛЕЙ',
      KZ: 'КЕЗ КЕЛГЕН МАҚСАТҚА АРНАЛҒАН КӘСІБИ ЖАБДЫҚТАУ',
      EN: 'PRECISION ATHLETIC ZONES FOR EVERY TRAINING DISCIPLINE',
    },
    specsTag: { RU: 'ХАРАКТЕРИСТИКИ И ОБОРУДОВАНИЕ', KZ: 'СИПАТТАМАСЫ ЖӘНЕ ЖАБДЫҚТАР', EN: 'SPECIFICATIONS & GEAR' },
    accessNote: {
      RU: 'Доступно по всем видам клубных абонементов и 1Fit',
      KZ: 'Барлық клубтық абонементтер және 1Fit бойынша қолжетімді',
      EN: 'Included with all club memberships and 1Fit',
    },
    bookZone: { RU: 'ЗАПИСАТЬСЯ В ЗОНУ', KZ: 'АЙМАҚҚА ЖАЗЫЛУ', EN: 'BOOK THIS ZONE' },
  },
  trainers: {
    sectionTag: { RU: 'ТРЕНЕРСКИЙ СОСТАВ', KZ: 'ЖАТТЫҚТЫРУШЫЛАР ҚҰРАМЫ', EN: 'TRAINING STAFF' },
    heading: {
      RU: 'КОМАНДА СЕРТИФИЦИРОВАННЫХ НАСТАВНИКОВ',
      KZ: 'СЕРТИФИКАТТАЛҒАН ЖАТТЫҚТЫРУШЫЛАР КОМАНДАСЫ',
      EN: 'CERTIFIED COACHES COMMITTED TO YOUR PROGRESS',
    },
    subtitle: {
      RU: 'Каждый тренер STATUS имеет высшее физкультурное или профильное образование, спортивные разряды и опыт работы от 4 лет.',
      KZ: 'STATUS-тың әр жаттықтырушысының дене шынықтыру білімі, спорттық дәрежелері және 4 жылдан кем емес тәжірибесі бар.',
      EN: 'Every coach at STATUS holds recognized athletic certifications, competitive sports distinctions, and a minimum of 4 years coaching experience.',
    },
    bookCoach: { RU: 'Записаться к тренеру', KZ: 'Жаттықтырушыға жазылу', EN: 'Book with this coach' },
    achievementsTag: { RU: 'ДОСТИЖЕНИЯ:', KZ: 'ЖЕТІСТІКТЕРІ:', EN: 'ACHIEVEMENTS:' },
    specializationTag: { RU: 'СПЕЦИАЛИЗАЦИЯ:', KZ: 'МАМАНДАНУЫ:', EN: 'SPECIALIZATION:' },
    helpTitle: {
      RU: 'Не знаете, какого тренера выбрать под вашу задачу?',
      KZ: 'Мақсатыңызға сәйкес қай бапкерді таңдауды білмейсіз бе?',
      EN: 'Not sure which coach fits your exact goals?',
    },
    helpSubtitle: {
      RU: 'Администратор подберёт подходящего наставника после вводной консультации',
      KZ: 'Әкімші алғашқы кеңес беруден кейін лайықты жаттықтырушыны таңдап береді',
      EN: 'Our front desk will match you with the right coach after a brief consultation',
    },
    helpBtn: {
      RU: 'ПОДОБРАТЬ НАСТАВНИКА',
      KZ: 'БАПКЕРДІ ТАҢДАУ',
      EN: 'MATCH A COACH',
    },
  },
  pricing: {
    sectionTag: { RU: 'ТАРИФЫ И АБОНЕМЕНТЫ', KZ: 'ТАРИФТЕР МЕН АБОНЕМЕНТТЕР', EN: 'PLANS & MEMBERSHIPS' },
    heading: {
      RU: 'ПРОЗРАЧНЫЕ ЦЕНЫ БЕЗ СКРЫТЫХ ПЛАТЕЖЕЙ',
      KZ: 'ЖАСЫРЫН ТӨЛЕМСІЗ АШЫҚ БАҒАЛАР',
      EN: 'TRANSPARENT MEMBERSHIPS WITHOUT HIDDEN FEES',
    },
    subtitle: {
      RU: 'Выберите удобный формат посещений — от разового входа до годового безлимитного членства с бонусами.',
      KZ: 'Өзіңізге ыңғайлы форматты таңдаңыз — бір реттік кіруден бастап жылдық шексіз абонементке дейін.',
      EN: 'Choose your optimal training plan — from single drop-ins to all-access annual passes.',
    },
    choosePlanBtn: { RU: 'ВЫБРАТЬ ТАРИФ', KZ: 'ТАРИФТІ ТАҢДАУ', EN: 'CHOOSE PLAN' },
    popularBadge: { RU: 'ХИТ ВЫБОРА', KZ: 'ТАҢДАУ ХИТІ', EN: 'MOST POPULAR' },
    officialTag: { RU: 'ОФИЦИАЛЬНЫЙ ПРАЙС-ЛИСТ КЛУБА', KZ: 'КЛУБТЫҢ РЕСМИ ПРАЙС-ПАРАҒЫ', EN: 'OFFICIAL CLUB RATES' },
    officialTitle: { RU: 'Все действующие тарифы STATUS', KZ: 'STATUS-тың барлық қолданыстағы тарифтері', EN: 'All active STATUS memberships' },
    orderThisPlan: { RU: 'Оформить этот тариф', KZ: 'Осы тарифті рәсімдеу', EN: 'Select this plan' },
    oneFitTitle: {
      RU: 'ВЫ ПОЛЬЗОВАТЕЛЬ 1FIT?',
      KZ: '1FIT ПАЙДАЛАНУШЫСЫСЫЗ БА?',
      EN: 'ARE YOU A 1FIT USER?',
    },
    oneFitBadge: { RU: 'ЕДИНЫЙ АБОНЕМЕНТ 1FIT', KZ: '1FIT БІРЫҢҒАЙ АБОНЕМЕНТІ', EN: '1FIT MULTI-GYM PASS' },
    oneFitDesc: {
      RU: 'Клуб STATUS является официальным партнёром единого абонемента 1Fit в Актобе. Сканируйте QR-код на нашей стойке регистрации и тренируйтесь без доплат!',
      KZ: 'STATUS клубы Ақтөбедегі бірыңғай 1Fit абонементінің ресми серіктесі. Ресепшндегі QR-кодты сканерлеңіз де, қосымша төлемсіз жаттығыңыз!',
      EN: 'STATUS is an active certified partner of the 1Fit multi-club membership in Aktobe. Simply scan our reception QR code to check in seamlessly.',
    },
    oneFitBenefit1: { RU: 'Бесплатный вход по QR', KZ: 'QR арқылы тегін кіру', EN: 'Free entry via QR' },
    oneFitBenefit2: { RU: '2 этажа и все тренажеры', KZ: '2 қабат және барлық құралдар', EN: '2 floors and all machines' },
    oneFitBenefit3: { RU: 'Шкафчики и душевые', KZ: 'Шкафтар және душ бөлмесі', EN: 'Full locker and shower access' },
    receptionTag: { RU: 'РЕГИСТРАЦИЯ В ЗАЛЕ', KZ: 'ЗАЛДА ТІРКЕЛУ', EN: 'RECEPTION CHECK-IN' },
    oneFitAction: {
      RU: 'Узнать подробнее об 1Fit',
      KZ: '1Fit туралы толығырақ білу',
      EN: 'Learn about 1Fit check-in',
    },
  },
  instagram: {
    sectionTag: { RU: 'СООБЩЕСТВО КЛУБА', KZ: 'КЛУБ ҚОҒАМДАСТЫҒЫ', EN: 'CLUB COMMUNITY' },
    heading: {
      RU: 'ЖИЗНЬ КЛУБА В INSTAGRAM @STATUS__AKTOBE',
      KZ: 'INSTAGRAM-ДАҒЫ КЛУБ ӨМІРІ @STATUS__AKTOBE',
      EN: 'REAL-TIME CLUB PULSE ON INSTAGRAM',
    },
    subtitle: {
      RU: 'Смотрите актуальные тренировки, видео с разбором техники, мотивацию атлетов и внутреннюю жизнь нашего зала.',
      KZ: 'Жаттығулар видеосын, дұрыс орындау техникасын, атлеттердің нәтижелерін біздің парақшамыздан көріңіз.',
      EN: 'Watch workout clips, biomechanics breakdowns, athlete transformations, and daily updates on our official channel.',
    },
    followBtn: {
      RU: 'ПОДПИСАТЬСЯ В INSTAGRAM @status__aktobe',
      KZ: 'INSTAGRAM-ҒА ЖАЗЫЛУ @status__aktobe',
      EN: 'FOLLOW ON INSTAGRAM @status__aktobe',
    },
    followAction: {
      RU: 'ПОДПИСАТЬСЯ В INSTAGRAM',
      KZ: 'INSTAGRAM-ҒА ЖАЗЫЛУ',
      EN: 'FOLLOW ON INSTAGRAM',
    },
    instagramHandle: '@status__aktobe',
    storiesNotice: {
      RU: 'Отмечайте нас @status__aktobe в своих сторис с тренировок!',
      KZ: 'Жаттығу стористерінде бізді белгілеңіз: @status__aktobe!',
      EN: 'Tag us @status__aktobe in your workout stories!',
    },
    viewAllPosts: {
      RU: 'СМОТРЕТЬ ВСЕ ПУБЛИКАЦИИ →',
      KZ: 'БАРЛЫҚ ЖАЗБАЛАРДЫ КӨРУ →',
      EN: 'VIEW ALL POSTS →',
    },
  },
  contacts: {
    sectionTag: { RU: 'КОНТАКТЫ И ЛОКАЦИЯ', KZ: 'БАЙЛАНЫС ЖӘНЕ МЕКЕНЖАЙ', EN: 'LOCATION & CONTACTS' },
    heading: {
      RU: 'ЖДЁМ ВАС НА ТРЕНИРОВКУ В ЦЕНТРЕ АКТОБЕ',
      KZ: 'АҚТӨБЕ ОРТАЛЫҒЫНДА ЖАТТЫҒУҒА КҮТЕМІЗ',
      EN: 'VISIT US IN THE HEART OF AKTOBE',
    },
    addressLabel: { RU: 'Адрес зала:', KZ: 'Зал мекенжайы:', EN: 'Club Address:' },
    addressValue: {
      RU: 'Казахстан, г. Актобе, район Астана, ул. Маресьева, 4Д (1 этаж)',
      KZ: 'Қазақстан, Ақтөбе қ., Астана ауданы, Маресьев көшесі, 4Д (1-қабат)',
      EN: 'Kazakhstan, Aktobe city, Astana district, 4D Maresev St. (1st floor)',
    },
    phoneLabel: { RU: 'Телефоны для связи:', KZ: 'Байланыс телефондары:', EN: 'Direct Phones:' },
    hoursLabel: { RU: 'Режим работы:', KZ: 'Жұмыс кестесі:', EN: 'Working Hours:' },
    hoursWeekdays: {
      RU: 'Понедельник – Суббота: 07:00 – 23:00',
      KZ: 'Дүйсенбі – Сенбі: 07:00 – 23:00',
      EN: 'Monday – Saturday: 07:00 – 23:00',
    },
    hoursSunday: {
      RU: 'Воскресенье: 09:00 – 22:00',
      KZ: 'Жексенбі: 09:00 – 22:00',
      EN: 'Sunday: 09:00 – 22:00',
    },
    nonStop: {
      RU: 'Работаем без перерывов и праздничных пауз',
      KZ: 'Үзіліссіз және демалыссыз жұмыс істейміз',
      EN: 'Open daily without breaks or holiday closures',
    },
    twoGisBtn: { RU: 'Открыть маршрут в 2GIS', KZ: '2GIS арқылы бағыт ашу', EN: 'Open in 2GIS Map' },
    gisNav: { RU: '2GIS НАВИГАЦИЯ →', KZ: '2GIS БАҒЫТТАУ →', EN: '2GIS NAVIGATION →' },
    yandexBtn: { RU: 'Яндекс Карты', KZ: 'Яндекс Карта', EN: 'Yandex Maps' },
    formTitle: {
      RU: 'Задать вопрос или записаться',
      KZ: 'Сұрақ қою немесе жазылу',
      EN: 'Ask a question or book',
    },
    formDesc: {
      RU: 'Оставьте номер — администратор клуба перезвонит или напишет в WhatsApp в течение 10 минут.',
      KZ: 'Нөміріңізді қалдырыңыз — клуб әкімшісі 10 минут ішінде WhatsApp-қа хабарласады.',
      EN: 'Leave your phone number — our club reception will reach out via WhatsApp within 10 minutes.',
    },
    namePlaceholder: { RU: 'Ваше имя', KZ: 'Аты-жөніңіз', EN: 'Your Name' },
    phonePlaceholder: { RU: '+7 (___) ___-__-__', KZ: '+7 (___) ___-__-__', EN: '+7 (___) ___-__-__' },
    goalPlaceholder: {
      RU: 'Цель тренировок (похудение, сила, 1Fit, персональный тренер...)',
      KZ: 'Жаттығу мақсаты (арықтау, күш, 1Fit, жеке жаттықтырушы...)',
      EN: 'Training goal (fat loss, power, 1Fit, personal coach...)',
    },
    submitBtn: { RU: 'ОТПРАВИТЬ ЗАЯВКУ В WHATSAPP', KZ: 'WHATSAPP АРҚЫЛЫ ЖІБЕРУ', EN: 'SEND VIA WHATSAPP' },
    successMsg: {
      RU: 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.',
      KZ: 'Өтініш жіберілді! Жақын арада сізбен байланысамыз.',
      EN: 'Request sent! We will connect with you shortly.',
    },
  },
  modal: {
    title: { RU: 'Запись в клуб STATUS', KZ: 'STATUS клубына жазылу', EN: 'Book a Visit at STATUS' },
    subtitle: {
      RU: 'Заполните короткую форму — администратор ответит на все вопросы и зафиксирует бронь.',
      KZ: 'Қысқаша форманы толтырыңыз — әкімші барлық сұраққа жауап беріп, брондауды растайды.',
      EN: 'Fill out this brief form — our front desk will confirm your spot and answer any questions.',
    },
    selectOption: { RU: 'Что вас интересует?', KZ: 'Сізді не қызықтырады?', EN: 'What interests you?' },
    options: {
      trial: { RU: 'Пробная тренировка', KZ: 'Сынамалық жаттығу', EN: 'Trial Workout' },
      monthly: { RU: 'Месячный абонемент', KZ: 'Айлық абонемент', EN: 'Monthly Membership' },
      annual: { RU: 'Годовой абонемент', KZ: 'Жылдық абонемент', EN: 'Annual Membership' },
      coach: { RU: 'Персональный тренер', KZ: 'Жеке жаттықтырушы', EN: 'Personal Coach' },
      onefit: { RU: 'Посещение по 1Fit', KZ: '1Fit арқылы қатысу', EN: '1Fit Pass Access' },
    },
    confirmBtn: { RU: 'ПОДТВЕРДИТЬ И ОТКРЫТЬ WHATSAPP', KZ: 'РАСТАУ ЖӘНЕ WHATSAPP-ТЫ АШУ', EN: 'CONFIRM & OPEN WHATSAPP' },
    cancelBtn: { RU: 'Закрыть', KZ: 'Жабу', EN: 'Close' },
  },
  footer: {
    copy: {
      RU: '© 2026 STATUS Fitness Club Aktobe. Все права защищены.',
      KZ: '© 2026 STATUS Fitness Club Aktobe. Барлық құқықтар қорғалған.',
      EN: '© 2026 STATUS Fitness Club Aktobe. All rights reserved.',
    },
    privacy: {
      RU: 'Политика конфиденциальности',
      KZ: 'Құпиялылық саясаты',
      EN: 'Privacy Policy',
    },
    terms: {
      RU: 'Правила посещения зала',
      KZ: 'Залға келу ережелері',
      EN: 'Gym Code of Conduct',
    },
    rulesAndPolicy: {
      RU: 'Правила клуба и правовая информация',
      KZ: 'Клуб ережелері мен құпиялылық саясаты',
      EN: 'Club Rules & Privacy Policy',
    },
  },
};

export interface ClubLegalSection {
  id: string;
  badge: { RU: string; KZ: string; EN: string };
  title: { RU: string; KZ: string; EN: string };
  iconName: 'dumbbell' | 'building' | 'shield' | 'clock' | 'file-text' | 'map-pin';
  items: {
    RU: { label: string; text: string }[];
    KZ: { label: string; text: string }[];
    EN: { label: string; text: string }[];
  };
}

export const CLUB_RULES_LEGAL_DATA: {
  modalTitle: { RU: string; KZ: string; EN: string };
  modalSubtitle: { RU: string; KZ: string; EN: string };
  addressBadge: { RU: string; KZ: string; EN: string };
  sections: ClubLegalSection[];
} = {
  modalTitle: {
    RU: 'ПРАВИЛА И ПРАВОВАЯ ИНФОРМАЦИЯ STATUS FITNESS CLUB',
    KZ: 'STATUS FITNESS CLUB ЕРЕЖЕЛЕРІ МЕН ҚҰҚЫҚТЫҚ АҚПАРАТЫ',
    EN: 'STATUS FITNESS CLUB RULES & LEGAL INFORMATION',
  },
  modalSubtitle: {
    RU: 'Официальный регламент посещения, техника безопасности, сервис и защита персональных данных спортивного клуба STATUS в г. Актобе (ул. Маресьева, 4Д).',
    KZ: 'Ақтөбе қ., Маресьев көш., 4Д мекенжайындағы STATUS спорт клубына келудің ресми тәртібі, қауіпсіздік техникасы, қызметтер және деректерді қорғау.',
    EN: 'Official gym admission rules, athletic safety, amenities, and personal data policy of STATUS Fitness Club in Aktobe (4D Maresyeva St.).',
  },
  addressBadge: {
    RU: 'Актобе, ул. Маресьева, 4Д (1 этаж) • Пн-Сб 07:00–23:00, Вс 09:00–22:00',
    KZ: 'Ақтөбе, Маресьев көш., 4Д (1-қабат) • Дс-Сб 07:00–23:00, Жс 09:00–22:00',
    EN: 'Aktobe, 4D Maresyeva St. (1st floor) • Mon-Sat 07:00–23:00, Sun 09:00–22:00',
  },
  sections: [
    {
      id: 'gym-rules',
      badge: { RU: 'РЕГЛАМЕНТ ЗАЛА', KZ: 'ЗАЛ РЕГЛАМЕНТІ', EN: 'GYM PROTOCOL' },
      title: { RU: 'Правила посещения и культура зала', KZ: 'Залға келу ережелері мен мәдениеті', EN: 'Gym Etiquette & Code of Conduct' },
      iconName: 'dumbbell',
      items: {
        RU: [
          {
            label: 'Сменная спортивная обувь и экипировка',
            text: 'Вход в тренировочные зоны разрешается исключительно в чистой сменной спортивной обуви (кроссовки) и опрятной спортивной одежде. Запрещено тренироваться в уличной обуви, сланцах, носках или с оголенным торсом.',
          },
          {
            label: 'Порядок и разгрузка снарядов',
            text: 'После завершения упражнения атлет обязан разобрать штангу, вернуть диски на посадочные стойки, а гантели — на исходное место в гантельном ряду (до 50 кг) в порядке возрастания весов. Бросать инвентарь на пол вне помоста категорически запрещено.',
          },
          {
            label: 'Гигиена и полотенца',
            text: 'Рекомендуется стелить личное тренировочное полотенце на поверхности тренажеров и скамей во время выполнения упражнений для соблюдения гигиены и комфорта всех атлетов.',
          },
          {
            label: 'Взаимоуважение между подходами',
            text: 'Во время отдыха между рабочими подходами не занимайте тренажер сидя на нём с телефоном при наличии очереди. Уступайте снаряд другим посетителям для совместной поочередной работы.',
          },
          {
            label: 'Регистрация и вход в клуб',
            text: 'Доступ в клуб осуществляется при предъявлении клубного абонемента либо через сканирование QR-кода единого абонемента 1Fit на стойке рецепции перед началом занятий.',
          },
        ],
        KZ: [
          {
            label: 'Ауыстырылатын спорттық аяқ киім мен киім',
            text: 'Жаттығу аймақтарына тек ауыстырылатын таза спорттық аяқ киіммен (кроссовки) және спорттық киіммен кіруге рұқсат етіледі. Көше аяқ киімімен, сүйретпемен немесе жалаңаш денемен жаттығуға қатаң тыйым салынады.',
          },
          {
            label: 'Тәртіп және жабдықтарды орнына қою',
            text: 'Жаттығу аяқталған соң зілтемірді босатып, тастарды тіректерге, ал гантельдерді өз орнына (50 кг дейінгі қатар) қою міндетті. Құралдарды арнайы помосттан тыс жерге тастауға тыйым салынады.',
          },
          {
            label: 'Гигиена және сүлгі пайдалану',
            text: 'Жаттығу кезінде орындықтар мен тренажерлердің бетіне жеке сүлгі төсеу ұсынылады.',
          },
          {
            label: 'Өзара құрмет',
            text: 'Тәсілдер арасындағы демалыс кезінде тренажерде телефон қарап отырмай, кезекте тұрған өзге атлеттерге кезекпен жаттығуға мүмкіндік беріңіз.',
          },
          {
            label: 'Тіркелу және кіру тәртібі',
            text: 'Клубқа кіру клубтық абонемент немесе рецепциядағы 1Fit бірыңғай абонементінің QR-кодын сканерлеу арқылы жүзеге асырылады.',
          },
        ],
        EN: [
          {
            label: 'Athletic Footwear & Attire',
            text: 'Entry into workout zones requires clean, indoor athletic shoes (sneakers) and appropriate fitness apparel. Training in street shoes, slippers, bare socks, or without a shirt is strictly prohibited.',
          },
          {
            label: 'Re-racking Plates & Dumbbells',
            text: 'Always unload barbells after use and re-rack all weight plates and dumbbells (up to 50kg) to their designated holders in ascending order. Dropping weights outside designated lifting platforms is forbidden.',
          },
          {
            label: 'Hygiene & Towel Usage',
            text: 'Please place a personal towel over benches and upholstery during sets to maintain high hygiene standards for fellow lifters.',
          },
          {
            label: 'Sharing Equipment During Sets',
            text: 'Allow other gym members to work in between your rest intervals rather than occupying equipment during phone breaks.',
          },
          {
            label: 'Reception Check-in',
            text: 'Present your physical/digital membership card or scan the official 1Fit mobile QR code at the front desk upon each arrival.',
          },
        ],
      },
    },
    {
      id: 'amenities',
      badge: { RU: 'УДОБСТВА И СЕРВИС', KZ: 'ҚОЛАЙЛЫҚТАР МЕН СЕРВИС', EN: 'AMENITIES & COMFORT' },
      title: { RU: 'Инфраструктура клуба на Маресьева, 4Д', KZ: 'Маресьев 4Д мекенжайындағы клуб инфрақұрылымы', EN: 'Club Infrastructure at 4D Maresyeva' },
      iconName: 'building',
      items: {
        RU: [
          {
            label: 'Двухуровневое пространство',
            text: '1-й этаж — силовой зал со свободными весами, силовыми рамами, гантельным рядом до 50 кг и блочными тренажерами. 2-й этаж — специализированная кардио-зона с беговыми дорожками, эллипсоидами и сайклами.',
          },
          {
            label: 'Раздевалки и персональные шкафчики',
            text: 'Раздевалки оборудованы персональными шкафчиками с индивидуальными ключами. Ключ выдается на рецепции при регистрации. Ценные вещи и крупные суммы денег рекомендуется сдавать на ответственное хранение администратору.',
          },
          {
            label: 'Финская сауна и душевые',
            text: 'Для гостей клуба работает чистая финская сауна сухого жара для мышечной релаксации после нагрузок, а также просторные душевые кабины с постоянным горячим водоснабжением и фены для сушки волос.',
          },
          {
            label: 'Намазхана (молельная комната)',
            text: 'В клубе оборудована чистая, тихая молельная комната (намазхана) со всеми условиями для совершения молитвы нашими посетителями в удобное время.',
          },
          {
            label: 'Питьевая вода, чай и спортбар',
            text: 'В свободном доступе кулеры с очищенной питьевой водой и чай. На стойке бара доступны протеиновые коктейли, BCAA, L-карнитин, изотоники и натуральный свежесваренный кофе.',
          },
        ],
        KZ: [
          {
            label: 'Екі деңгейлі кеңістік',
            text: '1-қабат — еркін салмақтар, күштік жақтаулар, 50 кг дейінгі гантельдер қатары және блокты тренажерлер. 2-қабат — жүгіру жолдары, эллипсоидтар мен сайклдары бар арнайы кардио-аймақ.',
          },
          {
            label: 'Киім ауыстыру бөлмесі және жеке шкафтар',
            text: 'Әрбір келушіге рецепцияда жеке құлпы бар шкаф кілті беріледі. Бағалы заттарды әкімшіге сақтауға тапсыру ұсынылады.',
          },
          {
            label: 'Фин саунасы және душ бөлмелері',
            text: 'Жаттығудан соң бұлшықетті демалту үшін фин саунасы, үздіксіз ыстық суы бар кең душ кабиналары және шаш кептіргіштер қызмет етеді.',
          },
          {
            label: 'Намазхана (құлшылық бөлмесі)',
            text: 'Клубта келушілерге барлық жағдайы жасалған таза әрі тыныш намазхана арнайы қарастырылған.',
          },
          {
            label: 'Ауыз су, шай және спорттық бар',
            text: 'Сүзгіден өткен таза суы бар кулерлер мен ыстық шай тегін. Барда протеин коктейльдері, аминқышқылдары, изотониктер мен табиғи кофе ұсынылады.',
          },
        ],
        EN: [
          {
            label: 'Two-Tier Athletic Layout',
            text: '1st Floor: heavy iron deck, power racks, dumbbell rack up to 50kg, plate-loaded machines. 2nd Floor: dedicated cardio mezzanine with premium treadmills, ellipticals, and spin bikes.',
          },
          {
            label: 'Lockers & Changing Suites',
            text: 'Private key-lock lockers are allocated upon reception sign-in. High-value belongings can be left in secure front-desk vaults.',
          },
          {
            label: 'Finnish Dry Sauna & Showers',
            text: 'Post-workout recovery includes a dry-heat Finnish sauna, hot showers, and high-power hair dryers in both locker wings.',
          },
          {
            label: 'Dedicated Prayer Room (Namazkhana)',
            text: 'A clean, calm, carpeted prayer room is available inside the facility for our guests convenience.',
          },
          {
            label: 'Hydration Station & Protein Bar',
            text: 'Complimentary filtered water coolers and hot tea. Our reception bar serves sports nutrition, whey shakes, BCAAs, and freshly ground espresso.',
          },
        ],
      },
    },
    {
      id: 'safety',
      badge: { RU: 'БЕЗОПАСНОСТЬ', KZ: 'ҚАУІПСІЗДІК', EN: 'SAFETY & AGE' },
      title: { RU: 'Техника безопасности и ограничения', KZ: 'Қауіпсіздік техникасы және шектеулер', EN: 'Health, Safety & Age Policy' },
      iconName: 'shield',
      items: {
        RU: [
          {
            label: 'Возрастные ограничения',
            text: 'Подростки 14–16 лет допускаются к самостоятельным тренировкам с письменного согласия родителей или под присмотром персонального тренера. Посещение тренажерного зала детьми до 14 лет возможно исключительно в формате индивидуальных занятий с наставником клуба.',
          },
          {
            label: 'Запрет алкоголя и веществ',
            text: 'Категорически запрещено посещение клуба в состоянии алкогольного, наркотического или токсического опьянения. Лица с признаками опьянения к занятиям не допускаются.',
          },
          {
            label: 'Курение и вейпинг',
            text: 'На всей территории спортивного комплекса (включая раздевалки, санузлы и входную группу) строго запрещено курение табака, систем нагревания (IQOS, glo), кальянов и электронных сигарет (вейпов).',
          },
          {
            label: 'Несанкционированные коммерческие тренировки',
            text: 'Проведение платных или коммерческих персональных тренировок лицами, не являющимися официальными штатными тренерами клуба STATUS, строго запрещено правилами клуба.',
          },
        ],
        KZ: [
          {
            label: 'Жас бойынша шектеулер',
            text: '14–16 жастағы жасөспірімдер ата-анасының жазбаша келісімімен немесе жаттықтырушының қадағалауымен жіберіледі. 14 жасқа дейінгі балалар тек жеке бапкермен ғана жаттыға алады.',
          },
          {
            label: 'Мас күйде келуге тыйым салу',
            text: 'Клубқа алкогольдік немесе есірткілік масаң күйде кіруге қатаң тыйым салынады. Мұндай тұлғалар залға кіргізілмейді.',
          },
          {
            label: 'Шылым шегуге тыйым',
            text: 'Клуб аумағында (киім ауыстыру бөлмелері мен кіреберісті қоса) темекі, вейп, электронды темекі тартуға қатаң тыйым салынады.',
          },
          {
            label: 'Рұқсатсыз коммерциялық жаттықтыру',
            text: 'STATUS клубының ресми штатында жоқ адамдардың ақылы жеке жаттығулар өткізуіне қатаң тыйым салынады.',
          },
        ],
        EN: [
          {
            label: 'Age Regulations',
            text: 'Teens 14–16 may train independently with signed parental consent or under a coach. Children under 14 are permitted exclusively for 1-on-1 personal coaching with a certified STATUS trainer.',
          },
          {
            label: 'Substance Policy',
            text: 'Entry under the influence of alcohol, narcotics, or intoxicating substances is strictly prohibited. Access will be revoked immediately.',
          },
          {
            label: 'No Smoking / Vaping',
            text: 'Smoking cigarettes, vapes, heated tobacco systems (IQOS), and e-cigarettes is entirely forbidden within all club premises.',
          },
          {
            label: 'Unauthorized Commercial Coaching',
            text: 'Coaching clients for private payment by non-staff trainers is strictly prohibited by club policy.',
          },
        ],
      },
    },
    {
      id: 'memberships',
      badge: { RU: 'АБОНЕМЕНТЫ И ЗАМОРОЗКА', KZ: 'АБОНЕМЕНТТЕР ЖӘНЕ ТОҚТАТУ', EN: 'PASSES & FREEZE' },
      title: { RU: 'Условия абонементов и заморозки', KZ: 'Абонементтер мен тоқтату шарттары', EN: 'Membership Activation & Freezing' },
      iconName: 'clock',
      items: {
        RU: [
          {
            label: 'Активация клубных карт',
            text: 'Срок действия абонемента начинается с даты первого фактического визита, либо автоматически на 30-й календарный день после покупки, если первое посещение не состоялось.',
          },
          {
            label: 'Услуга заморозки абонемента',
            text: 'Для полугодовых и годовых безлимитных карт предоставляется возможность бесплатной заморозки на срок от 14 до 30 дней (по письменному заявлению или обращению на рецепцию до начала периода отсутствия).',
          },
          {
            label: 'Переоформление на другого человека',
            text: 'Действующий абонемент может быть единоразово переоформлен на третье лицо по заявлению владельца у стойки администратора.',
          },
          {
            label: 'Партнерская программа 1Fit',
            text: 'Пользователи мобильного приложения 1Fit посещают клуб STATUS бесплатно в рамках своего действующего тарифа 1Fit путем быстрого сканирования QR-кода на рецепции.',
          },
        ],
        KZ: [
          {
            label: 'Абонементті белсендіру',
            text: 'Абонемент мерзімі бірінші рет келген күннен басталады немесе сатып алғаннан кейін 30 күн өткен соң автоматты түрде қосылады.',
          },
          {
            label: 'Абонементті уақытша тоқтату (заморозка)',
            text: 'Жартыжылдық және жылдық абонементтер үшін 14-тен 30 күнге дейін тегін тоқтату мүмкіндігі беріледі (әкімшіге алдын ала хабарлау арқылы).',
          },
          {
            label: 'Басқа адамға қайта рәсімдеу',
            text: 'Қолданыстағы абонементті рецепциядағы әкімші арқылы бір рет өзге адамның атына аударуға болады.',
          },
          {
            label: '1Fit серіктестігі',
            text: '1Fit қосымшасын пайдаланушылар STATUS залына қосымша төлемсіз, ресепшндегі QR-кодты сканерлеу арқылы еркін қатыса алады.',
          },
        ],
        EN: [
          {
            label: 'Membership Activation',
            text: 'Passes become active upon your first workout check-in, or automatically 30 days after purchase if no initial visit occurred.',
          },
          {
            label: 'Complimentary Freeze Period',
            text: '6-month and 12-month unlimited passes include between 14 to 30 days of free pause time upon prior notice to the reception desk.',
          },
          {
            label: 'Membership Transfer',
            text: 'Passes may be transferred once to a new owner upon filling out a written request at our front desk.',
          },
          {
            label: '1Fit Pass Compatibility',
            text: 'Active 1Fit subscribers enter STATUS at no additional cost by scanning our reception desk check-in QR code.',
          },
        ],
      },
    },
    {
      id: 'privacy',
      badge: { RU: 'КОНФИДЕНЦИАЛЬНОСТЬ РК', KZ: 'ДЕРЕКТЕРДІ ҚОРҒАУ ҚР', EN: 'KZ PRIVACY LAW' },
      title: { RU: 'Политика конфиденциальности и защита данных', KZ: 'Құпиялылық саясаты және дербес деректерді қорғау', EN: 'Personal Data Protection Policy' },
      iconName: 'file-text',
      items: {
        RU: [
          {
            label: 'Законодательное соответствие Республики Казахстан',
            text: 'Настоящая политика составлена в строгом соответствии с Законом Республики Казахстан от 21 мая 2013 года № 94-V «О персональных данных и их защите». Оставляя заявку на сайте или регистрируясь в клубе, пользователь дает согласие на обработку персональных данных.',
          },
          {
            label: 'Цели сбора и обработки информации',
            text: 'Персональные данные (имя, контактный номер телефона, выбранный абонемент или тренер) собираются исключительно для связи администратора с клиентом, подтверждения бронирования вводной тренировки и консультаций через WhatsApp или телефонную связь.',
          },
          {
            label: 'Гарантия неразглашения третьим лицам',
            text: 'STATUS Fitness Club обязуется соблюдать строгую конфиденциальность и гарантирует, что предоставленные контактные данные никогда не будут проданы, переданы в сторонние базы данных или использованы для нежелательного спама.',
          },
          {
            label: 'Отзыв согласия и удаление данных',
            text: 'Пользователь вправе в любой момент отозвать согласие на обработку данных и запросить их удаление из информационной базы, обратившись к администрации клуба по контактному телефону или в WhatsApp.',
          },
        ],
        KZ: [
          {
            label: 'Қазақстан Республикасының заңнамасы',
            text: 'Осы саясат Қазақстан Республикасының 2013 жылғы 21 мамырдағы № 94-V «Дербес деректер және оларды қорғау туралы» Заңына толық сәйкес жасалған.',
          },
          {
            label: 'Деректерді жинау мақсаты',
            text: 'Байланыс деректері (аты-жөні, телефон нөмірі) тек жаттығуға жазылуды растау, кеңес беру және WhatsApp арқылы хабарласу мақсатында ғана пайдаланылады.',
          },
          {
            label: 'Үшінші тұлғаларға бермеу кепілдігі',
            text: 'STATUS фитнес-клубы келушілердің байланыс деректерін үшінші тараптарға бермеуге және жарияламауға толық кепілдік береді.',
          },
          {
            label: 'Деректерді жою құқығы',
            text: 'Кез келген уақытта клуб әкімшілігіне хабарласу арқылы жеке деректеріңізді базадан өшіруді талап етуге құқығыңыз бар.',
          },
        ],
        EN: [
          {
            label: 'Republic of Kazakhstan Legal Compliance',
            text: 'This policy fully complies with the Law of the Republic of Kazakhstan dated May 21, 2013 No. 94-V "On Personal Data and Its Protection".',
          },
          {
            label: 'Purpose of Processing',
            text: 'Contact info (name, phone number, fitness goals) is collected solely for consultation booking, WhatsApp scheduling, and club membership management.',
          },
          {
            label: 'Non-Disclosure Guarantee',
            text: 'STATUS Fitness Club strictly safeguards member confidentiality and never sells or transfers contact details to commercial third-party databases.',
          },
          {
            label: 'Data Deletion Requests',
            text: 'Members have the full legal right to request removal of their records from our system at any time by messaging our administration.',
          },
        ],
      },
    },
    {
      id: 'contacts',
      badge: { RU: 'ЛОКАЦИЯ И СВЯЗЬ', KZ: 'ОРНАЛАСУЫ ЖӘНЕ БАЙЛАНЫС', EN: 'LOCATION & HOURS' },
      title: { RU: 'Реквизиты и адрес на Маресьева, 4Д', KZ: 'Маресьев 4Д бойынша мекенжай мен байланыс', EN: 'Club Details & Location' },
      iconName: 'map-pin',
      items: {
        RU: [
          {
            label: 'Физический адрес',
            text: 'Республика Казахстан, г. Актобе, район Астана, ул. Маресьева, 4Д (1-й этаж, центральный вход).',
          },
          {
            label: 'Часы работы',
            text: 'Понедельник – Суббота: с 07:00 до 23:00 без перерывов. Воскресенье: с 09:00 до 22:00. Работаем во все праздничные дни.',
          },
          {
            label: 'Телефоны рецепции',
            text: '+7 (707) 941-85-15 (основной/WhatsApp), +7 (707) 934-85-15 (дополнительный).',
          },
          {
            label: 'Социальные сети и навигаторы',
            text: 'Instagram: @status__aktobe. Точка на карте доступна в 2GIS и Яндекс Карты («STATUS фитнес-клуб»).',
          },
        ],
        KZ: [
          {
            label: 'Мекенжайы',
            text: 'Қазақстан Республикасы, Ақтөбе қаласы, Астана ауданы, Маресьев көшесі, 4Д (1-қабат).',
          },
          {
            label: 'Жұмыс кестесі',
            text: 'Дүйсенбі – Сенбі: 07:00-ден 23:00-ге дейін үзіліссіз. Жексенбі: 09:00-ден 22:00-ге дейін.',
          },
          {
            label: 'Рецепция телефондары',
            text: '+7 (707) 941-85-15 (негізгі / WhatsApp), +7 (707) 934-85-15.',
          },
          {
            label: 'Әлеуметтік желілер мен карталар',
            text: 'Instagram: @status__aktobe. 2GIS және Яндекс Карта арқылы оңай бағыт табуға болады.',
          },
        ],
        EN: [
          {
            label: 'Street Address',
            text: 'Republic of Kazakhstan, Aktobe city, Astana district, 4D Maresyeva Street (1st floor).',
          },
          {
            label: 'Working Hours',
            text: 'Monday – Saturday: 07:00 to 23:00 non-stop. Sunday: 09:00 to 22:00. Open on all official holidays.',
          },
          {
            label: 'Direct Phones',
            text: '+7 (707) 941-85-15 (Primary / WhatsApp), +7 (707) 934-85-15.',
          },
          {
            label: 'Social & Map Navigation',
            text: 'Instagram: @status__aktobe. Verified destination on 2GIS and Yandex Maps ("STATUS Fitness Club").',
          },
        ],
      },
    },
  ],
};

export interface AcrosticItem {
  letter: string;
  phrase: string;
}

export const MOTIVATIONAL_MANIFESTO: {
  tag: { RU: string; KZ: string; EN: string };
  title: { RU: string; KZ: string; EN: string };
  subtitle: { RU: string; KZ: string; EN: string };
  badge: { RU: string; KZ: string; EN: string };
  acrostic: {
    RU: AcrosticItem[];
    KZ: AcrosticItem[];
    EN: AcrosticItem[];
  };
} = {
  tag: {
    RU: 'МАНИФЕСТ ЗАЛА STATUS',
    KZ: 'STATUS ЗАЛЫНЫҢ МАНИФЕСТІ',
    EN: 'STATUS GYM MANIFESTO',
  },
  title: {
    RU: 'СТЕНА МОТИВАЦИИ: С-Т-А-Т-У-С',
    KZ: 'МОТИВАЦИЯ ҚАБЫРҒАСЫ: S-T-A-T-U-S',
    EN: 'THE MOTIVATION WALL: S-T-A-T-U-S',
  },
  subtitle: {
    RU: 'Философия железного прогресса, нанесённая на стену нашего тренажерного зала в Актобе.',
    KZ: 'Ақтөбедегі жаттығу залымыздың қабырғасында бейнеленген нағыз темірдей ерік пен нәтиже философиясы.',
    EN: 'The iron discipline philosophy painted directly on the wall of our Aktobe training deck.',
  },
  badge: {
    RU: 'ФИЛОСОФИЯ ПОБЕДИТЕЛЕЙ',
    KZ: 'ЖЕҢІМПАЗДАР ФИЛОСОФИЯСЫ',
    EN: 'WINNERS PHILOSOPHY',
  },
  acrostic: {
    RU: [
      { letter: 'С', phrase: 'Ставь цели' },
      { letter: 'Т', phrase: 'Тренируйся' },
      { letter: 'А', phrase: 'Амбиции включай' },
      { letter: 'Т', phrase: 'Тело совершенствуй' },
      { letter: 'У', phrase: 'Улучшай себя' },
      { letter: 'С', phrase: 'Собирай результаты' },
    ],
    KZ: [
      { letter: 'С', phrase: 'Сапалы мақсат қой' },
      { letter: 'Т', phrase: 'Тынбай жаттық' },
      { letter: 'А', phrase: 'Арманыңа ұмтыл' },
      { letter: 'Т', phrase: 'Тәніңді шыңда' },
      { letter: 'У', phrase: 'Уақытты бағала' },
      { letter: 'С', phrase: 'Сенімді нәтиже жина' },
    ],
    EN: [
      { letter: 'S', phrase: 'Set high goals' },
      { letter: 'T', phrase: 'Train with discipline' },
      { letter: 'A', phrase: 'Aim for greatness' },
      { letter: 'T', phrase: 'Transform your body' },
      { letter: 'U', phrase: 'Upgrade your limits' },
      { letter: 'S', phrase: 'Secure solid results' },
    ],
  },
};

export const ZONES_DATA: ZoneItem[] = [
  {
    id: 'strength',
    tag: 'LOWER LEVEL / СИЛОВОЙ ЗАЛ',
    level: {
      RU: 'Нижний уровень (1 этаж)',
      KZ: 'Төменгі деңгей (1-қабат)',
      EN: 'Lower Deck (Ground Level)',
    },
    title: {
      RU: 'Зона силовых тренажёров и свободных весов',
      KZ: 'Күштік тренажерлер мен еркін салмақтар аймағы',
      EN: 'Heavy Free Weights & Strength Machines',
    },
    subtitle: {
      RU: 'Тяжелая биомеханика и полный гантельный ряд до 50 кг',
      KZ: 'Сапалы биомеханика және 50 кг дейінгі гантельдер қатары',
      EN: 'Heavy biomechanics with dumbbell rack up to 50kg',
    },
    description: {
      RU: 'Профессиональные блочные и рычажные тренажёры на все группы мышц, 4 силовые рамы для приседаний, помосты для становой тяги, скамьи для жима с регулируемыми углами и специальное ударопоглощающее резиновое покрытие.',
      KZ: 'Барлық бұлшықет топтарына арналған кәсіби блоктық және иінтіректі тренажерлер, отырып-тұруға арналған 4 күштік рама, жатып көтеруге арналған орындықтар және соққы сіңіргіш арнайы еден.',
      EN: 'Commercial plate-loaded and pin-selected machines targeting all muscle groups, 4 heavy-duty squat cages, deadlift platforms, and competition-grade rubber flooring.',
    },
    features: {
      RU: [
        'Гантельный ряд от 1 до 50 кг с шагом в 1-2 кг',
        'Профессиональные грифы стандартов IPF/IWF и калиброванные блины',
        'Тренажеры Смита, кроссоверы и мультистанции',
        'Зона безопасной тяги и вспомогательные пояса/лямки',
      ],
      KZ: [
        '1-ден 50 кг-ға дейінгі гантель қатары',
        'Кәсіби IPF/IWF стандартты грифі және калибрленген дисктер',
        'Смит тренажерлері, кроссоверлер және көпсалалы станциялар',
        'Қауіпсіз тартылу аймағы және көмекші белдіктер',
      ],
      EN: [
        'Complete dumbbell set from 1kg to 50kg with fine increments',
        'Olympic barbells and calibrated plates',
        'Dual cable crossovers, Smith machines, and hack squats',
        'Deadlift platform with safety bumper plates',
      ],
    },
    image: '/images/gym/status_dumbbell_zone.jpg',
  },
  {
    id: 'cardio',
    tag: 'UPPER LEVEL / КАРДИО-ЗОНА',
    level: {
      RU: 'Верхний уровень',
      KZ: 'Жоғарғы деңгей',
      EN: 'Upper Deck',
    },
    title: {
      RU: 'Панорамная кардио-зона высокой выносливости',
      KZ: 'Панорамалық жоғары төзімділік кардио аймағы',
      EN: 'Panoramic High-Endurance Cardio Deck',
    },
    subtitle: {
      RU: 'Беговые дорожки, эллипсоиды, велотренажёры и степперы',
      KZ: 'Жүгіру жолдары, эллипсоидтар және велосипед тренажерлері',
      EN: 'Treadmills, ellipticals, indoor cycles, and stair climbers',
    },
    description: {
      RU: 'Вынесенная на отдельный верхний уровень зона кардиотренировок с отличным обзором. Каждый тренажёр оборудован монитором пульса, датчиками сожжённых калорий и множеством интервальных режимов.',
      KZ: 'Керемет көрінісі бар жеке жоғарғы деңгейге шығарылған кардио-жаттығу аймағы. Әр тренажер жүрек соғу жиілігінің мониторымен және калория есептегішімен жабдықталған.',
      EN: 'Positioned on the elevated deck, our cardio zone provides expansive visibility, shock-absorbing belt technology, built-in telemetry, and custom HIIT workout programs.',
    },
    features: {
      RU: [
        'Беговые дорожки с амортизацией суставов FlexDeck',
        'Орбитреки и эллипсы с регулируемой траекторией шага',
        'Спин-байки и эргометры для взрывного интервального тренинга',
        'Постоянный приток свежего воздуха из системы вентиляции',
      ],
      KZ: [
        'Буындарды қорғайтын амортизациясы бар жүгіру жолдары',
        'Қадам ұзындығы реттелетін эллипстер мен орбитректер',
        'Интервалды жаттығуларға арналған спин-байктар',
        'Желдету жүйесінен үнемі таза ауа ағыны',
      ],
      EN: [
        'Commercial treadmills with high-grade joint absorption decks',
        'Adjustable stride ellipticals and adaptive motion trainers',
        'High-intensity stationary bikes with real-time wattage',
        'Dedicated fresh air intake vents directly above workstations',
      ],
    },
    image: '/images/gym/status_cardio_treadmills.jpg',
  },
  {
    id: 'personal',
    tag: 'COACHING / ПЕРСОНАЛЬНЫЙ ТРЕНИНГ',
    level: {
      RU: 'Индивидуальное сопровождение',
      KZ: 'Жеке қолдау',
      EN: 'One-on-One Mentorship',
    },
    title: {
      RU: 'Персональный тренинг и составление рациона',
      KZ: 'Жеке жаттығулар және тамақтану жоспары',
      EN: 'Personal Training & Nutrition Engineering',
    },
    subtitle: {
      RU: 'Безопасное достижение целей под контролем экспертов',
      KZ: 'Сарапшылар бақылауымен мақсаттарға қауіпсіз жету',
      EN: 'Injury-free goal achievement guided by seasoned coaches',
    },
    description: {
      RU: 'Индивидуальный тренировочный план, поставленная с первого дня безупречная техника упражнений, расчет суточного КБЖУ под ваши задачи и ежедневная поддержка наставника.',
      KZ: 'Сіздің мақсаттарыңызға сай жеке жаттығу жоспары, қауіпсіз техника, тәуліктік калория мен БЖК есебі және жаттықтырушының күнделікті қолдауы.',
      EN: 'Targeted periodized training schemes, initial biomechanical movement screening, custom macro calculations, and direct mentor accountability.',
    },
    features: {
      RU: [
        'Пошаговая коррекция техники базовых и изолированных упражнений',
        'Индивидуальный протокол питания с учётом предпочтений',
        'Программы для похудения, рельефа, набора мышечной массы',
        'Периодический трекинг замеров и контрольные срезы',
      ],
      KZ: [
        'Жаттығу техникасын кезең-кезеңімен түзету',
        'Дәм қалауларын ескере отырып жеке тамақтану хаттамасы',
        'Арықтау, бұлшықет жинау және төзімділік бағдарламалары',
        'Нәтижелерді өлшеу мен тұрақты бақылау',
      ],
      EN: [
        'Micro-adjustments for safe spinal alignment and joint tracking',
        'Sustainable nutrition plans tailored to your lifestyle',
        'Programs for hyper-trophy, body recomposition, and strength',
        'Bi-weekly progress audits and load progression charts',
      ],
    },
    image: '/images/gym/status_main_hall.jpg',
  },
  {
    id: 'diagnostics',
    tag: 'BODY ANALYSIS / АНАЛИЗ СОСТАВА ТЕЛА',
    level: {
      RU: 'Зона диагностики',
      KZ: 'Диагностика аймағы',
      EN: 'Diagnostics Hub',
    },
    title: {
      RU: 'Биоимпедансный анализ состава тела',
      KZ: 'Дене құрамын биоимпеданстық талдау',
      EN: 'Body Composition Assessment',
    },
    subtitle: {
      RU: 'Точные данные: процент жира, мышечная масса, уровень воды',
      KZ: 'Дәл деректер: май пайызы, бұлшықет салмағы, су деңгейі',
      EN: 'Granular metrics: visceral fat, skeletal muscle mass, hydration',
    },
    description: {
      RU: 'Перед началом занятий мы рекомендуем пройти скрининг тела. Вы узнаете точный процент скелетной мускулатуры, уровень висцерального жира и базовый метаболизм, что позволит составить максимально точный план.',
      KZ: 'Жаттығуларды бастар алдында дене скринингінен өтуді ұсынамыз. Сіз бұлшықет үлесін, май көлемін және негізгі зат алмасу көрсеткішін анықтап, дәл жоспар құра аласыз.',
      EN: 'Objective measurements to replace guesswork. Understand exact skeletal mass, hydration balance, and basal metabolic rate to pinpoint optimal caloric targets.',
    },
    features: {
      RU: [
        'Определение процента подкожного и висцерального жира',
        'Сегментарный анализ мышечной ткани (руки, ноги, торс)',
        'Оценка скорости основного обмена веществ (BMR)',
        'Распечатка отчета и расшифровка тренером',
      ],
      KZ: [
        'Май пайызы мен ішкі май деңгейін анықтау',
        'Бұлшықет тінінің сегменттік талдауы (қол, аяқ, кеуде)',
        'Негізгі зат алмасу жылдамдығын (BMR) бағалау',
        'Есеп парағы және жаттықтырушының толық түсіндірмесі',
      ],
      EN: [
        'Visceral vs subcutaneous fat distribution modeling',
        'Segmental lean mass evaluation for symmetrical development',
        'Basal metabolic rate (BMR) calibration',
        'Printout report review with a head fitness specialist',
      ],
    },
    image: '/images/gym/status_leverage_machines.jpg',
  },
  {
    id: 'onefit',
    tag: '1FIT PARTNER / ЕДИНЫЙ АБОНЕМЕНТ',
    level: {
      RU: 'Партнёрская интеграция',
      KZ: 'Серіктестік интеграция',
      EN: 'Multi-Pass Access',
    },
    title: {
      RU: 'Посещение по единому абонементу 1Fit',
      KZ: '1Fit бірыңғай абонементімен қатысу',
      EN: 'Seamless 1Fit Member Check-In',
    },
    subtitle: {
      RU: 'Сканируйте QR на ресепшн и тренируйтесь в STATUS',
      KZ: 'Ресепшндегі QR-кодты сканерлеп, STATUS-та жаттығыңыз',
      EN: 'Scan the reception QR and enter without additional fees',
    },
    description: {
      RU: 'Если у вас есть подписка 1Fit, наш зал входит в список доступных премиум-локаций в Актобе. Вам доступна как зона свободных весов, так и кардио-зона без ограничений по времени.',
      KZ: 'Егер сізде 1Fit жазылымы болса, біздің клуб Ақтөбедегі қолжетімді премиум залдардың бірі болып табылады. Күштік және кардио аймақтар шектеусіз ашық.',
      EN: 'STATUS is an established 1Fit verified club in Aktobe. Enjoy full access to both the strength and cardio tiers through your active 1Fit smartphone application.',
    },
    features: {
      RU: [
        'Быстрый чек-ин через камеру телефона за 3 секунды',
        'Вход во все открытые тренировочные зоны',
        'Полноценный доступ к шкафчикам, душевым и кулерам',
        'Возможность персональных тренировок с нашими тренерами',
      ],
      KZ: [
        'Телефон камерасы арқылы 3 секундта жылдам тіркелу',
        'Барлық ашық жаттығу аймақтарына толық рұқсат',
        'Шкафтар, душ және су салқындатқыштарын еркін пайдалану',
        'Біздің жаттықтырушылармен жеке жаттығу мүмкіндігі',
      ],
      EN: [
        '3-second QR reception check-in via 1Fit mobile app',
        'Unrestricted access across both gym floors',
        'Complimentary use of lockers, showers, and water stations',
        'Optional personal coach pairings available directly on site',
      ],
    },
    image: '/images/gym/status_free_weights.jpg',
  },
];

export const TRAINERS_DATA: Trainer[] = [
  {
    id: 'trainer-kovalenko',
    name: {
      RU: 'Анатолий Коваленко',
      KZ: 'Анатолий Коваленко',
      EN: 'Anatoliy Kovalenko',
    },
    role: {
      RU: 'Тренер фитнес зала • МСМК по пауэрлифтингу',
      KZ: 'Фитнес-зал жаттықтырушысы • ХДСШ',
      EN: 'Fitness Coach • International Master of Sport',
    },
    experience: {
      RU: 'Стаж: 12 лет (в зале 5 лет)',
      KZ: 'Тәжірибесі: 12 жыл (залда 5 жыл)',
      EN: 'Experience: 12 yrs (5 yrs in gym)',
    },
    category: 'strength',
    achievements: {
      RU: '🏆 МСМК по народному жиму. МС по классическому, военному, военно-народному жиму и строгому бицепсу. 4× чемпион международного турнира, 2× чемпион Азии, 4× чемпион Европы, 2× чемпион Казахстана.',
      KZ: '🏆 Халықтық жатып көтеруден ХДСШ. Классикалық, әскери және қатаң бицепстен СШ. Халықаралық турнирдің 4 дүркін, Азияның 2 дүркін, Еуропаның 4 дүркін, ҚР 2 дүркін чемпионы.',
      EN: '🏆 International Master of Sport. 4× International Tournament Champion, 2× Asian Champion, 4× European Champion, 2× Kazakhstan Powerlifting Champion.',
    },
    specialization: {
      RU: ['Силовой тренинг', 'Коррекция тела', 'Набор мышечной массы', 'Снижение веса', 'Функциональный тренинг', 'Подготовка к соревнованиям'],
      KZ: ['Күштік тренинг', 'Дене бітімін түзету', 'Бұлшықет жинау', 'Салмақ тастау', 'Функционалдық жаттығу', 'Жарыстарға дайындық'],
      EN: ['Heavy Strength', 'Body Recomposition', 'Hypertrophy', 'Fat Loss', 'Functional Training', 'Powerlifting Peaking'],
    },
    bio: {
      RU: 'МСМК по пауэрлифтингу, многократный чемпион Европы, Азии и Казахстана. Опыт тренировок более 12 лет. Специализируется на безопасном наборе сухой мышечной массы, исправлении техники и подготовке к помосту.',
      KZ: 'Пауэрлифтингтен халықаралық дәрежедегі спорт шебері, Азия мен Еуропаның бірнеше дүркін чемпионы. 12 жылдан астам тәжірибесі бар. Сапалы бұлшықет жинау мен техниканы жетілдіруге маманданған.',
      EN: 'Elite International Master of Sport with over 12 years of iron experience. Multi-time European and Asian champion focusing on safe biomechanics, serious muscle mass, and powerlifting coaching.',
    },
    image: '/images/trainers_official/1_DNSd3bFMDrV.jpg',
    imagePosition: 'center 15%',
    imageTransform: 'scale(1.02)',
    instagram: 'status__aktobe',
  },
  {
    id: 'trainer-gordeev',
    name: {
      RU: 'Игорь Гордеев',
      KZ: 'Игорь Гордеев',
      EN: 'Igor Gordeev',
    },
    role: {
      RU: 'Персональный тренер фитнес зала • Реабилитолог',
      KZ: 'Фитнес-залдың жеке жаттықтырушысы • Оңалтушы',
      EN: 'Personal Fitness Coach & Rehab Specialist',
    },
    experience: {
      RU: 'Стаж: более 13 лет (тренер > 5 лет)',
      KZ: 'Тәжірибесі: 13 жылдан астам (жаттықтырушы > 5 жыл)',
      EN: 'Experience: 13+ yrs (5+ yrs coaching)',
    },
    category: 'rehab',
    achievements: {
      RU: 'Призёр и участник областных соревнований по силовым видам спорта (пауэрлифтинг). Глубокие знания биомеханики и восстановительного фитнеса.',
      KZ: 'Күштік спорт түрлері (пауэрлифтинг) бойынша облыстық жарыстардың жүлдегері. Биомеханика мен оңалту фитнесін терең меңгерген.',
      EN: 'Regional competitive powerlifting medalist. Deep expertise in functional biomechanics, musculoskeletal rehab, and longevity fitness.',
    },
    specialization: {
      RU: ['Персональные тренировки', 'Восстановление после травм', 'Работа с пожилыми людьми', 'Подростки 13-16 лет', 'Знание биомеханики и анатомии', 'Индивидуальное питание'],
      KZ: ['Жеке жаттығулар', 'Жарақаттан кейін оңалту', 'Егде жастағы адамдармен жұмыс', '13-16 жас жасөспірімдер', 'Анатомия мен биомеханика', 'Жеке тамақтану жоспары'],
      EN: ['Personal Coaching', 'Post-Injury Rehab', 'Senior Health & Mobility', 'Youth 13-16 Training', 'Anatomical Biomechanics', 'Nutritional Planning'],
    },
    bio: {
      RU: 'Практический опыт тренировок более 13 лет. Проводит силовые, функциональные и восстановительные занятия. Успешно работает с подростками, возрастными атлетами и людьми с ограничениями подвижности.',
      KZ: '13 жылдан астам тәжірибесі бар білікті маман. Күштік, функционалдық және оңалту жаттығуларын жүргізеді. Жасөспірімдермен және денсаулығын қалпына келтірушілермен жұмыс істейді.',
      EN: 'Over 13 years of practical training background. Conducts functional, strength, and recovery workouts, adapting movements for teenagers and older adults alike.',
    },
    image: '/images/trainers_official/2_DNsUFmt2FZz.jpg',
    imagePosition: 'center 28%',
    imageTransform: 'scale(1.16) translateY(-4%)',
    instagram: 'status__aktobe',
  },
  {
    id: 'trainer-tsoy',
    name: {
      RU: 'Римма Цой',
      KZ: 'Римма Цой',
      EN: 'Rimma Tsoy',
    },
    role: {
      RU: 'Тренер фитнес зала • Диетолог',
      KZ: 'Фитнес-зал жаттықтырушысы • Диетолог',
      EN: 'Fitness Coach & Dietitian Specialist',
    },
    experience: {
      RU: 'Призёр чемпионата ЗКО по бодибилдингу',
      KZ: 'БҚО бодибилдинг чемпионатының жүлдегері',
      EN: 'WKO Bodybuilding Championship Medalist',
    },
    category: 'weight-loss',
    achievements: {
      RU: '🏆 Призёр чемпионата Западно-Казахстанской области по бодибилдингу. Эксперт по женской эстетике и нутрициологии.',
      KZ: '🏆 Батыс Қазақстан облысының бодибилдинг чемпионатының жүлдегері. Әйелдер сымбаты мен диетология сарапшысы.',
      EN: '🏆 West Kazakhstan Bodybuilding Championship Medalist. Specialist in female body aesthetics and nutrition protocols.',
    },
    specialization: {
      RU: ['Индивидуальные программы', 'Коррекция массы тела', 'Диетология и планы питания', 'Мотивация и ведение', 'Ягодичный тренинг', 'Тонус и рельеф'],
      KZ: ['Жеке бағдарламалар', 'Дене салмағын түзету', 'Диетология және тамақтану', 'Мотивация және қолдау', 'Бөксе жаттығулары', 'Тонус пен сымбат'],
      EN: ['Custom Programs', 'Body Weight Management', 'Dietetics & Macro Plans', 'Daily Mentorship', 'Glute Sculpting', 'Athletic Tone'],
    },
    bio: {
      RU: 'Призёр чемпионата ЗКО по бодибилдингу. Разрабатывает действенные персональные планы тренировок и сбалансированные рационы питания для уверенного снижения веса, тонуса и эстетичного рельефа.',
      KZ: 'Бодибилдингтен БҚО чемпионатының жүлдегері. Сенімді салмақ тастау, дене тонусы мен әдемі мүсінге қол жеткізу үшін жеке жаттығу жоспарлары мен тамақтану мәзірін құрады.',
      EN: 'WKO bodybuilding medalist. Builds custom workout regimens and practical dietary schedules to help clients achieve steady fat loss, physique tone, and positive motivation.',
    },
    image: '/images/trainers_official/3_DOBK2CYjKgm.jpg',
    imagePosition: 'center 32%',
    imageTransform: 'scale(1.14) translateY(-3%)',
    instagram: 'status__aktobe',
  },
  {
    id: 'trainer-fomin',
    name: {
      RU: 'Сергей Фомин',
      KZ: 'Сергей Фомин',
      EN: 'Sergey Fomin',
    },
    role: {
      RU: 'Тренер персональных программ • Нутрициолог',
      KZ: 'Жеке бағдарламалар жаттықтырушысы • Нутрициолог',
      EN: 'Personal Coach & Clinical Nutritionist',
    },
    experience: {
      RU: 'Стаж: 8 лет (персональный тренер 4 года)',
      KZ: 'Тәжірибесі: 8 жыл (жеке жаттықтырушы 4 жыл)',
      EN: 'Experience: 8 yrs (4 yrs personal coach)',
    },
    category: 'weight-loss',
    achievements: {
      RU: 'Узкая специализация: эндокринология + нутрициология + фитнес. Работа с анализами и выравнивание гормонального профиля.',
      KZ: 'Тар мамандануы: эндокринология + нутрициология + фитнес. Талдаулармен жұмыс және гормондық тепе-теңдікті қалпына келтіру.',
      EN: 'Triple specialization in endocrinology, clinical nutrition, and fitness mechanics. Hormone optimization through diagnostic bloodwork.',
    },
    specialization: {
      RU: ['Нутрициология по анализам', 'Гормональный профиль', 'Безопасный тренинг', 'Снижение веса без откатов', 'Пропорциональная форма', 'Энергия и здоровье'],
      KZ: ['Талдаулар бойынша нутрициология', 'Гормондық тепе-теңдік', 'Қауіпсіз жаттығулар', 'Қайтусыз салмақ тастау', 'Үйлесімді дене', 'Қуат пен денсаулық'],
      EN: ['Lab-Guided Nutrition', 'Hormonal Health', 'Injury-Free Lifting', 'Rebound-Free Fat Loss', 'Aesthetic Balance', 'High Vitality'],
    },
    bio: {
      RU: 'Уникальный подход на стыке эндокринологии, нутрициологии и фитнеса. Выстраивает рацион и тренировки на основе ваших лабораторных анализов, устраняя дефициты, усталость и обеспечивая форму без откатов.',
      KZ: 'Эндокринология, нутрициология және фитнесті біріктіретін заманауи әдіс. Сіздің медициналық талдауларыңыз негізінде тамақтануды реттеп, шаршауды жеңіп, тұрақты салмақ нәтижесін береді.',
      EN: 'Integrates endocrinology, biochemistry, and strength training. Corrects hormonal imbalances and nutrient deficiencies from bloodwork for durable, rebound-free physical transformation.',
    },
    image: '/images/trainers_official/4_DOLT2faAZ_z.jpg',
    imagePosition: 'center 60%',
    imageTransform: 'scale(1.36) translateY(-17%)',
    instagram: 'endofomin_',
  },
  {
    id: 'trainer-tambovtsev',
    name: {
      RU: 'Денис Тамбовцев',
      KZ: 'Денис Тамбовцев',
      EN: 'Denis Tambovtsev',
    },
    role: {
      RU: 'Тренер фитнес зала • Чемпион Мира и Азии',
      KZ: 'Фитнес-зал жаттықтырушысы • Әлем және Азия чемпионы',
      EN: 'Fitness Coach • World & Asian Powerlifting Champion',
    },
    experience: {
      RU: 'Стаж: 2 года (действующий чемпион мира)',
      KZ: 'Тәжірибесі: 2 жыл (әлем чемпионы)',
      EN: 'Experience: 2 yrs (World Champion)',
    },
    category: 'strength',
    achievements: {
      RU: '🏆 Чемпион мира по пауэрлифтингу (сумма 407 кг, присед 135, жим 90, тяга 182,5 кг). 🏆 Чемпион Азии по становой тяге. 🏆 Чемпион области по жиму лёжа.',
      KZ: '🏆 Пауэрлифтингтен Әлем чемпионы (жалпы 407 кг, отыру 135, сығу 90, тарту 182,5 кг). 🏆 Становой тартудан Азия чемпионы. 🏆 Жатып көтеруден облыс чемпионы.',
      EN: '🏆 World Powerlifting Champion (407kg total, 182.5kg deadlift). 🏆 Asian Deadlift Champion. 🏆 Regional Bench Press Champion.',
    },
    specialization: {
      RU: ['Коррекция тела', 'Набор мышечной массы', 'Силовой тренинг', 'Функциональный тренинг', 'Подготовка к соревнованиям', 'Становая тяга и присед'],
      KZ: ['Дене бітімін түзету', 'Бұлшықет жинау', 'Күштік тренинг', 'Функционалдық жаттығу', 'Жарыстарға дайындық', 'Становой тарту мен отыру'],
      EN: ['Body Recomposition', 'Hypertrophy', 'Raw Power Training', 'Functional Fitness', 'Meet Preparation', 'Deadlift & Squat Form'],
    },
    bio: {
      RU: 'Действующий победитель чемпионата мира по пауэрлифтингу с результатом 407 кг, чемпион Азии по тяге. Учит филигранной технике базовых движений, взрывному росту силы и быстрому прогрессу в наборе массы.',
      KZ: 'Пауэрлифтингтен әлем чемпионатының жеңімпазы (407 кг), Азия чемпионы. Базалық қозғалыстардың мінсіз техникасын, күш пен бұлшықеттің жылдам әрі қауіпсіз өсуін үйретеді.',
      EN: 'Reigning World Powerlifting Champion with a 407kg total. Coaches elite mechanics on squat, bench, and deadlift for explosive power development and injury-free muscle building.',
    },
    image: '/images/trainers_official/5_DOaRTg2jKUp.jpg',
    imagePosition: 'center 75%',
    imageTransform: 'scale(1.34) translateY(-15%)',
    instagram: 'status__aktobe',
  },
  {
    id: 'trainer-ismagulov',
    name: {
      RU: 'Станислав Исмагулов',
      KZ: 'Станислав Исмагулов',
      EN: 'Stanislav Ismagulov',
    },
    role: {
      RU: 'Тренер фитнес зала • Инструктор по армрестлингу',
      KZ: 'Фитнес-зал жаттықтырушысы • Армрестлинг нұсқаушысы',
      EN: 'Fitness Coach & Armwrestling Specialist',
    },
    experience: {
      RU: 'Стаж тренировок: 4 года',
      KZ: 'Жаттығу тәжірибесі: 4 жыл',
      EN: 'Experience: 4 years',
    },
    category: 'crossfit',
    achievements: {
      RU: 'Специалист по пропорциональной атлетичной форме, развитию сухожильной силы и технике соревновательного армрестлинга.',
      KZ: 'Үйлесімді спорттық дене бітімі, сіңірлік күшті дамыту және кәсіби армрестлинг техникасының маманы.',
      EN: 'Specialist in proportional athletic aesthetics, tendon strength development, and competitive armwrestling fundamentals.',
    },
    specialization: {
      RU: ['Развитие силы', 'Пропорциональная форма', 'Техника армрестлинга', 'Индивидуальный подход', 'Функциональный тренинг', 'Укрепление связок и хвата'],
      KZ: ['Күшті дамыту', 'Сымбатты пішін', 'Қол күресі техникасы', 'Жеке тәсіл', 'Функционалдық жаттығу', 'Байламдар мен ұстауды нығайту'],
      EN: ['Strength Conditioning', 'Aesthetic Proportion', 'Armwrestling Mechanics', 'Personalized Approach', 'Functional Movement', 'Grip & Tendon Fortification'],
    },
    bio: {
      RU: 'Тренер зала STATUS. Помогает атлетам развить внушительную силу хвата, укрепить связочный аппарат, освоить приемы армрестлинга и построить атлетичное рельефное тело по четкой методике.',
      KZ: 'STATUS залының жаттықтырушысы. Білек пен ұстау күшін арттыруға, қол күресінің қыр-сырын үйренуге және нақты әдістемемен рельефті дене жасауға көмектеседі.',
      EN: 'STATUS coach specializing in balanced aesthetic proportions, armwrestling leverage techniques, and unbreakable grip and tendon strength through systematic training.',
    },
    image: '/images/trainers_official/6_DPGhKYrDJ45.jpg',
    imagePosition: 'center 35%',
    imageTransform: 'scale(1.15) translateY(-5%)',
    instagram: 'status__aktobe',
  },
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'monthly-unlimited',
    name: {
      RU: 'Месячный Безлимит',
      KZ: '1 айлық Лимитсіз абонемент',
      EN: 'Monthly Unlimited Pass',
    },
    price: '20 000 ₸',
    period: {
      RU: '1 месяц',
      KZ: '1 ай',
      EN: '1 month',
    },
    features: {
      RU: [
        'Свободное посещение в любые дни недели',
        'В любое время работы фитнес-клуба',
        'Доступ на оба этажа (силовой зал + кардио)',
        'Шкафчики, душевые и раздевалки',
      ],
      KZ: [
        'Аптаның кез келген күнінде еркін кіру',
        'Фитнес-клубтың кез келген жұмыс уақытында',
        'Екі қабатқа толық рұқсат (күштік зал + кардио)',
        'Жеке шкафтар, душ және киім ауыстыру бөлмесі',
      ],
      EN: [
        'Open access any day of the week',
        'Valid during all club operating hours',
        'Full two-tier gym access (iron deck + cardio)',
        'Lockers, showers, and water stations included',
      ],
    },
    access: {
      RU: 'В любые дни и в любое время',
      KZ: 'Кез келген күні және уақытта',
      EN: 'Any day at any open hour',
    },
  },
  {
    id: 'quarter-unlimited',
    popular: true,
    badge: {
      RU: 'ХИТ ВЫБОРА',
      KZ: 'КӨП ТАҢДАЛАТЫН',
      EN: 'MOST POPULAR',
    },
    name: {
      RU: '3 месяца Безлимит',
      KZ: '3 айға Лимитсіз абонемент',
      EN: '3-Month Unlimited Pass',
    },
    price: '47 000 ₸',
    period: {
      RU: '3 месяца (~15 660 ₸/мес)',
      KZ: '3 ай (~15 660 ₸/ай)',
      EN: '3 months (~15,660 ₸/mo)',
    },
    features: {
      RU: [
        'Свободное посещение в любые дни и часы',
        'Заморозка карты: 15 календарных дней (1 раз)',
        'Выгода по сравнению с помесячной оплатой',
        'Полный доступ ко всей инфраструктуре клуба',
      ],
      KZ: [
        'Кез келген күні мен сағатында еркін қатысу',
        'Абонементті тоқтата тұру: 15 күнтізбелік күн (1 рет)',
        'Ай сайын төлеуден әлдеқайда тиімдірек баға',
        'Клубтың барлық инфрақұрылымына толық қолжетімділік',
      ],
      EN: [
        'Unlimited visits any day, anytime',
        'Card hold/freeze: 15 calendar days (once)',
        'Significant savings vs single month renewal',
        'Full access across all gym levels and amenities',
      ],
    },
    access: {
      RU: 'Заморозка 15 дней включена',
      KZ: '15 күн тоқтата тұру қосылған',
      EN: '15-day card freeze included',
    },
  },
  {
    id: 'annual-vip',
    name: {
      RU: 'Годовой Безлимит',
      KZ: '1 жыл Лимитсіз абонемент',
      EN: '1-Year Unlimited Pass',
    },
    price: '130 000 ₸',
    period: {
      RU: '12 месяцев (~10 830 ₸/мес)',
      KZ: '12 ай (~10 830 ₸/ай)',
      EN: '12 months (~10,830 ₸/mo)',
    },
    features: {
      RU: [
        'Свободное посещение 365 дней в году',
        'Заморозка карты: 40 календарных дней (1 раз)',
        'Максимальная экономия на каждой тренировке',
        'Приоритетный статус резидента клуба STATUS',
      ],
      KZ: [
        'Жылына 365 күн еркін жаттығу мүмкіндігі',
        'Абонементті тоқтата тұру: 40 күнтізбелік күн (1 рет)',
        'Әрбір жаттығу үшін ең максималды тиімділік',
        'STATUS клубының резиденті мәртебесі',
      ],
      EN: [
        'Unrestricted 365-day all-access membership',
        'Card hold/freeze: 40 calendar days (once)',
        'Maximum savings per workout (~10,830 ₸/mo)',
        'Top priority STATUS club resident perks',
      ],
    },
    access: {
      RU: 'Заморозка 40 дней • Лучшая цена',
      KZ: '40 күн тоқтату • Ең тиімді баға',
      EN: '40-day freeze • Best value',
    },
  },
  {
    id: 'personal-coaching-12',
    name: {
      RU: 'С персональным тренером (12 занятий)',
      KZ: 'Жеке жаттықтырушымен 12 сабақ',
      EN: '12 Personal Coaching Sessions',
    },
    price: '40 000 – 45 000 ₸',
    period: {
      RU: '1 месяц • 12 тренировок',
      KZ: '1 ай • 12 жаттығу',
      EN: '1 month • 12 sessions',
    },
    features: {
      RU: [
        '12 индивидуальных занятий с наставником',
        'В рабочее время клуба по согласованному графику',
        'Заморозка: 10 календарных дней (1 раз)',
        'Постановка безупречной техники и программа питания',
      ],
      KZ: [
        'Жаттықтырушымен 12 жеке сабақ',
        'Клубтың жұмыс уақытында келісілген кесте бойынша',
        'Абонементті тоқтата тұру: 10 күнтізбелік күн (1 рет)',
        'Мінсіз техниканы қалыптастыру және тамақтану жоспары',
      ],
      EN: [
        '12 one-on-one sessions with your dedicated coach',
        'Flexible schedule during club working hours',
        'Card hold/freeze: 10 calendar days (once)',
        'Safe biomechanics form correction and custom meal plan',
      ],
    },
    access: {
      RU: 'Заморозка 10 дней включена',
      KZ: '10 күн тоқтата тұру қосылған',
      EN: '10-day card freeze included',
    },
  },
];

export interface DetailedPriceCategory {
  id: string;
  title: { RU: string; KZ: string; EN: string };
  subtitle: { RU: string; KZ: string; EN: string };
  items: {
    name: { RU: string; KZ: string; EN: string };
    price: string;
    description: { RU: string; KZ: string; EN: string };
    freeze?: { RU: string; KZ: string; EN: string };
  }[];
}

export const FULL_OFFICIAL_PRICING: DetailedPriceCategory[] = [
  {
    id: 'unlimited',
    title: {
      RU: 'Безлимитные абонементы',
      KZ: 'Лимитсіз абонементтер',
      EN: 'Unlimited Memberships',
    },
    subtitle: {
      RU: 'Свободное посещение в любые дни недели в любое время работы клуба',
      KZ: 'Фитнес-клубтың кез келген жұмыс уақытында және аптаның кез келген күнінде еркін кіру',
      EN: 'Free access any day of the week at any club opening hour',
    },
    items: [
      {
        name: { RU: 'Годовой безлимит (12 месяцев)', KZ: 'Бір жыл лимитсіз (12 ай)', EN: '1-Year Unlimited' },
        price: '130 000 ₸',
        description: {
          RU: 'Свободное посещение до 12 месяцев. В любые дни недели и в любое время.',
          KZ: '12 айға дейін еркін кіру. Аптаның кез келген күнінде және кез келген уақытта.',
          EN: 'Unlimited visits up to 12 months. Any day, any time.',
        },
        freeze: { RU: 'Заморозка: 40 календарных дней (1 раз)', KZ: 'Тоқтата тұру: 40 күнтізбелік күн (1 рет)', EN: 'Freeze: 40 calendar days (once)' },
      },
      {
        name: { RU: '6 месяцев безлимит', KZ: '6 ай лимитсіз', EN: '6-Month Unlimited' },
        price: '80 000 ₸',
        description: {
          RU: 'Свободное посещение до 6 месяцев. В любые дни недели и в любое время.',
          KZ: '6 айға дейін еркін кіру. Аптаның кез келген күнінде және кез келген уақытта.',
          EN: 'Unlimited visits up to 6 months. Any day, any time.',
        },
        freeze: { RU: 'Заморозка: 30 календарных дней (1 раз)', KZ: 'Тоқтата тұру: 30 күнтізбелік күн (1 рет)', EN: 'Freeze: 30 calendar days (once)' },
      },
      {
        name: { RU: '3 месяца безлимит', KZ: '3 айға лимитсіз', EN: '3-Month Unlimited' },
        price: '47 000 ₸',
        description: {
          RU: 'Свободное посещение до 3 месяцев. В любые дни недели и в любое время.',
          KZ: '3 айға дейін еркін кіру. Аптаның кез келген күнінде және кез келген уақытта.',
          EN: 'Unlimited visits up to 3 months. Any day, any time.',
        },
        freeze: { RU: 'Заморозка: 15 календарных дней (1 раз)', KZ: 'Тоқтата тұру: 15 күнтізбелік күн (1 рет)', EN: 'Freeze: 15 calendar days (once)' },
      },
      {
        name: { RU: 'Месячный безлимит (1 месяц)', KZ: 'Лимитсіз (1 ай)', EN: 'Monthly Unlimited' },
        price: '20 000 ₸',
        description: {
          RU: 'Клубная карта сроком 1 месяц. Свободное посещение в любые дни и часы работы.',
          KZ: '1 айға дейінгі клуб картасы. Кез келген күні және уақытында еркін қатысу.',
          EN: '1-month club card. Open access any day, any operating hour.',
        },
        freeze: { RU: 'Заморозка не предусмотрена', KZ: 'Тоқтата тұру қарастырылмаған', EN: 'No hold/freeze included' },
      },
    ],
  },
  {
    id: 'coaching',
    title: {
      RU: 'С персональным тренером',
      KZ: 'Жеке жаттықтырушымен абонементтер',
      EN: 'Personal Coach Memberships',
    },
    subtitle: {
      RU: 'Индивидуальное сопровождение, техника и результат под контролем наставника',
      KZ: 'Тәлімгердің бақылауымен жеке сүйемелдеу, техника және нақты нәтиже',
      EN: 'One-on-one oversight, biomechanics, and nutrition guided by an expert coach',
    },
    items: [
      {
        name: { RU: 'С персональным тренером (12 занятий)', KZ: 'Жеке жаттықтырушымен 12 сабақ', EN: 'Personal Coach (12 sessions)' },
        price: '40 000 – 45 000 ₸',
        description: {
          RU: 'Срок 1 месяц, 12 занятий с персональным тренером в рабочее время клуба.',
          KZ: 'Мерзімі 1 ай, клубтың жұмыс уақытында жеке жаттықтырушымен 12 сабақ.',
          EN: '1-month validity, 12 guided sessions during club working hours.',
        },
        freeze: { RU: 'Заморозка: 10 календарных дней (1 раз)', KZ: 'Тоқтата тұру: 10 күнтізбелік күн (1 рет)', EN: 'Freeze: 10 calendar days (once)' },
      },
      {
        name: { RU: 'С персональным тренером (10 занятий)', KZ: 'Жеке жаттықтырушымен 10 сабақ', EN: 'Personal Coach (10 sessions)' },
        price: '35 000 – 40 000 ₸',
        description: {
          RU: 'Срок 1 месяц, 10 занятий с персональным тренером в рабочее время клуба.',
          KZ: 'Мерзімі 1 ай, клубтың жұмыс уақытында жеке жаттықтырушымен 10 сабақ.',
          EN: '1-month validity, 10 guided sessions during club working hours.',
        },
        freeze: { RU: 'Заморозка: 10 календарных дней (1 раз)', KZ: 'Тоқтата тұру: 10 күнтізбелік күн (1 рет)', EN: 'Freeze: 10 calendar days (once)' },
      },
      {
        name: { RU: 'Мини-группа из 3 человек (10 занятий)', KZ: '3 адамнан тұратын шағын топ (10 сабақ)', EN: 'Mini-Group of 3 (10 sessions)' },
        price: '30 000 – 35 000 ₸',
        description: {
          RU: 'Срок 1 месяц, 10 занятий в мини-группе из 3 человек по согласованным дням недели (цена с человека).',
          KZ: 'Мерзімі 1 ай, келісілген күндері 3 адамнан тұратын шағын топта 10 сабақ (бір адамға).',
          EN: '1-month validity, 10 small group sessions for 3 athletes (per person).',
        },
        freeze: { RU: 'Заморозка: 10 дней для всех одновременно', KZ: 'Тоқтата тұру: барлық қатысушыларға бір мезгілде 10 күн', EN: 'Freeze: 10 days for all participants' },
      },
      {
        name: { RU: 'Детский до 16 лет с тренером (10 занятий)', KZ: '16 жасқа дейінгі балалар (10 сабақ)', EN: 'Kids under 16 with Coach (10 sessions)' },
        price: '30 000 ₸',
        description: {
          RU: '1 месяц, 10 посещений под руководством квалифицированного тренера в любое время.',
          KZ: '1 ай, кез келген уақытта білікті жаттықтырушының жетекшілігімен 10 рет қатысу.',
          EN: '1 month, 10 sessions guided by an expert coach at any open hour.',
        },
        freeze: { RU: 'Заморозка: 10 дней', KZ: 'Тоқтата тұру: 10 күн', EN: 'Freeze: 10 calendar days' },
      },
      {
        name: { RU: 'Разовый персональный (с тренером)', KZ: 'Бір реттік жеке жаттығу', EN: 'Single Personal Session' },
        price: '5 000 ₸',
        description: {
          RU: 'Разовое занятие в зале под персональным контролем тренера.',
          KZ: 'Жаттықтырушының жеке бақылауымен залға бір рет келу.',
          EN: 'One-off guided session with a dedicated coach.',
        },
      },
      {
        name: { RU: 'С тренером-реабилитологом (разовый)', KZ: 'Оңалту жаттықтырушысымен (бір реттік)', EN: 'Rehabilitation Coach Session' },
        price: '8 000 ₸',
        description: {
          RU: 'Разовое занятие под руководством тренера-реабилитолога (восстановление, осанка, опорно-двигательный аппарат).',
          KZ: 'Оңалту жаттықтырушысының басшылығымен бір реттік сабақ (қалпына келтіру, мүсін).',
          EN: 'Specialized session with a certified rehabilitation specialist.',
        },
      },
    ],
  },
  {
    id: 'other',
    title: {
      RU: 'Другие абонементы',
      KZ: 'Басқа абонементтер',
      EN: 'Other Memberships',
    },
    subtitle: {
      RU: 'Лимитированные по времени и специальные абонементы для студентов и пенсионеров',
      KZ: 'Уақыты шектелген және студенттер мен зейнеткерлерге арналған арнайы абонементтер',
      EN: 'Daytime, visit-capped, student, and senior options',
    },
    items: [
      {
        name: { RU: 'Абонемент «12 занятий» (1 месяц)', KZ: '«12 жаттығу» абонементі (1 ай)', EN: '12-Session Membership' },
        price: '18 000 ₸',
        description: {
          RU: '12 посещений в месяц в любые дни недели в любое время работы клуба.',
          KZ: 'Ай ішінде клубтың кез келген жұмыс уақытында 12 рет келу.',
          EN: '12 visits within 1 month at any open hour.',
        },
      },
      {
        name: { RU: 'Абонемент «Дневной» (до 16:00)', KZ: '«Күндізгі» абонемент (16:00-ге дейін)', EN: 'Daytime Pass (until 16:00)' },
        price: '16 000 ₸',
        description: {
          RU: '12 посещений в месяц с 07:00 до 16:00 в любые дни недели.',
          KZ: 'Ай ішінде аптаның кез келген күнінде сағат 07:00-ден 16:00-ге дейін 12 рет келу.',
          EN: '12 visits per month from 07:00 to 16:00 any day.',
        },
      },
      {
        name: { RU: '«Вторник / Четверг / Суббота» (12 занятий)', KZ: '«Сейсенбі / Бейсенбі / Сенбі» (12 жаттығу)', EN: 'Tue / Thu / Sat Pass' },
        price: '16 000 ₸',
        description: {
          RU: '12 посещений в указанные дни недели в любое время работы зала.',
          KZ: 'Көрсетілген апта күндерінде кез келген уақытта 12 рет келу.',
          EN: '12 visits on Tuesday, Thursday, and Saturday at any time.',
        },
      },
      {
        name: { RU: 'Абонемент «8 занятий» (1 месяц)', KZ: '«8 жаттығу» абонементі (1 ай)', EN: '8-Session Membership' },
        price: '15 000 ₸',
        description: {
          RU: '8 посещений в месяц в любые дни недели в любое время.',
          KZ: 'Ай ішінде кез келген күнде және кез келген уақытта 8 рет келу.',
          EN: '8 visits within 1 month at any open hour.',
        },
      },
      {
        name: { RU: 'Абонемент «Студенческий» (12 занятий)', KZ: '«Студенттік» абонемент (12 жаттығу)', EN: 'Student Pass (12 sessions)' },
        price: '15 000 ₸',
        description: {
          RU: '12 посещений в месяц в любые дни недели в любое время работы (по студенческому билету).',
          KZ: 'Студенттік билетпен кез келген жұмыс уақытында айына 12 рет келу.',
          EN: '12 visits per month at any time (valid student ID required).',
        },
      },
      {
        name: { RU: 'Для пенсионеров и ЛОВ (12 занятий)', KZ: 'Зейнеткерлер мен барлық МШЖ-ға (12 жаттығу)', EN: 'Seniors & Disabled (12 sessions)' },
        price: '15 000 ₸',
        description: {
          RU: '12 посещений в месяц в любые дни недели в любое время работы клуба.',
          KZ: 'Клубтың кез келген жұмыс уақытында айына 12 рет қатысу.',
          EN: '12 visits per month anytime for seniors and people with disabilities.',
        },
      },
      {
        name: { RU: 'Разовое посещение зала', KZ: 'Бір реттік кіру', EN: 'Single Gym Day Pass' },
        price: '3 000 ₸',
        description: {
          RU: 'Разовое посещение зала без ограничения по времени тренировки.',
          KZ: 'Жаттығу уақытына шектеусіз залға бір рет кіру.',
          EN: 'Single-day entry without duration limit.',
        },
      },
    ],
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    type: 'video',
    image: '/images/instagram_posts/post_2.jpg',
    likes: 542,
    comments: 38,
    date: '3 дня назад',
    url: 'https://www.instagram.com/reel/DNsUFmt2FZz/',
    caption: {
      RU: 'Разбор техники глубоких приседаний со штангой и работа в силовой зоне STATUS: стабильность корпуса, колени и дыхание. Мощный тренировочный заряд!',
      KZ: 'STATUS күштік аймағында штангамен отырып-тұру техникасын талдау: денені ұстау, тыныс алу және аяқ бұлшықеттерін дамыту. Қуатты мотивация!',
      EN: 'Barbell back squat form breakdown in the STATUS power zone: core bracing, knee path, and solid drive. Bring your energy to the platform!',
    },
  },
  {
    id: 'post-2',
    type: 'video',
    image: '/images/instagram_posts/post_3.jpg',
    likes: 618,
    comments: 47,
    date: '5 дней назад',
    url: 'https://www.instagram.com/reel/DOBK2CYjKgm/',
    caption: {
      RU: 'Базовая становая тяга со свободным весом: как безопасно нагружать заднюю цепь и широчайшие без риска для поясницы в зале STATUS.',
      KZ: 'Еркін салмақпен классикалық тарту жаттығуы: белге салмақ салмай, арқа мен аяқ бұлшықеттерін сауатты дамыту жолдары.',
      EN: 'Deadlift mechanics with free weights at STATUS: proper hip hinge, lat engagement, and spine protection for maximum safe power.',
    },
  },
  {
    id: 'post-3',
    type: 'video',
    image: '/images/instagram_posts/post_4.jpg',
    likes: 489,
    comments: 29,
    date: '1 неделю назад',
    url: 'https://www.instagram.com/reel/DOLT2faAZ_z/',
    caption: {
      RU: 'Блочные тренажеры и гантельный ряд клуба STATUS на Маресьева 4Д: изолированная нагрузка, правильная амплитуда и контроль каждого повторения.',
      KZ: 'Маресьев 4Д мекенжайындағы STATUS тренажерлері мен гантельдер қатары: дұрыс амплитуда, сапалы қайталаулар және сенімді нәтиже.',
      EN: 'Machine resistance and heavy dumbbells at STATUS Aktobe: targeted isolation, full range of motion, and focused muscle contraction.',
    },
  },
  {
    id: 'post-4',
    type: 'video',
    image: '/images/instagram_posts/post_5.jpg',
    likes: 524,
    comments: 36,
    date: '1 неделю назад',
    url: 'https://www.instagram.com/reel/DOaRTg2jKUp/',
    caption: {
      RU: 'Функциональный комплекс на выносливость и рельеф: динамичная круговая тренировка для сжигания калорий и укрепления связок.',
      KZ: 'Төзімділік пен дене сымбатына арналған функционалдық кешен: калория жағуға және барлық бұлшықеттерді шыңдауға арналған жаттығу.',
      EN: 'High-intensity functional conditioning for stamina and tone: explosive circuit work to torch calories and build full-body resilience.',
    },
  },
  {
    id: 'post-5',
    type: 'video',
    image: '/images/gym/status_cardio_treadmills.jpg',
    likes: 673,
    comments: 52,
    date: '2 недели назад',
    url: 'https://www.instagram.com/reel/DPGhKYrDJ45/',
    caption: {
      RU: 'Атмосфера вечерней тренировки в зале STATUS: кардио-линия, энергичный плейлист и правильный настрой резидентов клуба!',
      KZ: 'STATUS залындағы кешкі жаттығу атмосферасы: заманауи кардио-аймақ, серпінді көңіл-күй және спорт сүйер қауымның жігері!',
      EN: 'Evening training vibes at STATUS gym: cardio deck, pumping soundtrack, and an unmatched community focus in Aktobe.',
    },
  },
  {
    id: 'post-6',
    type: 'video',
    image: '/images/gym/status_main_hall.jpg',
    likes: 742,
    comments: 64,
    date: '2 недели назад',
    url: 'https://www.instagram.com/reel/DNSd3bFMDrV/',
    caption: {
      RU: 'Первый раз в зале? В клубе STATUS на Маресьева 4Д комфортно тренироваться каждому: просторные залы, вентиляция и дружелюбная атмосфера.',
      KZ: 'Алғаш рет залға келдіңіз бе? Маресьев 4Д мекенжайындағы STATUS клубында барлық жағдай жасалған: кең залдар, таза ауа және қолдау.',
      EN: 'First day at the gym? STATUS Aktobe offers a welcoming environment for every fitness level: spacious floor, top gear, and great energy.',
    },
  },
];

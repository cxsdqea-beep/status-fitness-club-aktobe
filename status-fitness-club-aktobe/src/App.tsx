import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Zones } from './components/Zones';
import { Trainers } from './components/Trainers';
import { Memberships } from './components/Memberships';
import { InstagramFeed } from './components/InstagramFeed';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [language, setLanguage] = useState<Language>('RU');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<
    string | { RU: string; KZ: string; EN: string } | undefined
  >(undefined);

  // Setup smooth scroll-reveal observer across sections and cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleOpenBooking = (prefill?: string | { RU: string; KZ: string; EN: string }) => {
    setBookingPrefill(prefill);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingPrefill(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#E0E0E0] selection:bg-white selection:text-black font-body">
      {/* Top Floating Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenBooking={(prefill) =>
          handleOpenBooking(
            prefill || {
              RU: 'Абонемент в клуб STATUS',
              KZ: 'STATUS клубына абонемент',
              EN: 'STATUS Club Membership',
            }
          )
        }
      />

      <main>
        {/* Hero Section */}
        <Hero
          language={language}
          onOpenBooking={() =>
            handleOpenBooking({
              RU: 'Пробная тренировка в зале',
              KZ: 'Жаттығу залында байқау сабағы',
              EN: 'Trial Gym Workout',
            })
          }
        />

        {/* About Club Section */}
        <About
          language={language}
          onOpenBooking={() =>
            handleOpenBooking({
              RU: 'Гостевой визит в клуб STATUS',
              KZ: 'STATUS клубына қонақ болып келу',
              EN: 'Guest Visit to STATUS Club',
            })
          }
        />

        {/* Services and Zones Section */}
        <Zones
          language={language}
          onOpenBooking={(zoneChoice) => {
            if (!zoneChoice) {
              handleOpenBooking({
                RU: 'Консультация по зонам зала',
                KZ: 'Зал аймақтары бойынша кеңес',
                EN: 'Gym Zones Consultation',
              });
            } else {
              handleOpenBooking(zoneChoice);
            }
          }}
        />

        {/* Trainers Section */}
        <Trainers
          language={language}
          onOpenBookingWithCoach={(coachChoice) => {
            handleOpenBooking(coachChoice);
          }}
        />

        {/* Pricing and Tariffs Section */}
        <Memberships
          language={language}
          onOpenBookingWithPlan={(planChoice) => {
            handleOpenBooking(planChoice);
          }}
        />

        {/* Instagram Feed & Community & Motivation Wall */}
        <InstagramFeed language={language} />

        {/* Contacts & Location Section */}
        <Contacts language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Booking / Trial Workout Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        language={language}
        prefillChoice={bookingPrefill}
      />

      {/* Sticky Floating WhatsApp Widget */}
      <FloatingWhatsApp language={language} />
    </div>
  );
}

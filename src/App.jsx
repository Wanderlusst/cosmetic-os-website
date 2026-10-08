'use client';

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ClinicProvider } from './context/ClinicContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import Team from './components/Team';
import Treatments from './components/Treatments';
import FatLoss from './components/FatLoss';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import ConsultationJourney from './components/ConsultationJourney';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
    });
    window.lenis = lenis;

    let animId;
    function raf(time) {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    }
    animId = requestAnimationFrame(raf);

    // Smooth anchor navigation
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -88, duration: 1.4 });
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // Lock scroll when modal open
  useEffect(() => {
    if (window.lenis) {
      bookingModalOpen ? window.lenis.stop() : window.lenis.start();
    }
  }, [bookingModalOpen]);

  // Scroll reveal via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleOpenBooking = (treatment = '') => {
    setSelectedTreatment(treatment);
    setBookingModalOpen(true);
  };

  return (
    <ClinicProvider>
      <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
        <Navbar onOpenBooking={() => handleOpenBooking('')} />

        <main>
          <Hero onOpenBooking={() => handleOpenBooking('')} />
          <TrustIndicators />
          <BeforeAfterGallery onOpenBooking={handleOpenBooking} />
          <Team onOpenBooking={handleOpenBooking} />
          <Treatments onOpenBooking={handleOpenBooking} />
          <FatLoss onOpenBooking={handleOpenBooking} />
          <Philosophy onOpenBooking={() => handleOpenBooking('')} />
          <Testimonials onOpenBooking={handleOpenBooking} />
          <ConsultationJourney onOpenBooking={() => handleOpenBooking('')} />
          <BookingSection initialTreatment={selectedTreatment} />
        </main>

        <Footer />

        <WhatsAppFloatButton />

        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          preselectedTreatment={selectedTreatment}
        />
      </div>
    </ClinicProvider>
  );
}

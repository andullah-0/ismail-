/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ExperiencePage = React.lazy(() => import('./pages/ExperiencePage').then(m => ({ default: m.ExperiencePage })));
const LocationPage = React.lazy(() => import('./pages/LocationPage').then(m => ({ default: m.LocationPage })));
const FAQPage = React.lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

// Ultra-fast lightweight loading skeleton
const PageLoadingFallback = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center py-20 px-4 animate-pulse">
    <div className="w-10 h-10 border-3 border-sky-200 border-t-sky-600 rounded-full animate-spin mb-3" />
    <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">
      Aziz Electronics
    </span>
  </div>
);

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-600 selection:text-white">
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Multi-Page Routes with Fast Lazy Loading */}
        <main className="flex-1">
          <React.Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/location" element={<LocationPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </React.Suspense>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Quick Action Buttons for Instant WhatsApp & Phone Call */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
          {/* Direct Call Button */}
          <a
            href="tel:03483440284"
            className="pointer-events-auto p-3 sm:px-4 sm:py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-lg flex items-center gap-2 transition-all hover:scale-105"
            title="Call Muhammad Ismail"
          >
            <Phone className="w-5 h-5 text-sky-600" />
            <span className="hidden sm:inline text-xs font-bold">03483440284</span>
          </a>

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20I%20need%20electric%20bike%20repair%20assistance%20at%20Aziz%20Electronics."
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 flex items-center gap-2.5 transition-all hover:scale-105"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-white/20" />
            <span className="hidden sm:inline text-sm font-extrabold tracking-wide">
              Chat on WhatsApp
            </span>
          </a>

          {/* Scroll to top */}
          {showScrollTop && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="pointer-events-auto p-2.5 rounded-full bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-md transition-all hover:scale-105"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </HashRouter>
  );
}

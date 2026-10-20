import React from 'react';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Award,
  MapPin,
  Phone,
} from 'lucide-react';
import { HeroBikeScene } from './HeroBikeScene';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Background Subtle Gradient & Grid Accents */}
      <div className="absolute inset-0 bg-radial-[at_50%_-20%] from-sky-100/50 via-slate-50 to-slate-50 pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 -ml-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition & Headings */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            {/* Experience Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-xs w-fit">
              <span className="flex h-2 w-2 rounded-full bg-sky-600" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                Muhammad Ismail • 6+ Years Field Experience
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Professional <span className="text-sky-600">Electric Bike</span> Mechanic
              </h1>
              <h2 className="text-lg sm:text-xl font-bold text-slate-700 leading-snug">
                Aziz Electronics — Reliable Electric Bike Repair &amp; Technical Services
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              With 6 years of hands-on experience, Muhammad Ismail provides reliable and
              professional electric bike mechanical and electrical repair services in D.I. Khan,
              Pakistan.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary CTA: WhatsApp */}
              <a
                href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20I%20need%20electric%20bike%20repair%20assistance%20at%20Aziz%20Electronics."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-600/25 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Contact on WhatsApp</span>
              </a>

              {/* Secondary CTA: View Services */}
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm sm:text-base border border-slate-200/90 shadow-xs transition-all hover:-translate-y-0.5"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>

              {/* Direct Call Link */}
              <a
                href="tel:03483440284"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-slate-700 hover:bg-slate-100 hover:text-sky-600 font-bold text-sm transition-colors border border-slate-200"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>03483440284</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/70 border border-slate-200/70 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    6+ Years Experience
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Specialized e-bike motor &amp; battery diagnosis
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/70 border border-slate-200/70 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Professional Service
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Honest repair estimates &amp; quality parts
                  </p>
                </div>
              </div>
            </div>

            {/* Workshop Location Tag */}
            <div className="flex items-center gap-2.5 text-xs text-slate-600 pt-1">
              <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
              <span className="font-medium">
                Saddar Bazaar, Saddar Market, Aziz Electronics, Dera Ismail Khan, Pakistan
              </span>
            </div>
          </div>

          {/* Right Column: 3D Interactive Model Visual */}
          <div className="lg:col-span-6 relative">
            <HeroBikeScene />
          </div>
        </div>
      </div>
    </section>
  );
};

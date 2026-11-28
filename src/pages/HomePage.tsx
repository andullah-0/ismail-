import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  Wrench,
  ChevronRight,
  Cpu,
  HelpCircle,
  UserCheck,
  Camera,
} from 'lucide-react';
const HeroBikeScene = React.lazy(() =>
  import('../components/HeroBikeScene').then((m) => ({ default: m.HeroBikeScene }))
);
import logoImg from '../assets/logo.png';

export const HomePage: React.FC = () => {

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-20 overflow-hidden">
        {/* Background Subtle Gradient & Grid Accents */}
        <div className="absolute inset-0 bg-radial-[at_50%_-20%] from-sky-100/50 via-slate-50 to-slate-50 pointer-events-none -z-10" />
        <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-0 -ml-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Core Value Proposition & Headings */}
            <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
              {/* Brand Logo & Profile Pills */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Official Aziz Electronics Brand Logo Badge */}
                <div className="inline-flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-white border border-slate-200/90 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-white ring-2 ring-sky-500 overflow-hidden p-0.5 flex items-center justify-center shadow-xs shrink-0">
                    <img
                      src={logoImg}
                      alt="Aziz Electronics Logo"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = '/logo.png';
                      }}
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                      Aziz Electronics
                    </span>
                    <span className="text-[11px] text-sky-600 font-bold uppercase tracking-wider">
                      Official E-Bike Workshop
                    </span>
                  </div>
                </div>

                {/* Profile Pill featuring Muhammad Ismail's portrait */}
                <div className="inline-flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-white border border-slate-200/90 shadow-xs">
                  <img
                    src="/assets/aistudio/ismail_b3d8f62b.png"
                    alt="Muhammad Ismail - Electric Bike Mechanic"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-sky-500 shadow-xs shrink-0"
                  />
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                        Muhammad Ismail
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[11px] text-sky-600 font-bold uppercase tracking-wider">
                      6+ Years Field Experience
                    </span>
                  </div>
                </div>
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

                {/* Secondary CTA: View Services Page */}
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm sm:text-base border border-slate-200/90 shadow-xs transition-all hover:-translate-y-0.5"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </Link>

                {/* Secondary CTA: Workshop Gallery Page */}
                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-white hover:bg-sky-50 text-slate-800 hover:text-sky-700 font-bold text-sm border border-slate-200 shadow-xs transition-all hover:-translate-y-0.5"
                >
                  <Camera className="w-4 h-4 text-sky-600" />
                  <span>Gallery</span>
                </Link>

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
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 border border-slate-200/70 shadow-xs">
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

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 border border-slate-200/70 shadow-xs">
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

            {/* Right Column: Interactive 3D Motorbike Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative min-h-[380px] sm:min-h-[460px]">
                <React.Suspense
                  fallback={
                    <div className="w-full aspect-video min-h-[380px] sm:min-h-[460px] rounded-3xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center text-slate-400 gap-3 shadow-2xl">
                      <div className="w-8 h-8 border-3 border-sky-400/30 border-t-sky-400 rounded-full animate-spin" />
                      <span className="text-xs font-semibold text-sky-400 tracking-wider uppercase">
                        Loading 3D Motorbike...
                      </span>
                    </div>
                  }
                >
                  <HeroBikeScene />
                </React.Suspense>

                {/* Floating Mechanic Badge Card on 3D View */}
                <div className="absolute -bottom-5 left-4 sm:left-6 z-20 flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl max-w-[280px] sm:max-w-xs transition-all hover:scale-105">
                  <img
                    src="/assets/aistudio/ismail_b3d8f62b.png"
                    alt="Muhammad Ismail"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover ring-2 ring-sky-500 shadow-sm shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        Muhammad Ismail
                      </h4>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    </div>
                    <p className="text-[11px] font-semibold text-sky-600 truncate">
                      Master E-Bike Mechanic
                    </p>
                    <p className="text-[10px] text-slate-500 truncate">
                      Aziz Electronics • D.I. Khan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section on Home Page */}
      <section className="py-12 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
              Explore Aziz Electronics
            </h3>
            <p className="text-sm text-slate-600">
              Select a section below to learn more about our expertise, repair services, FAQs, and
              workshop location.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* About Card */}
            <Link
              to="/about"
              className="group p-5 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-11 h-11 mb-3.5 group-hover:scale-110 transition-transform shrink-0">
                  <div className="w-11 h-11 rounded-2xl overflow-hidden ring-2 ring-sky-500 shadow-md">
                    <img
                      src="/assets/aistudio/ismail_thumb.webp"
                      alt="Muhammad Ismail"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/aistudio/ismail_b3d8f62b.png';
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center ring-2 ring-white">
                    <UserCheck className="w-2.5 h-2.5" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-1.5">
                  About Muhammad Ismail
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  6 years hands-on experience and technical background.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-sky-600">
                <span>Profile</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Services Card */}
            <Link
              to="/services"
              className="group p-5 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-11 h-11 mb-3.5 group-hover:scale-110 transition-transform shrink-0">
                  <div className="w-11 h-11 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md shadow-sky-600/30">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full overflow-hidden ring-1 ring-white shadow-xs">
                    <img
                      src="/assets/aistudio/ismail_thumb.webp"
                      alt="Muhammad Ismail"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/aistudio/ismail_b3d8f62b.png';
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-1.5">
                  Our Services
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Motor repair, diagnostics, battery testing &amp; wiring.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-sky-600">
                <span>Services</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Experience Card */}
            <Link
              to="/experience"
              className="group p-5 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-1.5">
                  Experience &amp; Process
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Timeline of field work &amp; 4-step repair process.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-sky-600">
                <span>Timeline</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Location Card */}
            <Link
              to="/location"
              className="group p-5 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-1.5">
                  Workshop Location
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Saddar Bazaar, Saddar Market, D.I. Khan map &amp; hours.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-sky-600">
                <span>Map &amp; Hours</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* FAQ Card */}
            <Link
              to="/faq"
              className="group p-5 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-1.5">
                  Repair FAQs
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Turnaround times, spare parts availability &amp; batteries.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-sky-600">
                <span>Read FAQs</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Workshop Gallery Card */}
            <Link
              to="/gallery"
              className="group p-5 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                  <Camera className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-1.5">
                  Workshop Gallery
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Workshop repair video &amp; Muhammad Ismail official showcase.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-sky-600">
                <span>View Gallery</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

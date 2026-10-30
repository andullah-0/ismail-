import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  Wrench,
  Sparkles,
  ChevronRight,
  Cpu,
  HelpCircle,
  UserCheck,
  Box,
  Play,
  Pause,
  Video,
  Volume2,
  VolumeX,
  ExternalLink,
} from 'lucide-react';
import { HeroBikeScene } from '../components/HeroBikeScene';
import logoImg from '../assets/logo.png';

export const HomePage: React.FC = () => {
  const [activeHeroView, setActiveHeroView] = useState<'video' | '3d' | 'photo'>('video');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

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

                {/* Watch Video Button */}
                <button
                  type="button"
                  onClick={() => setActiveHeroView('video')}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-xs ${
                    activeHeroView === 'video'
                      ? 'bg-rose-50 text-rose-700 border border-rose-300'
                      : 'bg-white hover:bg-rose-50 text-slate-800 hover:text-rose-700 border border-slate-200'
                  }`}
                >
                  <Play className="w-4 h-4 fill-rose-600 text-rose-600" />
                  <span>Watch Video</span>
                </button>

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

            {/* Right Column: Hero Visual Showcase (Workshop Video + 3D Model + Muhammad Ismail Portrait) */}
            <div className="lg:col-span-6 relative">
              {/* Visual Switcher Tabs */}
              <div className="flex items-center justify-end gap-2 mb-3">
                <div className="inline-flex p-1 rounded-2xl bg-white/95 border border-slate-200 shadow-xs backdrop-blur-md">
                  <button
                    onClick={() => setActiveHeroView('video')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeHeroView === 'video'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Workshop Video</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                  </button>
                  <button
                    onClick={() => setActiveHeroView('3d')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeHeroView === '3d'
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>3D Motorbike</span>
                  </button>
                  <button
                    onClick={() => setActiveHeroView('photo')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeHeroView === 'photo'
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Muhammad Ismail</span>
                  </button>
                </div>
              </div>

              {/* Main Visual Display */}
              <div className="relative">
                {activeHeroView === 'video' ? (
                  /* Dedicated Hero Native Video Showcase Card */
                  <div className="relative w-full rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col text-white">
                    {/* Video Header Bar */}
                    <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-slate-800/80 backdrop-blur-md">
                      <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                              Hybrid Motorcycle Conversion &amp; E-Bike Repair
                            </h4>
                            <span className="hidden md:inline-flex text-[10px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30">
                              4:13 Video
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-400">
                            Muhammad Ismail • Aziz Electronics, D.I. Khan
                          </p>
                        </div>
                      </div>

                      {/* Header Controls: Mute/Unmute & Play/Pause */}
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={togglePlay}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors border border-slate-700"
                          title={isPlaying ? 'Pause Video' : 'Play Video'}
                        >
                          {isPlaying ? (
                            <>
                              <Pause className="w-3.5 h-3.5 fill-current" />
                              <span className="hidden xs:inline">Pause</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 fill-current text-emerald-400" />
                              <span className="hidden xs:inline text-emerald-400">Play</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={toggleMute}
                          className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
                          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4 text-slate-400" />
                          ) : (
                            <Volume2 className="w-4 h-4 text-emerald-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Actual Native HTML5 Video Element Container */}
                    <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden group">
                      <video
                        ref={videoRef}
                        src="/videos/repair_workshop.mp4"
                        poster="/assets/aistudio/ismail_b3d8f62b.png"
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        controls
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        className="w-full h-full object-cover sm:object-contain bg-black"
                      />
                    </div>

                    {/* Video Description & Action Bar */}
                    <div className="p-4 sm:p-5 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-900/95 border-t border-slate-800/80 space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <img
                            src="/assets/aistudio/ismail_b3d8f62b.png"
                            alt="Muhammad Ismail"
                            className="w-10 h-10 rounded-xl object-cover ring-2 ring-emerald-500/80 shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h5 className="text-xs sm:text-sm font-bold text-white">
                                Muhammad Ismail
                              </h5>
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                                Verified Master Craftsman
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400">
                              Aziz Electronics • Saddar Bazaar, Dera Ismail Khan
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setActiveHeroView('3d')}
                            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
                          >
                            <Box className="w-3.5 h-3.5" />
                            <span>3D Motorbike</span>
                          </button>
                        </div>
                      </div>

                      {/* Video Context Note */}
                      <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/70">
                        <span className="font-semibold text-sky-400">Featured Video: </span>
                        Watch Muhammad Ismail demonstrate the hybrid electric motorcycle conversion process, reducing fuel costs and enhancing motorbike performance.
                      </p>

                      <div className="flex items-center gap-2 pt-1">
                        <a
                          href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20I%20watched%20your%20hybrid%20motorcycle%20video%20and%20need%20electric%20bike%20service."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                        >
                          <MessageCircle className="w-4 h-4 fill-white/20" />
                          <span>Contact Muhammad Ismail on WhatsApp</span>
                        </a>

                        <a
                          href="https://www.facebook.com/share/p/19TcxmwsjY/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700 shrink-0"
                          title="Original Facebook Post"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                          <span>Facebook Post</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : activeHeroView === '3d' ? (
                  <div className="relative">
                    <HeroBikeScene />

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
                ) : (
                  /* Dedicated Full-Size Portrait Card of Muhammad Ismail */
                  <div className="relative w-full h-[480px] lg:h-[580px] rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-end p-6 sm:p-8 text-white group">
                    {/* Background Full Photo */}
                    <img
                      src="/assets/aistudio/ismail_b3d8f62b.png"
                      alt="Muhammad Ismail - Electric Bike Mechanic"
                      className="absolute inset-0 w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay for Readable Typography */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Top Status Tag */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Muhammad Ismail • On Duty</span>
                      </div>
                      <span className="px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                        Aziz Electronics
                      </span>
                    </div>

                    {/* Bottom Info Overlay */}
                    <div className="relative z-10 space-y-3">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          Muhammad Ismail
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-sky-400">
                          Electric Bike Specialist &amp; Workshop Technician
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-slate-200">
                          6+ Years Experience
                        </span>
                        <span className="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-slate-200">
                          Saddar Bazaar, D.I. Khan
                        </span>
                        <span className="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-slate-200">
                          BLDC &amp; Battery Diagnostics
                        </span>
                      </div>

                      <div className="pt-2 flex items-center gap-3">
                        <a
                          href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20I%20saw%20your%20portfolio%20and%20need%20electric%20bike%20repair."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg"
                        >
                          <MessageCircle className="w-4 h-4 fill-white/20" />
                          <span>Direct WhatsApp</span>
                        </a>

                        <button
                          onClick={() => setActiveHeroView('video')}
                          className="py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 backdrop-blur-md text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
                        >
                          <Play className="w-4 h-4 fill-current" />
                          <span>Watch Video</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {/* About Card */}
            <Link
              to="/about"
              className="group p-5 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-11 h-11 mb-3.5 group-hover:scale-110 transition-transform shrink-0">
                  <div className="w-11 h-11 rounded-2xl overflow-hidden ring-2 ring-sky-500 shadow-md">
                    <img
                      src="/assets/aistudio/ismail_b3d8f62b.png"
                      alt="Muhammad Ismail"
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
                      src="/assets/aistudio/ismail_b3d8f62b.png"
                      alt="Muhammad Ismail"
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
          </div>
        </div>
      </section>
    </div>
  );
};

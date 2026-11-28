import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  ExternalLink,
  Video,
  Wrench,
} from 'lucide-react';

type GalleryCategory = 'all' | 'video' | 'mechanic';

interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'all'>;
  categoryLabel: string;
  dateLabel: string;
  specLabel: string;
  description: string;
  mediaType: 'image' | 'video';
  src: string;
  fallbackSrc?: string;
  poster?: string;
  alt: string;
  externalUrl?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'workshop-video',
    title: 'Hybrid Motorcycle Conversion & E-Bike Repair Reel',
    category: 'video',
    categoryLabel: 'Workshop Video',
    dateLabel: '4:13 HD Footage',
    specLabel: 'D.I. Khan Workshop',
    description:
      'Original shop footage from Aziz Electronics demonstrating hybrid fuel-to-electric motorcycle conversion, BLDC hub motor road testing, and controller wiring calibration by Muhammad Ismail.',
    mediaType: 'video',
    src: '/videos/repair_workshop.mp4',
    alt: 'Aziz Electronics Workshop Repair Video by Muhammad Ismail',
    externalUrl: 'https://www.facebook.com/share/p/19TcxmwsjY/',
  },
  {
    id: 'ismail-portrait',
    title: 'Muhammad Ismail — Lead Electric Bike Specialist',
    category: 'mechanic',
    categoryLabel: 'Lead Mechanic',
    dateLabel: '6+ Years Experience',
    specLabel: 'Aziz Electronics',
    description:
      'Muhammad Ismail leads every diagnostic inspection, stator rewind, lithium pack rebuild, and hybrid bike conversion at Aziz Electronics in Saddar Bazaar, Dera Ismail Khan.',
    mediaType: 'image',
    src: '/assets/aistudio/ismail.webp',
    fallbackSrc: '/assets/aistudio/ismail_b3d8f62b.png',
    alt: 'Muhammad Ismail - Electric Bike Mechanic at Aziz Electronics',
  },
];

export const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const showVideo = activeFilter === 'all' || activeFilter === 'video';
  const showPortrait = activeFilter === 'all' || activeFilter === 'mechanic';

  const togglePlay = () => {
    const video = heroVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = heroVideoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const navigateLightbox = useCallback(
    (direction: 'prev' | 'next') => {
      if (!lightboxItem) return;
      const currentIdx = GALLERY_ITEMS.findIndex((i) => i.id === lightboxItem.id);
      if (currentIdx === -1) return;
      const nextIdx =
        direction === 'next'
          ? (currentIdx + 1) % GALLERY_ITEMS.length
          : (currentIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
      setLightboxItem(GALLERY_ITEMS[nextIdx]);
    },
    [lightboxItem]
  );

  useEffect(() => {
    if (!lightboxItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxItem(null);
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem, navigateLightbox]);

  const filterButtons: { id: GalleryCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Media', count: GALLERY_ITEMS.length },
    {
      id: 'video',
      label: 'Workshop Video',
      count: GALLERY_ITEMS.filter((i) => i.category === 'video').length,
    },
    {
      id: 'mechanic',
      label: 'Muhammad Ismail',
      count: GALLERY_ITEMS.filter((i) => i.category === 'mechanic').length,
    },
  ];

  const featuredVideo = GALLERY_ITEMS[0];
  const featuredPortrait = GALLERY_ITEMS[1];

  return (
    <div className="flex flex-col bg-slate-50">
      {/* Page Header */}
      <section className="bg-white border-b border-slate-200/80 pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4">
            <Link to="/" className="hover:text-sky-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-sky-600 font-bold">Gallery</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                Aziz Electronics • Saddar Bazaar, D.I. Khan
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight text-balance">
                Workshop Gallery &amp; Media Showcase
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">
                Watch authentic workshop repair video footage and view lead mechanic Muhammad
                Ismail’s official showcase from Aziz Electronics in Dera Ismail Khan.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20I%20viewed%20your%20workshop%20gallery%20and%20need%20e-bike%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-sm transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Repair on WhatsApp</span>
              </a>
              <a
                href="tel:03483440284"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>03483440284</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Split Showcase: Workshop Video + Muhammad Ismail Portrait */}
      <section className="py-12 border-b border-slate-200/70 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Featured Workshop Highlights
              </h2>
              <p className="text-sm text-slate-600">
                Live shop video demonstration alongside lead mechanic Muhammad Ismail
              </p>
            </div>

            {/* Interactive Segmented Filter Control */}
            <div
              className="flex flex-wrap items-center gap-1 p-1 bg-white rounded-xl border border-slate-200/80 self-start md:self-auto"
              role="tablist"
              aria-label="Filter gallery items"
            >
              {filterButtons.map((btn) => (
                <button
                  key={btn.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === btn.id}
                  onClick={() => setActiveFilter(btn.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeFilter === btn.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {btn.label}{' '}
                  <span
                    className={`tabular-nums ${
                      activeFilter === btn.id ? 'text-slate-300' : 'text-slate-400'
                    }`}
                  >
                    ({btn.count})
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Featured Workshop Video */}
            {showVideo && (
              <div
                className={`${
                  showPortrait ? 'lg:col-span-7' : 'lg:col-span-12'
                } rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between shadow-lg`}
              >
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-slate-800 text-white">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Video className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold truncate">
                    {featuredVideo.title}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-100 transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-slate-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightboxItem(featuredVideo)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                    aria-label="Expand workshop video"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative w-full aspect-video bg-black flex-1 flex items-center justify-center">
                <video
                  ref={heroVideoRef}
                  src={featuredVideo.src}
                  poster={featuredVideo.poster}
                  controls
                  playsInline
                  muted={isMuted}
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-contain bg-black"
                />
              </div>

              <div className="px-5 py-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-sky-400 font-semibold">Workshop Reel</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">4:13 Duration</span>
                    <span aria-hidden="true">·</span>
                    <span>D.I. Khan</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                    {featuredVideo.description}
                  </p>
                </div>
                {featuredVideo.externalUrl && (
                  <a
                    href={featuredVideo.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-400 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 self-start sm:self-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Facebook Post</span>
                  </a>
                )}
              </div>
              </div>
            )}

            {/* Featured Muhammad Ismail Portrait */}
            {showPortrait && (
              <div
                className={`${
                  showVideo
                    ? 'lg:col-span-5 min-h-[420px] lg:min-h-0'
                    : 'lg:col-span-6 lg:col-start-4 min-h-[500px]'
                } relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 flex flex-col justify-end group shadow-lg`}
              >
              <img
                src={featuredPortrait.src}
                alt={featuredPortrait.alt}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (featuredPortrait.fallbackSrc) {
                    e.currentTarget.src = featuredPortrait.fallbackSrc;
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />

              <button
                type="button"
                onClick={() => setLightboxItem(featuredPortrait)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-slate-950/75 hover:bg-slate-950 text-white border border-white/15 transition-colors cursor-pointer"
                aria-label="Enlarge Muhammad Ismail photo"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              <div className="relative z-10 p-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs text-sky-300 font-semibold">
                  <span>Lead Technician</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">6+ Years Experience</span>
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">
                  Muhammad Ismail
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {featuredPortrait.description}
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setLightboxItem(featuredPortrait)}
                    className="text-sky-300 hover:text-white transition-colors cursor-pointer"
                  >
                    View Full Portrait
                  </button>
                  <span className="text-slate-500" aria-hidden="true">
                    ·
                  </span>
                  <Link
                    to="/about"
                    className="text-slate-200 hover:text-white transition-colors"
                  >
                    Read Technician Profile
                  </Link>
                </div>
              </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Workshop CTA Strip */}
      <section className="py-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Need an Electric Bike Repair or Hybrid Conversion?
            </h2>
            <p className="text-sm text-slate-300">
              Visit Aziz Electronics in Saddar Bazaar, D.I. Khan or message Muhammad Ismail on
              WhatsApp with a photo of your bike issue.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20I%20need%20help%20with%20my%20electric%20bike."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-sm font-bold transition-colors whitespace-nowrap"
            >
              <Wrench className="w-4 h-4 text-sky-400" />
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 text-white">
              <div className="min-w-0 pr-4">
                <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold">
                  <span>{lightboxItem.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{lightboxItem.dateLabel}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold truncate mt-0.5">
                  {lightboxItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => navigateLightbox('prev')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                  aria-label="Previous item"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigateLightbox('next')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                  aria-label="Next item"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxItem(null)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-rose-600 text-white transition-colors cursor-pointer"
                  aria-label="Close lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Lightbox Media Canvas */}
            <div className="relative bg-black flex-1 min-h-[280px] sm:min-h-[420px] max-h-[68vh] flex items-center justify-center overflow-hidden">
              {lightboxItem.mediaType === 'video' ? (
                <video
                  src={lightboxItem.src}
                  poster={lightboxItem.poster}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full max-h-[68vh] object-contain bg-black"
                />
              ) : (
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.alt}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (lightboxItem.fallbackSrc) {
                      e.currentTarget.src = lightboxItem.fallbackSrc;
                    }
                  }}
                  className="w-full h-full max-h-[68vh] object-contain"
                />
              )}
            </div>

            {/* Bottom Description */}
            <div className="px-5 py-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                {lightboxItem.description}
              </p>
              <a
                href={`https://wa.me/923483440284?text=${encodeURIComponent(
                  `Hello Muhammad Ismail, I have a question regarding "${lightboxItem.title}" from your Aziz Electronics gallery.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold whitespace-nowrap shrink-0 self-start sm:self-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

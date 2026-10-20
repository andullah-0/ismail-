import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, MessageCircle, Phone, Clock, ArrowLeft } from 'lucide-react';
import { LocationSection } from '../components/LocationSection';

export const LocationPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-sky-50 via-slate-50 to-white pt-10 pb-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4">
            <Link to="/" className="hover:text-sky-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-sky-600 font-bold">Location &amp; Workshop</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-sky-700 uppercase tracking-wider shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>Workshop In Dera Ismail Khan</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Workshop Location &amp; Directions
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Visit Aziz Electronics centrally situated in Saddar Bazaar, Saddar Market, Dera Ismail
              Khan, Pakistan. See our shop operating hours, interactive map, and directions below.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://maps.google.com/?q=Saddar+Bazaar+Dera+Ismail+Khan+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-sky-600/20 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20please%20send%20your%20exact%20shop%20location%20pin%20in%20Saddar%20Bazaar."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Get Pin on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section Component */}
      <LocationSection />
    </div>
  );
};

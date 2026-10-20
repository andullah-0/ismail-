import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, MessageCircle, Phone, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Services } from '../components/Services';

export const ServicesPage: React.FC = () => {
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
            <span className="text-sky-600 font-bold">Services</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2.5 p-1 pr-4 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              <div className="relative w-7 h-7 shrink-0">
                <img
                  src="/assets/aistudio/ismail_b3d8f62b.png"
                  alt="Muhammad Ismail"
                  className="w-7 h-7 rounded-full object-cover ring-2 ring-sky-500"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-sky-600 text-white flex items-center justify-center ring-1 ring-white">
                  <Wrench className="w-1.5 h-1.5" />
                </div>
              </div>
              <span>Muhammad Ismail • E-Bike Diagnostic &amp; Repair Services</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Electric Bike Repair &amp; Maintenance Services
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Specialized mechanical and electrical repair for all electric bike models in D.I. Khan.
              From BLDC hub motors and lithium batteries to controllers and custom wiring looms.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20I%20need%20electric%20bike%20repair%20services%20at%20Aziz%20Electronics."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                href="tel:03483440284"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call: 03483440284</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Component */}
      <Services />
    </div>
  );
};

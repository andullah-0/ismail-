import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, MessageCircle, Phone, ArrowLeft, Clock, Wrench } from 'lucide-react';
import { FAQ } from '../components/FAQ';

export const FAQPage: React.FC = () => {
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
            <span className="text-sky-600 font-bold">FAQs</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-sky-700 uppercase tracking-wider shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
              <span>Got Questions? We Have Answers</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Find transparent, detailed answers regarding repair turnaround times, replacement
              parts availability, battery testing, and workshop procedures at Aziz Electronics in
              Dera Ismail Khan.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20I%20have%20a%20question%20about%20my%20electric%20bike."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Ask on WhatsApp</span>
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

      {/* Main FAQ Accordion Component */}
      <FAQ />
    </div>
  );
};

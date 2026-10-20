import React from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* Subtle Accent Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sky-400 border border-white/10 text-xs font-bold uppercase tracking-wider mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Workshop Contact</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Need Electric Bike Repair?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Contact Muhammad Ismail at Aziz Electronics for professional electric bike repair
                and maintenance services in Saddar Bazaar, Saddar Market, Aziz Electronics, Dera
                Ismail Khan.
              </p>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 max-w-lg mx-auto space-y-2 backdrop-blur-md">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
                Phone / WhatsApp
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-white block">
                03483440284
              </span>
              <p className="text-xs text-slate-400 pt-1">
                Direct communication with Muhammad Ismail • Fast response on WhatsApp
              </p>
            </div>

            {/* Two Prominent Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 max-w-md mx-auto">
              {/* WhatsApp Now */}
              <a
                href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20I%20need%20electric%20bike%20repair%20assistance%20at%20Aziz%20Electronics."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 py-4 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>WhatsApp Now</span>
              </a>

              {/* Call Now */}
              <a
                href="tel:03483440284"
                className="w-full sm:w-auto flex-1 py-4 px-8 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-base shadow-lg flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 text-sky-600" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Workshop Quick Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-rose-400 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">Location</span>
                  <span className="text-[11px] text-slate-400 block">Saddar Bazaar, D.I. Khan</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                <Clock className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">Workshop Hours</span>
                  <span className="text-[11px] text-slate-400 block">Mon – Sun: 9 AM – 8 PM</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">Experience</span>
                  <span className="text-[11px] text-slate-400 block">6+ Years E-Bike Repair</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, MessageCircle } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-sky-700 uppercase tracking-wider shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Workshop Location</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Aziz Electronics — D.I. Khan
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Conveniently situated in the heart of Saddar Bazaar, Saddar Market, Dera Ismail Khan,
            Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Workshop Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  Workshop Address
                </span>
                <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                  Aziz Electronics
                </h3>
                <p className="text-base text-slate-700 font-medium">
                  Saddar Bazaar, Saddar Market, Aziz Electronics, Dera Ismail Khan, Pakistan
                </p>
              </div>

              {/* Operating Hours */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Workshop Hours</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between font-medium">
                    <span>Monday – Thursday:</span>
                    <span className="font-bold text-slate-800">9:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Friday:</span>
                    <span className="font-bold text-slate-800">9:00 AM – 12:30 PM &amp; 3:00 PM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Saturday – Sunday:</span>
                    <span className="font-bold text-slate-800">9:00 AM – 8:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                  <div>
                    <span className="text-slate-500 font-medium block">Phone / WhatsApp</span>
                    <a
                      href="tel:03483440284"
                      className="font-bold text-slate-900 hover:text-sky-600 transition-colors"
                    >
                      03483440284
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=Saddar+Bazaar+Dera+Ismail+Khan+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20could%20you%20please%20share%20your%20exact%20shop%20location%20pin%20in%20Saddar%20Bazaar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl border border-slate-300 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Request Pin on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Interactive Map Visual */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col">
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center">
              {/* Clean Leaflet / Google Maps stylized representation */}
              <iframe
                title="Aziz Electronics Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13707.38883652613!2d70.8953158!3d31.8314115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39265f2425555555%3A0x6b4cf72d1f9ec396!2sSaddar%20Bazaar%2C%20Dera%20Ismail%20Khan%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full border-0 filter contrast-95 brightness-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Landmark Callout Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Aziz Electronics Workshop
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Saddar Bazaar, Saddar Market, D.I. Khan
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Saddar+Bazaar+Dera+Ismail+Khan+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-4 text-center">
              Located centrally in Saddar Market. For exact landmarks, feel free to give a quick
              call or send a WhatsApp message before visiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

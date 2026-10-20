import React from 'react';
import {
  Award,
  ShieldCheck,
  Zap,
  Cpu,
  HeartHandshake,
  MessageCircle,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: '6 Years of Experience',
      desc: 'Proven, battle-tested mechanical and electrical expertise dedicated exclusively to light electric vehicles.',
      icon: <Award className="w-6 h-6 text-sky-600" />,
    },
    {
      title: 'Professional Work',
      desc: 'Strict attention to detail, secure wiring solders, torqued fasteners, and clean workshop standards.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: 'Reliable Service',
      desc: 'Honest diagnostics with clear explanations so you know exactly what is wrong and how it was resolved.',
      icon: <Zap className="w-6 h-6 text-amber-500" />,
    },
    {
      title: 'Practical Technical Knowledge',
      desc: 'Deep understanding of BLDC motor phase angles, hall sensor timing, BMS limits, and controller logic.',
      icon: <Cpu className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: 'Customer-Focused Approach',
      desc: 'Friendly guidance on daily charging best practices, battery preservation, and maintenance habits.',
      icon: <HeartHandshake className="w-6 h-6 text-rose-500" />,
    },
    {
      title: 'Convenient WhatsApp Contact',
      desc: 'Instant direct messaging on 03483440284 with Muhammad Ismail for video clips, quotes, and advice.',
      icon: <MessageCircle className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: 'Local Service in D.I. Khan',
      desc: 'Centrally situated in Saddar Bazaar, Saddar Market, easily accessible for all Dera Ismail Khan residents.',
      icon: <MapPin className="w-6 h-6 text-sky-600" />,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-sky-700 uppercase tracking-wider shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
            <span>Built on Trust &amp; Craft</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Why Choose Aziz Electronics?
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Dedicated e-bike craftsmanship backed by practical electrical troubleshooting, prompt
            communication, and genuine respect for your ride.
          </p>
        </div>

        {/* 7 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {points.map((pt, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between ${
                i === 0 ? 'xl:col-span-2 bg-gradient-to-br from-white via-sky-50/30 to-white' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-5 shadow-xs">
                  {pt.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{pt.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-sky-600">
                <span>Verified Quality Standards</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

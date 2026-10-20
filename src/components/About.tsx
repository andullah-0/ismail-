import React, { useState, useEffect } from 'react';
import {
  Wrench,
  Check,
  Cpu,
  BatteryCharging,
  Gauge,
  Sparkles,
  PhoneCall,
  UserCheck,
} from 'lucide-react';

export const About: React.FC = () => {
  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 6;
    const duration = 1200;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setYearsCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const technicalStrengths = [
    'BLDC Hub & Mid-Drive Motor Diagnostics',
    'Lithium-Ion Battery Health & BMS Cell Balancing',
    'Speed Controller Troubleshooting & MOSFET Testing',
    'Custom Wiring Looms, Water-Resistant Connectors & Throttles',
    'Hydraulic & Mechanical Disc Brake Calibration',
    'Electrical Leakage, Short Circuit & Fuse Isolation',
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mechanic Technical Profile Card / Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-2xl border border-slate-700/50">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/aistudio/ismail_b3d8f62b.png"
                      alt="Muhammad Ismail"
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-sky-400 shadow-md shrink-0"
                    />
                    <div>
                      <h3 className="font-extrabold text-xl tracking-tight text-white">
                        Muhammad Ismail
                      </h3>
                      <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                        Master E-Bike Technician
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-slate-200 border border-white/10">
                    Aziz Electronics
                  </span>
                </div>

                {/* Animated Experience Stat Box */}
                <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-sky-400 font-mono tracking-tight flex items-center">
                      <span>{yearsCount}</span>
                      <span className="text-3xl text-sky-300">+</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">
                      Years Hands-On Experience
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Gauge className="w-7 h-7" />
                  </div>
                </div>

                {/* Core Workshop Highlights */}
                <div className="space-y-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <Cpu className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Micro-circuit diagnostics &amp; brushless motor hall sensors</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <BatteryCharging className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>36V, 48V, 60V, and 72V pack troubleshooting</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <Wrench className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Located at Saddar Bazaar, Saddar Market, D.I. Khan</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:03483440284"
                    className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Direct Call: 03483440284</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-xs font-bold uppercase tracking-wider w-fit">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>About The Mechanic</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              About Muhammad Ismail
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Muhammad Ismail is an experienced electric bike mechanic with 6 years of practical
              experience in diagnosing, repairing, and maintaining electric bikes and their
              electrical and mechanical systems. Through Aziz Electronics, he provides dependable
              technical services focused on quality workmanship and customer satisfaction.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Electric bikes require a unique combination of mechanical tuning and precision
              electrical troubleshooting. Whether dealing with intermittent power loss, motor hub
              vibrations, faulty throttle signals, battery drain, or complex controller wiring,
              Muhammad approaches every job with deep diagnostic rigor and transparent service.
            </p>

            {/* Key Capabilities Grid */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Practical Technical Knowledge &amp; Diagnostics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {technicalStrengths.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700"
                  >
                    <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

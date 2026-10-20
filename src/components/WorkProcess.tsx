import React from 'react';
import { Phone, Search, Wrench, Bike, ArrowRight } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Contact',
      desc: 'Contact Aziz Electronics through WhatsApp or phone.',
      details: 'Reach out to Muhammad Ismail directly on 03483440284 to discuss your bike symptoms or schedule a drop-off.',
      icon: <Phone className="w-6 h-6 text-sky-600" />,
    },
    {
      step: '02',
      title: 'Diagnosis',
      desc: "Identify the electric bike's mechanical or electrical issue.",
      details: 'Comprehensive probing of the motor phases, throttle signal, battery voltage under load, and mechanical components.',
      icon: <Search className="w-6 h-6 text-amber-500" />,
    },
    {
      step: '03',
      title: 'Repair',
      desc: 'Perform the required repair or maintenance.',
      details: 'Meticulous replacement or servicing of damaged parts, precision soldering, water-sealing, and calibration.',
      icon: (
        <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
          <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-xs">
            <Wrench className="w-5 h-5" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full overflow-hidden ring-1.5 ring-white">
            <img
              src="/assets/aistudio/ismail_b3d8f62b.png"
              alt="Muhammad Ismail"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      ),
    },
    {
      step: '04',
      title: 'Ready to Ride',
      desc: 'Return the bike after completing the service.',
      details: 'Final dynamic road test, brake confirmation, and customer handover with clear maintenance advice.',
      icon: <Bike className="w-6 h-6 text-emerald-600" />,
    },
  ];

  return (
    <section id="process" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-xs font-bold uppercase tracking-wider">
            <span>Simple &amp; Transparent</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Work Process
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            A straightforward 4-step workflow designed to get your electric bike back on the road
            quickly and safely.
          </p>
        </div>

        {/* Horizontal Timeline (Desktop) & Vertical (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st, idx) => (
            <div
              key={st.step}
              className="relative bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono text-slate-300 group-hover:text-sky-600 transition-colors">
                    {st.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                    {st.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{st.title}</h3>

                <p className="text-sm font-semibold text-slate-800 mb-2 leading-snug">
                  {st.desc}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed">{st.details}</p>
              </div>

              {/* Progress Connector (Visible on desktop between items except last) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-slate-400">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

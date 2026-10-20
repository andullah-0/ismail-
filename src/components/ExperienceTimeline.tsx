import React from 'react';
import { Award, Calendar, CheckCircle2, Cpu, Wrench, Shield, Zap } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const milestones = [
    {
      period: '2020 — Present',
      title: 'Senior Electric Bike Mechanic & Workshop Lead',
      company: 'Aziz Electronics, Saddar Bazaar, D.I. Khan',
      description:
        'Established dedicated e-bike diagnostics facility in Saddar Market. Specializing in advanced BLDC motor overhaul, hall sensor replacements, 48V/60V lithium battery health diagnostics, and electronic speed controller circuit repair.',
      tags: ['BLDC Overhauls', 'Lithium Batteries', 'MOSFET Controllers', 'Wiring Harnesses'],
      icon: <Award className="w-5 h-5 text-sky-600" />,
    },
    {
      period: '2022 — 2024',
      title: 'Power System & Controller Specialization',
      company: 'Electric Mobility Solutions',
      description:
        'Focused on power delivery troubleshooting: diagnosing erratic throttle signals, voltage drop under hill climbs, regenerative braking faults, and water ingress damage in monsoon seasons.',
      tags: ['Throttle Systems', 'Regen Braking', 'Waterproofing', 'Power Delivery'],
      icon: <Zap className="w-5 h-5 text-amber-600" />,
    },
    {
      period: '2020 — 2022',
      title: 'Foundation in Electrical & Mechanical E-Bike Engineering',
      company: 'Electronics & Micro-circuitry Practice',
      description:
        'Hands-on mastery of mechanical transmission, brake disc truing, hub bearing presses, multi-meter electrical probing, and custom wire soldering for light electric vehicles.',
      tags: ['Circuit Probing', 'Mechanical Truing', 'Soldering', 'System Tuning'],
      icon: <Wrench className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-sky-600" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            6 Years of Experience
          </h2>

          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-slate-900">Muhammad Ismail</span>
            <span className="text-sm font-semibold text-sky-600">Electric Bike Mechanic</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-0.5">
              6 Years of Practical Experience
            </span>
          </div>

          <p className="text-base text-slate-600 max-w-2xl mx-auto pt-2 leading-relaxed">
            His comprehensive journey includes hands-on work with electric bikes, electrical systems,
            brushless motors, complex wiring looms, deep diagnostic troubleshooting, and routine
            mechanical maintenance.
          </p>
        </div>

        {/* Experience Showcase Grid / Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-slate-200">
          {milestones.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } group`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-white border-2 border-sky-500 shadow-md flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[46%] ${
                  index % 2 === 0 ? 'md:pl-6' : 'md:pr-6'
                }`}
              >
                <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-sky-100 text-sky-800 mb-3">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs font-semibold text-slate-500 mb-3">{item.company}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

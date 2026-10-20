import React from 'react';
import {
  Wrench,
  Activity,
  Layers,
  BatteryCharging,
  Cpu,
  Settings,
  MessageCircle,
} from 'lucide-react';
import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'ebike-repair',
    title: 'Electric Bike Repair',
    shortDesc: 'Professional troubleshooting and repair for electric bikes.',
    fullDesc:
      'Comprehensive mechanical and structural repair of e-bike frames, brakes, transmissions, wheels, and drive systems to ensure safe and dependable riding.',
    iconName: 'Wrench',
    features: ['Chassis & structural inspection', 'Drive alignment', 'Safety checks'],
  },
  {
    id: 'electrical-diagnostics',
    title: 'Electrical System Diagnostics',
    shortDesc: 'Identify electrical faults and system problems.',
    fullDesc:
      'Pinpoint voltage dropouts, short circuits, intermittent cutouts, signal noise, and error codes using specialized multi-meters and diagnostic tools.',
    iconName: 'Activity',
    features: ['Fault code diagnosis', 'Voltage drop analysis', 'Sensor testing'],
  },
  {
    id: 'motor-repair',
    title: 'Motor Repair & Maintenance',
    shortDesc: 'Inspection, troubleshooting, and maintenance of electric bike motors.',
    fullDesc:
      'In-depth inspection of BLDC hub motors and mid-drive units, hall effect sensor replacements, bearing lubrication, and planetary gear servicing.',
    iconName: 'Layers',
    features: ['Hub motor overhauls', 'Hall sensor replacement', 'Bearing service'],
  },
  {
    id: 'battery-charging',
    title: 'Battery & Charging Issues',
    shortDesc: 'Diagnosis of common battery and charging problems.',
    fullDesc:
      'Testing lithium-ion cell packs, BMS cutoff issues, charger port corrosion, premature power cutoff under load, and charger adapter compatibility.',
    iconName: 'BatteryCharging',
    features: ['BMS circuit testing', 'Charging port repair', 'Pack voltage verification'],
  },
  {
    id: 'wiring-components',
    title: 'Wiring & Electrical Components',
    shortDesc: 'Inspection and repair of wiring, connectors, and electrical components.',
    fullDesc:
      'Restoration of damaged harnesses, moisture-sealed connectors, throttle switches, brake cut-off sensors, headlights, and display console wiring.',
    iconName: 'Cpu',
    features: ['Harness re-soldering', 'Waterproof connectors', 'Throttle & brake switches'],
  },
  {
    id: 'general-maintenance',
    title: 'General Maintenance',
    shortDesc: 'Regular inspection and maintenance to keep electric bikes operating properly.',
    fullDesc:
      'Preventive tune-ups including brake adjustment, chain lubrication, spoke truing, tire pressure calibration, and bolt torquing for smooth daily commutes.',
    iconName: 'Settings',
    features: ['Brake calibration', 'Hardware torque checks', 'Preventive tune-ups'],
  },
];

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-sky-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-sky-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-sky-600" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-6 h-6 text-sky-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-sky-600" />;
      case 'Settings':
        return <Settings className="w-6 h-6 text-sky-600" />;
      default:
        return <Wrench className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-sky-700 uppercase tracking-wider">
            <span>Specialized Technical Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Professional diagnostic, repair, and maintenance solutions tailored specifically for
            electric bikes in Dera Ismail Khan.
          </p>
        </div>

        {/* 3D Modern Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Top Icon with Subtle Glow */}
                <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <div className="group-hover:brightness-0 group-hover:invert transition-all">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm font-medium text-slate-700 mb-3 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Full Description */}
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-1.5 mb-6 pt-2 border-t border-slate-100">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp Consultation Action */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20I%20am%20inquiring%20about%20${encodeURIComponent(
                    service.title
                  )}%20at%20Aziz%20Electronics.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-emerald-600 text-slate-800 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs group/btn"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 group-hover/btn:text-white transition-colors" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

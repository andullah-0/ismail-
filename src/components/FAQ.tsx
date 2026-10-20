import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Clock, Wrench, ShieldCheck, Zap } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'Time' | 'Parts' | 'Battery' | 'General';
}

const faqData: FAQItem[] = [
  {
    category: 'Time',
    question: 'What is the typical turnaround time for an electric bike repair?',
    answer:
      'Most common electrical troubleshooting—such as throttle replacement, wiring repairs, brake sensor cutoffs, and fuse issues—are completed within 2 to 4 hours on the same day. For more intensive overhauls, such as BLDC motor hall sensor replacements, bearing presses, or deep lithium battery diagnostics, turnaround is typically 24 to 48 hours. We always provide an estimated completion time upon inspecting your bike.',
  },
  {
    category: 'Parts',
    question: 'Are replacement parts and components readily available at Aziz Electronics?',
    answer:
      'Yes. Our workshop in Saddar Bazaar regularly stocks essential electric motorbike components, including 48V/60V/72V electronic speed controllers (MOSFETs), digital throttle grips, hall effect sensors, high-current waterproof wiring looms, 12V DC-DC converters, brake switches, and compatible EV smart chargers. If a specialized motor component or custom casing is required, we source it quickly through our established supplier network.',
  },
  {
    category: 'Battery',
    question: 'Can you diagnose why my electric bike loses power quickly under load?',
    answer:
      'Yes. Sudden power loss or cutting off during acceleration or hill climbs is usually caused by either a degraded lithium-ion cell group triggering the Battery Management System (BMS) low-voltage cutoff, or high resistance in main power connectors. We perform precision voltage-sag testing under simulated load and inspect individual cell group balance to isolate the exact fault.',
  },
  {
    category: 'General',
    question: 'Which electric bike and motorbike brands and models do you service?',
    answer:
      'Muhammad Ismail services all electric motorbikes and light EVs prevalent in Pakistan, including 70cc-style electric motorcycles (such as Super Power E-70, Road Prince, Crown, and Metro EV), mid-drive e-bikes, hub motor conversions, and custom lithium-battery powered vehicles.',
  },
  {
    category: 'General',
    question: 'Do you provide upfront diagnostic estimates before beginning repairs?',
    answer:
      'Absolutely. Transparent service is our priority. After Muhammad Ismail inspects your electric bike’s symptoms, he will explain the identified fault and provide a clear, upfront quote for labor and necessary parts before performing any work. There are no hidden surprises.',
  },
  {
    category: 'Battery',
    question: 'What should I do if my electric bike got wet and stopped turning on?',
    answer:
      'Immediately switch off the main circuit breaker (MCB) or disconnect the main battery plug under the seat to prevent short circuits. Avoid turning on the ignition key or connecting the charger. Bring the bike to our workshop in Saddar Bazaar, where we safely open and dehumidify the controller and inspect all connectors for water ingress.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-sky-700 uppercase tracking-wider shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Common Questions About Electric Bike Repairs
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about repair turnaround times, parts availability,
            battery diagnostics, and workshop procedures at Aziz Electronics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 bg-white ${
                  isOpen
                    ? 'border-sky-300 shadow-md ring-1 ring-sky-200'
                    : 'border-slate-200/90 shadow-xs hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-sky-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Assistance Prompt */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="relative w-14 h-14 shrink-0">
              <img
                src="/assets/aistudio/ismail_b3d8f62b.png"
                alt="Muhammad Ismail"
                className="w-14 h-14 rounded-2xl object-cover ring-2 ring-sky-500 shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-sky-600 text-white flex items-center justify-center ring-2 ring-white">
                <Wrench className="w-2.5 h-2.5" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">Have another question about your bike?</h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Speak directly with Muhammad Ismail for an instant repair estimate or technical advice.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20I%20have%20a%20question%20about%20my%20electric%20bike%20repair."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import logoImg from '../assets/logo.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Experience & Process', path: '/experience' },
    { label: 'Location', path: '/location' },
    { label: 'FAQs', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 shrink-0">
                <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-sky-500/80 shadow-md bg-white p-0.5 flex items-center justify-center">
                  <img
                    src={logoImg}
                    alt="Aziz Electronics Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.indexOf('logo.png') === -1) {
                        target.src = '/logo.png';
                      } else if (target.src.indexOf('image_f05df96b') === -1) {
                        target.src = '/assets/aistudio/image_f05df96b.png';
                      }
                    }}
                  />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-2xl text-white tracking-tight block">
                  Aziz Electronics
                </span>
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  Professional Electric Bike Mechanic
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Reliable, high-standard electric bike mechanical and electrical repair by Muhammad
              Ismail. Serving riders across Dera Ismail Khan with 6 years of hands-on expertise.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Saddar Bazaar, Saddar Market, Aziz Electronics, D.I. Khan, Pakistan</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Navigation
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-slate-400 hover:text-sky-400 transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block">Phone / WhatsApp:</span>
                  <a
                    href="tel:03483440284"
                    className="font-bold text-white hover:text-sky-400 transition-colors text-sm"
                  >
                    03483440284
                  </a>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href="https://wa.me/923483440284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:03483440284"
                  className="flex-1 py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>© 2026 Aziz Electronics. All rights reserved.</p>
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors"
                title="XML Sitemap"
              >
                Sitemap
              </a>
              <span>•</span>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors"
                title="Robots.txt"
              >
                Robots.txt
              </a>
              <span>•</span>
              <a
                href="/llms.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors font-mono text-[11px]"
                title="LLM & AI Documentation"
              >
                llms.txt
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span>D.I. Khan, Pakistan</span>
            <span>•</span>
            <span>Muhammad Ismail</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

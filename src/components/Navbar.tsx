import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Wrench,
  MessageCircle,
  Menu,
  X,
  Phone,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Experience', path: '/experience' },
    { label: 'Location', path: '/location' },
    { label: 'FAQs', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-11 h-11 rounded-2xl overflow-hidden ring-2 ring-sky-500 shadow-md shadow-sky-500/20 bg-white p-0.5 flex items-center justify-center">
                <img
                  src="/assets/aistudio/image_f05df96b.png"
                  alt="Aziz Electronics Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none group-hover:text-sky-600 transition-colors">
                Aziz Electronics
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-sky-600 tracking-wide mt-1 uppercase">
                Electric Bike Mechanic • D.I. Khan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors relative py-1 ${
                    isActive
                      ? 'text-sky-600 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sky-600'
                      : 'text-slate-600 hover:text-sky-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Direct Contact Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Phone Call Button */}
            <a
              href="tel:03483440284"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold shadow-xs transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>03483440284</span>
            </a>

            {/* Direct WhatsApp Button */}
            <a
              href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20I%20need%20electric%20bike%20repair%20assistance%20at%20Aziz%20Electronics."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm shadow-emerald-600/20 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="https://wa.me/923483440284"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-600 text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-4 shadow-xl">
          {/* Mobile Profile Card */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-sky-50/70 border border-sky-100">
            <div className="relative w-12 h-12 shrink-0">
              <img
                src="/assets/aistudio/ismail_b3d8f62b.png"
                alt="Muhammad Ismail"
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-sky-500 shadow-xs"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-sky-600 text-white flex items-center justify-center ring-2 ring-white">
                <Wrench className="w-2.5 h-2.5" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Muhammad Ismail</h4>
              <p className="text-xs font-semibold text-sky-700">Aziz Electronics • 6+ Years Exp.</p>
              <p className="text-[10px] text-slate-500">Saddar Bazaar, D.I. Khan</p>
            </div>
          </div>

          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-sky-700'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-sky-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <a
              href="https://wa.me/923483440284?text=Hello%20Muhammad%20Ismail%2C%20I%20need%20electric%20bike%20repair%20assistance%20at%20Aziz%20Electronics."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Contact on WhatsApp</span>
            </a>

            <a
              href="tel:03483440284"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm font-bold hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call: 03483440284</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

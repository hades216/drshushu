import React from 'react';
import { Phone, MapPin, MessageSquare, ArrowUp, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../data/dermalaseContent';
import { DermalaseLogo } from './DermalaseLogo';

export const MrsFrenchFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#121110] text-white pt-20 pb-12 overflow-hidden border-t border-white/10">
      {/* Ambient background light auras */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#E45D25]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#D4C49D]/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        {/* Top Glassmorphic Quick Reservation Banner for CTR Boost */}
        <div className="glass-panel-dark p-8 sm:p-10 rounded-3xl border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-[#FDBA74] font-semibold flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ISLAMABAD'S PREMIER AESTHETIC DOCTOR</span>
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-white">
              Ready to reveal your most natural beauty?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Schedule your confidential assessment with UK-trained Dr. Shumaila Khan.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#welcome"
              className="btn-ctr-orange shimmer-sweep px-8 py-3.5 text-xs tracking-wider uppercase font-bold text-white rounded-xl shadow-lg"
            >
              Book Consultation Now
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Col 1: Brand Logo & Description */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#top" className="inline-block">
              <DermalaseLogo lightMode={true} />
            </a>

            <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed max-w-sm">
              Led by Dr. Shumaila Khan, a UK-qualified and AAAM board-certified skin specialist in Islamabad. We offer advanced dermatology, skincare, and laser treatments for radiant, flawless results.
            </p>

            <div className="pt-1 flex items-center gap-3 text-xs text-white/50">
              <ShieldCheck className="w-4 h-4 text-[#FDBA74]" />
              <span>Dip. Derm Cardiff (Wales, UK) · AAAM Board Certified</span>
            </div>
          </div>

          {/* Col 2: Navigation Shortcuts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#FDBA74]">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <a href="#about" className="hover:text-white transition-colors">Dr. Shumaila Khan</a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">Aesthetic &amp; Medical Treatments</a>
              </li>
              <li>
                <a href="#clinic" className="hover:text-white transition-colors">Islamabad Clinic Sanctuary</a>
              </li>
              <li>
                <a href="#why-choose" className="hover:text-white transition-colors">Why Choose Dermalase</a>
              </li>
              <li>
                <a href="#technology" className="hover:text-white transition-colors">FDA-Approved Technology</a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">Before &amp; After Transformations</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Patient Stories (625+ Reviews)</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#FDBA74]">
              CLINIC LOCATION &amp; HOURS
            </h4>
            <div className="space-y-3 text-xs text-white/70 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FDBA74] flex-shrink-0 mt-0.5" />
                <span>House 103, Main Sumbal Road, Sector F-10/1, Islamabad, Pakistan</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FDBA74] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+923041115000" className="hover:text-white block">+92 304 111 5000</a>
                  <a href="tel:+92512211113" className="hover:text-white block">+92 51 221 1113</a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-[#25D366] font-medium"
                >
                  WhatsApp Concierge: +92 303 555 8444
                </a>
              </div>
              <p className="pt-2 text-[0.68rem] text-white/40">
                Monday – Saturday: 11:00 AM – 8:00 PM · Closed on Sundays
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Micro Bar with Animated Back-to-Top Button */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light">
          <div>
            &copy; {new Date().getFullYear()} Dr. Shumaila Khan's Dermalase. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-[#E45D25] flex items-center justify-center text-white group-hover:-translate-y-1 transition-transform">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

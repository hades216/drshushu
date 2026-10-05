import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/dermalaseContent';

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Floating Call Button on Bottom Left (Orange with Attention Pulse Ring from Screenshots) */}
      <a
        href="tel:+923041115000"
        className="fixed bottom-6 left-6 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#E45D25] to-[#F97316] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(228,93,37,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 pulse-aura-orange group"
        title="Call Dermalase Clinic"
        aria-label="Call clinic directly"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-white/10 group-hover:rotate-12 transition-transform" />
      </a>

      {/* Floating WhatsApp Button on Bottom Right (Green with Attention Pulse Ring from Screenshots) */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=Hi%20Dr%20Shumaila%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#4ADE80] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 pulse-aura-green group"
        title="Chat on WhatsApp with Dr. Shumaila's team"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Green Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#25D366] flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
        </span>
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-white group-hover:scale-110 transition-transform" />
      </a>
    </>
  );
};

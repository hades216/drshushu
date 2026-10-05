import React, { useState } from 'react';
import { MessageSquare, Award, CheckCircle2 } from 'lucide-react';
import drPortrait from '../assets/images/DSC_6190.jpg';
import { CONTACT_INFO } from '../data/dermalaseContent';
import { SplitCharHeading } from './SplitCharHeading';
import { RolodexText } from './RolodexText';

interface MrsFrenchWelcomeProps {
  onBookSuccess?: () => void;
}

export const MrsFrenchWelcome: React.FC<MrsFrenchWelcomeProps> = ({ onBookSuccess }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    if (onBookSuccess) onBookSuccess();
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
    }, 4000);
  };

  return (
    <section id="welcome" className="relative bg-[#FBF9F5] py-16 sm:py-20 lg:py-24 border-b border-[#EFECE6] overflow-hidden snap-section-always">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main 2-Column Card Grid directly replicating Screenshot 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: White Card with Exact Text & Form from Screenshot 2 */}
          <div className="lg:col-span-7">
            <div className="glass-panel-light rounded-3xl p-8 sm:p-10 md:p-12 shadow-[0_15px_45px_-12px_rgba(0,0,0,0.08)] border border-white/80 space-y-6">
              {/* Header subtitle with orange line: —— WELCOME TO DERMALASE BY */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#E45D25]" />
                <span className="text-xs sm:text-sm tracking-[0.16em] uppercase font-semibold text-[#E45D25]">
                  WELCOME TO DERMALASE BY
                </span>
              </div>

              {/* Doctor Name in Italic Orange Serif & Heading with Rolodex */}
              <div className="space-y-2">
                <SplitCharHeading
                  as="h2"
                  className="text-3xl sm:text-4xl md:text-5xl italic font-normal text-gradient-orange leading-none inline-block"
                  stagger={0.025}
                >
                  Dr. Shumaila Khan
                </SplitCharHeading>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-neutral-900 font-semibold leading-tight flex flex-wrap items-center gap-x-2">
                  <span>Aesthetic Physician &amp;</span>
                  <RolodexText
                    words={[
                      'Skin Specialist',
                      'Laser Authority',
                      'AAAM Board Doctor',
                      'Facial Sculptor',
                      'Clinical Dermatologist',
                    ]}
                    className="text-[#E45D25]"
                    wordClassName="text-gradient-orange font-bold italic font-serif-luxury"
                  />
                  <span>in Islamabad</span>
                </h3>
              </div>

              {/* Verbatim Paragraph from Screenshot 2 with Rolodex Accent */}
              <p className="text-neutral-800 font-normal text-base sm:text-lg leading-relaxed">
                Reveal your best skin at Dermalase. Led by Dr. Shumaila Khan, a UK-qualified and AAAM board-certified skin specialist in Islamabad. We offer advanced dermatology, skincare, and laser treatments for radiant, flawless results.
              </p>

              {/* Exact Form from Screenshot 2: Name, Phone Number, Book Now */}
              <div className="pt-2">
                {submitted ? (
                  <div className="p-5 rounded-2xl bg-[#F4F9F4] border border-[#D1E7D1] text-emerald-900 text-sm flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Thank you, {name}!</p>
                      <p className="text-xs text-emerald-700">Our patient coordinator will contact {phone} promptly to schedule your consultation.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E8E2D8] shadow-xs">
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full sm:flex-1 px-4 py-3 bg-transparent text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
                      />
                      <div className="hidden sm:block w-px h-8 bg-[#DCD6C9]" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full sm:flex-1 px-4 py-3 bg-transparent text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="btn-ctr-orange shimmer-sweep w-full sm:w-auto px-8 py-3.5 text-xs tracking-wider uppercase font-bold text-white rounded-xl shadow-md cursor-pointer whitespace-nowrap"
                      >
                        Book Now
                      </button>
                    </div>

                    {/* WhatsApp link directly from Screenshot 2: Or Chat With Us On WhatsApp → */}
                    <div className="pt-1">
                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=Hi%20Dr%20Shumaila%2C%20I%20would%20like%20to%20consult%20at%20Dermalase.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#E45D25] hover:text-[#C2410C] transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 text-[#E45D25]" />
                        <span>Or Chat With Us On WhatsApp &rarr;</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Portrait with AAAM Board Certified Badge from Screenshot 2 */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px]">
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-[#ECE6DC] shadow-[0_15px_45px_-15px_rgba(0,0,0,0.12)] border border-[#E5DFD4] group">
                <img
                  src={drPortrait}
                  alt="Dr. Shumaila Khan - Aesthetic Physician & Skin Specialist in Islamabad"
                  loading="lazy"
                  onLoad={() => setIsImgLoaded(true)}
                  className={`w-full h-full object-cover object-top group-hover:scale-103 transition-all duration-700 filter ${
                    isImgLoaded ? 'blur-0 opacity-100' : 'blur-md opacity-0'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating AAAM Board Certified Badge from Screenshot 2 */}
                <div className="absolute bottom-5 left-5 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5DFD4] shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FFF5F0] border border-[#FDBA74] flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#E45D25]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-neutral-900 tracking-wider">
                      AAAM
                    </span>
                    <span className="block text-[0.62rem] text-neutral-500 font-light uppercase tracking-wider">
                      Board Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

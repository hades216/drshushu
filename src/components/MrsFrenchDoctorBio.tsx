import React, { useState } from 'react';
import { Star, MessageSquare, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import drGreenScrubs from '../assets/images/DSC_6190.jpg';
import { CONTACT_INFO } from '../data/dermalaseContent';
import { SplitCharHeading } from './SplitCharHeading';
import { RolodexText } from './RolodexText';

interface MrsFrenchDoctorBioProps {
  onBookClick: () => void;
}

export const MrsFrenchDoctorBio: React.FC<MrsFrenchDoctorBioProps> = ({ onBookClick }) => {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <section id="about" className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#EFECE6] overflow-hidden snap-section-always">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        {/* Top 4 Floating Stats Cards directly replicating Screenshot 3 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: 15+ YEARS EXPERIENCE */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-[#EFECE6] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] space-y-2 card-interactive scroll-card-reveal">
            <div className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E45D25]">
              15+
            </div>
            <div className="w-10 h-[2.5px] bg-[#E45D25] mx-auto" />
            <div className="text-[0.68rem] sm:text-xs tracking-[0.16em] uppercase font-semibold text-neutral-700">
              YEARS EXPERIENCE
            </div>
          </div>

          {/* Card 2: 400+ HAPPY PATIENTS */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-[#EFECE6] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] space-y-2 card-interactive scroll-card-reveal">
            <div className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E45D25]">
              400+
            </div>
            <div className="w-10 h-[2.5px] bg-[#E45D25] mx-auto" />
            <div className="text-[0.68rem] sm:text-xs tracking-[0.16em] uppercase font-semibold text-neutral-700">
              HAPPY PATIENTS
            </div>
          </div>

          {/* Card 3: 30+ TREATMENTS OFFERED */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-[#EFECE6] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] space-y-2 card-interactive scroll-card-reveal">
            <div className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E45D25]">
              30+
            </div>
            <div className="w-10 h-[2.5px] bg-[#E45D25] mx-auto" />
            <div className="text-[0.68rem] sm:text-xs tracking-[0.16em] uppercase font-semibold text-neutral-700">
              TREATMENTS OFFERED
            </div>
          </div>

          {/* Card 4: 4.9 ★ GOOGLE RATING */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-[#EFECE6] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] space-y-2 card-interactive scroll-card-reveal">
            <div className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E45D25] flex items-center justify-center gap-1">
              <span>4.9</span>
              <Star className="w-6 h-6 sm:w-7 sm:h-7 fill-[#E45D25] text-[#E45D25]" />
            </div>
            <div className="w-10 h-[2.5px] bg-[#E45D25] mx-auto" />
            <div className="text-[0.68rem] sm:text-xs tracking-[0.16em] uppercase font-semibold text-neutral-700">
              GOOGLE RATING
            </div>
          </div>
        </div>

        {/* Main Content Section directly replicating Screenshot 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: Doctor in Green Uniform from Screenshot 3 */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px]">
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-[#ECE6DC] shadow-[0_15px_45px_-15px_rgba(0,0,0,0.12)] border border-[#E5DFD4]">
                <img
                  src={drGreenScrubs}
                  alt="Dr. Shumaila Khan - DIP. Derm from Wales, Cardiff, UK & AAAM Wales"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5DFD4] shadow-md flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-neutral-900 block">Dr. Shumaila Khan</span>
                    <span className="text-neutral-500 font-light text-[0.65rem]">Cardiff University Wales (UK)</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#FFF5F0] text-[#E45D25] font-semibold text-[0.68rem] border border-[#FDBA74]">
                    AAAM Certified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Verbatim Text & Headings from Screenshot 3 */}
          <div className="lg:col-span-7 space-y-6">
            <SplitCharHeading
              as="h2"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-gradient-luxury"
              stagger={0.015}
            >
              Aesthetic Physician &amp; Skin Specialist in Islamabad Dr. Shumaila Khan
            </SplitCharHeading>

            {/* Paragraph 1 verbatim from Screenshot 3 */}
            <p className="text-neutral-800 font-normal text-base sm:text-lg leading-relaxed">
              Dr. Shumaila Khan is a highly qualified Aesthetic Dermatology &amp; Skin Doctor in Islamabad, DIP. Derm from Wales, Cardiff, UK &amp; board certified by AAAM Wales, leads a team of the best dermatologists in Islamabad at Dermalase, the city's premier skin aesthetic clinic in F-10, Islamabad. Known for her innovative and results-driven approach, Dr. Shumaila Khan offers a comprehensive range of skincare, hair treatments, and cosmetic procedures. With a focus on the latest technology, advanced equipment, and research-based practices, Dermalase, the well-equipped skincare clinic in Islamabad, ensures top-notch care and exceptional results for every patient.
            </p>

            {/* Sub-heading & Paragraph 2 verbatim from Screenshot 3 with Rolodex */}
            <div className="space-y-3 pt-2">
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-neutral-900 font-normal leading-snug flex flex-wrap items-center gap-x-2">
                <span>What makes Dr. Shumaila Khan the</span>
                <RolodexText
                  words={[
                    'Best Skin Aesthetic Doctor',
                    'Most Trusted Laser Authority',
                    'Top UK-DIP Dermatologist',
                    'Leading Anti-Aging Specialist',
                  ]}
                  className="text-[#E45D25]"
                  wordClassName="text-gradient-orange font-semibold italic font-serif-luxury"
                />
                <span>in Islamabad?</span>
              </h3>

              <p className="text-neutral-800 font-normal text-base sm:text-lg leading-relaxed">
                For a Skin Aesthetic Physician, the factors of utmost importance apart from skill are hygiene of the working environment and adopting the standard way of performing the treatments. Being a skin specialist who has qualified from the UK, Dr. Shumaila Khan and her qualified team of the best dermatologists in Islamabad are very diligent in their techniques according to modern standards of dermatology and environmental hygiene.
              </p>
            </div>

            {/* Buttons from Screenshot 3: [ Read More ] and 💬 Chat On WhatsApp → */}
            <div className="pt-3 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() => setShowFullBio(!showFullBio)}
                className="px-8 py-3.5 text-xs tracking-wider uppercase font-semibold text-white bg-[#E45D25] hover:bg-[#D44E17] active:bg-[#C2410C] rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
              >
                {showFullBio ? 'Show Less' : 'Read More'}
              </button>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=Hello%20Dr%20Shumaila%2C%20I%20would%20like%20to%20consult%20at%20Dermalase.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#E45D25] hover:text-[#C2410C] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#E45D25]" />
                <span>Chat On WhatsApp &rarr;</span>
              </a>
            </div>

            {/* Expanded Bio Details when clicking Read More */}
            {showFullBio && (
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#EFECE6] text-xs text-neutral-600 space-y-3 animate-fadeIn mt-4">
                <p>
                  <strong>Clinical Philosophy:</strong> "Aesthetic dermatology is an art of enhancing individual harmony while preserving natural identity. Our treatments are rooted in clinical diagnostics, peer-reviewed medical research, and international gold-standard protocols."
                </p>
                <p>
                  <strong>Accreditations:</strong> Postgraduate Diploma in Dermatology (Cardiff University, Wales, UK), Board Certified by the American Academy of Aesthetic Medicine (AAAM), Member of Pakistan Association of Dermatologists (PADS), Member of American Academy of Anti-Aging Medicine (A4M).
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

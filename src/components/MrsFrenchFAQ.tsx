import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import roomImg from '../assets/images/laser_treatment_room_1791133729582.jpg';

interface MrsFrenchFAQProps {
  onContactClick: () => void;
}

export const MrsFrenchFAQ: React.FC<MrsFrenchFAQProps> = ({ onContactClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Question 1 expanded by default from Screenshot 13

  // 10 Exact questions and answers from Screenshot 13
  const faqs = [
    {
      q: 'Who is Dr. Shumaila Khan?',
      a: 'Dr. Shumaila Khan is an aesthetic physician and dermatologist based in Islamabad, holding a Diploma in Dermatology from Cardiff, Wales (UK) and board certification from AAAM. She leads the team at Dermalase, her skin and aesthetic clinic in F-10, Islamabad.',
    },
    {
      q: 'What treatments does Dermalase offer?',
      a: 'Dermalase offers a comprehensive suite of aesthetic and medical dermatology treatments, including HydraFacial MD, Alma Soprano Titanium 3D laser hair removal, SylfirmX dual-wave RF microneedling, Oligio monopolar radiofrequency skin tightening, dermal fillers, Botox®, chemical peels, and autologous PRP hair loss therapies.',
    },
    {
      q: 'Where is the clinic located?',
      a: 'Dermalase is centrally located at House 103, Main Sumbal Road, Sector F-10/1, Islamabad. We offer private valet parking and a discreet, tranquil clinic atmosphere.',
    },
    {
      q: 'How can I book an appointment?',
      a: 'You can book directly using our online consultation form, phone our reception team at +92 304 111 5000 / +92 51 221 1113, or message our dedicated WhatsApp concierge at +92 303 555 8444.',
    },
    {
      q: 'Does Dermalase treat acne and acne scars?',
      a: 'Yes. We specialize in customized protocols that combine clinical chemical peels, medical lasers, subcision, and SylfirmX RF microneedling to repair deep scarred tissue and clear post-acne hyperpigmentation.',
    },
    {
      q: 'What laser treatments are available?',
      a: 'Our FDA-cleared laser technology includes the Alma Soprano Titanium for painless laser hair reduction, PICO laser for stubborn melasma and sun damage, and advanced vascular lasers for rosacea and broken capillaries.',
    },
    {
      q: 'Is Dr. Shumaila Khan qualified to perform cosmetic procedures?',
      a: 'Yes. Dr. Shumaila Khan is UK-qualified with a Postgraduate Diploma in Dermatology from Cardiff University, Wales and is fully board-certified by the American Academy of Aesthetic Medicine (AAAM).',
    },
    {
      q: 'Does the clinic offer hair loss treatments?',
      a: 'Yes. We treat androgenetic alopecia, male and female pattern thinning, and postpartum shedding through clinical Prizmah 642VFD autologous PRP, targeted hair mesotherapy, and bioactive exosome micro-infusion.',
    },
    {
      q: 'Are the treatments suitable for all skin types?',
      a: 'Yes. All lasers and RF equipment at Dermalase are clinically certified and calibrated for the entire Fitzpatrick phototype spectrum (I through VI), preventing burns or post-inflammatory hyperpigmentation on South Asian skin.',
    },
    {
      q: 'Does Dermalase offer non-surgical facial contouring options?',
      a: 'Yes. We specialize in non-surgical rhinoplasty, jawline definition, liquid face-lifting, and Oligio monopolar radiofrequency, which tighten and redefine facial contours without scalpels or surgical downtime.',
    },
  ];

  return (
    <section id="faq" className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#EFECE6] overflow-hidden snap-section">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
        {/* Section Header directly from Screenshot 13 */}
        <div className="text-left max-w-2xl space-y-2">
          <span className="text-xs sm:text-sm tracking-[0.16em] uppercase font-semibold text-[#E45D25] block">
            FAQ
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-gradient-luxury">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base">
            Still have questions? Reach out directly — we're happy to help.{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onContactClick();
              }}
              className="text-[#E45D25] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Contact Us</span> &rarr;
            </a>
          </p>
        </div>

        {/* 2-Column Layout matching Screenshot 13 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Clinic Treatment Room Photo from Screenshot 13 */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-neutral-100 border border-[#EFECE6] shadow-sm">
              <img
                src={roomImg}
                alt="Dermalase Treatment Room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: 10 Accordion Items from Screenshot 13 */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#E45D25] shadow-xs'
                      : 'bg-white border-[#EFECE6] hover:border-[#FDBA74]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span
                      className={`text-sm sm:text-base font-semibold leading-snug ${
                        isOpen ? 'text-[#E45D25]' : 'text-neutral-900'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span className="text-[#E45D25] text-lg font-bold flex-shrink-0">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed border-t border-[#FAF5F0]">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

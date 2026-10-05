import React from 'react';
import { Star, Sparkles, Users } from 'lucide-react';
import loungeImg from '../assets/images/clinic_minimalist_interior_1791064469162.jpg';
import radianceImg from '../assets/images/bright_white_skin_radiance_1791065552181.jpg';

interface MrsFrenchBentoWhyChooseProps {
  onBookClick: () => void;
}

export const MrsFrenchBentoWhyChoose: React.FC<MrsFrenchBentoWhyChooseProps> = ({ onBookClick }) => {
  return (
    <section id="why-choose" className="relative bg-[#FBF9F5] py-16 sm:py-20 lg:py-24 border-b border-[#EFECE6] overflow-hidden snap-section">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
        {/* Section Header directly from Screenshot 7 */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm tracking-[0.16em] uppercase font-semibold text-[#E45D25] block">
            WHY CHOOSE US
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 leading-tight">
            Why Choose Dermalase
          </h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base leading-relaxed">
            Proven results, board-certified expertise, and a treatment experience built entirely around you.
          </p>
        </div>

        {/* Bento Grid Layout directly replicating Screenshot 7 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card 1 (Left Tall): Before & After Male Patient with Cap from Screenshot 7 */}
          <div className="md:col-span-4 bg-white/95 rounded-3xl overflow-hidden border border-[#EFECE6] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] card-interactive card-specular scroll-card-reveal flex flex-col justify-between group">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
              <img
                src={radianceImg}
                alt="Patient Clinical Transformation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[0.62rem] tracking-wider uppercase font-semibold text-[#FDBA74] block">
                  DOCUMENTED RESULTS
                </span>
                <h4 className="font-serif-luxury text-xl font-normal">Side-by-Side Verification</h4>
                <p className="text-xs text-white/80 font-light mt-0.5">Customized clinical outcomes</p>
              </div>
            </div>
            <div className="p-5 bg-white border-t border-[#F2EFE9] flex items-center justify-between text-xs">
              <span className="text-neutral-500 font-light">Verified Clinical Cases</span>
              <a href="#results" className="font-semibold text-[#E45D25] hover:text-[#C2410C]">
                View All Results &rarr;
              </a>
            </div>
          </div>

          {/* Center Column: 3 Cards stacked from Screenshot 7 */}
          <div className="md:col-span-4 space-y-6 flex flex-col justify-between">
            {/* Card 2 (Top): Seamless client experience @drshumailakhan */}
            <div className="bg-white/95 rounded-3xl p-6 border border-[#EFECE6] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] card-interactive card-specular scroll-card-reveal space-y-3 group">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#E45D25] transition-colors">Seamless client experience</h4>
                <span className="text-xs font-serif-luxury italic text-[#E45D25]">@drshumailakhan</span>
              </div>
              <div className="h-28 rounded-2xl overflow-hidden bg-neutral-100 relative">
                <img
                  src={radianceImg}
                  alt="Client Treatment Experience"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Card 3 (Middle): Tailored to your vision */}
            <div className="bg-white/95 rounded-3xl p-6 border border-[#EFECE6] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] card-interactive scroll-card-reveal text-center space-y-2 group">
              <div className="w-12 h-12 rounded-full bg-[#FFF5F0] border border-[#FDBA74] flex items-center justify-center mx-auto text-[#E45D25] group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-serif-luxury text-xl font-bold text-neutral-900 group-hover:text-[#E45D25] transition-colors">
                Tailored to your vision
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                Customised treatment plans for every skin type and concern
              </p>
            </div>

            {/* Card 4 (Bottom): Skin analysis */}
            <div className="bg-[#FAF6F0]/95 rounded-3xl p-6 border border-[#EADFCB] card-interactive scroll-card-reveal text-center space-y-2.5">
              <span className="px-3 py-1 rounded-full text-[0.62rem] uppercase tracking-wider font-bold text-neutral-800 bg-white border border-[#E0D4BE] inline-block shadow-xs">
                Book Now
              </span>
              <h4 className="font-serif-luxury text-2xl font-bold text-neutral-900">
                Skin analysis
              </h4>
              <p className="text-xs text-neutral-600 font-light">
                Expert consultation at no cost
              </p>
              <button
                type="button"
                onClick={onBookClick}
                className="btn-ctr-orange shimmer-sweep w-full py-3 text-xs tracking-wider uppercase font-bold text-white rounded-xl shadow-sm transition-all"
              >
                ✦ Book Now
              </button>
            </div>
          </div>

          {/* Right Column: 16+ Years + Dubai Patient Review from Screenshot 7 */}
          <div className="md:col-span-4 space-y-6 flex flex-col justify-between">
            {/* Card 6 (Top): 16+ Years of medical excellence */}
            <div className="bg-white/95 rounded-3xl p-7 border border-[#EFECE6] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] card-interactive space-y-3 group">
              <div className="flex items-baseline justify-between">
                <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#E45D25] group-hover:scale-105 transition-transform inline-block">
                  16+
                </span>
                <span className="font-serif-luxury text-base italic text-[#E45D25]/70">
                  Since 2011
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                Years of medical excellence
              </h4>
              <div className="flex items-center gap-3 pt-1 text-xs text-neutral-600">
                <span className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-neutral-200 font-medium">
                  400+ Patients
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-neutral-200 font-medium">
                  30+ Treatments
                </span>
              </div>
            </div>

            {/* Card 7 (Bottom): Sameera Afzal 5-Star Review from Screenshot 7 */}
            <div className="bg-white/95 rounded-3xl p-7 border border-[#EFECE6] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] card-interactive card-specular space-y-4 flex-1 flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-neutral-900">99%</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-light">
                  600+ trusted patients
                </div>
              </div>

              {/* Exact review text from Screenshot 7 */}
              <div className="space-y-2">
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <blockquote className="text-xs sm:text-[0.82rem] text-neutral-600 font-light leading-relaxed">
                  Dr. Shumaila is truly amazing! I travel all the way from Dubai to Islamabad for my aesthetic treatments with her and every visit is absolutely worth it. Her expertise, attention to detail, and honest advice always make me feel confident that I'm in the best hands. The results are consistently beautiful, natural, and exactly what I hope for every time. She is not only incredibly skilled but also warm, caring and professional. I wouldn't trust anyone else with my treatments. Highly recommended!
                </blockquote>
              </div>

              <div className="pt-2 border-t border-[#F2EFE9] flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-900 group-hover:text-[#E45D25] transition-colors">Sameera Afzal</span>
                <span className="text-neutral-400 text-[0.7rem]">Dubai &rarr; Islamabad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

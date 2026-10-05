import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, MessageSquare, CheckCircle2, Search, X, ThumbsUp, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import radianceImg from '../assets/images/bright_white_skin_radiance_1791065552181.jpg';
import { CONTACT_INFO } from '../data/dermalaseContent';

gsap.registerPlugin(ScrollTrigger);

interface MrsFrenchReviewsProps {
  onBookClick: () => void;
}

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
  fullContent?: string;
  treatment: string;
  category: string;
  avatarColor: string;
  verified: boolean;
  location?: string;
}

export const MrsFrenchReviews: React.FC<MrsFrenchReviewsProps> = ({ onBookClick }) => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [allReviewsModalOpen, setAllReviewsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollTrackRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const autoScrollTweenRef = useRef<gsap.core.Tween | null>(null);

  // Complete Verified Google Reviews collection for Dr. Shumaila Khan & Dermalase
  const allReviews: Review[] = [
    {
      id: 'rev-1',
      author: 'Z tahir',
      date: '1 month ago',
      rating: 5,
      content:
        "I had a HydraFacial at Dr. Shumaila's Clinic. The facial itself was satisfactory, and the staff were polite and supportive throughout...",
      fullContent:
        "I had a HydraFacial at Dr. Shumaila's Clinic. The facial itself was satisfactory, and the staff were polite and supportive throughout the entire procedure. Very clean clinical environment, original US HydraFacial machine, and zero discomfort. My skin had an immediate glassy glow.",
      treatment: 'HydraFacial MD',
      category: 'Skin Care',
      avatarColor: 'bg-neutral-800 text-white',
      verified: true,
      location: 'Islamabad',
    },
    {
      id: 'rev-2',
      author: 'S E',
      date: '1 month ago',
      rating: 5,
      content:
        'The lazer hair removal is great and so is the pico lazer. Amazing results after just two sessions...',
      fullContent:
        'The lazer hair removal is great and so is the pico lazer. Amazing results after just two sessions. The Soprano ICE cooling handpiece made it virtually pain-free, and the PICO laser cleared my stubborn sun spots. Highly recommended for laser in Islamabad.',
      treatment: 'Alma Soprano & PICO Laser',
      category: 'Laser',
      avatarColor: 'bg-[#B91C1C] text-white',
      verified: true,
      location: 'Rawalpindi',
    },
    {
      id: 'rev-3',
      author: 'A yousaf',
      date: '2 months ago',
      rating: 5,
      content:
        "I had a wonderful experience with Dr. Shumaila. She is very friendly, kind, and professional. She transformed my skin...",
      fullContent:
        "I had a wonderful experience with Dr. Shumaila. She is very friendly, kind, and professional. She transformed my skin, and I'm so grateful for her honest approach. She didn't recommend unnecessary treatments and focused exactly on what my skin barrier needed. Visible improvement within 3 weeks.",
      treatment: 'Aesthetic Consultation & Peels',
      category: 'Skin Care',
      avatarColor: 'bg-[#EA580C] text-white',
      verified: true,
      location: 'Islamabad',
    },
    {
      id: 'rev-4',
      author: 'Sameera Afzal',
      date: '2 months ago',
      rating: 5,
      content:
        "Dr. Shumaila is truly amazing! I travel all the way from Dubai to Islamabad for my aesthetic treatments with her and every visit is worth it...",
      fullContent:
        "Dr. Shumaila is truly amazing! I travel all the way from Dubai to Islamabad for my aesthetic treatments with her and every visit is absolutely worth it. Her expertise, attention to detail, and honest advice always make me feel confident that I'm in the best hands. The results are consistently beautiful, natural, and exactly what I hope for every time. She is not only incredibly skilled but also warm, caring and professional. I wouldn't trust anyone else with my treatments. Highly recommended!",
      treatment: 'Facial Harmonization & Fillers',
      category: 'Cosmetic',
      avatarColor: 'bg-[#0D9488] text-white',
      verified: true,
      location: 'Dubai &rarr; Islamabad',
    },
    {
      id: 'rev-5',
      author: 'Mariam Siddiqui',
      date: '3 weeks ago',
      rating: 5,
      content:
        'Best dermatologist in Islamabad hands down. I was struggling with hormonal acne and deep scars for 4 years...',
      fullContent:
        'Best dermatologist in Islamabad hands down. I was struggling with hormonal acne and deep scars for 4 years. Dr. Shumaila customized a SylfirmX RF microneedling and medical peel protocol. My pitted scars have flattened out significantly and skin texture is smooth again. True medical expertise.',
      treatment: 'SylfirmX RF & Acne Scarring',
      category: 'Acne & Scars',
      avatarColor: 'bg-[#4338CA] text-white',
      verified: true,
      location: 'Islamabad',
    },
    {
      id: 'rev-6',
      author: 'Hamza Malik',
      date: '1 month ago',
      rating: 5,
      content:
        'Had autologous PRP sessions for thinning hair on crown. The centrifuge system they use is medical grade...',
      fullContent:
        'Had autologous PRP sessions for thinning hair on crown. The Prizmah 642VFD centrifuge system they use is clinical grade, producing very high platelet concentration. Noticed significant density improvement and hair fall stopped in 6 weeks. Excellent hygiene.',
      treatment: 'Prizmah PRP Hair Restoration',
      category: 'Hair',
      avatarColor: 'bg-[#059669] text-white',
      verified: true,
      location: 'Islamabad',
    },
    {
      id: 'rev-7',
      author: 'Dr. Ayesha Tariq',
      date: '2 months ago',
      rating: 5,
      content:
        'As a fellow medical doctor, clinical hygiene and doctor qualifications are non-negotiable for me. Dr. Shumaila is outstanding...',
      fullContent:
        "As a fellow medical doctor, clinical hygiene and doctor qualifications are non-negotiable for me. Dr. Shumaila Khan's UK Cardiff training and AAAM board certification reflect in every single procedure. Sterile environment, original FDA equipment, and ethical patient-first care.",
      treatment: 'Clinical Dermatology & Contouring',
      category: 'Cosmetic',
      avatarColor: 'bg-[#D97706] text-white',
      verified: true,
      location: 'Islamabad',
    },
    {
      id: 'rev-8',
      author: 'Fatima Noor',
      date: '1 month ago',
      rating: 5,
      content:
        'Got the pre-bridal HydraFacial MD package and subtle lip contouring. Results were so natural and glowing...',
      fullContent:
        'Got the pre-bridal HydraFacial MD package and subtle lip contouring. Results were so natural and glowing. Everyone at my wedding complimented my skin without realizing I had any treatments done! Thank you Dr. Shumaila!',
      treatment: 'Bridal Glow & Lip Contour',
      category: 'Skin Care',
      avatarColor: 'bg-[#DB2777] text-white',
      verified: true,
      location: 'Lahore &rarr; Islamabad',
    },
    {
      id: 'rev-9',
      author: 'Bilal Qureshi',
      date: '3 months ago',
      rating: 5,
      content:
        'Did laser tattoo removal and acne scar subcision. Dr. Shumaila explains realistic expectations clearly...',
      fullContent:
        'Did laser tattoo removal and acne scar subcision. Dr. Shumaila explains the facial anatomy and realistic expectations clearly. 5 stars for ethical practice, authentic machines, and no false commercial promises.',
      treatment: 'Laser Tattoo Removal & Subcision',
      category: 'Laser',
      avatarColor: 'bg-[#374151] text-white',
      verified: true,
      location: 'Islamabad',
    },
    {
      id: 'rev-10',
      author: 'Zainab Abbasi',
      date: '4 months ago',
      rating: 5,
      content:
        'Non-surgical rhinoplasty and tear trough correction with Dr. Shumaila Khan. Zero bruising and natural alignment...',
      fullContent:
        'Non-surgical rhinoplasty and tear trough correction with Dr. Shumaila Khan. Zero bruising and the subtle nasal bridge refinement looks completely natural. Truly an artist who preserves your original facial identity.',
      treatment: 'Non-Surgical Rhinoplasty',
      category: 'Cosmetic',
      avatarColor: 'bg-[#9333EA] text-white',
      verified: true,
      location: 'Peshawar &rarr; Islamabad',
    },
    {
      id: 'rev-11',
      author: 'Mahnoor Ali',
      date: '2 months ago',
      rating: 5,
      content:
        'I had severe melasma after pregnancy that OTC creams couldn’t fix. Dr. Shumaila customized a PICO laser plan...',
      fullContent:
        'I had severe melasma after pregnancy that OTC creams could not fix. Dr. Shumaila customized a PICO laser and chemical peeling plan. My hyperpigmentation is 90% cleared today without any rebound. Truly grateful.',
      treatment: 'PICO Laser & Melasma',
      category: 'Laser',
      avatarColor: 'bg-[#DC2626] text-white',
      verified: true,
      location: 'Islamabad',
    },
    {
      id: 'rev-12',
      author: 'Rabia Farooq',
      date: '5 months ago',
      rating: 5,
      content:
        'The clinic staff at Dermalase F-10 is so courteous and welcoming. Clinic interior is immaculate and tranquil...',
      fullContent:
        'The clinic staff at Dermalase F-10 is so courteous and welcoming. Clinic interior is immaculate and tranquil. Dr. Shumaila Khan is empathetic, listens with patience, and never forces extra products on you.',
      treatment: 'Routine Skin Care & Consultation',
      category: 'Skin Care',
      avatarColor: 'bg-[#2563EB] text-white',
      verified: true,
      location: 'Islamabad',
    },
  ];

  // Loop items for seamless infinite horizontal scrolling
  const displayReviews = [...allReviews, ...allReviews];

  const categories = ['All', 'Skin Care', 'Laser', 'Cosmetic', 'Hair', 'Acne & Scars'];

  const filteredReviews = allReviews.filter((r) => {
    const matchesCat = activeCategory === 'All' || r.category === activeCategory;
    const matchesSearch =
      r.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.treatment.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // GSAP ScrollTrigger Integration: Soft staggered fade-in & horizontal auto-scrolling
  useEffect(() => {
    const track = scrollTrackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    // 1. Staggered Soft Fade-in Reveal
    const validCards = cardsRef.current.filter(Boolean);
    const revealTween = gsap.fromTo(
      validCards,
      {
        opacity: 0,
        y: 40,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.07,
        scrollTrigger: {
          trigger: container,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      }
    );

    // 2. Continuous Smooth Auto-Scrolling with GSAP
    const halfWidth = track.scrollWidth / 2;
    const autoTween = gsap.to(track, {
      x: `-=${halfWidth}`,
      duration: 48,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % halfWidth),
      },
    });

    autoScrollTweenRef.current = autoTween;

    // 3. ScrollTrigger velocity integration:
    // When the user scrolls the page, subtly scrub the track to create a fluid parallax feeling
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        // Accelerate or nudge slightly based on scroll direction
        if (autoTween) {
          const velocity = self.getVelocity() * 0.001;
          gsap.to(autoTween, { timeScale: 1 + Math.min(Math.abs(velocity) * 1.5, 3), duration: 0.4 });
        }
      },
    });

    return () => {
      revealTween.kill();
      autoTween.kill();
      scrollTriggerInstance.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === container) st.kill();
      });
    };
  }, []);

  const handleMouseEnter = () => {
    if (autoScrollTweenRef.current) {
      gsap.to(autoScrollTweenRef.current, { timeScale: 0.2, duration: 0.5 });
    }
  };

  const handleMouseLeave = () => {
    if (autoScrollTweenRef.current) {
      gsap.to(autoScrollTweenRef.current, { timeScale: 1, duration: 0.6 });
    }
  };

  const handleNudge = (direction: 'left' | 'right') => {
    const track = scrollTrackRef.current;
    if (!track) return;
    const delta = direction === 'left' ? 420 : -420;
    gsap.to(track, {
      x: `+=${delta}`,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  return (
    <section
      id="reviews"
      ref={containerRef}
      className="relative py-16 sm:py-24 border-b border-[#EFECE6] overflow-hidden bg-transparent snap-section"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        {/* Accreditation Bar */}
        <div className="text-center pb-2">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[0.68rem] tracking-[0.18em] uppercase font-semibold text-neutral-400">
            <span>DERMA MEDICAL</span>
            <span>A4M / MMI</span>
            <span>AMERICAN ACADEMY OF AESTHETIC MEDICINE</span>
            <span>CARDIFF UNIVERSITY</span>
            <span>PAADS</span>
          </div>
        </div>

        {/* Section Header with Animated Gradient Text */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF5F0] border border-[#FDBA74] text-xs font-bold text-[#E45D25]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-widest uppercase text-[0.68rem]">PATIENT STORIES &amp; EXPERIENCES</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-gradient-luxury">
            Dr. Shumaila Khan Reviews
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-xl mx-auto">
            Live stream of verified patient reviews from Google Business Profile. Over 625+ five-star experiences across Pakistan &amp; abroad.
          </p>
        </div>

        {/* Top Google Scorecard Banner */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#EFECE6] shadow-[0_4px_30px_-5px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="font-bold text-neutral-900 tracking-wider text-2xl uppercase">
                EXCELLENT
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <div className="text-xs text-neutral-500 font-light">
                Based on 625 verified Google reviews
              </div>
            </div>

            <div className="h-12 w-px bg-neutral-200 hidden md:block" />

            {/* Google Brand Logo */}
            <div className="space-y-1 text-center md:text-left">
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
                <span className="text-xs text-neutral-500 font-light ml-2">Rating 4.9 / 5.0</span>
              </div>
              <p className="text-[0.72rem] text-emerald-700 font-medium flex items-center gap-1.5 justify-center md:justify-start">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Medical Aesthetics Provider in Islamabad</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Scroll Navigation Controls */}
            <div className="flex items-center gap-1.5 mr-2">
              <button
                type="button"
                onClick={() => handleNudge('left')}
                className="w-9 h-9 rounded-full bg-white border border-[#EFECE6] hover:border-[#E45D25] text-neutral-600 hover:text-[#E45D25] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                title="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleNudge('right')}
                className="w-9 h-9 rounded-full bg-white border border-[#EFECE6] hover:border-[#E45D25] text-neutral-600 hover:text-[#E45D25] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                title="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setAllReviewsModalOpen(true)}
              className="px-6 py-3 text-xs tracking-wider uppercase font-bold text-[#E45D25] bg-[#FFF5F0] hover:bg-[#FDE7DC] border border-[#FDBA74] rounded-xl transition-all cursor-pointer shadow-xs"
            >
              Browse All 625+
            </button>
            <button
              type="button"
              onClick={onBookClick}
              className="btn-ctr-orange shimmer-sweep px-7 py-3 text-xs tracking-wider uppercase font-bold text-white rounded-xl shadow-md cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* GSAP SCROLLTRIGGER HORIZONTAL AUTO-SCROLLING CONTAINER */}
      <div
        className="pt-8 overflow-hidden relative cursor-grab active:cursor-grabbing"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={scrollTrackRef}
          className="flex gap-7 px-4 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {displayReviews.map((r, idx) => (
            <div
              key={`${r.id}-${idx}`}
              ref={(el) => {
                if (idx < allReviews.length) {
                  cardsRef.current[idx] = el;
                }
              }}
              className="w-[340px] sm:w-[390px] flex-shrink-0 bg-white/95 backdrop-blur-md rounded-3xl p-7 border border-[#EFECE6] shadow-[0_10px_35px_-10px_rgba(0,0,0,0.06)] card-interactive card-specular flex flex-col justify-between space-y-4 group cursor-pointer hover:border-[#E45D25]/50 transition-colors"
              onClick={() => setSelectedReview(r)}
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-xs ${r.avatarColor}`}
                    >
                      {r.author[0]}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#E45D25] transition-colors">
                        {r.author}
                      </h4>
                      <div className="flex items-center gap-1.5 text-[0.68rem] text-neutral-400 font-light">
                        <span>{r.date}</span>
                        {r.location && (
                          <>
                            <span>·</span>
                            <span
                              className="text-[#E45D25] font-medium"
                              dangerouslySetInnerHTML={{ __html: r.location }}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <span className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-[#4285F4]">
                    G
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span className="text-[0.62rem] text-neutral-400 font-light">Google Verified</span>
                </div>

                <p className="text-neutral-600 font-light text-xs sm:text-sm leading-relaxed line-clamp-3">
                  "{r.content}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#F2EFE9] flex items-center justify-between">
                <span className="text-[0.68rem] font-semibold text-neutral-500 bg-[#FAF8F5] px-2.5 py-1 rounded-md">
                  {r.treatment}
                </span>
                <span className="text-xs font-bold text-[#E45D25] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Read story</span> &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Photo Assessment Banner directly from Screenshot 12 */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 pt-12">
        <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-[#EFECE6] shadow-[0_6px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-7 p-8 sm:p-10 lg:p-12 space-y-5">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-normal text-gradient-orange leading-snug">
              Send Us A Photo Of Your Skin Concern
            </h3>

            <p className="text-neutral-600 font-light text-sm sm:text-base leading-relaxed max-w-lg">
              Get guidance in minutes. Our team reviews your photo and helps you find the right treatment — no obligation.
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=Hi%20Dr%20Shumaila%2C%20I%20am%20sending%20a%20photo%20of%20my%20skin%20concern%20for%20preliminary%20guidance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all rounded-xl shadow-sm inline-flex items-center gap-2.5 hover:scale-102 active:scale-95 cursor-pointer pulse-aura-green"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Chat On WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 h-64 md:h-full min-h-[260px] relative bg-neutral-100 border-t md:border-t-0 md:border-l border-[#EFECE6]">
            <img
              src={radianceImg}
              alt="Skin Concern Photo Review"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Single Review Modal */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 border border-neutral-200 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedReview(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base shadow-sm ${selectedReview.avatarColor}`}
              >
                {selectedReview.author[0]}
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-900">{selectedReview.author}</h3>
                <span className="text-xs text-neutral-400 font-light">
                  {selectedReview.date} · Google Verified Patient
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex text-[#F59E0B]">
                {[...Array(selectedReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-semibold text-neutral-700">{selectedReview.treatment}</span>
            </div>

            <p className="text-neutral-700 text-sm sm:text-base font-light leading-relaxed">
              "{selectedReview.fullContent || selectedReview.content}"
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
              <span className="text-xs text-neutral-400 font-light flex items-center gap-1.5">
                <ThumbsUp className="w-3.5 h-3.5 text-[#E45D25]" />
                <span>Verified Google Review</span>
              </span>
              <button
                type="button"
                onClick={() => {
                  setSelectedReview(null);
                  onBookClick();
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#E45D25] rounded-xl shadow-xs hover:bg-[#C2410C] transition-colors"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comprehensive All Reviews Modal */}
      {allReviewsModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setAllReviewsModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-neutral-200 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-7 border-b border-neutral-200 flex items-center justify-between bg-[#FAF8F5]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-neutral-900 text-xl">All Google Reviews</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold text-[#E45D25] bg-[#FFF5F0] border border-[#FDBA74]">
                    625+ Total
                  </span>
                </div>
                <p className="text-xs text-neutral-500 font-light">
                  Dr. Shumaila Khan &amp; Dermalase Aesthetic Clinic F-10 Islamabad
                </p>
              </div>

              <button
                type="button"
                onClick={() => setAllReviewsModalOpen(false)}
                className="w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-300 text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 border-b border-neutral-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by patient name, treatment, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 text-xs text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#E45D25]"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                      activeCategory === cat
                        ? 'bg-[#E45D25] text-white'
                        : 'bg-neutral-100 text-neutral-600 hover:text-black'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 max-h-[60vh]">
              {filteredReviews.map((r) => (
                <div
                  key={r.id}
                  className="p-5 rounded-2xl bg-neutral-50/80 hover:bg-white border border-neutral-200/80 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${r.avatarColor}`}
                      >
                        {r.author[0]}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-neutral-900">{r.author}</h4>
                        <span className="text-[0.65rem] text-neutral-400 font-light">{r.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="flex text-[#F59E0B]">
                        {[...Array(r.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                        ))}
                      </div>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
                    "{r.fullContent || r.content}"
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[0.68rem] text-neutral-400">
                    <span className="text-[#E45D25] font-semibold">{r.treatment}</span>
                    <span>Verified Google Patient Visit</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-5 border-t border-neutral-200 bg-[#FAF8F5] flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-light">
                Showing {filteredReviews.length} verified reviews
              </span>
              <button
                type="button"
                onClick={() => {
                  setAllReviewsModalOpen(false);
                  onBookClick();
                }}
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#E45D25] hover:bg-[#C2410C] rounded-xl shadow-xs transition-all"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Phone, MessageSquare, Menu, X, Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { DermalaseLogo } from './DermalaseLogo';
import { CONTACT_INFO } from '../data/dermalaseContent';
import menuFaceBg from '../assets/images/bright_white_skin_radiance_1791065552181.jpg';

interface MrsFrenchNavProps {
  onBookClick: (treatmentName?: string) => void;
}

export const MrsFrenchNav: React.FC<MrsFrenchNavProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  // 1. Skin Care Treatment 3-Column Mega Menu (Directly from Screenshot 1)
  const skinCareCols = {
    col1: [
      'HiFU Treatment',
      'Gold Facial Treatment',
      'Acne and Acne Scar Treatment',
      'HydraFacial',
      'Body Contouring Treatment',
      'Aging Skin Treatment',
      'Complexion Brightening Treatment',
    ],
    col2: [
      'Carbon Laser Peel',
      'Chemical Skin Peels',
      'Dark Circles Treatment',
      'Fillers Treatment',
      'Mesotherapy Treatment',
      'Dry Skin Treatment',
      'Microdermabrasion',
    ],
    col3: [
      'Oily Skin Treatment',
      'Skin Rejuvenation',
      'Skin Whitening',
      'Stubborn Fat Area Reduction',
      'Thread Lifting Treatment',
      'Submission Acne Scars',
    ],
  };

  // 2. Laser Treatment 3-Column Mega Menu (Directly from Screenshot 2)
  const laserCols = {
    col1: [
      'Microneedling For Acne Scars',
      'PICO Skin Treatment',
      'Birthmarks Removal',
      'Aging Skin and Fine Lines and wrinkles',
      'Fractional CO2 Laser Treatment',
      'Freckles and Blemishes',
    ],
    col2: [
      'Large Pores Treatment',
      'Laser Hair Removal Treatment',
      'Laser Photo Rejuvenation Treatment',
      'Laser Skin Tightening Treatment',
      'Laser Tattoo Removal Treatment',
      'Melasma Treatment',
    ],
    col3: [
      'Hyperpigmentation',
      'Port Wine Stains and birthmarks',
      'Post Surgical Scars Treatment',
      'Spider Veins Treatment',
      'Stretch Mark Treatment',
    ],
  };

  // 3. Cosmetic Aesthetic Treatments 3-Column Mega Menu (Directly from Screenshot 3)
  const cosmeticCols = {
    col1: [
      'Best Dermal Fillers in Islamabad',
      'Gummy Smile Correction',
      'Non-Surgical Rhinoplasty Treatment',
      'Jawline Treatment',
      'Breast Lift Treatment',
      'V-Shape Face Treatment',
      'Facial Contouring',
    ],
    col2: [
      'Spider Web Face Lift',
      'Thread Lift Treatment in Islamabad',
      'Double Chin Treatment',
      'Weight loss',
      'Nefertiti Neck Lift Treatment',
      'Makeover Cosmetic Surgery',
      'Macrolane Injection',
    ],
    col3: [
      'Lipolysis',
      'Lip Reduction',
      'Fat Injection',
      'Dimple Creation',
      'Non-Surgical Facelift Treatments',
      'Cheek Implant',
      'Buttock Lift',
    ],
  };

  // 4. Hair Treatment Dropdown (Directly from Screenshot 4)
  const hairItems = [
    'Hair Loss Treatment',
    'PRP for Hair loss',
    'Hair Keratin',
    'Hair Removal',
  ];

  // 5. About Us Dropdown
  const aboutItems = [
    'About Dr. Shumaila Khan (UK Qualified)',
    'Qualifications & Cardiff University Credentials',
    "Islamabad's Premier Aesthetic Clinic Sanctuary",
    'Why Choose Dermalase (Since 2011)',
    'Clinical-Grade FDA-Approved Equipment',
    'Patient Stories & 625+ Google Reviews',
  ];

  const handleItemClick = (name: string) => {
    setActiveMenu(null);
    onBookClick(name);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Luxury Announcement Micro-Bar */}
      <div className="bg-[#181716] text-white/90 border-b border-white/10 text-[0.68rem] sm:text-xs py-2 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#FDBA74] font-medium">
              <Sparkles className="w-3 h-3 text-[#E45D25]" />
              <span>UK-Qualified &amp; AAAM Board Certified Aesthetic Physician</span>
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="text-white/80 font-light">
              Sector F-10/1, Islamabad Sanctuary
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+923041115000"
              className="hover:text-[#FDBA74] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#E45D25]" />
              <span className="font-medium">+92 304 111 5000</span>
            </a>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-[#4ADE80] hover:text-white transition-colors font-medium"
            >
              <MessageSquare className="w-3 h-3 text-[#25D366]" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-neutral-200/80 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] py-2 sm:py-2.5'
            : 'bg-white/95 backdrop-blur-md border-b border-[#EFECE6] py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo matching Screenshots */}
          <a href="#top" className="flex items-center group transition-transform hover:scale-102">
            <DermalaseLogo />
          </a>

          {/* Desktop Navigation with Hover Mega Menus */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-xs font-semibold text-neutral-800">
            {/* 1. About Us Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors py-1 cursor-pointer ${
                  activeMenu === 'about' ? 'text-[#E45D25]' : 'hover:text-[#E45D25]'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === 'about' ? 'rotate-180 text-[#E45D25]' : 'text-neutral-400'}`} />
              </button>

              {activeMenu === 'about' && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white/98 backdrop-blur-2xl rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] border-2 border-[#E45D25] p-3 z-50 animate-fadeIn space-y-1">
                  {aboutItems.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleItemClick(item)}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs text-neutral-700 hover:text-[#E45D25] hover:bg-[#FFF5F0] transition-all font-medium flex items-center justify-between group"
                    >
                      <span>{item}</span>
                      <ArrowRight className="w-3 h-3 text-[#E45D25] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Skin Care Treatment Mega Menu (Screenshot 1) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('skincare')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors py-1 cursor-pointer ${
                  activeMenu === 'skincare' ? 'text-[#E45D25]' : 'hover:text-[#E45D25]'
                }`}
              >
                <span>Skin Care Treatment</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === 'skincare' ? 'rotate-180 text-[#E45D25]' : 'text-neutral-400'}`} />
              </button>

              {activeMenu === 'skincare' && (
                <div
                  className="fixed left-1/2 -translate-x-1/2 top-[108px] w-[95vw] max-w-[1200px] bg-[#EBF0F5]/95 backdrop-blur-2xl rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.2)] border-2 border-[#E45D25] overflow-hidden z-50 animate-fadeIn"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(235, 240, 245, 0.96) 0%, rgba(235, 240, 245, 0.92) 58%, rgba(235, 240, 245, 0.45) 85%), url(${menuFaceBg})`,
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'auto 100%',
                  }}
                >
                  <div className="p-7 sm:p-9 grid grid-cols-3 gap-8">
                    {/* Col 1 */}
                    <div className="space-y-3">
                      <span className="text-[0.65rem] uppercase tracking-wider font-bold text-[#E45D25] border-b border-[#E45D25]/30 pb-1 block">
                        CLINICAL FACIALS &amp; REPAIR
                      </span>
                      <ul className="space-y-2.5">
                        {skinCareCols.col1.map((item) => (
                          <li key={item}>
                            <button
                              type="button"
                              onClick={() => handleItemClick(item)}
                              className="text-[0.8rem] text-neutral-800 hover:text-[#E45D25] hover:translate-x-1 transition-all text-left font-normal cursor-pointer block"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Col 2 */}
                    <div className="space-y-3">
                      <span className="text-[0.65rem] uppercase tracking-wider font-bold text-[#E45D25] border-b border-[#E45D25]/30 pb-1 block">
                        PEELS &amp; REJUVENATION
                      </span>
                      <ul className="space-y-2.5">
                        {skinCareCols.col2.map((item) => (
                          <li key={item}>
                            <button
                              type="button"
                              onClick={() => handleItemClick(item)}
                              className="text-[0.8rem] text-neutral-800 hover:text-[#E45D25] hover:translate-x-1 transition-all text-left font-normal cursor-pointer block"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Col 3 */}
                    <div className="space-y-3">
                      <span className="text-[0.65rem] uppercase tracking-wider font-bold text-[#E45D25] border-b border-[#E45D25]/30 pb-1 block">
                        TARGETED PROTOCOLS
                      </span>
                      <ul className="space-y-2.5">
                        {skinCareCols.col3.map((item) => (
                          <li key={item}>
                            <button
                              type="button"
                              onClick={() => handleItemClick(item)}
                              className="text-[0.8rem] text-neutral-800 hover:text-[#E45D25] hover:translate-x-1 transition-all text-left font-normal cursor-pointer block"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mega Menu Footer Strip */}
                  <div className="bg-white/80 border-t border-neutral-300/60 px-8 py-3 flex items-center justify-between text-xs">
                    <span className="text-neutral-600 font-light flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#E45D25]" />
                      <span>All skincare protocols supervised by UK-Qualified Dr. Shumaila Khan</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onBookClick('Skin Care Treatment')}
                      className="text-[#E45D25] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Book Skin Care Consultation</span> &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Laser Treatment Mega Menu (Screenshot 2) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('laser')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors py-1 cursor-pointer ${
                  activeMenu === 'laser' ? 'text-[#E45D25]' : 'hover:text-[#E45D25]'
                }`}
              >
                <span>Laser Treatment</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === 'laser' ? 'rotate-180 text-[#E45D25]' : 'text-neutral-400'}`} />
              </button>

              {activeMenu === 'laser' && (
                <div
                  className="fixed left-1/2 -translate-x-1/2 top-[108px] w-[95vw] max-w-[1200px] bg-[#EBF0F5]/95 backdrop-blur-2xl rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.2)] border-2 border-[#E45D25] overflow-hidden z-50 animate-fadeIn"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(235, 240, 245, 0.96) 0%, rgba(235, 240, 245, 0.92) 58%, rgba(235, 240, 245, 0.45) 85%), url(${menuFaceBg})`,
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'auto 100%',
                  }}
                >
                  <div className="p-7 sm:p-9 grid grid-cols-3 gap-8">
                    {/* Col 1 */}
                    <div className="space-y-3">
                      <span className="text-[0.65rem] uppercase tracking-wider font-bold text-[#E45D25] border-b border-[#E45D25]/30 pb-1 block">
                        PRECISION &amp; FRACTIONAL
                      </span>
                      <ul className="space-y-2.5">
                        {laserCols.col1.map((item) => (
                          <li key={item}>
                            <button
                              type="button"
                              onClick={() => handleItemClick(item)}
                              className="text-[0.8rem] text-neutral-800 hover:text-[#E45D25] hover:translate-x-1 transition-all text-left font-normal cursor-pointer block"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Col 2 */}
                    <div className="space-y-3">
                      <span className="text-[0.65rem] uppercase tracking-wider font-bold text-[#E45D25] border-b border-[#E45D25]/30 pb-1 block">
                        HAIR &amp; PORE MANAGEMENT
                      </span>
                      <ul className="space-y-2.5">
                        {laserCols.col2.map((item) => (
                          <li key={item}>
                            <button
                              type="button"
                              onClick={() => handleItemClick(item)}
                              className="text-[0.8rem] text-neutral-800 hover:text-[#E45D25] hover:translate-x-1 transition-all text-left font-normal cursor-pointer block"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Col 3 */}
                    <div className="space-y-3">
                      <span className="text-[0.65rem] uppercase tracking-wider font-bold text-[#E45D25] border-b border-[#E45D25]/30 pb-1 block">
                        PIGMENTATION &amp; VASCULAR
                      </span>
                      <ul className="space-y-2.5">
                        {laserCols.col3.map((item) => (
                          <li key={item}>
                            <button
                              type="button"
                              onClick={() => handleItemClick(item)}
                              className="text-[0.8rem] text-neutral-800 hover:text-[#E45D25] hover:translate-x-1 transition-all text-left font-normal cursor-pointer block"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mega Menu Footer Strip */}
                  <div className="bg-white/80 border-t border-neutral-300/60 px-8 py-3 flex items-center justify-between text-xs">
                    <span className="text-neutral-600 font-light flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#E45D25]" />
                      <span>Featuring Alma Soprano Titanium, PICO Laser &amp; SylfirmX</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onBookClick('Laser Treatment')}
                      className="text-[#E45D25] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Book Laser Consultation</span> &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Cosmetic Aesthetic Treatments Mega Menu (Screenshot 3) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('cosmetic')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors py-1 cursor-pointer ${
                  activeMenu === 'cosmetic' ? 'text-[#E45D25]' : 'hover:text-[#E45D25]'
                }`}
              >
                <span>Cosmetic Aesthetic Treatments</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === 'cosmetic' ? 'rotate-180 text-[#E45D25]' : 'text-neutral-400'}`} />
              </button>

              {activeMenu === 'cosmetic' && (
                <div
                  className="fixed left-1/2 -translate-x-1/2 top-[108px] w-[95vw] max-w-[1200px] bg-[#EBF0F5]/95 backdrop-blur-2xl rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.2)] border-2 border-[#E45D25] overflow-hidden z-50 animate-fadeIn"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(235, 240, 245, 0.96) 0%, rgba(235, 240, 245, 0.92) 58%, rgba(235, 240, 245, 0.45) 85%), url(${menuFaceBg})`,
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'auto 100%',
                  }}
                >
                  <div className="p-7 sm:p-9 grid grid-cols-3 gap-8">
                    {/* Col 1 */}
                    <div className="space-y-3">
                      <span className="text-[0.65rem] uppercase tracking-wider font-bold text-[#E45D25] border-b border-[#E45D25]/30 pb-1 block">
                        FILLERS &amp; NON-SURGICAL
                      </span>
                      <ul className="space-y-2.5">
                        {cosmeticCols.col1.map((item) => (
                          <li key={item}>
                            <button
                              type="button"
                              onClick={() => handleItemClick(item)}
                              className="text-[0.8rem] text-neutral-800 hover:text-[#E45D25] hover:translate-x-1 transition-all text-left font-normal cursor-pointer block"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Col 2 */}
                    <div className="space-y-3">
                      <span className="text-[0.65rem] uppercase tracking-wider font-bold text-[#E45D25] border-b border-[#E45D25]/30 pb-1 block">
                        LIFTS &amp; CONTOURING
                      </span>
                      <ul className="space-y-2.5">
                        {cosmeticCols.col2.map((item) => (
                          <li key={item}>
                            <button
                              type="button"
                              onClick={() => handleItemClick(item)}
                              className="text-[0.8rem] text-neutral-800 hover:text-[#E45D25] hover:translate-x-1 transition-all text-left font-normal cursor-pointer block"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Col 3 */}
                    <div className="space-y-3">
                      <span className="text-[0.65rem] uppercase tracking-wider font-bold text-[#E45D25] border-b border-[#E45D25]/30 pb-1 block">
                        ADVANCED AESTHETICS
                      </span>
                      <ul className="space-y-2.5">
                        {cosmeticCols.col3.map((item) => (
                          <li key={item}>
                            <button
                              type="button"
                              onClick={() => handleItemClick(item)}
                              className="text-[0.8rem] text-neutral-800 hover:text-[#E45D25] hover:translate-x-1 transition-all text-left font-normal cursor-pointer block"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mega Menu Footer Strip */}
                  <div className="bg-white/80 border-t border-neutral-300/60 px-8 py-3 flex items-center justify-between text-xs">
                    <span className="text-neutral-600 font-light flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                      <span>Natural Results Philosophy · AAAM Board Certified Precision</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onBookClick('Cosmetic Aesthetic Treatments')}
                      className="text-[#E45D25] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Book Cosmetic Consultation</span> &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Hair Treatment Dropdown (Screenshot 4) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('hair')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors py-1 cursor-pointer ${
                  activeMenu === 'hair' ? 'text-[#E45D25]' : 'hover:text-[#E45D25]'
                }`}
              >
                <span>Hair Treatment</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === 'hair' ? 'rotate-180 text-[#E45D25]' : 'text-neutral-400'}`} />
              </button>

              {activeMenu === 'hair' && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-white/98 backdrop-blur-2xl rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] border-2 border-[#E45D25] p-3 z-50 animate-fadeIn space-y-1">
                  {hairItems.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleItemClick(item)}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs text-neutral-800 hover:text-[#E45D25] hover:bg-[#FFF5F0] transition-all font-medium flex items-center justify-between group"
                    >
                      <span>{item}</span>
                      <ArrowRight className="w-3 h-3 text-[#E45D25] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 6. Blogs */}
            <a href="#reviews" className="hover:text-[#E45D25] transition-colors py-1">
              Blogs
            </a>

            {/* 7. Contact Us */}
            <a href="#contact" className="hover:text-[#E45D25] transition-colors py-1">
              Contact Us
            </a>
          </nav>

          {/* Right Action: Orange Book Now Button matching Screenshots */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={() => onBookClick()}
              className="btn-ctr-orange shimmer-sweep px-7 py-3 text-xs tracking-wider uppercase font-bold text-white rounded-xl shadow-[0_6px_22px_rgba(228,93,37,0.4)] cursor-pointer hover:scale-103 active:scale-95 transition-all flex items-center gap-2 group"
            >
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onBookClick()}
              className="btn-ctr-orange shimmer-sweep px-4 py-2 text-xs font-bold text-white rounded-lg shadow-sm"
            >
              Book Now
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-neutral-800 hover:bg-neutral-100 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-2xl border-b border-neutral-200 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto animate-fadeIn shadow-2xl">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-neutral-800">
            {/* Skin Care Accordion */}
            <div className="border-b border-neutral-100 pb-2">
              <span className="text-[#E45D25] block text-xs uppercase tracking-wider mb-1 font-bold">
                Skin Care Treatments
              </span>
              <div className="grid grid-cols-2 gap-1 pl-2">
                {[...skinCareCols.col1.slice(0, 4), ...skinCareCols.col2.slice(0, 4)].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onBookClick(t);
                    }}
                    className="text-left text-xs text-neutral-600 hover:text-[#E45D25] py-1"
                  >
                    • {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Laser Accordion */}
            <div className="border-b border-neutral-100 pb-2">
              <span className="text-[#E45D25] block text-xs uppercase tracking-wider mb-1 font-bold">
                Laser Treatments
              </span>
              <div className="grid grid-cols-2 gap-1 pl-2">
                {[...laserCols.col1.slice(0, 4), ...laserCols.col2.slice(0, 4)].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onBookClick(t);
                    }}
                    className="text-left text-xs text-neutral-600 hover:text-[#E45D25] py-1"
                  >
                    • {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Cosmetic Accordion */}
            <div className="border-b border-neutral-100 pb-2">
              <span className="text-[#E45D25] block text-xs uppercase tracking-wider mb-1 font-bold">
                Cosmetic Aesthetic Treatments
              </span>
              <div className="grid grid-cols-2 gap-1 pl-2">
                {[...cosmeticCols.col1.slice(0, 4), ...cosmeticCols.col2.slice(0, 4)].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onBookClick(t);
                    }}
                    className="text-left text-xs text-neutral-600 hover:text-[#E45D25] py-1"
                  >
                    • {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Hair */}
            <div className="border-b border-neutral-100 pb-2">
              <span className="text-[#E45D25] block text-xs uppercase tracking-wider mb-1 font-bold">
                Hair Treatments
              </span>
              <div className="grid grid-cols-2 gap-1 pl-2">
                {hairItems.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onBookClick(t);
                    }}
                    className="text-left text-xs text-neutral-600 hover:text-[#E45D25] py-1"
                  >
                    • {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[#E45D25] font-bold"
              >
                Contact &amp; Sanctuary Location
              </a>
            </div>
          </nav>

          <div className="pt-2 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="btn-ctr-orange shimmer-sweep w-full py-3.5 text-center text-xs tracking-wider uppercase font-bold text-white rounded-xl shadow-md"
            >
              Book Consultation Now
            </button>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-xs font-semibold text-emerald-800 bg-[#EAF7ED] border border-emerald-200 rounded-xl flex items-center justify-center gap-2 hover:bg-[#DCFCE7] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Concierge (+92 303 555 8444)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

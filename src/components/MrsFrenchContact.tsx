import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/dermalaseContent';

interface MrsFrenchContactProps {
  onBookSuccess?: () => void;
}

export const MrsFrenchContact: React.FC<MrsFrenchContactProps> = ({ onBookSuccess }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'Aesthetic Consultation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
    if (onBookSuccess) onBookSuccess();
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '',
        phone: '',
        email: '',
        treatment: 'Aesthetic Consultation',
        message: '',
      });
    }, 4500);
  };

  return (
    <section id="contact" className="relative bg-[#FAF8F5] py-20 lg:py-28 border-b border-[#EAE6DF] overflow-hidden snap-section">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[0.68rem] tracking-[0.2em] uppercase font-semibold text-[#A69368] block">
            LOCATION &amp; RESERVATIONS
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight">
            Visit Dermalase Islamabad
          </h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base">
            Private consultations with Dr. Shumaila Khan at our Sector F-10 sanctuary.
          </p>
          <div className="w-16 h-px bg-[#C5B388] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Clinic Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-[#EFECE6] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] space-y-6">
              <h3 className="font-serif-luxury text-2xl text-neutral-900 font-normal">
                Clinical Sanctuary
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-600 font-light">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#C5B388] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-neutral-900 block">Address</span>
                    <span>House 103, Main Sumbal Road, Sector F-10/1, Islamabad, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#C5B388] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-neutral-900 block">Direct Appointments</span>
                    <a href="tel:+923041115000" className="hover:text-black block">
                      +92 304 111 5000
                    </a>
                    <a href="tel:+92512211113" className="hover:text-black block">
                      +92 51 221 1113 / 221 1114
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MessageSquare className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-neutral-900 block">WhatsApp Concierge</span>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#25D366] font-medium"
                    >
                      +92 303 555 8444 (Instant Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-[#C5B388] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-neutral-900 block">Clinic Hours</span>
                    <span>Monday – Saturday: 11:00 AM – 8:00 PM</span>
                    <span className="block text-neutral-400">Sunday: Closed (By special prior arrangement)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Photo Review CTA */}
            <div className="p-6 rounded-2xl bg-[#EAF7ED] border border-[#CDEBD2] text-xs space-y-2">
              <span className="text-[0.62rem] uppercase tracking-wider font-semibold text-emerald-800">
                Fast Response
              </span>
              <h4 className="text-sm font-semibold text-emerald-950">
                Prefer WhatsApp for quick inquiries?
              </h4>
              <p className="text-emerald-800 font-light leading-relaxed">
                Send your photo or question directly to Dr. Shumaila's clinical team for initial guidance.
              </p>
              <div className="pt-1">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=Hello%20Dr%20Shumaila%2C%20I%20have%20an%20inquiry%20regarding%20treatments%20at%20Dermalase.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-950 hover:underline"
                >
                  <span>Open WhatsApp Chat</span> &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Comprehensive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-light rounded-3xl p-8 sm:p-10 border border-white/80 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.08)] space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#E45D25] block">
                  ONLINE BOOKING FORM
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-neutral-900 font-bold">
                  Request a Private Appointment
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 font-light">
                  Please submit your details and our patient coordinator will confirm within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#F4F9F4] border border-[#D1E7D1] text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-serif-luxury text-xl font-bold text-neutral-900">
                    Appointment Request Received
                  </h4>
                  <p className="text-xs text-neutral-600 font-light max-w-sm mx-auto">
                    Thank you, {form.name}. Our patient coordinator will contact you at {form.phone} shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[0.68rem] uppercase tracking-wider font-semibold text-neutral-700 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Sameera Afzal"
                        className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#E7E2D8] text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#E45D25] focus:ring-1 focus:ring-[#E45D25]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[0.68rem] uppercase tracking-wider font-semibold text-neutral-700 block">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+92 300 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#E7E2D8] text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#E45D25] focus:ring-1 focus:ring-[#E45D25]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[0.68rem] uppercase tracking-wider font-semibold text-neutral-700 block">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#E7E2D8] text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#E45D25] focus:ring-1 focus:ring-[#E45D25]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[0.68rem] uppercase tracking-wider font-semibold text-neutral-700 block">
                        Desired Treatment
                      </label>
                      <select
                        value={form.treatment}
                        onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#E7E2D8] text-sm text-neutral-800 focus:outline-none focus:border-[#E45D25]"
                      >
                        <option>Aesthetic Consultation</option>
                        <option>Skin Care Treatment (HydraFacial MD)</option>
                        <option>Laser Treatment (Alma Soprano Titanium)</option>
                        <option>Hair Treatment (PRP &amp; Exosomes)</option>
                        <option>Cosmetic Treatment (Dermal Fillers)</option>
                        <option>Medical Aesthetic Treatments (Oligio RF &amp; SylfirmX)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[0.68rem] uppercase tracking-wider font-semibold text-neutral-700 block">
                      Specific Concern or Preferred Date
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Briefly describe your skin goals or convenient consultation times..."
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#E7E2D8] text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#E45D25] focus:ring-1 focus:ring-[#E45D25]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-ctr-orange shimmer-sweep w-full py-4 text-xs tracking-wider uppercase font-bold text-white rounded-xl shadow-lg cursor-pointer"
                  >
                    Confirm Consultation Request
                  </button>

                  <p className="text-[0.68rem] text-center text-neutral-400 font-light">
                    🔒 Your medical details and phone numbers are strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

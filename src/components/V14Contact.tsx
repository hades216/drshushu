import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, TREATMENTS_DATA } from '../data/dermalaseContent';
import { ArrowUpRight, Check, MessageSquare } from 'lucide-react';

interface V14ContactProps {
  preselectedTreatment?: string;
}

export const V14Contact: React.FC<V14ContactProps> = ({
  preselectedTreatment = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [treatment, setTreatment] = useState(
    preselectedTreatment || TREATMENTS_DATA[0].name
  );
  const [message, setMessage] = useState('');
  const [patientType, setPatientType] = useState<'local' | 'overseas'>('local');
  const [error, setError] = useState('');
  const [confirmedCode, setConfirmedCode] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedTreatment) {
      setTreatment(preselectedTreatment);
    }
  }, [preselectedTreatment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please provide your full name.');
      return;
    }

    const cleanPhone = phone.replace(/[\s()-]/g, '');
    if (cleanPhone.length < 7) {
      setError('Please provide a valid phone or WhatsApp contact number.');
      return;
    }

    const ref = `ISB-${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmedCode(ref);
  };

  return (
    <section id="contact" className="border-b border-[var(--ink-faint)] bg-[#F8F7F4] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="label">APPOINTMENTS &amp; CONCIERGE DESK</span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#1A1A1A]">
              Book Consultation
            </h2>
            <p className="text-sm sm:text-base text-[#6B6864] font-light max-w-xl">
              Sector F-10/1 Islamabad sanctuary. Private concierge available for visiting
              patients from Dubai, London, and international origins.
            </p>
          </div>
          <span className="badge">SECTOR F-10/1 · ISLAMABAD</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 p-8 sm:p-12 bg-white border border-[var(--ink-faint)] space-y-8">
            <div className="space-y-2">
              <span className="label">CLINICAL SANCTUARY ADDRESS</span>
              <h3 className="font-serif-editorial text-2xl text-[#1A1A1A]">
                {CONTACT_INFO.name}
              </h3>
              <p className="text-sm text-[#1A1A1A]/80 font-light">
                {CONTACT_INFO.address}
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--ink-faint)] space-y-3">
              <span className="label">DIRECT TELEPHONE LINES</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-editorial">
                {CONTACT_INFO.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/[^+\d]/g, '')}`}
                    className="text-[#1A1A1A] hover:text-[#E8C1B0] transition-colors py-0.5"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--ink-faint)] space-y-2">
              <span className="label">OFFICIAL EMAIL</span>
              <div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-xs font-mono-editorial text-[#1A1A1A] hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--ink-faint)] space-y-2">
              <span className="label">CONSULTATION HOURS</span>
              <p className="text-xs text-[#6B6864] font-light leading-relaxed">
                {CONTACT_INFO.timings}
              </p>
            </div>

            {/* Direct WhatsApp Concierge Button */}
            <div className="pt-4">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn btn-accent !py-3 flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Concierge: (+92) 303 555 8444</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Booking Form */}
          <div className="lg:col-span-7 p-8 sm:p-14 bg-white border border-[var(--ink-faint)]">
            {confirmedCode ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 mx-auto border border-[#1A1A1A] flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <div className="label text-[#E8C1B0] !opacity-100">
                  RESERVATION RECORDED · REF #{confirmedCode}
                </div>
                <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#1A1A1A]">
                  Thank you, {name}
                </h3>
                <p className="text-sm text-[#6B6864] font-light max-w-md mx-auto leading-relaxed">
                  Your consultation request for <strong className="text-[#1A1A1A]">{treatment}</strong> has
                  been received. Our medical desk will contact you via {phone} to confirm your appointment.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setConfirmedCode(null);
                      setName('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="label underline cursor-pointer"
                  >
                    Schedule Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--ink-faint)]">
                  <div>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#1A1A1A]">
                      Consultation Request
                    </h3>
                    <p className="text-xs text-[#6B6864]">
                      Direct physician scheduling with Dr. Shumaila Khan
                    </p>
                  </div>

                  <div className="flex items-center text-xs">
                    <button
                      type="button"
                      onClick={() => setPatientType('local')}
                      className={`btn !py-1.5 !px-3 text-[0.65rem] ${
                        patientType === 'local' ? 'btn-primary' : ''
                      }`}
                    >
                      Pakistan
                    </button>
                    <button
                      type="button"
                      onClick={() => setPatientType('overseas')}
                      className={`btn !py-1.5 !px-3 text-[0.65rem] ${
                        patientType === 'overseas' ? 'btn-primary' : ''
                      }`}
                    >
                      Overseas (Dubai/UK)
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="p-3 bg-[#E8C1B0]/30 border border-[#E8C1B0] text-xs text-[#1A1A1A]">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="label block mb-2">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Amina Khan"
                      className="w-full bg-[#F8F7F4] border border-[var(--ink-faint)] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>

                  <div>
                    <label className="label block mb-2">PHONE / WHATSAPP *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 303 555 8444"
                      className="w-full bg-[#F8F7F4] border border-[var(--ink-faint)] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="label block mb-2">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="patient@domain.com"
                      className="w-full bg-[#F8F7F4] border border-[var(--ink-faint)] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>

                  <div>
                    <label className="label block mb-2">TREATMENT SUITE OF INTEREST</label>
                    <select
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full bg-[#F8F7F4] border border-[var(--ink-faint)] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                    >
                      {TREATMENTS_DATA.map((t) => (
                        <option key={t.id} value={t.name}>
                          {t.number}. {t.name}
                        </option>
                      ))}
                      <option value="Endolift Full Face Transformation">
                        Endolift® Full Face Transformation
                      </option>
                      <option value="SylfirmX Dual-Wave RF">
                        SylfirmX® Dual-Wave RF Microneedling
                      </option>
                      <option value="Alma Soprano Titanium Laser">
                        Alma Soprano Titanium™ Laser
                      </option>
                      <option value="HydraFacial MD Signature">
                        HydraFacial MD® Signature Protocol
                      </option>
                      <option value="Oligio Monopolar RF Tightening">
                        Oligio® Monopolar RF Tightening
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label block mb-2">
                    CLINICAL NOTES OR TRAVEL DATES (OPTIONAL)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly state your concerns, travel itinerary if visiting from Dubai/UK, or preferred consultation time..."
                    className="w-full bg-[#F8F7F4] border border-[var(--ink-faint)] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Confirm Consultation Request
                  </button>
                  <span className="label">100% CONFIDENTIAL MEDICAL INTAKE</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

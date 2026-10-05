import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, TREATMENTS_DATA } from '../data/dermalaseContent';
import { Phone, Mail, MapPin, Clock, MessageSquare, Check, ArrowUpRight } from 'lucide-react';

interface MinimalContactProps {
  preselectedTreatment?: string;
}

export const MinimalContact: React.FC<MinimalContactProps> = ({
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
      setError('Please enter a valid phone number or WhatsApp contact.');
      return;
    }

    const ref = `ISB-${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmedCode(ref);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 hairline-b bg-[var(--bg-main)]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
            Direct Scheduling &amp; Clinic Desk
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[var(--text-main)] font-normal">
            Consultation Intake
          </h2>
          <p className="text-sm text-[var(--text-muted)] font-light">
            Conveniently book an in-person assessment in Sector F-10/1, Islamabad or reserve a
            fast-track overseas consultation from Dubai or the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Coordinates & Direct Numbers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[var(--bg-card)] hairline-all space-y-6">
              <div className="space-y-1">
                <div className="text-xs uppercase font-mono-tabular text-[var(--accent)]">
                  SANCTUARY LOCATION
                </div>
                <div className="font-serif-luxury text-xl text-[var(--text-main)]">
                  {CONTACT_INFO.name}
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light">
                  {CONTACT_INFO.address}
                </p>
              </div>

              <div className="pt-4 hairline-t space-y-2">
                <div className="text-xs uppercase font-mono-tabular text-[var(--accent)]">
                  DIRECT CLINICAL LINES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-tabular">
                  {CONTACT_INFO.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/[^+\d]/g, '')}`}
                      className="text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 hairline-t space-y-1">
                <div className="text-xs uppercase font-mono-tabular text-[var(--accent)]">
                  OFFICIAL EMAIL
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-xs text-[var(--text-main)] hover:text-[var(--accent)]"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="pt-4 hairline-t space-y-1">
                <div className="text-xs uppercase font-mono-tabular text-[var(--accent)]">
                  CLINIC HOURS
                </div>
                <p className="text-xs text-[var(--text-muted)] font-light">
                  {CONTACT_INFO.timings}
                </p>
              </div>

              {/* Direct WhatsApp Concierge Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[var(--bg-subtle)] hairline-all text-xs font-medium text-[var(--text-main)] hover:border-[var(--text-main)] transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>WhatsApp Concierge: (+92) 303 555 8444</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Booking Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-[var(--bg-card)] hairline-all">
            {confirmedCode ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 mx-auto hairline-all flex items-center justify-center text-[var(--accent)]">
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono-tabular uppercase tracking-widest text-[var(--accent)]">
                  RESERVATION CONFIRMED · REF #{confirmedCode}
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[var(--text-main)]">
                  Thank you, {name}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light max-w-md mx-auto leading-relaxed">
                  Your appointment inquiry for <strong className="text-[var(--text-main)]">{treatment}</strong> has
                  been received. Our medical desk will contact you via {phone} to coordinate your visit.
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
                    className="text-xs underline underline-offset-4 text-[var(--text-main)] hover:text-[var(--accent)] cursor-pointer"
                  >
                    Schedule Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 hairline-b">
                  <div>
                    <h3 className="font-serif-luxury text-2xl text-[var(--text-main)]">
                      Consultation Request
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      Dr. Shumaila Khan · Sector F-10/1 Islamabad
                    </p>
                  </div>

                  {/* Patient Origin Option */}
                  <div className="flex items-center text-xs">
                    <button
                      type="button"
                      onClick={() => setPatientType('local')}
                      className={`px-3 py-1 cursor-pointer ${
                        patientType === 'local'
                          ? 'bg-[var(--text-main)] text-[var(--bg-main)] font-medium'
                          : 'bg-[var(--bg-subtle)] text-[var(--text-muted)]'
                      }`}
                    >
                      Pakistan
                    </button>
                    <button
                      type="button"
                      onClick={() => setPatientType('overseas')}
                      className={`px-3 py-1 cursor-pointer ${
                        patientType === 'overseas'
                          ? 'bg-[var(--text-main)] text-[var(--bg-main)] font-medium'
                          : 'bg-[var(--bg-subtle)] text-[var(--text-muted)]'
                      }`}
                    >
                      Overseas (Dubai/UK)
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Amina Khan"
                      className="w-full bg-[var(--bg-main)] hairline-all px-3.5 py-2.5 text-xs sm:text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 303 555 8444"
                      className="w-full bg-[var(--bg-main)] hairline-all px-3.5 py-2.5 text-xs sm:text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="patient@domain.com"
                      className="w-full bg-[var(--bg-main)] hairline-all px-3.5 py-2.5 text-xs sm:text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
                      Treatment or Concern
                    </label>
                    <select
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full bg-[var(--bg-main)] hairline-all px-3.5 py-2.5 text-xs sm:text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--accent)]"
                    >
                      {TREATMENTS_DATA.map((t) => (
                        <option key={t.id} value={t.name}>
                          {t.number}. {t.name}
                        </option>
                      ))}
                      <option value="Endolift Full Face Transformation">
                        Endolift® Full Face Transformation
                      </option>
                      <option value="SylfirmX Dual-Wave RF Microneedling">
                        SylfirmX® Dual-Wave RF
                      </option>
                      <option value="Alma Soprano Titanium Laser">
                        Alma Soprano Titanium™ Laser
                      </option>
                      <option value="HydraFacial MD">
                        HydraFacial MD® Signature
                      </option>
                      <option value="Oligio Monopolar RF">
                        Oligio® Monopolar RF
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Clinical Notes or Specific Concerns (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly state your concerns, travel dates if from Dubai/UK, or preferred appointment time..."
                    className="w-full bg-[var(--bg-main)] hairline-all px-3.5 py-2.5 text-xs sm:text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[var(--text-main)] text-[var(--bg-main)] text-xs uppercase tracking-widest font-medium hover:opacity-90 cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-[var(--text-muted)]">
                    Confidential Physician-Led Intake
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

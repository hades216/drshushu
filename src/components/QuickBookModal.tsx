import React, { useState, useEffect, useRef } from 'react';
import { TREATMENTS_DATA, CONTACT_INFO } from '../data/dermalaseContent';
import { X, Check, Mic, MicOff, Sparkles, MessageSquare, Volume2 } from 'lucide-react';

interface QuickBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatment?: string;
}

// Extend Window interface for Web Speech API
interface IWindow extends Window {
  webkitSpeechRecognition?: any;
  SpeechRecognition?: any;
}

export const QuickBookModal: React.FC<QuickBookModalProps> = ({
  isOpen,
  onClose,
  preselectedTreatment,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState(
    preselectedTreatment || 'Aesthetic Consultation'
  );
  const [message, setMessage] = useState('');
  const [confirmedRef, setConfirmedRef] = useState<string | null>(null);
  const [error, setError] = useState('');

  // Web Speech API States
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [voiceFeedback, setVoiceFeedback] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  // Available treatments for smart speech matching
  const treatmentOptions = [
    { label: 'Aesthetic Consultation', keywords: ['consultation', 'consult', 'doctor', 'checkup', 'assessment', 'advice'] },
    { label: 'Skin Care Treatment (HydraFacial MD)', keywords: ['hydrafacial', 'facial', 'glow', 'skin care', 'hydra', 'cleanse', 'pores', 'brightening'] },
    { label: 'Laser Treatment (Alma Soprano Titanium)', keywords: ['laser', 'hair removal', 'soprano', 'titanium', 'pico', 'tattoo', 'freckles'] },
    { label: 'Hair Treatment (Autologous PRP)', keywords: ['hair', 'prp', 'hair loss', 'thinning', 'prizmah', 'crown'] },
    { label: 'Cosmetic Treatment (Dermal Fillers & Botox)', keywords: ['filler', 'fillers', 'botox', 'lips', 'rhinoplasty', 'wrinkles', 'jawline', 'cheeks'] },
    { label: 'Medical Aesthetic Treatments (Oligio & SylfirmX)', keywords: ['oligio', 'sylfirm', 'rf', 'microneedling', 'tightening', 'lifting', 'scars', 'acne'] },
  ];

  useEffect(() => {
    if (preselectedTreatment) {
      setTreatment(preselectedTreatment);
    }
  }, [preselectedTreatment]);

  // Initialize Web Speech API
  useEffect(() => {
    const win = window as unknown as IWindow;
    const SpeechRecognition = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSpeechSupported(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setError('');
        setVoiceFeedback('Listening... speak your name, preferred treatment, or request.');
      };

      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }

        const lower = transcript.toLowerCase();
        setVoiceFeedback(`"${transcript}"`);

        // 1. Smart treatment keyword matcher
        for (const opt of treatmentOptions) {
          if (opt.keywords.some((kw) => lower.includes(kw))) {
            setTreatment(opt.label);
            break;
          }
        }

        // 2. Detect Name patterns like "my name is...", "i am...", "this is..."
        const nameMatch = lower.match(/(?:my name is|i am|this is|i'm)\s+([a-zA-Z]+(?:\s+[a-zA-Z]+)?)/i);
        if (nameMatch && nameMatch[1]) {
          const capName = nameMatch[1]
            .split(' ')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');
          setName(capName);
        }

        // 3. Append to message / notes
        if (event.results[0].isFinal) {
          setMessage((prev) => (prev ? `${prev} ${transcript}` : transcript));
          setVoiceFeedback(`Captured: "${transcript}"`);
          setTimeout(() => {
            setVoiceFeedback(null);
          }, 3500);
        }
      };

      recognition.onerror = (event: any) => {
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setError('Microphone access was denied. Please allow microphone permissions in your browser.');
        } else if (event.error === 'no-speech') {
          setVoiceFeedback('No speech detected. Click the mic icon to try again.');
        } else {
          setVoiceFeedback(`Voice recognition error: ${event.error}`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    } catch (e) {
      setSpeechSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  if (!isOpen) return null;

  const toggleListening = () => {
    if (!speechSupported) {
      setError('Voice recognition is not supported in this browser. Please use Chrome, Safari, or Edge.');
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      setVoiceFeedback(null);
    } else {
      try {
        recognitionRef.current?.start();
      } catch (e) {
        recognitionRef.current?.stop();
        setTimeout(() => {
          recognitionRef.current?.start();
        }, 150);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    const clean = phone.replace(/[\s()-]/g, '');
    if (clean.length < 7) {
      setError('Please enter a valid phone number.');
      return;
    }
    const code = `ISB-${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmedRef(code);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="glass-panel-light rounded-3xl border border-white/90 shadow-2xl max-w-lg w-full p-7 sm:p-9 relative max-h-[92vh] overflow-y-auto space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {confirmedRef ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#FFF5F0] border border-[#FDBA74] flex items-center justify-center text-[#E45D25] shadow-sm">
              <Check className="w-7 h-7" />
            </div>
            <div className="mrs-badge !bg-[#FFF5F0] !text-[#E45D25]">
              RESERVATION LOGGED · REF #{confirmedRef}
            </div>
            <h3 className="font-serif-luxury text-3xl text-neutral-900 font-bold">
              Thank you, {name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light max-w-sm mx-auto">
              Our clinic concierge will reach out to <span className="font-semibold text-neutral-900">{phone}</span> to coordinate your private visit with Dr. Shumaila Khan.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="btn-ctr-orange shimmer-sweep w-full py-3.5 rounded-xl font-bold uppercase text-xs cursor-pointer shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[0.62rem] uppercase font-bold tracking-widest text-[#E45D25] block">
                  Instant VIP Reservation
                </span>
                {/* Voice Dictation Status Pill */}
                {speechSupported && (
                  <button
                    type="button"
                    onClick={toggleListening}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.65rem] font-semibold tracking-wider transition-all cursor-pointer ${
                      isListening
                        ? 'bg-red-500 text-white animate-pulse shadow-md'
                        : 'bg-[#FFF5F0] text-[#E45D25] border border-[#FDBA74] hover:bg-[#FDE7DC]'
                    }`}
                  >
                    {isListening ? (
                      <>
                        <MicOff className="w-3 h-3" />
                        <span>LISTENING...</span>
                      </>
                    ) : (
                      <>
                        <Mic className="w-3 h-3" />
                        <span>VOICE DICTATE</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-neutral-900 font-bold">
                Book Consultation
              </h3>
              <p className="text-xs text-neutral-500 font-light">
                Direct scheduling with Dr. Shumaila Khan at Sector F-10/1 Islamabad.
              </p>
            </div>

            {/* Voice Feedback Banner */}
            {voiceFeedback && (
              <div className="p-3 rounded-2xl bg-[#FFF8F3] border border-[#FDBA74]/60 flex items-start gap-2.5 animate-fadeIn text-xs text-[#9A3412]">
                <Volume2 className="w-4 h-4 text-[#E45D25] flex-shrink-0 mt-0.5 animate-bounce" />
                <div className="flex-1">
                  <p className="font-medium">{voiceFeedback}</p>
                  <p className="text-[0.68rem] text-neutral-500 mt-0.5">
                    Speak your details naturally: "My name is Zara and I want HydraFacial."
                  </p>
                </div>
              </div>
            )}

            {/* Listening Wave Visualizer when Active */}
            {isListening && (
              <div className="p-3 rounded-2xl bg-neutral-900 text-white flex items-center justify-between gap-3 shadow-lg animate-fadeIn">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span className="text-xs font-semibold tracking-wide">Dictating appointment...</span>
                </div>
                <div className="flex items-center gap-1 h-5">
                  <span className="w-1 bg-[#FDBA74] rounded-full animate-bounce [animation-delay:-0.3s] h-3" />
                  <span className="w-1 bg-[#E45D25] rounded-full animate-bounce [animation-delay:-0.15s] h-5" />
                  <span className="w-1 bg-[#FDBA74] rounded-full animate-bounce [animation-delay:-0.45s] h-4" />
                  <span className="w-1 bg-white rounded-full animate-bounce h-2" />
                </div>
              </div>
            )}

            {error && (
              <div className="p-3 rounded-xl bg-red-50 text-xs text-red-600 border border-red-200">
                {error}
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700">
                  Full Name *
                </label>
                {speechSupported && (
                  <button
                    type="button"
                    onClick={toggleListening}
                    className="text-[0.65rem] text-[#E45D25] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Mic className="w-2.5 h-2.5" /> Dictate
                  </button>
                )}
              </div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Amina Khan"
                className="w-full bg-white/95 border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-[#E45D25] shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+92 303 555 8444"
                className="w-full bg-white/95 border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-[#E45D25] shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 mb-1">
                Treatment of Interest
              </label>
              <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="w-full bg-white/95 border border-neutral-200 rounded-xl px-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-[#E45D25] shadow-xs cursor-pointer"
              >
                {treatmentOptions.map((opt) => (
                  <option key={opt.label} value={opt.label}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700">
                  Notes or Concerns (Voice or Text)
                </label>
                {speechSupported && (
                  <button
                    type="button"
                    onClick={toggleListening}
                    className="text-[0.65rem] text-[#E45D25] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <Mic className="w-2.5 h-2.5" /> Tap mic to speak
                  </button>
                )}
              </div>
              <div className="relative">
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mention travel dates, skin concerns, or dictate..."
                  className="w-full bg-white/95 border border-neutral-200 rounded-xl p-3 text-xs text-neutral-900 focus:outline-none focus:border-[#E45D25] shadow-xs pr-10"
                />
                {speechSupported && (
                  <button
                    type="button"
                    onClick={toggleListening}
                    className={`absolute right-2.5 bottom-3.5 p-1.5 rounded-full transition-all cursor-pointer ${
                      isListening ? 'bg-red-500 text-white' : 'text-neutral-400 hover:text-[#E45D25] hover:bg-neutral-100'
                    }`}
                    title="Dictate with voice"
                  >
                    <Mic className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="btn-ctr-orange shimmer-sweep w-full py-3.5 text-xs tracking-wider uppercase font-bold text-white rounded-xl shadow-md cursor-pointer"
              >
                Confirm Request
              </button>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=Hi%20Dr%20Shumaila%2C%20I%20would%20like%20to%20reserve%20a%20consultation%20for%20${encodeURIComponent(treatment)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-semibold text-emerald-800 bg-[#EAF7ED] border border-emerald-200 rounded-xl flex items-center justify-center gap-2 hover:bg-[#DCFCE7] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct WhatsApp Concierge</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

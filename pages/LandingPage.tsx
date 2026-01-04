
import React, { useState, useContext, useRef } from 'react';
import { AppContext } from '../App';
import { CreditCard, Scan, ShieldCheck, Lock, Clock, Upload } from 'lucide-react';
import { validateCardLuhn } from '../utils/card';
import { createSession } from '../utils/session';
import Header from '../components/Header';

const LandingPage: React.FC = () => {
  const { t, lang, refreshSession } = useContext(AppContext);
  const [cardNumber, setCardNumber] = useState('');
  const [error, setError] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.length <= 19) {
      setCardNumber(formatted);
      setError('');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsValidating(true);
      // Simulate "OCR" processing
      setTimeout(() => {
        // Randomly pick one of our valid test cards for the demo
        const testCards = ['4532 0151 1283 0366', '4012 8888 8888 1881', '4111 1111 1111 1111'];
        const randomCard = testCards[Math.floor(Math.random() * testCards.length)];
        setCardNumber(randomCard);
        setIsValidating(false);
        setError('');
      }, 1500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = cardNumber.replace(/\s+/g, '');
    
    if (!cleanNumber.startsWith('4')) {
      setError(t('card.nonVisa'));
      return;
    }

    if (!validateCardLuhn(cleanNumber)) {
      setError(t('card.invalid'));
      return;
    }

    setIsValidating(true);
    // Simulate API delay
    setTimeout(() => {
      createSession(cleanNumber, lang);
      refreshSession();
      setIsValidating(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              {t('landing.title')}
            </h1>
            <p className="text-gray-500 text-lg">
              {t('landing.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 space-y-6 border border-gray-100">
            {/* Visual Card representation */}
            <div className="relative w-full aspect-[1.586/1] bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-2xl p-6 text-white shadow-lg overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
              
              <div className="flex justify-between items-start">
                <div className="w-12 h-9 bg-yellow-400/80 rounded-md"></div>
                <div className="text-2xl italic font-bold">VISA</div>
              </div>
              
              <div className="space-y-4">
                <div className="text-2xl md:text-3xl font-mono tracking-widest h-8 transition-all">
                  {cardNumber || '•••• •••• •••• ••••'}
                </div>
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase opacity-60">Card Holder</div>
                    <div className="text-sm tracking-wide">APP PROTOTYPE USER</div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="text-[10px] uppercase opacity-60">Expires</div>
                    <div className="text-sm">12/28</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  {t('card.enter')}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={handleInputChange}
                    placeholder={t('card.placeholder')}
                    className={`w-full h-12 pl-12 pr-4 rounded-xl border-2 transition-all focus:ring-4 outline-none ${
                      error 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-100'
                    }`}
                  />
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
                {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isValidating || !cardNumber}
                  className="flex-grow h-12 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isValidating ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <ShieldCheck size={20} />
                      {t('card.validate')}
                    </>
                  )}
                </button>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  ref={fileInputRef} 
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-12 h-12 border-2 border-gray-200 text-gray-500 hover:bg-gray-50 rounded-xl flex items-center justify-center transition-all"
                  title={t('card.scan')}
                >
                  <Scan size={20} />
                </button>
              </div>
            </form>
          </div>

          <div className="bg-indigo-50/50 rounded-2xl p-4 flex gap-3 border border-indigo-100">
            <Lock className="text-indigo-600 shrink-0" size={20} />
            <div className="space-y-1">
              <p className="text-sm text-indigo-900 leading-tight">
                {t('landing.privacy')}
              </p>
              <div className="flex items-center gap-1.5 text-indigo-600">
                <Clock size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Zero-Storage Mode Active</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-gray-400 text-xs">
        &copy; 2024 BenefitLens. This is a secure prototype demonstration.
      </footer>
    </div>
  );
};

export default LandingPage;

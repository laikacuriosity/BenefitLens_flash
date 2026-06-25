import React, { useState, useContext } from 'react';
import { AppContext } from '../App';
import { CreditCard, ShieldCheck, Lock, Clock } from 'lucide-react';
import { createSession } from '../utils/session';
import Header from '../components/Header';

const LandingPage: React.FC = () => {
  const { t, lang, refreshSession } = useContext(AppContext);
  const [cardNumber, setCardNumber] = useState('');
  const [error, setError] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  // Helper: Detect Card Brand based on Industry Standard prefixes (IIN)
  const getCardBrand = (number: string) => {
    const clean = number.replace(/\s+/g, '');
    if (clean.startsWith('4')) return 'VISA';
    if (/^5[1-5]/.test(clean) || /^2[2-7]/.test(clean)) return 'MASTERCARD';
    if (/^3[47]/.test(clean)) return 'AMEX';
    if (clean.length > 0) return 'UNKNOWN';
    return '';
  };

  const cardBrand = getCardBrand(cardNumber);

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.replace(/\s+/g, '').length <= 16) {
      setCardNumber(formatted);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = cardNumber.replace(/\s+/g, '');
    
    if (cleanNumber.length < 13) {
      setError('Card number is too short.');
      return;
    }

    setIsValidating(true);
    setError('');

    try {
      // Sends the entered number straight to your Node.js server Luhn checker
      const response = await fetch('/api/verify-card', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardNumber: cleanNumber }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Server validation failed');
      }
      sessionStorage.setItem('redisSessionId',data.sessionId);
      // Success path: Load dashboard
      createSession(cleanNumber, lang, data.cardType, data.issuer, data.sessionId);
      refreshSession();

    } catch (err: any) {
      console.error("Backend Connection Error:", err);
      setError(err.message || 'Could not connect to verification server.');
    } finally {
      setIsValidating(false);
    }
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
            {/* Live Visual Card representation */}
            <div className={`relative w-full aspect-[1.586/1] bg-gradient-to-br rounded-2xl p-6 text-white shadow-lg overflow-hidden flex flex-col justify-between transition-all duration-500 ${
              cardBrand === 'AMEX' ? 'from-emerald-600 to-emerald-900' :
              cardBrand === 'MASTERCARD' ? 'from-amber-600 to-amber-900' :
              'from-indigo-600 to-indigo-900'
            }`}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
              
              <div className="flex justify-between items-start">
                <div className="w-12 h-9 bg-yellow-400/80 rounded-md"></div>
                <div className="text-2xl italic font-bold tracking-wider h-8">
                  {cardBrand && cardBrand !== 'UNKNOWN' ? cardBrand : 'CARD'}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-2xl md:text-3xl font-mono tracking-widest h-8 transition-all">
                  {cardNumber || '•••• •••• •••• ••••'}
                </div>
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase opacity-60">Card Analysis</div>
                    <div className="text-sm tracking-wide">LIVE INPUT PROCESSING</div>
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
                    placeholder="Enter your card number..."
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

              <button
                type="submit"
                disabled={isValidating || !cardNumber}
                className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                {isValidating ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <ShieldCheck size={20} />
                    Analyze Card Benefits
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="bg-indigo-50/50 rounded-2xl p-4 flex gap-3 border border-indigo-100">
            <Lock className="text-indigo-600 shrink-0" size={20} />
            <div className="space-y-1">
              <p className="text-sm text-indigo-900 leading-tight">
                Secure validation processing active via local Node runtime instance.
              </p>
              <div className="flex items-center gap-1.5 text-indigo-600">
                <Clock size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Luhn Check Active</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-gray-400 text-xs">
        &copy; 2026 BenefitLens. Live Network Connected Sandbox.
      </footer>
    </div>
  );
};

export default LandingPage;

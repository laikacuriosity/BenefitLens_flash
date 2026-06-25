
import React, { useContext, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { benefitsCatalog } from '../data/benefits';
import Header from '../components/Header';
import { 
  ArrowLeft, CheckCircle2, AlertCircle, Lightbulb, 
  HelpCircle, ExternalLink, CheckSquare, Shield,
  FileText, ArrowRightLeft, Sparkles, Target, Zap, Clock, Info
} from 'lucide-react';
import { updateSession } from '../utils/session';

const BenefitDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang, t, session, refreshSession, userContext } = useContext(AppContext);
  const [showOriginal, setShowOriginal] = useState(false);

  const benefit = useMemo(() => benefitsCatalog.find(b => b.id === id), [id]);
  const isUsed = useMemo(() => session?.benefitsUsed.includes(id || ''), [session, id]);

  const relevanceScore = useMemo(() => {
    if (!benefit) return 0;
    let score = 0;
    if (userContext.location !== 'any' && benefit.relevanceTriggers.locations.includes(userContext.location)) score += 60;
    if (userContext.isWeekend) score += 20;
    if (benefit.priority === 'high') score += 20;
    return score;
  }, [benefit, userContext]);

  if (!benefit) return <div className="p-12 text-center text-gray-400 font-bold">Benefit details unavailable.</div>;

  const toggleUsed = () => {
    if (!session || !id) return;
    const newUsed = isUsed 
      ? session.benefitsUsed.filter(bid => bid !== id)
      : [...session.benefitsUsed, id];
    const updated = { ...session, benefitsUsed: newUsed };
    updateSession(updated);
    refreshSession();
  };

  const exp = benefit.simplifiedExplanation[lang];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-indigo-600 font-black hover:-translate-x-1 transition-transform"
          >
            <ArrowLeft size={20} /> {t('nav.back')}
          </button>
          
          <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-indigo-100 shadow-sm">
            <Sparkles size={18} className="text-indigo-600" />
            <span className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.15em]">AI-Powered Insights</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content: Human-Friendly Sections (8 Columns) */}
          <div className="lg:col-span-8 space-y-10 animate-in fade-in slide-in-from-left-4 duration-500">
            <section className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
              {/* Feature Hero */}
              <div className="bg-indigo-600 p-12 text-white relative">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="bg-white/20 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest backdrop-blur-xl border border-white/10">
                      {benefit.category}
                    </span>
                    <span className="text-[10px] font-black text-white/70 uppercase tracking-widest flex items-center gap-2">
                      <Target size={14} /> {benefit.priority} Priority
                    </span>
                  </div>
                  <h1 className="text-5xl font-black leading-tight tracking-tight max-w-2xl">
                    {benefit.title[lang]}
                  </h1>
                  <p className="text-2xl opacity-90 italic font-medium leading-relaxed border-l-4 border-white/30 pl-6">
                    "{benefit.shortDescription[lang]}"
                  </p>
                </div>
              </div>

              {/* Simplified Discovery Sections */}
              <div className="p-12 space-y-16">
                
                {/* 1. WHAT YOU GET */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-indigo-50">
                      <Shield size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight">{t('detail.what')}</h3>
                  </div>
                  <div className="bg-indigo-50/50 p-10 rounded-[2.5rem] border-l-[10px] border-indigo-600">
                    <p className="text-indigo-900 font-bold text-xl leading-relaxed">{exp.whatYouGet}</p>
                  </div>
                </div>

                {/* 2. HOW TO USE */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-blue-50">
                      <HelpCircle size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight">{t('detail.how')}</h3>
                  </div>
                  <div className="grid gap-4">
                    {exp.howToUse.map((step, idx) => (
                      <div key={idx} className="flex gap-6 p-6 bg-gray-50 rounded-[2rem] border border-gray-100 hover:border-blue-300 hover:bg-white transition-all group">
                        <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-black shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                          {idx + 1}
                        </span>
                        <p className="text-base font-black text-gray-700 mt-2">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. LIMITATIONS */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-orange-50">
                      <AlertCircle size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight">{t('detail.limitations')}</h3>
                  </div>
                  <div className="bg-orange-50/40 p-10 rounded-[2.5rem] border border-orange-100">
                    <ul className="space-y-5">
                      {exp.limitations.map((lim, idx) => (
                        <li key={idx} className="flex gap-5 text-base font-bold text-orange-900">
                          <div className="w-2.5 h-2.5 rounded-full bg-orange-400 mt-2 shrink-0"></div>
                          {lim}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 4. PRO TIPS */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-yellow-100 text-yellow-700 rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-yellow-50">
                      <Lightbulb size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight">{t('detail.tips')}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {exp.proTips.map((tip, idx) => (
                      <div key={idx} className="flex gap-4 text-base font-bold text-yellow-900 bg-yellow-50/30 p-6 rounded-3xl border border-yellow-100 hover:shadow-md transition-shadow">
                        <CheckSquare className="text-yellow-600 shrink-0" size={24} />
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area (4 Columns) */}
          <aside className="lg:col-span-4 space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 lg:sticky lg:top-24">
            
            {/* Action Card */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-6">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Engagement Portal</h4>
              <button 
                onClick={toggleUsed}
                className={`w-full h-20 rounded-3xl font-black transition-all flex items-center justify-center gap-3 text-lg ${
                  isUsed 
                    ? 'bg-green-100 text-green-700 border-2 border-green-200' 
                    : 'bg-indigo-600 text-white shadow-2xl shadow-indigo-100 hover:scale-[1.03] active:scale-95'
                }`}
              >
                {isUsed ? <CheckCircle2 size={28} /> : <CheckSquare size={28} />}
                {isUsed ? 'Benefit Redeemed' : 'Claim Now'}
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gray-50 rounded-3xl text-center border border-gray-100">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Savings Estimate</p>
                  <p className="text-2xl font-black text-gray-900">₹{benefit.monetaryValue}</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-3xl text-center border border-gray-100">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Active Status</p>
                  <p className="text-2xl font-black text-indigo-600">Active</p>
                </div>
              </div>
            </div>

            {/* AI Relevance Reason Card */}
            <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white space-y-6 relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
               <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-80">
                 <Zap size={18} /> Engine Scorecard
               </div>
               <div className="space-y-3">
                 <p className="text-2xl font-black">AI Match: {relevanceScore}%</p>
                 <p className="text-sm font-medium leading-relaxed text-indigo-100">
                   This benefit is highly relevant based on your current <strong>{userContext.location}</strong> location and <strong>{userContext.isWeekend ? 'Weekend' : 'Weekday'}</strong> simulation.
                 </p>
               </div>
               <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white transition-all duration-1000" style={{ width: `${relevanceScore}%` }}></div>
               </div>
               <div className="flex items-center gap-2 text-[10px] font-bold bg-white/10 p-3 rounded-2xl">
                  {/* Fixed: Added Info icon import above */}
                  <Info size={14} />
                  <span>Personalized recommendation engine result.</span>
               </div>
            </div>

            {/* Legalese Translator Sidebar */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Legalese Lens</h4>
                <button 
                  onClick={() => setShowOriginal(!showOriginal)}
                  className={`w-14 h-7 rounded-full relative transition-colors ${showOriginal ? 'bg-indigo-600' : 'bg-gray-200'}`}
                >
                  <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all shadow-sm ${showOriginal ? 'left-8' : 'left-1'}`}></div>
                </button>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl text-gray-600 text-[11px] font-bold">
                <ArrowRightLeft size={16} className="text-indigo-600 shrink-0" />
                <span>Toggle to view the original contract jargon.</span>
              </div>

              {showOriginal && (
                <div className="p-6 bg-gray-900 rounded-[2rem] text-[10px] text-gray-400 font-mono leading-relaxed animate-in zoom-in duration-300 relative">
                  <div className="text-[8px] text-gray-600 mb-3 border-b border-gray-800 pb-2 flex items-center gap-2 font-sans font-black uppercase tracking-widest">
                    <FileText size={12} /> Legal Metadata Source
                  </div>
                  <p className="italic">{benefit.originalTnC}</p>
                </div>
              )}
            </div>

            {/* Issuer Trust Card */}
            <div className="p-8 bg-gray-900 rounded-[2.5rem] text-white flex flex-col gap-4 border-2 border-indigo-500/10 shadow-inner">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
                    <Shield size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-400">Verified Issuer</p>
                    <p className="font-black text-xl tracking-tight">{session?.issuer}</p>
                  </div>
               </div>
               <p className="text-[10px] text-gray-500 leading-tight">
                 This benefit is guaranteed by {session?.issuer} and governed by the Visa {session?.cardType.replace('_', ' ')} network protocols.
               </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Floating Expiry Monitor */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white shadow-2xl rounded-full px-8 py-4 flex items-center gap-4 z-40 border border-white/10">
        <Clock size={18} className="text-indigo-400 animate-pulse" />
        <span className="text-[11px] font-black uppercase tracking-[0.2em]">
          SESSION SECURITY TTL: {Math.max(0, Math.ceil((session!.expiresAt - Date.now()) / 1000))}S
        </span>
      </div>
    </div>
  );
};

export default BenefitDetail;

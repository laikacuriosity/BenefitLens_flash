
import React, { useContext, useState, useMemo, useEffect } from 'react';
import { AppContext } from '../App';
import Header from '../components/Header';
import { benefitsCatalog } from '../data/benefits';
import { Category, ContextLocation, Benefit } from '../types';
import { 
  Plane, Utensils, ShoppingBag, ShieldCheck, Fuel, 
  MapPin, Clock, Star, Sparkles, ChevronRight, TrendingUp, 
  ArrowUpDown, Bell, Mic, X, CalendarDays, CheckSquare, Info,
  Settings2, Activity, Zap, Search, LayoutGrid, List, Sparkle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type SortOption = 'relevance' | 'priority' | 'value' | 'alphabetical';
type DashboardTab = 'foryou' | 'all';

const Dashboard: React.FC = () => {
  const { session, t, lang, userContext, setUserContext } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState<DashboardTab>('foryou');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [toast, setToast] = useState<{message: string, icon: any} | null>(null);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [voiceSearchText, setVoiceSearchText] = useState('');
  const [expiryWarningShown, setExpiryWarningShown] = useState(false);
  const navigate = useNavigate();

  const categories: { id: Category; label: string; icon: any }[] = [
    { id: 'all', label: t('filter.all'), icon: Sparkles },
    { id: 'travel', label: t('filter.travel'), icon: Plane },
    { id: 'dining', label: t('filter.dining'), icon: Utensils },
    { id: 'shopping', label: t('filter.shopping'), icon: ShoppingBag },
    { id: 'insurance', label: t('filter.insurance'), icon: ShieldCheck },
    { id: 'fuel', label: t('filter.fuel'), icon: Fuel },
  ];

  const locations: { id: ContextLocation; label: string }[] = [
    { id: 'any', label: t('context.any') },
    { id: 'airport', label: t('context.airport') },
    { id: 'mall', label: t('context.mall') },
    { id: 'gas_station', label: t('context.gas') },
  ];

  const cardBenefits = useMemo(() => {
    if (!session) return [];
    return benefitsCatalog.filter(b => b.cardTypes.includes(session.cardType));
  }, [session]);

  const scoredBenefits = useMemo(() => {
    return cardBenefits.map(benefit => {
      let score = 0;
      let reason = "";
      
      if (userContext.location !== 'any' && benefit.relevanceTriggers.locations.includes(userContext.location)) {
        score += 100;
        reason = `Near ${userContext.location.replace('_', ' ')}`;
      }
      
      if (userContext.isWeekend && (benefit.relevanceTriggers.dayOfWeek === 'any' || (Array.isArray(benefit.relevanceTriggers.dayOfWeek) && benefit.relevanceTriggers.dayOfWeek.includes('saturday')))) {
         score += 40;
         if (!reason) reason = "Weekend Multiplier Active";
      }
      
      if (benefit.priority === 'high') score += 30;
      else if (benefit.priority === 'medium') score += 15;

      score += (benefit.monetaryValue / 1000);
      
      return { ...benefit, score, reason: reason || "Base Benefit" };
    });
  }, [cardBenefits, userContext]);

  const recommendations = useMemo(() => {
    return [...scoredBenefits]
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [scoredBenefits]);

  const filteredCatalog = useMemo(() => {
    let list = scoredBenefits;
    
    if (activeCategory !== 'all') {
      list = list.filter(b => b.category === activeCategory);
    }
    
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(b => 
        b.title[lang].toLowerCase().includes(q) || 
        b.shortDescription[lang].toLowerCase().includes(q)
      );
    }

    return [...list].sort((a, b) => {
      if (sortBy === 'relevance') return b.score - a.score;
      if (sortBy === 'value') return b.monetaryValue - a.monetaryValue;
      if (sortBy === 'alphabetical') return a.title[lang].localeCompare(b.title[lang]);
      const priorityMap = { high: 3, medium: 2, low: 1 };
      return priorityMap[b.priority] - priorityMap[a.priority];
    });
  }, [scoredBenefits, activeCategory, searchQuery, sortBy, lang]);

  useEffect(() => {
    const checkExpiry = () => {
      if (!session) return;
      const timeLeft = session.expiresAt - Date.now();
      if (timeLeft < 120000 && !expiryWarningShown) {
        setToast({ message: "⚠️ Security: Session expires in 2m.", icon: Clock });
        setExpiryWarningShown(true);
      }
    };
    const interval = setInterval(checkExpiry, 10000);
    return () => clearInterval(interval);
  }, [session, expiryWarningShown]);

  const exploredCount = session?.benefitsUsed.length || 0;
  const totalPotentialSavings = cardBenefits.reduce((sum, b) => sum + b.monetaryValue, 0);
  const progressPercent = (exploredCount / cardBenefits.length) * 100;

  const handleVoiceSim = () => {
    setIsVoiceActive(true);
    setVoiceSearchText('');
    setTimeout(() => setVoiceSearchText('Show me airport lounge access'), 1500);
    setTimeout(() => {
      setIsVoiceActive(false);
      setUserContext({ ...userContext, location: 'airport' });
      setSortBy('relevance');
      setActiveTab('all');
      setActiveCategory('travel');
      setToast({ message: "Switching to travel catalog!", icon: Mic });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content Area (8 Columns) */}
          <main className="lg:col-span-8 space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
            
            {/* TAB SELECTOR */}
            <div className="bg-white p-2 rounded-[2rem] shadow-sm border border-gray-100 flex gap-2">
              <button
                onClick={() => setActiveTab('foryou')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-3xl text-sm font-black transition-all ${
                  activeTab === 'foryou' 
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' 
                  : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Sparkle size={18} />
                {t('dashboard.tabs.foryou')}
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-3xl text-sm font-black transition-all ${
                  activeTab === 'all' 
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' 
                  : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <LayoutGrid size={18} />
                {t('dashboard.tabs.all')}
              </button>
            </div>

            {/* SHARED: DISCOVERY CONTEXT (Visible in both tabs as it affects scores) */}
            <section className="bg-white rounded-[2.5rem] shadow-xl border border-indigo-50 p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100">
                    <Settings2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">Discovery Context</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Real-time relevance engine</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-2xl border border-indigo-100">
                  <Zap size={14} className="text-indigo-600 animate-pulse" />
                  <span className="text-[9px] font-black text-indigo-700 uppercase tracking-widest">Live Optimization</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                    <MapPin size={12} /> Simulate Location
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {locations.map(loc => (
                      <button
                        key={loc.id}
                        onClick={() => setUserContext({ ...userContext, location: loc.id })}
                        className={`px-3 py-3 rounded-2xl text-[9px] font-black uppercase transition-all border-2 ${
                          userContext.location === loc.id
                            ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl'
                            : 'bg-white border-gray-100 text-gray-400 hover:border-indigo-200 hover:text-indigo-600'
                        }`}
                      >
                        {loc.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                    <CalendarDays size={12} /> Simulate Day
                  </div>
                  <button
                    onClick={() => setUserContext({ ...userContext, isWeekend: !userContext.isWeekend })}
                    className={`w-full h-full min-h-[5rem] flex items-center justify-center gap-3 rounded-2xl transition-all border-2 ${
                      userContext.isWeekend 
                        ? 'bg-indigo-50 border-indigo-600 text-indigo-700' 
                        : 'bg-white border-gray-100 text-gray-400'
                    }`}
                  >
                    <Clock size={20} />
                    <span className="text-xs font-black uppercase tracking-widest">{userContext.isWeekend ? 'Weekend Active' : 'Weekday Mode'}</span>
                  </button>
                </div>
              </div>
            </section>

            {/* TAB 1: DISCOVERY (Personalized) */}
            {activeTab === 'foryou' && (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <section className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="text-orange-500" size={24} />
                      <h3 className="text-2xl font-black text-gray-900 tracking-tight">{t('dashboard.recommendations')}</h3>
                    </div>
                    <button onClick={() => setActiveTab('all')} className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">
                      See All {cardBenefits.length} →
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendations.map((benefit, idx) => (
                      <div 
                        key={benefit.id}
                        onClick={() => navigate(`/benefit/${benefit.id}`)}
                        className="group bg-white border-2 border-orange-100 p-6 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden flex flex-col"
                      >
                        <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider">
                          Best Match
                        </div>
                        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                          {categories.find(c => c.id === benefit.category)?.icon && React.createElement(categories.find(c => c.id === benefit.category)!.icon, { size: 24 })}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2 leading-tight text-lg">{benefit.title[lang]}</h4>
                        <div className="flex items-center gap-2 mb-4 bg-indigo-50/50 p-2 rounded-xl border border-indigo-100">
                          <Zap size={14} className="text-indigo-600 shrink-0" />
                          <p className="text-[9px] font-black text-indigo-700 leading-none truncate">{benefit.reason}</p>
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-2 mt-auto">{benefit.shortDescription[lang]}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-indigo-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  <div className="relative z-10 space-y-6">
                     <h3 className="text-3xl font-black leading-tight tracking-tight">Browse Everything Altogether</h3>
                     <p className="text-lg opacity-70 font-medium max-w-md">Looking for something specific? Search and filter our complete catalog of benefits for your {session?.cardType.replace('_', ' ')} card.</p>
                     <button 
                       onClick={() => setActiveTab('all')}
                       className="bg-white text-indigo-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                     >
                       Explore All Benefits <ArrowUpDown size={18} />
                     </button>
                  </div>
                </section>
              </div>
            )}

            {/* TAB 2: FULL CATALOG (All Benefits Altogether) */}
            {activeTab === 'all' && (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <section className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-lg border border-gray-100 space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-1">
                      <h3 className="text-3xl font-black text-gray-900 tracking-tight">Program Catalog</h3>
                      <p className="text-sm font-bold text-gray-400">Viewing all {cardBenefits.length} benefits</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600" size={18} />
                        <input 
                          type="text"
                          placeholder="Search any perk..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full sm:w-64 h-12 pl-12 pr-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-indigo-600 focus:bg-white transition-all outline-none font-bold text-sm"
                        />
                      </div>
                      <div className="flex bg-gray-100 p-1 rounded-2xl">
                        <button onClick={() => setViewMode('grid')} className={`p-2 rounded-xl ${viewMode === 'grid' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-400'}`}><LayoutGrid size={20} /></button>
                        <button onClick={() => setViewMode('list')} className={`p-2 rounded-xl ${viewMode === 'list' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-400'}`}><List size={20} /></button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black transition-all whitespace-nowrap border-2 uppercase tracking-widest ${
                          activeCategory === cat.id 
                            ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' 
                            : 'bg-white border-gray-100 text-gray-500 hover:border-indigo-100'
                        }`}
                      >
                        <cat.icon size={14} />
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      Ranking by: <span className="text-indigo-600">{sortBy.toUpperCase()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowUpDown size={14} className="text-gray-400" />
                      <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)} className="bg-transparent text-[10px] font-black text-gray-600 outline-none uppercase tracking-widest cursor-pointer">
                        <option value="relevance">Recommended Ranking</option>
                        <option value="priority">Priority First</option>
                        <option value="value">Highest Value</option>
                        <option value="alphabetical">A-Z</option>
                      </select>
                    </div>
                  </div>

                  {filteredCatalog.length > 0 ? (
                    <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}>
                      {filteredCatalog.map((benefit) => {
                        const matchesContext = userContext.location !== 'any' && benefit.relevanceTriggers.locations.includes(userContext.location);
                        return (
                          <div 
                            key={benefit.id} onClick={() => navigate(`/benefit/${benefit.id}`)}
                            className={`bg-white border p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all cursor-pointer flex group ${
                              matchesContext ? 'border-indigo-400 ring-2 ring-indigo-50' : 'border-gray-100'
                            } ${viewMode === 'list' ? 'items-center gap-6' : 'flex-col justify-between h-full'}`}
                          >
                            <div className={`w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-indigo-600 transition-colors shrink-0 ${viewMode === 'list' ? 'bg-indigo-50' : 'mb-4'}`}>
                              {categories.find(c => c.id === benefit.category)?.icon && React.createElement(categories.find(c => c.id === benefit.category)!.icon, { size: 24 })}
                            </div>
                            <div className="flex-grow space-y-1">
                              <h4 className="font-bold text-gray-900 group-hover:text-indigo-600">{benefit.title[lang]}</h4>
                              <p className="text-[11px] text-gray-400 line-clamp-1">{benefit.shortDescription[lang]}</p>
                            </div>
                            <div className={`flex items-center justify-between mt-auto pt-4 border-t border-gray-50 ${viewMode === 'list' ? 'hidden' : ''}`}>
                               <span className="text-[9px] font-black text-indigo-500 uppercase">{benefit.usageFrequency}</span>
                               <span className="text-sm font-black text-gray-900">₹{benefit.monetaryValue}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200">
                      <Search size={48} className="mx-auto text-gray-300 mb-4" />
                      <p className="text-gray-500 font-bold">No results found.</p>
                    </div>
                  )}
                </section>
              </div>
            )}
          </main>

          {/* SIDEBAR: SAVINGS & PRIVACY (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-indigo-600 rounded-[2.5rem] shadow-xl p-8 text-white space-y-8 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
                <Activity size={16} /> Dashboard Stats
              </div>
              <div className="space-y-6">
                <div>
                   <p className="text-[10px] font-bold uppercase opacity-60">Total Potential Value</p>
                   <p className="text-4xl font-black tracking-tight">₹{totalPotentialSavings.toLocaleString()}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-5 rounded-3xl border border-white/10">
                    <p className="text-[9px] font-bold uppercase opacity-60">Used</p>
                    <p className="text-2xl font-black">{exploredCount}</p>
                  </div>
                  <div className="bg-white/10 p-5 rounded-3xl border border-white/10">
                    <p className="text-[9px] font-bold uppercase opacity-60">Available</p>
                    <p className="text-2xl font-black">{cardBenefits.length - exploredCount}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[11px] font-black uppercase">
                    <span className="opacity-70">Utilization</span>
                    <span>{Math.round(progressPercent)}%</span>
                  </div>
                  <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white transition-all duration-1000" style={{ width: `${progressPercent}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-[2.5rem] text-white space-y-6 border border-white/5">
              <div className="flex items-center gap-3">
                 <ShieldCheck size={24} className="text-indigo-400" />
                 <div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Security Verified</div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-medium">
                BenefitLens operates on a <strong>zero-data model</strong>. No PII is stored. Sessions are destroyed after 15 minutes of inactivity.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[9px] font-mono opacity-40 uppercase tracking-widest">
                <span>Status: Encrypted</span>
                <span>Type: {session?.cardType.replace('_', ' ')}</span>
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-[2rem] text-center space-y-3 shadow-sm">
               <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Help & Support</div>
               <p className="text-[11px] font-bold text-gray-700 leading-tight">Consult your bank's portal for enrollment or claim assistance.</p>
               <button className="text-indigo-600 text-[10px] font-black uppercase hover:underline">Issuer Support →</button>
            </div>
          </aside>

        </div>
      </div>

      {/* FAB: Voice Discovery */}
      <button 
        onClick={handleVoiceSim}
        className="fixed bottom-24 right-8 w-16 h-16 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group"
      >
        <Mic size={28} />
        <span className="absolute right-20 bg-gray-900 text-white px-4 py-2 rounded-2xl text-[10px] font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap translate-x-4 group-hover:translate-x-0 tracking-widest uppercase">
          AI Voice Assistant
        </span>
      </button>

      {/* Voice Overlay */}
      {isVoiceActive && (
        <div className="fixed inset-0 z-50 bg-indigo-950/98 backdrop-blur-2xl flex flex-col items-center justify-center text-white p-8 animate-in fade-in duration-300">
          <button onClick={() => setIsVoiceActive(false)} className="absolute top-8 right-8 p-3 hover:bg-white/10 rounded-full transition-colors">
            <X size={32} />
          </button>
          <div className="relative mb-16">
            <div className="w-40 h-40 bg-indigo-500/20 rounded-full animate-ping absolute inset-0"></div>
            <div className="w-40 h-40 bg-indigo-600 rounded-full flex items-center justify-center relative shadow-[0_0_50px_rgba(79,70,229,0.5)]">
              <Mic size={56} className="animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl font-black mb-6 tracking-tight">AI Voice Discovery</h2>
          <div className="text-2xl md:text-4xl font-medium text-center text-indigo-200 max-w-2xl h-16 italic tracking-tight">
            {voiceSearchText || "What are you looking for?"}
          </div>
        </div>
      )}

      {/* Floating Expiry Monitor */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md shadow-2xl border border-indigo-50 rounded-2xl px-8 py-4 flex items-center gap-4 z-40">
        <div className={`w-3 h-3 rounded-full ${expiryWarningShown ? 'bg-red-500 animate-ping' : 'bg-indigo-600'}`}></div>
        <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${expiryWarningShown ? 'text-red-600' : 'text-indigo-900'}`}>
          SESSION EXPIRES IN {Math.max(0, Math.ceil((session!.expiresAt - Date.now()) / 60000))}M
        </span>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed top-24 right-6 z-50 animate-in slide-in-from-right-full duration-500">
          <div className="bg-white text-gray-900 rounded-[2rem] p-6 shadow-2xl border border-indigo-50 flex items-center gap-6 min-w-[350px]">
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-50">
              {React.createElement(toast.icon, { size: 28 })}
            </div>
            <div className="flex-grow">
              <span className="text-[10px] uppercase font-black tracking-widest text-indigo-400 block mb-1">Context Sync</span>
              <p className="text-base font-bold text-gray-800">{toast.message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

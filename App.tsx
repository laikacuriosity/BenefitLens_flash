
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Language, SessionData, UserContext } from './types';
import { translations } from './data/translations';
import { getSession, clearSession } from './utils/session';

// Pages
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import BenefitDetail from './pages/BenefitDetail';

// Context for translation
export const AppContext = React.createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
  session: SessionData | null;
  refreshSession: () => void;
  userContext: UserContext;
  setUserContext: (c: UserContext) => void;
}>({
  lang: 'en',
  setLang: () => {},
  t: (k) => k,
  session: null,
  refreshSession: () => {},
  userContext: { location: 'any', isWeekend: false },
  setUserContext: () => {}
});

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = sessionStorage.getItem('benefitlens_lang');
    return (saved as Language) || 'en';
  });
  const [session, setSession] = useState<SessionData | null>(getSession());
  const [userContext, setUserContext] = useState<UserContext>({
    location: 'any',
    isWeekend: new Date().getDay() === 0 || new Date().getDay() === 6
  });

  const t = (key: string, params?: Record<string, string>) => {
    let str = translations[lang][key] || key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        str = str.replace(`{${k}}`, v);
      });
    }
    return str;
  };

  const refreshSession = () => {
    setSession(getSession());
  };

  const handleSetLang = (l: Language) => {
    setLang(l);
    sessionStorage.setItem('benefitlens_lang', l);
  };

  // Global session watcher
  useEffect(() => {
    const interval = setInterval(() => {
      const current = getSession();
      if (!current && session) {
        setSession(null);
        window.location.hash = '/';
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [session]);

  const value = {
    lang,
    setLang: handleSetLang,
    t,
    session,
    refreshSession,
    userContext,
    setUserContext
  };

  return (
    <AppContext.Provider value={value}>
      <div className={`${lang === 'ta' ? 'font-tamil' : lang === 'hi' ? 'font-hindi' : ''} min-h-screen`}>
        <HashRouter>
          <Routes>
            <Route path="/" element={session ? <Navigate to="/dashboard" /> : <LandingPage />} />
            <Route path="/dashboard" element={session ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/benefit/:id" element={session ? <BenefitDetail /> : <Navigate to="/" />} />
          </Routes>
        </HashRouter>
      </div>
    </AppContext.Provider>
  );
};

export default App;

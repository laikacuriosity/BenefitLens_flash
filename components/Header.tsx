
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Language } from '../types';
import { Shield, Languages, LogOut } from 'lucide-react';
import { clearSession } from '../utils/session';

const Header: React.FC = () => {
  const { lang, setLang, t, session, refreshSession } = useContext(AppContext);

  const handleLogout = () => {
    clearSession();
    refreshSession();
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <Shield size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-indigo-900">BenefitLens</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
            {(['en', 'ta', 'hi'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  lang === l ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {l === 'en' ? 'English' : l === 'ta' ? 'தமிழ்' : 'हिन्दी'}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-gray-100 p-2 rounded-lg text-sm"
            >
              <option value="en">EN</option>
              <option value="ta">தமிழ்</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>

          {session && (
            <button
              onClick={handleLogout}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

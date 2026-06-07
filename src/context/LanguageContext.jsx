import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('yasmena_lang') || 'en');

  const isAr = lang === 'ar';

  useEffect(() => {
    localStorage.setItem('yasmena_lang', lang);
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => translations[lang]?.[key] || translations['en'][key] || key;

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  return (
    <LanguageContext.Provider value={{ lang, isAr, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

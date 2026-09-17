'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type SiteLang = 'zh' | 'en';

const STORAGE_KEY = 'cos.site.lang';

type Ctx = {
  lang: SiteLang;
  setLang: (lang: SiteLang) => void;
  t: (zh: string, en: string) => string;
};

const SiteLocaleContext = createContext<Ctx | null>(null);

function readInitial(): SiteLang {
  if (typeof window === 'undefined') return 'zh';
  const q = new URLSearchParams(window.location.search).get('lang');
  if (q === 'en' || q === 'zh') return q;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'zh') return stored;
  return 'zh';
}

export function SiteLocaleProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<SiteLang>('zh');

  useEffect(() => {
    setLangState(readInitial());
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    }
  }, [lang]);

  const setLang = useCallback((next: SiteLang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (zh, en) => (lang === 'zh' ? zh : en),
    }),
    [lang, setLang],
  );

  return <SiteLocaleContext.Provider value={value}>{children}</SiteLocaleContext.Provider>;
}

export function useSiteLocale() {
  const ctx = useContext(SiteLocaleContext);
  if (!ctx) {
    return {
      lang: 'zh' as SiteLang,
      setLang: (_: SiteLang) => {},
      t: (zh: string, _en: string) => zh,
    };
  }
  return ctx;
}

export function LangSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang } = useSiteLocale();
  return (
    <span className={className} role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => setLang('zh')}
        className={`text-sm px-1 ${lang === 'zh' ? 'text-text-primary font-semibold' : 'text-text-muted'}`}
      >
        中文
      </button>
      <span className="text-text-subtle mx-0.5">|</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`text-sm px-1 ${lang === 'en' ? 'text-text-primary font-semibold' : 'text-text-muted'}`}
      >
        EN
      </button>
    </span>
  );
}

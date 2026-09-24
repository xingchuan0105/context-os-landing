'use client';

import React, { createContext, useContext, useMemo } from 'react';

/** 页面语言由路由决定：`/` 为中文，`/en` 为英文（两者均为可索引的静态页）。 */
export type SiteLang = 'zh' | 'en';

type Ctx = {
  lang: SiteLang;
  t: (zh: string, en: string) => string;
};

const SiteLocaleContext = createContext<Ctx | null>(null);

export function SiteLocaleProvider({ lang, children }: { lang: SiteLang; children: React.ReactNode }) {
  const value = useMemo<Ctx>(() => ({ lang, t: (zh, en) => (lang === 'zh' ? zh : en) }), [lang]);
  return <SiteLocaleContext.Provider value={value}>{children}</SiteLocaleContext.Provider>;
}

export function useSiteLocale(): Ctx {
  const ctx = useContext(SiteLocaleContext);
  if (!ctx) {
    return { lang: 'zh', t: (zh: string) => zh };
  }
  return ctx;
}

export function LangSwitch({ className = '' }: { className?: string }) {
  const { lang } = useSiteLocale();
  const item = (target: SiteLang, href: string, label: string) => (
    <a
      href={href}
      hrefLang={target === 'zh' ? 'zh-CN' : 'en'}
      aria-current={lang === target ? 'true' : undefined}
      className={`text-sm px-1 ${lang === target ? 'text-text-primary font-semibold' : 'text-text-muted'}`}
    >
      {label}
    </a>
  );
  return (
    <span className={className} role="group" aria-label="Language">
      {item('zh', '/', '中文')}
      <span className="text-text-subtle mx-0.5">|</span>
      {item('en', '/en', 'EN')}
    </span>
  );
}

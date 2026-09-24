'use client';

import { SiteLocaleProvider, type SiteLang } from '@/lib/site-locale';

export function Providers({ lang, children }: { lang: SiteLang; children: React.ReactNode }) {
  return <SiteLocaleProvider lang={lang}>{children}</SiteLocaleProvider>;
}

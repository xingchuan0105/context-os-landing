'use client';

import { SiteLocaleProvider } from '@/lib/site-locale';

export function Providers({ children }: { children: React.ReactNode }) {
  return <SiteLocaleProvider>{children}</SiteLocaleProvider>;
}

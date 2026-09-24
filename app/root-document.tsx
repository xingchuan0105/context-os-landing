import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import type { SiteLang } from '@/lib/site-locale';

export const SITE_URL = 'https://contextlm.top';
const ORG_ID = `${SITE_URL}/#org`;
const FOUNDER_ID = `${SITE_URL}/#xingchuan`;

const COPY = {
  zh: {
    htmlLang: 'zh-CN',
    ogLocale: 'zh_CN',
    path: '/',
    title: 'ContextLM — AI 知识库与知识工作工具',
    description:
      'ContextLM 相信 AI + Men：以人工智能增益大众的知识、创造与自由表达，而非用自动化把人排除在未来之外。旗下：Context OS（可本地部署的个人 AI 知识库）与开发者邢川的创作者空间。',
    ogDescription: '以人工智能增益大众的知识、创造与自由表达。旗下：Context OS 与邢川的创作者空间。',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    path: '/en',
    title: 'ContextLM — AI knowledge base and knowledge-work tools',
    description:
      'ContextLM believes in AI + Men: AI that amplifies human knowledge, creation and free expression. Home of Context OS, a locally deployable personal AI knowledge base, and developer Xing Chuan’s creator space.',
    ogDescription: 'AI that amplifies human knowledge, creation and free expression. Home of Context OS and Xing Chuan’s creator space.',
  },
} as const;

export function siteMetadata(lang: SiteLang): Metadata {
  const c = COPY[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: c.title,
    description: c.description,
    keywords: ['ContextLM', 'AI + Men', 'Context OS', 'Agentic 知识工作台', '私有知识库', 'BYOK', '知识分享', '邢川'],
    authors: [{ name: '邢川' }],
    alternates: {
      canonical: c.path,
      languages: { 'zh-CN': '/', en: '/en', 'x-default': '/' },
    },
    icons: {
      icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
      shortcut: '/icon.svg',
      apple: '/icon.svg',
    },
    openGraph: {
      title: 'ContextLM — AI + Men',
      description: c.ogDescription,
      type: 'website',
      url: `${SITE_URL}${c.path === '/' ? '' : c.path}`,
      siteName: 'ContextLM',
      locale: c.ogLocale,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'ContextLM' }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@cHuaNXiNg105',
      title: 'ContextLM — AI + Men',
      description: c.ogDescription,
      images: ['/og.png'],
    },
  };
}

export function RootDocument({ lang, children }: { lang: SiteLang; children: React.ReactNode }) {
  // GEO：品牌事实权威源（Organization + WebSite）；@id 与 app / blog / 卫星站共享
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'ContextLM',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/icon.svg`,
    description:
      'ContextLM 相信 AI + Men：以人工智能增益大众的知识、创造与自由表达。旗下产品 Context OS 为可本地部署的个人 AI 知识库。',
    founder: {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: '邢川',
      alternateName: 'Xing Chuan',
      sameAs: ['https://github.com/xingchuan0105', 'https://x.com/cHuaNXiNg105'],
    },
    sameAs: [
      'https://github.com/xingchuan0105',
      'https://x.com/cHuaNXiNg105',
      'https://app.contextlm.top/',
      'https://blog.contextlm.top/',
    ],
  };
  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ContextLM',
    url: `${SITE_URL}/`,
    inLanguage: COPY[lang].htmlLang,
    publisher: { '@id': ORG_ID },
  };

  return (
    <html lang={COPY[lang].htmlLang} data-theme="dark">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
        <Providers lang={lang}>{children}</Providers>
      </body>
    </html>
  );
}

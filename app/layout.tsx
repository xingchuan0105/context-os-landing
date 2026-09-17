import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

const SITE_URL = 'https://contextlm.top';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'ContextLM — AI 知识库与知识工作工具',
  description:
    'ContextLM 相信 AI + Men：以人工智能增益大众的知识、创造与自由表达，而非用自动化把人排除在未来之外。旗下：Context-OS（可本地部署的个人 AI 知识库）与开发者邢川的创作者空间。',
  keywords: [
    'ContextLM',
    'AI + Men',
    'Context-OS',
    'Agentic 知识工作台',
    '私有知识库',
    'BYOK',
    '知识分享',
    '邢川',
  ],
  authors: [{ name: '邢川' }],
  // GEO/SEO：营销站首页必须有绝对 canonical（2026-08-12 复测仍缺）
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'ContextLM — AI + Men',
    description: '以人工智能增益大众的知识、创造与自由表达。旗下：Context-OS 与邢川的创作者空间。',
    type: 'website',
    url: SITE_URL,
    siteName: 'ContextLM',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // GEO：品牌事实权威源（Organization + WebSite，含 sameAs）
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ContextLM',
    url: SITE_URL,
    description:
      'ContextLM 相信 AI + Men：以人工智能增益大众的知识、创造与自由表达。旗下产品 Context-OS 为 Agentic 知识工作台。',
    founder: { '@type': 'Person', name: '邢川' },
    sameAs: [
      'https://github.com/xingchuan0105',
      'https://x.com/cHuaNXiNg105',
    ],
  };
  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ContextLM',
    alternateName: 'Context-OS portal',
    url: SITE_URL,
    inLanguage: 'zh-CN',
  };

  return (
    <html lang="zh-CN" data-theme="dark">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

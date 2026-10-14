'use client';

import React from 'react';
import { useSiteLocale } from '@/lib/site-locale';

type Site = {
  title: string;
  description: string;
  href: string;
  cta: string;
  home?: boolean;
};

/**
 * Creator pillar: Chuan Xing's personal space — blog is its home,
 * satellites: Sparklist Weekly, Why I Am Right, ELO, Xiangqi.
 */
export default function Studio() {
  const { t } = useSiteLocale();

  const sites: Site[] = [
    {
      title: t('博客', 'Blog'),
      description: t('方法、观察与产品叙事', 'Methods, notes, product narrative'),
      href: 'https://blog.contextlm.top',
      cta: t('进入', 'Enter'),
      home: true,
    },
    {
      title: t('点子王周报', 'Sparklist Weekly'),
      description: t('论坛需求信号 · 周更 Top 机会', 'Weekly product opportunities from forums'),
      href: 'https://sparklist.contextlm.top',
      cta: t('查看', 'Open'),
    },
    {
      title: 'Why I Am Right',
      description: t('你的偏见，值得被证实', 'Your bias, worth proving right'),
      href: 'https://whyimright.contextlm.top',
      cta: t('打开', 'Open'),
    },
    {
      title: 'ELO-everything',
      description: t('线下局记分与排名', 'Offline match scoring & ranks'),
      href: 'https://elo.contextlm.top',
      cta: t('记分', 'Score'),
    },
    {
      title: t('象棋残局', 'Xiangqi'),
      description: t('残局与着法工具', 'Endgame & moves'),
      href: 'https://canju.contextlm.top',
      cta: t('打开', 'Open'),
    },
    {
      title: 'Pricer',
      description: t('空间与时段资源收益管理', 'Revenue pricing for spaces & time slots'),
      href: 'https://pricer.contextlm.top',
      cta: t('打开', 'Open'),
    },
  ];

  return (
    <section id="studio" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-text-primary text-center mb-3">
          {t('创作者空间', 'Creator space')}
        </h2>
        <p className="text-sm text-text-muted text-center mb-12 max-w-2xl mx-auto">
          {t(
            'ContextLM 的另一翼：开发者邢川的个人空间。主页在 blog.contextlm.top——文章、周报与实验站点都从这里出发。',
            'The other wing of ContextLM: developer Chuan Xing’s personal space. Its home is blog.contextlm.top—essays, the weekly, and experiments all start there.',
          )}
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="flex-shrink-0">
            <div className="w-[120px] h-[120px] rounded-full bg-card border border-border-subtle flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-text-subtle"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-text-primary mb-3">{t('邢川', 'Chuan Xing')}</h3>
            <p className="text-base text-text-muted leading-relaxed mb-3 max-w-xl">
              {t(
                'ContextLM 开发者，研究工具的创造者。相信 AI 应当增益普通人的知识与创造——Context OS 是这个立场的产品化，这个空间是它的方法论与实验场。',
                'Developer of ContextLM, builder of research tools. Believes AI should empower ordinary people’s knowledge and creativity—Context OS is that stance as a product; this space is its method and lab.',
              )}
            </p>
            <p className="text-sm text-text-subtle">
              {t(
                '主线：ContextLM / Context OS。侧项目：博客、点子王周报、Why I Am Right、ELO、象棋与 Pricer。',
                'Main line: ContextLM / Context OS. Side projects: Blog, Sparklist Weekly, Why I Am Right, ELO, Xiangqi, and Pricer.',
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sites.map((site) => (
            <a
              key={site.title}
              href={site.href}
              className="block group rounded-xl border border-border-subtle bg-card/40 hover:bg-card-hover/60 transition-colors px-4 py-3 text-left"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                  {site.title}
                  {site.home ? (
                    <span className="text-[10px] font-medium uppercase tracking-wide text-[#f54e00] border border-[#f54e00]/30 rounded px-1.5 py-0.5">
                      {t('空间主页', 'Space home')}
                    </span>
                  ) : null}
                </h4>
                <span className="text-xs text-text-subtle shrink-0">{site.cta} →</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">{site.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

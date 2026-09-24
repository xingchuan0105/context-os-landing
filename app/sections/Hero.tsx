'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useSiteLocale } from '@/lib/site-locale';

const APP_TRIAL =
  'https://app.contextlm.top/login?next=' +
  encodeURIComponent('/chat') +
  '&utm_source=portal&utm_medium=hero&utm_campaign=team_trial&utm_content=hero_primary';

/**
 * Product hero: Context OS as the single gravity — who it serves, what task it
 * completes, real cited-output evidence, one primary CTA. The creator space is
 * a secondary text entry below the CTA.
 */
export default function Hero() {
  const { t } = useSiteLocale();

  return (
    <section className="relative min-h-[82vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Banner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(245,78,0,0.10),transparent)]"
      />

      <div className="relative text-center max-w-3xl mx-auto mb-10">
        <img
          src="/brand/contextlm-mark.svg"
          alt="ContextLM"
          width={48}
          height={48}
          className="w-12 h-12 rounded-xl mx-auto mb-5"
        />
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-text-subtle mb-4">
          Context OS
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-5 leading-tight">
          {t(
            '把你的文档，变成能回答、有引用的 AI 知识库',
            'Turn your documents into an AI knowledge base that answers — with citations',
          )}
        </h1>
        <p className="text-lg text-text-muted leading-relaxed">
          {t(
            '给独立研究者与小团队：导入私有资料，直接向它提问；每个结论都带可逐条核对的来源引用。',
            'For independent researchers and small teams: ingest your private materials, ask questions directly, and get answers whose claims link back to checkable sources.',
          )}
        </p>
      </div>

      {/* Real output evidence: one cited answer sample */}
      <Card hover={false} className="relative w-full max-w-2xl text-left mb-8">
        <p className="text-xs font-medium tracking-wide uppercase text-text-subtle mb-3">
          {t('示例输出', 'Sample output')}
        </p>
        <p className="text-sm text-text-subtle mb-2">
          {t(
            '问：我上传的三篇论文，在方法结论上有什么分歧？',
            'Q: Where do the three papers I uploaded disagree on method?',
          )}
        </p>
        <p className="text-sm text-text-primary leading-relaxed mb-4">
          {t(
            '答：三篇结论并不一致——A 将提升归因于检索增强 [1]，B 认为主要来自指令微调 [2]，而 C 在相同设置下未能复现该差距 [3]。',
            'A: They disagree — A attributes the gain to retrieval augmentation [1], B to instruction tuning [2], and C fails to reproduce the gap under the same setup [3].',
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            t('[1] 论文-A.pdf · 第 4 页', '[1] paper-A.pdf · p.4'),
            t('[2] 论文-B.pdf · 第 9 页', '[2] paper-B.pdf · p.9'),
            t('[3] 论文-C.pdf · 第 12 页', '[3] paper-C.pdf · p.12'),
          ].map((chip) => (
            <span
              key={chip}
              className="text-xs text-text-muted border border-border-subtle rounded-full px-3 py-1"
            >
              {chip}
            </span>
          ))}
        </div>
      </Card>

      <div className="relative flex flex-col items-center gap-4">
        <Button href={APP_TRIAL} size="lg" data-testid="hero-entry-product">
          {t('免费开始，获得第一条有引用的回答', 'Start free — get your first cited answer')}
        </Button>
        <p className="text-sm text-text-subtle">
          {t('找博客、周报与实验？', 'Looking for the blog, weekly, and experiments?')}{' '}
          <a
            href="#studio"
            className="text-accent hover:text-accent-hover transition-colors"
            data-testid="hero-entry-studio"
          >
            {t('进入创作者空间', 'Enter the creator space')} ↓
          </a>
        </p>
      </div>
    </section>
  );
}

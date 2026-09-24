'use client';

import React from 'react';
import { useSiteLocale } from '@/lib/site-locale';

const APP_TRIAL =
  'https://app.contextlm.top/login?next=' +
  encodeURIComponent('/dashboard') +
  '&utm_source=portal&utm_medium=footer&utm_campaign=team_trial';

const APP_CLIENT =
  'https://app.contextlm.top/desktop?utm_source=portal&utm_medium=footer&utm_campaign=client';

export default function Footer() {
  const { t } = useSiteLocale();
  return (
    <footer className="bg-bg-footer border-t border-border-subtle py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/brand/contextlm-mark.svg"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 rounded-[0.3rem] shrink-0"
            />
            <span className="text-sm text-text-subtle">© 2026 ContextLM</span>
            {/* GEO freshness：内容更新日期 */}
            <span className="text-xs text-text-subtle/70">
              {t('内容更新：2026-09-24', 'Updated 2026-09-24')}
            </span>
          </div>

          <div className="flex items-center gap-5 flex-wrap justify-center">
            <span className="text-xs text-text-subtle">{t('产品', 'Product')}</span>
            <a
              href={APP_TRIAL}
              className="text-sm font-medium text-text-muted hover:text-accent transition-colors duration-200"
            >
              {t('进入应用', 'Enter app')}
            </a>
            <a
              href={APP_CLIENT}
              className="text-sm text-text-subtle hover:text-text-muted transition-colors duration-200"
            >
              {t('客户端', 'Client')}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end border-t border-border-subtle/60 pt-4">
          <span className="text-xs text-text-subtle">{t('创作者空间', 'Creator space')}</span>
          <a
            href="https://blog.contextlm.top"
            className="text-xs text-text-subtle hover:text-text-muted transition-colors"
          >
            {t('博客 · 空间主页', 'Blog · space home')}
          </a>
          <a
            href="https://sparklist.contextlm.top"
            className="text-xs text-text-subtle hover:text-text-muted transition-colors"
          >
            {t('点子王周报', 'Sparklist')}
          </a>
          <a
            href="https://whyimright.contextlm.top"
            className="text-xs text-text-subtle hover:text-text-muted transition-colors"
          >
            Why I Am Right
          </a>
          <a
            href="https://canju.contextlm.top"
            className="text-xs text-text-subtle hover:text-text-muted transition-colors"
          >
            {t('象棋', 'Xiangqi')}
          </a>
          <a
            href="https://elo.contextlm.top"
            className="text-xs text-text-subtle hover:text-text-muted transition-colors"
          >
            ELO
          </a>
        </div>
      </div>
    </footer>
  );
}

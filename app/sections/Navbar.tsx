'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { LangSwitch, useSiteLocale } from '@/lib/site-locale';

const APP_TRIAL =
  'https://app.contextlm.top/login?next=' +
  encodeURIComponent('/dashboard') +
  '&utm_source=portal&utm_medium=nav&utm_campaign=team_trial&utm_content=nav_primary';

const APP_CLIENT =
  'https://app.contextlm.top/desktop?utm_source=portal&utm_medium=nav&utm_campaign=client&utm_content=nav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useSiteLocale();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-200 ${
        scrolled
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="https://contextlm.top"
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-btn"
        >
          <img
            src="/brand/contextlm-mark.svg"
            alt=""
            width={28}
            height={28}
            className="w-7 h-7 rounded-[0.4rem] shrink-0"
          />
          <span className="text-lg font-semibold tracking-tight text-text-primary">ContextLM</span>
        </a>

        <div className="flex items-center gap-4 md:gap-5 flex-wrap justify-end">
          <a
            href="#product"
            className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
            data-testid="hub-nav-product"
          >
            Context OS
          </a>
          <a
            href="#studio"
            className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
            data-testid="hub-nav-studio"
          >
            {t('创作者空间', 'Creator space')}
          </a>
          <a
            href={APP_CLIENT}
            className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200 hidden sm:inline"
            data-testid="hub-nav-client"
          >
            {t('客户端', 'Client')}
          </a>
          <LangSwitch className="hidden sm:inline-flex items-center" />
          <Button href={APP_TRIAL} size="sm" data-testid="nav-cta-trial">
            {t('进入应用', 'Enter app')}
            <svg
              className="ml-1.5 w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}

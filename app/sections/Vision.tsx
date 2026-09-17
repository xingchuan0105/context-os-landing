'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import { useSiteLocale } from '@/lib/site-locale';

/**
 * Brand vision: AI + Men (what we pursue) vs AI − Men (what we oppose).
 */
export default function Vision() {
  const { t } = useSiteLocale();

  return (
    <section id="vision" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-text-primary text-center mb-3">
          {t('我们的立场', 'Our stance')}
        </h2>
        <p className="text-sm text-text-muted text-center mb-12">
          {t('同一项技术，两种用法。', 'One technology, two uses.')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card hover={false} className="border-[#f54e00]/25">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-3xl font-bold leading-none text-[#f54e00]">+</span>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">AI + Men</h3>
                <p className="text-xs font-medium tracking-wide uppercase text-[#f54e00]/80">
                  {t('我们追求', 'What we build for')}
                </p>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              {t(
                '人工智能是增益技术：赋能大众从事知识工作、创造与自由表达，让普通人也能积累、流通并受益于自己的知识。',
                'AI as empowerment: it helps everyone do knowledge work, create, and express freely—so ordinary people can build, circulate, and benefit from their own knowledge.',
              )}
            </p>
          </Card>

          <Card hover={false}>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-3xl font-bold leading-none text-text-subtle">−</span>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">AI − Men</h3>
                <p className="text-xs font-medium tracking-wide uppercase text-text-subtle">
                  {t('我们反对', 'What we oppose')}
                </p>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              {t(
                '以自动化之名，片面替代人的岗位，将大众排除在未来经济之外。效率不该以排除人为代价。',
                'Automation that one-sidedly replaces human roles and locks people out of the future economy. Efficiency must not come at the cost of exclusion.',
              )}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

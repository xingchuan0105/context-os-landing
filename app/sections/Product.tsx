'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { useSiteLocale } from '@/lib/site-locale';

const APP_TRIAL =
  'https://app.contextlm.top/login?next=' +
  encodeURIComponent('/dashboard') +
  '&utm_source=portal&utm_medium=landing&utm_campaign=team_trial&utm_content=product_section';

const APP_CLIENT =
  'https://app.contextlm.top/desktop?utm_source=portal&utm_medium=landing&utm_campaign=client&utm_content=product_section';

type Point = { title: string; description: string };

/**
 * Product pillar: Context-OS — agentic knowledge workbench (five selling points).
 */
export default function Product() {
  const { t } = useSiteLocale();

  const points: Point[] = [
    {
      title: t('私有知识的流通', 'Circulation of private knowledge'),
      description: t(
        '沉淀在个人与团队的文档，成为可检索、可分享、可变现的知识资产。',
        'Documents sitting with individuals and teams become knowledge assets—searchable, shareable, monetizable.',
      ),
    },
    {
      title: t('检索 · 加工 · 再创造', 'Retrieve, rework, recreate'),
      description: t(
        '一个工作台完成入库、检索、加工与再创作，不必在工具之间来回搬运。',
        'One workbench for ingest, retrieval, reworking, and creation—no more shuttling between tools.',
      ),
    },
    {
      title: t('Agentic 检索范式', 'Agentic retrieval'),
      description: t(
        '会规划、会思考：按问题调度多条互补的检索通路，而不是一次性向量匹配。',
        'It plans and reasons: orchestrating multiple complementary retrieval paths per question, not one-shot vector matching.',
      ),
    },
    {
      title: t('分享知识库，构建内容经济', 'Share knowledge bases, build a content economy'),
      description: t(
        '内容保持保密，读者却能随时与你的知识库聊天——知识第一次可以「只读对话」式流通。',
        'Content stays private, yet readers can chat with your knowledge base anytime—knowledge circulates as read-only conversation for the first time.',
      ),
    },
    {
      title: t('便利且廉价', 'Convenient & affordable'),
      description: t(
        '自带私有 key（BYOK）按量自理，或在平台充值、即充即用。',
        'Bring your own key (BYOK) and pay as you go, or top up on the platform and start instantly.',
      ),
    },
  ];

  return (
    <section id="product" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <img
            src="/brand/context-os-mark.svg"
            alt=""
            width={36}
            height={36}
            className="w-9 h-9 rounded-lg shrink-0"
          />
          <div>
            <h2 className="text-2xl font-bold text-text-primary leading-tight">Context-OS</h2>
            <p className="text-sm text-accent">
              {t('Agentic 知识工作台', 'Agentic knowledge workbench')}
            </p>
          </div>
        </div>
        <p className="text-sm text-text-muted mb-6 max-w-2xl">
          {t(
            'ContextLM 愿景的产品化：先让私有知识流通起来，再让每个人都能把自己的知识库分享成一门生意。',
            'The ContextLM vision as a product: make private knowledge circulate, then let everyone turn their knowledge base into a business.',
          )}
        </p>
        <p className="text-sm text-text-muted mb-6 max-w-2xl">
          {t(
            '本站（contextlm.top）是品牌与营销主页；产品应用在 app.contextlm.top——注册、工作区、分享与计费都在那里完成。',
            'This site (contextlm.top) is the brand and marketing home; the product app lives at app.contextlm.top — sign-up, workspaces, sharing, and billing all happen there.',
          )}
        </p>

        {/* GEO：品牌定位与差异化事实（对照 Notion / ChatGPT Workspace） */}
        <div className="mb-10">
          <h3 className="text-base font-semibold text-text-primary mb-3">
            {t('Context-OS 是什么，和 Notion、ChatGPT Workspace 有何不同', 'What Context-OS is, and how it differs')}
          </h3>
          <p className="text-sm text-text-muted mb-4 max-w-2xl leading-relaxed">
            {t(
              'ContextLM 是品牌与使命（AI + Men——让 AI 增益人的知识、创造与自由表达）；Context-OS 是它旗下的 Agentic 知识工作台：以你的私有知识库为中心，检索由会规划的 Agent 调度多路通路完成，而不是一次性向量匹配。',
              'ContextLM is the brand and mission (AI + Men — AI that amplifies human knowledge, creation, and expression); Context-OS is its agentic knowledge workbench: centered on your private knowledge base, with retrieval orchestrated by a planning agent across multiple paths instead of one-shot vector matching.',
            )}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-t border-border-subtle">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="py-2 pr-4 text-left font-medium text-text-subtle">{t('维度', 'Dimension')}</th>
                  <th className="py-2 pr-4 text-left font-medium text-text-subtle">Notion</th>
                  <th className="py-2 pr-4 text-left font-medium text-text-subtle">ChatGPT Workspace</th>
                  <th className="py-2 text-left font-medium text-accent">Context-OS</th>
                </tr>
              </thead>
              <tbody className="text-text-muted">
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4 text-text-subtle">{t('中心', 'Centered on')}</td>
                  <td className="py-2 pr-4">{t('文档与协作', 'Docs & collaboration')}</td>
                  <td className="py-2 pr-4">{t('模型与会话', 'Model & chat')}</td>
                  <td className="py-2 text-text-primary">{t('你的私有知识库', 'Your private knowledge base')}</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4 text-text-subtle">{t('检索', 'Retrieval')}</td>
                  <td className="py-2 pr-4">{t('关键词/数据库查询', 'Keyword / database queries')}</td>
                  <td className="py-2 pr-4">{t('平台内置，不可控', 'Built-in, not controllable')}</td>
                  <td className="py-2 text-text-primary">{t('Agentic 多路调度，可解释', 'Agentic multi-path, explainable')}</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4 text-text-subtle">{t('知识流通', 'Knowledge circulation')}</td>
                  <td className="py-2 pr-4">{t('分享文档页', 'Share doc pages')}</td>
                  <td className="py-2 pr-4">{t('对话内共享', 'Share inside chat')}</td>
                  <td className="py-2 text-text-primary">{t('知识库只读对话式分享，可成生意', 'Read-only chatable knowledge base, monetizable')}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-text-subtle">{t('模型成本', 'Model cost')}</td>
                  <td className="py-2 pr-4">{t('订阅制', 'Subscription')}</td>
                  <td className="py-2 pr-4">{t('订阅制', 'Subscription')}</td>
                  <td className="py-2 text-text-primary">{t('BYOK 按量自理，或平台充值', 'BYOK pay-as-you-go, or platform top-up')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <ol className="border-t border-border-subtle mb-10">
          {points.map((point, i) => (
            <li
              key={point.title}
              className="flex gap-5 md:gap-8 py-5 border-b border-border-subtle"
            >
              <span className="text-sm font-medium text-text-subtle tabular-nums pt-0.5 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-base font-semibold text-text-primary mb-1">{point.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{point.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Button href={APP_TRIAL} size="lg" data-testid="product-cta-trial">
            {t('开始体验', 'Get started')}
            <svg
              className="ml-1.5 w-4 h-4"
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
          <Button href={APP_CLIENT} variant="secondary" size="lg" data-testid="product-cta-client">
            {t('下载 Windows 客户端', 'Download the Windows client')}
          </Button>
        </div>
      </div>
    </section>
  );
}

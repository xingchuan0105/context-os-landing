import React from 'react';
import { fetchLatestPosts, formatDate, GhostPost } from '@/lib/ghost';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

function PostCard({ post }: { post: GhostPost }) {
  return (
    <a
      href={`https://blog.contextlm.top/${post.slug}`}
      className="block group"
    >
      <Card className="h-full flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags?.slice(0, 2).map((tag) => (
            <Badge key={tag.name}>{tag.name}</Badge>
          ))}
        </div>
        <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3 flex-grow">
          {post.excerpt || '暂无摘要'}
        </p>
        <time className="text-xs text-text-subtle">
          {formatDate(post.published_at)}
        </time>
      </Card>
    </a>
  );
}

function EmptyState() {
  return (
    <div className="col-span-full text-center py-12 space-y-3">
      <p className="text-text-muted">暂无文章 · 方法论与案例正在写入博客</p>
      <a
        href="https://app.contextlm.top/login?next=%2Fdashboard&utm_source=portal&utm_medium=blog_empty&utm_campaign=team_trial"
        className="text-sm text-accent hover:text-accent-hover transition-colors"
      >
        先开始体验 →
      </a>
    </div>
  );
}

export default async function LatestPosts() {
  const posts = await fetchLatestPosts(3);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-text-primary">
            最新文章
          </h2>
          <a
            href="https://blog.contextlm.top"
            className="text-sm text-accent hover:text-accent-hover transition-colors duration-200 inline-flex items-center gap-1"
          >
            查看全部文章
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {posts.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

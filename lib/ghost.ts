export interface GhostPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  published_at: string;
  tags: { name: string }[];
}

/**
 * Latest blog posts via the public Ghost RSS feed (no API key needed).
 * Fetched at build time (static export); redeploy refreshes the list.
 */

const RSS_URL = 'https://blog.contextlm.top/rss/';

function decodeEntities(input: string): string {
  return input
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, '’')
    .replace(/&nbsp;/g, ' ');
}

function stripHtml(html: string): string {
  return decodeEntities(html.replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function pickTag(tag: string, item: string): string {
  const match = item.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  if (!match) return '';
  return match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
}

export async function fetchLatestPosts(limit: number = 3): Promise<GhostPost[]> {
  try {
    const response = await fetch(RSS_URL);

    if (!response.ok) {
      console.error('Blog RSS error:', response.status, response.statusText);
      return [];
    }

    const xml = await response.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, limit);

    return items.map((match, index) => {
      const item = match[1];
      const link = pickTag('link', item);
      const slug = link.replace(/\/+$/, '').split('/').pop() ?? '';
      return {
        id: slug || String(index),
        title: decodeEntities(pickTag('title', item)),
        excerpt: stripHtml(pickTag('description', item)).slice(0, 160),
        slug,
        published_at: pickTag('pubDate', item),
        tags: [],
      };
    });
  } catch (error) {
    console.error('Failed to fetch blog RSS:', error);
    return [];
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

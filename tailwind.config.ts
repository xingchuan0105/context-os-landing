import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-footer': '#050505',
        /* Indigo accent (links / focus), light tone for dark marketing */
        accent: '#687ff3',
        'accent-hover': '#8b96ff',
        'accent-bg': 'rgba(104,127,243,0.14)',
        /* Ink CTA on dark marketing */
        cta: '#f5f5f5',
        'cta-hover': '#e5e5e5',
        'cta-ink': '#171717',
        card: 'rgba(255,255,255,0.03)',
        'card-hover': 'rgba(255,255,255,0.06)',
        'border-subtle': 'rgba(255,255,255,0.08)',
        'text-primary': 'rgba(255,255,255,0.92)',
        'text-muted': 'rgba(255,255,255,0.60)',
        'text-subtle': 'rgba(255,255,255,0.35)',
      },
      fontFamily: {
        sans: [
          'IBM Plex Sans',
          'PingFang SC',
          'Microsoft YaHei',
          'Noto Sans SC',
          'sans-serif',
        ],
      },
      borderRadius: {
        btn: '8px',
        card: '12px',
        section: '16px',
      },
    },
  },
  plugins: [],
};

export default config;

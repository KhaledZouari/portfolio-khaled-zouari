export const siteConfig = {
  defaultLocale: 'fr',
  locales: ['fr', 'en'] as const,
  projectSlugs: [
    'production-atelier',
    'carpooling',
    'edutrack',
    'energyinsight-tunisia',
    'minidrawfx',
    'enterprise-bi',
    'online-bookstore',
    'sales-analytics',
    'clinisys',
  ] as const,
} as const;

export type Locale = (typeof siteConfig.locales)[number];
export type ProjectSlug = (typeof siteConfig.projectSlugs)[number];

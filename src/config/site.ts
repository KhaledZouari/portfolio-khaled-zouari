export const siteConfig = {
  defaultLocale: 'fr',
  locales: ['fr', 'en'] as const,
  projectSlugs: [
    'production-atelier',
    'carpooling',
    'edutrack',
    'minidrawfx',
  ] as const,
} as const;

export type Locale = (typeof siteConfig.locales)[number];
export type ProjectSlug = (typeof siteConfig.projectSlugs)[number];

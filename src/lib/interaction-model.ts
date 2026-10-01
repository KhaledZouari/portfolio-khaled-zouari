export const architectureEvidence = [
  { label: 'React / Angular', layer: 'frontend', projects: ['Production Atelier', 'Carpooling', 'EduTrack'] },
  { label: 'API REST', layer: 'api', projects: ['Production Atelier', 'Carpooling', 'EduTrack', 'CliniSYS'] },
  { label: 'Spring Boot / Node.js', layer: 'backend', projects: ['Carpooling', 'EduTrack', 'Production Atelier'] },
  { label: 'SQL Server / PostgreSQL', layer: 'data', projects: ['Production Atelier', 'Enterprise BI', 'EduTrack'] },
] as const;

export const skillEvidence: Record<string, string[]> = {
  Java: ['Carpooling Platform', 'EduTrack', 'MiniDrawFX'],
  'Spring Boot': ['Carpooling Platform', 'EduTrack'],
  React: ['Production Atelier', 'Carpooling Platform'],
  TypeScript: ['Carpooling Platform', 'EduTrack'],
  'Node.js': ['Production Atelier'],
  'SQL Server': ['Production Atelier', 'CliniSYS', 'Enterprise BI Dashboard'],
  Angular: ['EduTrack'],
  'Design Patterns': ['MiniDrawFX'],
  'C#': ['CliniSYS', 'Enterprise BI Dashboard'],
};

export function videoSources(webm: string, mp4?: string): Array<{ type: string; src: string }> {
  return [{ type: 'video/webm', src: webm }, ...(mp4 ? [{ type: 'video/mp4', src: mp4 }] : [])];
}

export function nextMenuState(current: boolean, action: 'toggle' | 'escape' | 'link'): boolean {
  if (action === 'toggle') return !current;
  return false;
}

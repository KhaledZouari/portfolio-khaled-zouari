import { describe, expect, it } from 'vitest';
import { architectureEvidence, nextMenuState, skillEvidence, videoSources } from './interaction-model';

describe('Architecture Flow evidence', () => {
  it('connects every layer to verified projects', () => {
    expect(architectureEvidence.map((item) => item.layer)).toEqual(['frontend', 'api', 'backend', 'data']);
    expect(architectureEvidence.find((item) => item.layer === 'backend')?.projects).toContain('EduTrack');
  });
});

describe('mobile menu state', () => {
  it('opens on toggle and closes on Escape or link activation', () => {
    expect(nextMenuState(false, 'toggle')).toBe(true);
    expect(nextMenuState(true, 'escape')).toBe(false);
    expect(nextMenuState(true, 'link')).toBe(false);
  });
});

describe('skill evidence', () => {
  it('maps important skills to concrete projects', () => {
    expect(skillEvidence.React).toEqual(['Production Atelier', 'Carpooling Platform']);
    expect(skillEvidence['C#']).toContain('CliniSYS');
  });
});

describe('deferred project media', () => {
  it('creates only declared sources after activation', () => {
    expect(videoSources('/demo.webm')).toEqual([{ type: 'video/webm', src: '/demo.webm' }]);
    expect(videoSources('/demo.webm', '/demo.mp4')).toHaveLength(2);
  });
});

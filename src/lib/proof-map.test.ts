import { describe, expect, it } from 'vitest';
import { stackMatches } from './proof-map';

describe('stackMatches', () => {
  it('matches only complete technology labels', () => {
    expect(stackMatches('Java|Spring Boot|React', 'Spring Boot')).toBe(true);
    expect(stackMatches('Java|Spring Boot|React', 'Spring')).toBe(false);
  });

  it('shows every project when no technology is selected', () => {
    expect(stackMatches('Java|React', undefined)).toBe(true);
  });
});

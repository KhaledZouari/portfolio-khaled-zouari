export function stackMatches(stack: string, technology: string | undefined): boolean {
  if (!technology) return true;
  return stack.split('|').includes(technology);
}

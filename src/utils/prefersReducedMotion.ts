// True when the user asked the OS to reduce motion. Gate optional animations (collapse fade, grid cross-fade) on this.
export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

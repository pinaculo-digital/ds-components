// lib/stores/media.svelte.ts
import { readable } from 'svelte/store';

export function createMediaQuery(query: string) {
  return readable(false, (set) => {
    if (typeof window === 'undefined') {
      set(false);
      return;
    }

    const mql = window.matchMedia(query);

    set(mql.matches);

    const onChange = (e: MediaQueryListEvent) => set(e.matches);

    mql.addEventListener('change', onChange);

    return () => {
      mql.removeEventListener('change', onChange);
    };
  });
}

// Exemplos de uso comuns
export const isDesktop = createMediaQuery('(min-width: 1024px)');
export const isTablet = createMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const isMobile = createMediaQuery('(max-width: 1023px)');
export const isPortrait = createMediaQuery('(orientation: portrait)');

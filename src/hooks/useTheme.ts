"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "dark" | "light";
const STORAGE_KEY = "theme";
/** Pretendard Variable (dynamic subset). Injected at runtime so it never blocks first paint. */
export const PRETENDARD_CSS =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";

function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

/**
 * Theme is applied as `data-theme` on <html>. The initial value is set by an inline
 * script in layout.tsx before paint; this hook reads it via useSyncExternalStore.
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const toggle = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return { theme, setTheme, toggle };
}

/** Inline script (runs before hydration) to avoid a theme flash. */
export const themeInitScript = `(function(){try{document.documentElement.classList.add('js');var q=new URLSearchParams(location.search).get('theme');var s=q||localStorage.getItem('${STORAGE_KEY}');var t=s==='light'||s==='dark'?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}var f=function(){var l=document.createElement('link');l.rel='stylesheet';l.href='${PRETENDARD_CSS}';l.crossOrigin='anonymous';document.head.appendChild(l);};if(document.readyState==='complete'){f();}else{window.addEventListener('load',f);}})();`;

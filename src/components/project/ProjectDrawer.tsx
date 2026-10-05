"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { ExternalLink, X } from "lucide-react";
import { projectBySlug } from "@/data/projects";
import { ProjectDetail } from "./ProjectDetail";

type Ctx = { open: (slug: string) => void; close: () => void; slug: string | null };
const DrawerContext = createContext<Ctx | null>(null);

export function useProjectDrawer() {
  return useContext(DrawerContext);
}

/**
 * Opens project details in a side drawer without leaving the home page.
 * The URL is synced to /projects/[slug]/ via history.pushState so links stay shareable;
 * a direct load of that URL renders the full static page instead.
 */
export function ProjectDrawerProvider({ children }: { children: ReactNode }) {
  const [slug, setSlug] = useState<string | null>(null);
  const pushedRef = useRef(false);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const homeUrlRef = useRef<string>("/");

  const open = useCallback((next: string) => {
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    homeUrlRef.current = window.location.pathname + window.location.search + window.location.hash;
    window.history.pushState({ drawer: next }, "", `/projects/${next}/`);
    pushedRef.current = true;
    setSlug(next);
  }, []);

  const close = useCallback(() => {
    if (pushedRef.current) {
      pushedRef.current = false;
      window.history.back();
    } else {
      setSlug(null);
    }
  }, []);

  // Back / forward buttons
  useEffect(() => {
    const onPop = (e: PopStateEvent) => {
      const s = (e.state && (e.state as { drawer?: string }).drawer) || null;
      pushedRef.current = Boolean(s);
      setSlug(s);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Escape, scroll lock, focus management
  useEffect(() => {
    if (!slug) {
      returnFocusRef.current?.focus?.();
      return;
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [slug, close]);

  const project = slug ? projectBySlug[slug] : null;

  return (
    <DrawerContext.Provider value={{ open, close, slug }}>
      {children}
      {project ? <Drawer slug={project.slug} onClose={close} /> : null}
    </DrawerContext.Provider>
  );
}

function Drawer({ slug, onClose }: { slug: string; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const project = projectBySlug[slug];

  useEffect(() => {
    panelRef.current?.focus();
    panelRef.current?.scrollTo({ top: 0 });
  }, [slug]);

  return (
    <div className="fixed inset-0 z-50" role="presentation">
      <button
        type="button"
        aria-label="닫기"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px] motion-safe:animate-[fade-in_200ms_ease-out]"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${slug}-drawer-title`}
        tabIndex={-1}
        className="absolute inset-y-0 right-0 w-full overflow-y-auto border-l border-line bg-bg shadow-card outline-none sm:max-w-2xl lg:max-w-3xl motion-safe:animate-[drawer-in_240ms_cubic-bezier(0.2,0.7,0.2,1)]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-line bg-bg/90 px-5 py-3 backdrop-blur sm:px-8">
          <p id={`${slug}-drawer-title`} className="truncate font-mono text-xs tracking-wider text-muted">
            PROJECT / {project.titleEn}
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={`/projects/${slug}/`}
              className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-surface px-2.5 font-mono text-[11px] text-muted transition-colors hover:border-line-strong hover:text-fg"
              title="전체 페이지로 열기"
            >
              <ExternalLink className="size-3.5" aria-hidden />
              Full page
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="상세 닫기"
              className="inline-flex size-8 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors hover:border-line-strong hover:text-fg"
            >
              <X className="size-4" aria-hidden />
            </button>
          </div>
        </div>
        <div className="px-5 py-8 sm:px-8 sm:py-10">
          <ProjectDetail project={project} titleAs="h2" />
        </div>
      </div>
    </div>
  );
}

/** Click handler for cards: opens the drawer unless the user wants a new tab / has no JS context. */
export function useOpenProjectOnClick(slug: string) {
  const ctx = useProjectDrawer();
  return (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ctx) return;
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    ctx.open(slug);
  };
}

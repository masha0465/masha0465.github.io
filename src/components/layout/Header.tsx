"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled || open
          ? "border-line bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#hero"
          className="font-mono text-xs tracking-[0.14em] text-fg"
          aria-label="맨 위로"
        >
          {profile.nameEn.toUpperCase()}
          <span className="text-muted"> / </span>
          <span className="text-muted">{profile.title.toUpperCase()}</span>
        </a>

        <nav aria-label="주요 섹션" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md border border-line bg-surface text-muted hover:text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="주요 섹션 (모바일)"
          className="border-t border-line bg-bg md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-2 py-3 text-base text-fg hover:bg-surface-2"
                >
                  <span className="font-mono text-xs text-muted">{item.index}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

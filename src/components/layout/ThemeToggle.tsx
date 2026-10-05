"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme !== "light";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="inline-flex size-9 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      {/* Render both and hide with CSS to avoid hydration mismatch before theme is known */}
      <Sun className={`size-4 ${isDark ? "" : "hidden"}`} aria-hidden />
      <Moon className={`size-4 ${isDark ? "hidden" : ""}`} aria-hidden />
    </button>
  );
}

"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "daka-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[1.125rem] w-[1.125rem]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[1.125rem] w-[1.125rem]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M20.99 13.03A8.5 8.5 0 1 1 10.97 3.01 6.5 6.5 0 0 0 20.99 13.03Z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const readyFrame = window.requestAnimationFrame(() => {
      const initialTheme = getInitialTheme();

      applyTheme(initialTheme);
      setTheme(initialTheme);
      setMounted(true);
      document.documentElement.classList.add("theme-ready");
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
      const storedTheme = window.localStorage.getItem(STORAGE_KEY);

      if (storedTheme === "light" || storedTheme === "dark") {
        return;
      }

      const nextTheme = mediaQuery.matches ? "dark" : "light";
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      window.cancelAnimationFrame(readyFrame);
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      window.localStorage.setItem(STORAGE_KEY, nextTheme);
      applyTheme(nextTheme);

      return nextTheme;
    });
  };

  const baseClassName =
    "group inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-[0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur transition-[transform,border-color,background-color,color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--background)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Cambiar tema"
        className={baseClassName}
        suppressHydrationWarning
      >
        <span className="block h-5 w-5 rounded-full border border-[var(--border)]" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={baseClassName}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-pressed={isDark}
      onClick={toggleTheme}
      title={isDark ? "Modo claro" : "Modo oscuro"}
    >
      <span
        className="relative grid h-5 w-5 place-items-center"
        aria-hidden="true"
      >
        <span
          className={`absolute text-[var(--primary)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isDark
              ? "scale-75 rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          }`}
        >
          <SunIcon />
        </span>
        <span
          className={`absolute text-[var(--primary)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-75 -rotate-90 opacity-0"
          }`}
        >
          <MoonIcon />
        </span>
      </span>
    </button>
  );
}

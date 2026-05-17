"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { whatsappUrl } from "@/components/landingShared";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Servicios", href: "#servicios" },
  { label: "Caso real", href: "#demo" },
  { label: "Proceso", href: "#proceso" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ease-out ${
        isScrolled
          ? "border-[var(--header-border)] bg-[var(--header-bg-scrolled)] shadow-sm shadow-black/[0.03] backdrop-blur-xl"
          : "border-[var(--header-border)] bg-[var(--header-bg)] shadow-none backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-8 sm:py-4">
        <Link
          href="/"
          className="group inline-flex min-w-0 items-center gap-3 text-lg font-semibold"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/assets/images/dakaLogo.png"
            alt="Isotipo Daka Web"
            width={44}
            height={44}
            className="h-10 w-9 shrink-0 object-contain"
            priority
          />

          <span className="tracking-normal whitespace-nowrap">
            <span className="text-[var(--foreground)]">Daka</span>{" "}
             </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-[var(--muted-strong)] md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              className="transition duration-200 hover:text-[var(--link)]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={whatsappUrl}
            className="hidden min-h-11 items-center justify-center rounded-full bg-[var(--primary)] px-4 text-sm font-semibold text-white shadow-sm shadow-black/[0.06] transition duration-200 hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--background)] sm:inline-flex sm:px-5"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <ThemeToggle />

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--overlay-strong)] text-[var(--foreground)] shadow-sm shadow-black/[0.04] backdrop-blur transition duration-200 hover:bg-[var(--surface-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--background)] md:hidden"
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`mx-auto max-w-7xl px-5 pb-4 transition-all duration-200 sm:px-8 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {isMenuOpen && (
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--overlay-strong)] p-2 shadow-xl shadow-black/[0.07] backdrop-blur-xl">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-12 items-center rounded-xl px-4 text-base font-semibold text-[var(--muted-strong)] transition duration-200 hover:bg-[var(--background)] hover:text-[var(--link)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

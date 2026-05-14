"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { whatsappUrl } from "@/components/landingShared";

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
          ? "border-[#F5EFE3]/10 bg-[#07110F]/80 shadow-lg shadow-black/20 backdrop-blur-xl supports-[backdrop-filter]:bg-[#07110F]/70"
          : "border-transparent bg-transparent shadow-none"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="group inline-flex min-w-0 items-center gap-3 text-lg font-semibold"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/assets/images/isotipo1SF.png"
            alt="Isotipo Daka Web"
            width={44}
            height={44}
            className="h-9 w-9 shrink-0 object-contain"
            priority
          />

          <span className="tracking-normal whitespace-nowrap">
            <span className="text-[#F5EFE3]">Daka</span>{" "}
            <span className="text-[#D9A441]">Web</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-[#F5EFE3]/70 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              className="transition duration-200 hover:text-[#D9A441]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={whatsappUrl}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#D9A441]/25 bg-[#F5EFE3] px-4 text-sm font-semibold text-[#11100D] shadow-lg shadow-[#D9A441]/10 transition duration-200 hover:-translate-y-0.5 hover:bg-[#D9A441] hover:shadow-[#D9A441]/20 focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#07110F] sm:px-5"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#F5EFE3]/12 bg-[#F5EFE3]/[0.055] text-[#F5EFE3] shadow-lg shadow-black/10 backdrop-blur transition duration-200 hover:border-[#D9A441]/45 hover:bg-[#D9A441]/10 focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#07110F] md:hidden"
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
          <div className="overflow-hidden rounded-2xl border border-[#F5EFE3]/10 bg-[#07110F]/92 p-2 shadow-2xl shadow-black/35 backdrop-blur-xl supports-[backdrop-filter]:bg-[#07110F]/82">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-12 items-center rounded-xl px-4 text-base font-semibold text-[#F5EFE3]/82 transition duration-200 hover:bg-[#F5EFE3]/[0.055] hover:text-[#D9A441] focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#07110F]"
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

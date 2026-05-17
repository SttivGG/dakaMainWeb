import Image from "next/image";
import type { ReactNode } from "react";

import { ArrowIcon, whatsappUrl } from "@/components/landingShared";
import Reveal from "@/components/Reveal";

const navigationLinks = [
  { label: "Inicio", href: "/" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Servicios", href: "#servicios" },
  { label: "Caso real", href: "#demo" },
  { label: "Proceso", href: "#proceso" },
];

const services = [
  "Landing pages",
  "Páginas web informativas",
  "Rediseño digital",
  "WhatsApp integrado",
];

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 text-sm leading-6 text-white/68 transition duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--footer-bg)]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-white/24 transition duration-200 group-hover:bg-[var(--primary)]" />
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-[var(--footer-bg)] px-5 text-white sm:px-8">
      <Image
        src="/assets/images/patron.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-[0.025] mix-blend-screen"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl py-16 sm:py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16 xl:gap-24">
          <Reveal className="max-w-2xl" direction="right">
            <div className="relative inline-flex w-full max-w-[620px]">
              <Image
                src="/assets/images/logoFondoOscuro.png"
                alt="Daka Web"
                width={900}
                height={320}
                className="relative h-auto w-[380px] object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,0.24)] sm:w-[360px] lg:w-[520px] xl:w-[600px]"
                priority={false}
              />
            </div>

            
            <div className="mt-8 flex flex-col items-center gap-3 text-center text-sm text-white/62 sm:flex-row sm:justify-center sm:gap-4 lg:items-center lg:justify-start lg:border-l lg:border-white/18 lg:pl-5 lg:text-left">
              <span>Desde Putumayo, Colombia.</span>
              <span className="hidden h-px w-10 bg-[var(--primary)] sm:block" />
              <span>Diseño web cálido, rápido y claro.</span>
            </div>
          </Reveal>

          <Reveal className="grid gap-10 sm:grid-cols-3 lg:pt-6" delay={120}>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/86">
                Explorar
              </h2>
              <div className="mt-4 h-px w-12 bg-white/18" />
              <nav className="mt-6 flex flex-col gap-3.5" aria-label="Navegación del footer">
                {navigationLinks.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/86">
                Servicios
              </h2>
              <div className="mt-4 h-px w-12 bg-white/18" />
              <ul className="mt-6 space-y-3.5">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-sm leading-6 text-white/68">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/24" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/86">
                Contacto
              </h2>
              <div className="mt-4 h-px w-12 bg-white/18" />
              <div className="mt-6 space-y-3.5 text-sm leading-6 text-white/68">
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center gap-3 text-white/78 transition duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--footer-bg)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/28" />
                  WhatsApp
                </a>
                
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal
          className="mt-14 border-t border-white/10 pt-8 sm:mt-16 lg:mt-20"
          delay={160}
        >
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">
                ¿Listo para llevar tu negocio a internet?
              </p>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/62">
                Convirtamos tu oferta en una página clara, moderna y lista para recibir
                conversaciones reales.
              </p>
            </div>
            <a
              href={whatsappUrl}
              className="group inline-flex min-h-14 w-full items-center justify-between gap-4 rounded-full bg-[var(--surface)] px-6 text-base font-semibold text-[var(--primary)] shadow-sm shadow-black/[0.12] transition duration-200 hover:bg-[var(--primary-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--footer-bg)] sm:px-8"
              target="_blank"
              rel="noreferrer"
            >
              <span>Hablemos por WhatsApp</span>
              <span className="transition duration-200 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </Reveal>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Daka Web. Todos los derechos reservados.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            
            <p>Landing pages y páginas web para todo tipo de negocios.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

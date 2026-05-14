import Image from "next/image";
import type { ReactNode } from "react";

import { ArrowIcon, whatsappUrl } from "@/components/landingShared";

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
      className="group inline-flex items-center gap-3 text-sm leading-6 text-[#F5EFE3]/66 transition duration-200 hover:text-[#D9A441] focus:outline-none focus:ring-2 focus:ring-[#58D7C4]/70 focus:ring-offset-2 focus:ring-offset-[#07110F]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#D9A441]/45 transition duration-200 group-hover:bg-[#7CF5D5]" />
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-[#07110F] px-5 text-[#F5EFE3] sm:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D9A441] to-[#58D7C4]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(88,215,196,0.15),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(217,164,65,0.14),transparent_32%),linear-gradient(180deg,#0B1411_0%,#07110F_48%,#11100D_100%)]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#58D7C4]/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-[#D9A441]/10 blur-3xl" />
      <Image
        src="/assets/images/patron.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-[0.055] mix-blend-screen"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl py-16 sm:py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16 xl:gap-24">
          <div className="max-w-2xl">
            <div className="relative inline-flex w-full max-w-[620px]">
              <div className="absolute inset-0 rounded-full bg-[#D9A441]/12 blur-2xl" />
              <div className="absolute inset-x-8 bottom-2 h-8 bg-[#58D7C4]/10 blur-2xl" />
              <Image
                src="/assets/images/logoFondoOscuro.png"
                alt="Daka Web"
                width={900}
                height={320}
                className="relative h-auto w-[380px] object-contain drop-shadow-[0_20px_42px_rgba(0,0,0,0.42)] drop-shadow-[0_0_28px_rgba(88,215,196,0.12)] sm:w-[360px] lg:w-[520px] xl:w-[600px]"
                priority={false}
              />
            </div>

            
            <div className="mt-8 flex flex-col items-center gap-3 text-center text-sm text-[#F5EFE3]/64 sm:flex-row sm:justify-center sm:gap-4 lg:items-center lg:justify-start lg:border-l lg:border-[#D9A441]/40 lg:pl-5 lg:text-left">
              <span>Desde Putumayo, Colombia.</span>
              <span className="hidden h-px w-10 bg-[#D9A441]/35 sm:block" />
              <span>Diseño web cálido, rápido y claro.</span>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:pt-6">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9A441]">
                Explorar
              </h2>
              <div className="mt-4 h-px w-12 bg-gradient-to-r from-[#D9A441] to-[#58D7C4]" />
              <nav className="mt-6 flex flex-col gap-3.5" aria-label="Navegación del footer">
                {navigationLinks.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9A441]">
                Servicios
              </h2>
              <div className="mt-4 h-px w-12 bg-gradient-to-r from-[#D9A441] to-[#58D7C4]" />
              <ul className="mt-6 space-y-3.5">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-sm leading-6 text-[#F5EFE3]/66">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D9A441]/45" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="  text-xs font-semibold uppercase tracking-[0.22em] text-[#D9A441]">
                Contacto
              </h2>
              <div className="mt-4 h-px w-12 bg-gradient-to-r from-[#D9A441] to-[#58D7C4]" />
              <div className="mt-6 space-y-3.5 text-sm leading-6 text-[#F5EFE3]/66">
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center gap-3 text-[#F5EFE3]/76 transition duration-200 hover:text-[#7CF5D5] focus:outline-none focus:ring-2 focus:ring-[#58D7C4]/70 focus:ring-offset-2 focus:ring-offset-[#07110F]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7CF5D5]/65" />
                  WhatsApp
                </a>
                
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 sm:mt-16 lg:mt-20">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-[#D9A441]">
                ¿Listo para llevar tu negocio a internet?
              </p>
              <p className="mt-3 max-w-md text-sm leading-6 text-[#F5EFE3]/62">
                Convirtamos tu oferta en una página clara, moderna y lista para recibir
                conversaciones reales.
              </p>
            </div>
            <a
              href={whatsappUrl}
              className="group inline-flex min-h-14 w-full items-center justify-between gap-4 rounded-full bg-[#D9A441] px-6 text-base font-semibold text-[#07110F] shadow-2xl shadow-[#D9A441]/18 transition duration-200 hover:-translate-y-0.5 hover:bg-[#7CF5D5] hover:shadow-[#58D7C4]/25 focus:outline-none focus:ring-2 focus:ring-[#7CF5D5] focus:ring-offset-2 focus:ring-offset-[#07110F] sm:px-8"
              target="_blank"
              rel="noreferrer"
            >
              <span>Hablemos por WhatsApp</span>
              <span className="transition duration-200 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#F5EFE3]/54 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Daka Web. Todos los derechos reservados.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            
            <p>Landing pages y páginas web para negocios locales.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

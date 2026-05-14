import Link from "next/link";

import { ArrowIcon, whatsappUrl } from "@/components/landingShared";

const results = [
  "Diseño responsive para celular",
  "Navegación simple y clara",
  "Contacto directo para reservas",
];

const proofChips = ["100% responsive", "WhatsApp integrado", "Página publicada"];

export default function DemoSection() {
  return (
    <section
      id="demo"
      className="relative z-10 overflow-hidden border-y border-[#F5EFE3]/10 bg-[#07110F] text-[#F5EFE3]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,215,196,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(217,164,65,0.12),transparent_35%),linear-gradient(180deg,#07110F_0%,#0B1411_48%,#11100D_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(135deg,rgba(245,239,227,0.58)_1px,transparent_1px),linear-gradient(45deg,rgba(124,245,213,0.38)_1px,transparent_1px)] [background-size:42px_42px,72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D9A441]/45 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#58D7C4]/26 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 lg:py-[6.5rem]">
        <div className="relative max-w-2xl">
          <div className="pointer-events-none absolute -left-5 -top-5 hidden h-20 w-20 border-l border-t border-[#D9A441]/25 lg:block" />
          <div className="pointer-events-none absolute -left-5 top-20 hidden h-28 w-px bg-gradient-to-b from-[#D9A441]/32 to-transparent lg:block" />

          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D9A441]">
            CASO REAL
          </p>
          <h2 className="mt-4 font-display text-3xl font-black leading-[1.06] tracking-normal text-[#F5EFE3] sm:text-5xl lg:text-[3.45rem]">
            Una página publicada para convertir visitantes en reservas.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#F5EFE3]/74 sm:text-lg">
            Creamos para Posada Las Orquídeas una presencia digital clara, rápida y lista
            para compartir: alojamiento, experiencias, ubicación y reservas conectadas
            directamente a WhatsApp.
          </p>

          <ul className="mt-7 grid gap-3">
            {results.map((result) => (
              <li
                key={result}
                className="flex items-start gap-3 text-sm font-semibold leading-6 text-[#F5EFE3]/82 sm:text-base"
              >
                <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-[#7CF5D5] shadow-[0_0_16px_rgba(124,245,213,0.62)]" />
                <span>{result}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {proofChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[#F5EFE3]/12 bg-[#F5EFE3]/[0.055] px-4 py-2 text-sm font-black text-[#F5EFE3]/88 shadow-lg shadow-black/15 backdrop-blur-md"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/posada-las-orquideas"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F5EFE3] px-6 text-base font-black text-[#11100D] shadow-xl shadow-black/30 transition duration-200 hover:-translate-y-0.5 hover:bg-[#D9A441] hover:shadow-[#D9A441]/15 focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#07110F]"
            >
              Ver caso real
              <ArrowIcon />
            </Link>
            <a
              href={whatsappUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#F5EFE3]/14 bg-[#F5EFE3]/[0.035] px-6 text-base font-bold text-[#F5EFE3] shadow-lg shadow-black/10 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[#58D7C4]/45 hover:bg-[#58D7C4]/10 focus:outline-none focus:ring-2 focus:ring-[#58D7C4] focus:ring-offset-2 focus:ring-offset-[#07110F]"
              target="_blank"
              rel="noreferrer"
            >
              Quiero una página así
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
          <div className="pointer-events-none absolute -right-8 top-4 h-56 w-56 rounded-full bg-[#58D7C4]/16 blur-3xl" />
          <div className="pointer-events-none absolute -left-8 bottom-4 h-52 w-52 rounded-full bg-[#D9A441]/12 blur-3xl" />
          <div className="group relative pt-5 transition duration-500 ease-out hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
            <div className="pointer-events-none absolute right-0 top-5 h-24 w-24 rounded-tr-[2rem] border-r border-t border-[#D9A441]/18 sm:h-32 sm:w-32 sm:rounded-tr-[2.25rem]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-bl-[2rem] border-b border-l border-[#58D7C4]/16 sm:h-28 sm:w-28 sm:rounded-bl-[2.25rem]" />
            <div className="pointer-events-none absolute inset-x-5 top-10 h-full translate-y-4 rounded-[2rem] border border-[#D9A441]/10 bg-[#F5EFE3]/[0.025] shadow-2xl shadow-black/30 backdrop-blur-md sm:inset-x-8" />

            <div className="absolute right-4 top-0 z-20 rounded-full border border-[#F5EFE3]/12 bg-[#0B1411]/88 px-4 py-2 text-sm font-black text-[#7CF5D5] shadow-xl shadow-black/25 backdrop-blur-md sm:right-10">
              Publicado
            </div>

            <div className="relative rounded-[2rem] border border-[#F5EFE3]/10 bg-[#07110F]/80 p-2.5 shadow-2xl shadow-black/45 backdrop-blur-xl transition duration-500 group-hover:border-[#58D7C4]/22 group-hover:shadow-[0_28px_80px_rgba(88,215,196,0.14)] sm:rounded-[2.25rem] sm:p-4">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#D9A441]/65 to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_84%_14%,rgba(88,215,196,0.12),transparent_34%),radial-gradient(circle_at_18%_88%,rgba(217,164,65,0.1),transparent_32%)] sm:rounded-[2.25rem]" />
              <div className="pointer-events-none absolute inset-3 rounded-[1.55rem] border border-[#58D7C4]/10 sm:rounded-[1.85rem]" />

              <div className="relative overflow-hidden rounded-[1.55rem] border border-[#F5EFE3]/10 bg-[#0B1411]/92 text-[#F5EFE3] shadow-[inset_0_0_0_1px_rgba(245,239,227,0.04)] sm:rounded-[1.85rem]">
                <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(135deg,rgba(245,239,227,0.64)_1px,transparent_1px),linear-gradient(45deg,rgba(88,215,196,0.42)_1px,transparent_1px)] [background-size:28px_28px,54px_54px]" />
                <div className="relative flex items-center justify-between gap-3 border-b border-[#F5EFE3]/10 bg-[#F5EFE3]/[0.045] px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D9A441]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F5EFE3]/24" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#58D7C4]" />
                  </div>
                  <span className="min-w-0 max-w-[12rem] truncate rounded-full border border-[#F5EFE3]/10 bg-black/20 px-3 py-1.5 text-xs font-semibold text-[#F5EFE3]/62 sm:max-w-none sm:px-4">
                    /posada-las-orquideas
                  </span>
                </div>

                <div className="relative p-3 sm:p-4">
                  <div className="relative overflow-hidden rounded-[1.25rem] border border-[#D9A441]/15 bg-[#11100D] shadow-2xl shadow-black/30 sm:rounded-[1.5rem]">
                    <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                      <video
                        className="h-full w-full rounded-[1.25rem] object-cover object-top transition duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:rounded-[1.5rem]"
                        src="/assets/videos/posada-las-orquideas.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label="Vista previa de la landing page de Posada Las Orquídeas"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F5EFE3]/8 via-transparent to-[#07110F]/72" />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#7CF5D5]/10 to-transparent" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

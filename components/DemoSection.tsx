"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import { ArrowIcon, whatsappUrl } from "@/components/landingShared";
import Reveal from "@/components/Reveal";

const results = [
  "Diseño responsive para celular",
  "Navegación simple y clara",
  "Contacto directo para reservas",
];

const proofChips = ["100% responsive", "WhatsApp integrado", "Página publicada"];

export default function DemoSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const reopenLockRef = useRef(false);

  const openPreview = () => {
    if (reopenLockRef.current) return;

    if (window.matchMedia("(min-width: 1024px)").matches) {
      setIsPreviewOpen(true);
    }
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    reopenLockRef.current = true;

    window.setTimeout(() => {
      reopenLockRef.current = false;
    }, 500);
  };

  return (
    <section
      id="demo"
      className="relative isolate z-10 overflow-hidden bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-16 lg:py-32">
        <Reveal className="relative max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
            CASO REAL
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] tracking-normal text-[var(--foreground)] sm:text-5xl lg:text-[3.65rem]">
            Una página publicada para convertir visitantes en reservas.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted-strong)] sm:text-lg">
            Creamos para Posada Las Orquídeas una presencia digital clara, rápida y lista
            para compartir: alojamiento, experiencias, ubicación y reservas conectadas
            directamente a WhatsApp.
          </p>

          <ul className="mt-7 grid gap-3">
            {results.map((result) => (
              <li
                key={result}
                className="flex items-start gap-3 text-sm font-semibold leading-6 text-[var(--muted-strong)] sm:text-base"
              >
                <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]" />
                <span>{result}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {proofChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--muted-strong)]"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/posada-las-orquideas"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 text-base font-semibold text-white shadow-[0_24px_80px_rgba(211,144,51,0.18)] transition duration-200 hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            >
              Ver caso real
              <ArrowIcon />
            </Link>
            <a
              href={whatsappUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-full px-2 text-base font-semibold text-[var(--link)] transition duration-200 hover:text-[var(--link-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--background)] sm:px-4"
              target="_blank"
              rel="noreferrer"
            >
              Quiero una página así
            </a>
          </div>
        </Reveal>

        <Reveal
          className="relative mx-auto w-full max-w-2xl lg:max-w-none"
          delay={160}
          direction="left"
        >
          <div
            className="group relative pt-5 transition duration-700 ease-out hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
            onMouseEnter={openPreview}
          >
            <div className="pointer-events-none absolute inset-x-5 top-10 z-10 h-full translate-y-4 rounded-[2rem] bg-[var(--border)] sm:inset-x-8" />

            <div className="absolute right-4 top-0 z-20 rounded-full border border-[var(--primary)] bg-[var(--primary-soft)] px-4 py-2 text-sm font-semibold text-[var(--primary-hover)] shadow-sm shadow-black/[0.08] sm:right-10">
              Publicado
            </div>

            <div className="relative z-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-2.5 shadow-[0_28px_80px_rgba(0,0,0,0.08)] transition duration-500 group-hover:shadow-[0_34px_90px_rgba(0,0,0,0.1)] sm:rounded-[2.25rem] sm:p-4">
              <div className="relative overflow-hidden rounded-[1.55rem] border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--foreground)] sm:rounded-[1.85rem]">
                <div className="relative flex items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                  </div>
                  <span className="min-w-0 max-w-[12rem] truncate rounded-full bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] sm:max-w-none sm:px-4">
                    /posada-las-orquideas
                  </span>
                </div>

                <div className="relative p-3 sm:p-4">
                  <div className="relative overflow-hidden rounded-[1.25rem] bg-[var(--surface)] sm:rounded-[1.5rem]">
                    <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                      <video
                        className="h-full w-full rounded-[1.25rem] object-cover object-top transition duration-700 ease-out group-hover:scale-[1.005] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:rounded-[1.5rem]"
                        src="/assets/videos/posada-las-orquideas.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label="Vista previa de la landing page de Posada Las Orquídeas"
                      >
                        Tu navegador no puede reproducir esta vista previa.
                      </video>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/22" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        className={[
          "absolute inset-0 z-30 hidden items-center justify-center bg-[var(--overlay)] px-5 py-10 backdrop-blur-2xl lg:flex",
          "transition-opacity duration-1000 ease-out motion-reduce:transition-none",
          isPreviewOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div
          className={[
            "w-full max-w-5xl transition-[opacity,transform] duration-1000 ease-out motion-reduce:transition-none",
            isPreviewOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-3 scale-[0.985] opacity-0",
          ].join(" ")}
        >
          <p className="mb-5 text-center font-display text-4xl font-medium text-[var(--foreground)] drop-shadow-[0_8px_24px_rgba(255,255,255,0.65)] sm:text-5xl lg:text-6xl">
            Caso real
          </p>

          <div
            className="overflow-hidden rounded-[2rem] border border-black/10 bg-[var(--overlay)] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-3"
            onMouseLeave={closePreview}
          >
            <div className="overflow-hidden rounded-[1.5rem] bg-black sm:rounded-[2rem]">
              <video
                className="aspect-video h-auto w-full object-cover object-top"
                src="/assets/videos/posada-las-orquideas.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                aria-label="Vista ampliada de la landing page de Posada Las Orquídeas"
              >
                Tu navegador no puede reproducir esta vista ampliada.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

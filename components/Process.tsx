"use client";

import { useState } from "react";

import Reveal from "@/components/Reveal";

const processSteps = [
  {
    number: "1",
    title: "Hablamos de tu negocio",
    description:
      "Conocemos tu oferta, tus clientes y lo que necesitas comunicar para generar confianza desde el primer vistazo.",
    accent: "Conversación inicial",
    image: "/assets/images/hablarDeNegocios.jpg",
  },
  {
    number: "2",
    title: "Organizamos la estructura",
    description:
      "Definimos secciones, textos, imágenes y llamados a la acción para que la página tenga intención comercial.",
    accent: "Estrategia comercial",
    image: "/assets/images/organizarEstructura.jpg",
  },
  {
    number: "3",
    title: "Diseñamos y desarrollamos",
    description:
      "Construimos una experiencia rápida, responsive y visualmente premium, pensada para verse bien en celular.",
    accent: "Diseño responsive",
    image: "/assets/images/diseñoYdesarrollo.jpg",
  },
  {
    number: "4",
    title: "Nos encargamos de todo",
    description:
      "Publicamos la página, conectamos WhatsApp, dejamos el sitio funcionando y listo para que puedas compartirlo.",
    accent: "Sitio publicado",
    image: "/assets/images/nosencargamosdetodo.jpeg",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section
      id="proceso"
      className="relative z-10 overflow-hidden bg-[var(--section)] text-[var(--foreground)]"
    >
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
            PROCESO
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black leading-[1.08] tracking-normal text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            De la idea a tu página publicada, sin enredos.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted-strong)] sm:text-lg sm:leading-8">
            Nos encargamos de convertir la información de tu negocio en una página clara,
            moderna y lista para recibir clientes.
          </p>
        </Reveal>

        <div className="relative mt-14 lg:mt-16">
          <div className="pointer-events-none absolute left-7 top-6 z-0 h-[calc(100%-3rem)] w-px bg-[var(--border-strong)] md:hidden" />
          <div className="pointer-events-none absolute left-[9%] right-[9%] top-9 z-0 hidden h-px bg-[var(--border-strong)] md:block" />

          <div className="relative z-10 grid items-stretch gap-5 md:grid-cols-4 md:gap-4 xl:gap-5">
            {processSteps.map((step, index) => {
              const isActive = activeStep === step.number;

              return (
                <Reveal
                  key={step.number}
                  className="h-full"
                  delay={index * 90}
                >
                  <article
                    className="group relative z-10 flex h-full min-h-[18rem] flex-col overflow-hidden rounded-[1.45rem] border border-[var(--border)] bg-[var(--surface-soft)] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[var(--surface)] hover:shadow-[0_20px_58px_rgba(0,0,0,0.07)] motion-reduce:transform-none motion-reduce:transition-none lg:p-7"
                    onClick={() =>
                      setActiveStep((current) =>
                        current === step.number ? null : step.number,
                      )
                    }
                    tabIndex={0}
                    role="button"
                    aria-label={`${isActive ? "Ocultar" : "Mostrar"} paso ${step.number}: ${step.title}`}
                    aria-expanded={isActive}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveStep((current) =>
                          current === step.number ? null : step.number,
                        );
                      }
                    }}
                  >
                    <div
                      className={`relative z-10 flex flex-1 flex-col justify-start pb-20 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      } group-focus:translate-y-0 group-focus:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus:translate-y-0 md:group-focus:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100 motion-reduce:transition-none`}
                    >
                      <div className="inline-flex max-w-full items-center self-center whitespace-normal rounded-full bg-[var(--surface)] px-3 py-1 text-center text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-[var(--muted)] ring-1 ring-[var(--border)] sm:text-[11px]">
                        {step.accent}
                      </div>
                      <h3 className="mt-5 font-display text-lg font-extrabold leading-tight tracking-normal text-[var(--primary)] xl:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-[15px] leading-7 text-[var(--muted-strong)]">
                        {step.description}
                      </p>
                    </div>

                    <div
                      className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-center overflow-hidden border border-white/70 bg-cover bg-center shadow-[0_-14px_45px_rgba(0,0,0,0.18)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? "h-16 rounded-b-[1.45rem] rounded-t-none"
                          : "h-full rounded-[1.45rem]"
                      } group-focus:h-16 group-focus:rounded-b-[1.45rem] group-focus:rounded-t-none group-focus-visible:h-16 group-focus-visible:rounded-b-[1.45rem] group-focus-visible:rounded-t-none md:h-full md:rounded-[1.45rem] md:group-hover:h-16 md:group-hover:rounded-b-[1.45rem] md:group-hover:rounded-t-none md:group-focus:h-16 md:group-focus:rounded-b-[1.45rem] md:group-focus:rounded-t-none md:group-focus-visible:h-16 md:group-focus-visible:rounded-b-[1.45rem] md:group-focus-visible:rounded-t-none motion-reduce:transition-none`}
                      style={{ backgroundImage: `url(${step.image})` }}
                    >
                      <div
                        className={`absolute inset-0 transition-colors duration-700 ${
                          isActive ? "bg-black/25" : "bg-black/35"
                        } group-focus:bg-black/25 group-focus-visible:bg-black/25 md:bg-black/35 md:group-hover:bg-black/25 md:group-focus:bg-black/25 md:group-focus-visible:bg-black/25 motion-reduce:transition-none`}
                      />
                      <span
                        className={`relative z-10 translate-y-px font-display font-black leading-none tabular-nums text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive ? "text-2xl" : "text-7xl sm:text-8xl"
                        } group-focus:text-2xl group-focus-visible:text-2xl md:text-8xl md:group-hover:text-2xl md:group-focus:text-2xl md:group-focus-visible:text-2xl motion-reduce:transition-none`}
                      >
                        {step.number}
                      </span>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

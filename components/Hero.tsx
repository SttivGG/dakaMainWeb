import Link from "next/link";

import { ArrowIcon, whatsappUrl } from "@/components/landingShared";
import Reveal from "@/components/Reveal";

const previewSections = [
  { label: "Servicios", detail: "Claros", tone: "gold" },
  { label: "Galería", detail: "Visual", tone: "jade" },
  { label: "Ubicación", detail: "Local", tone: "neutral" },
  { label: "Contacto", detail: "Directo", tone: "jade" },
];

export default function Hero() {
  return (
    <section className="relative z-10 max-w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--section)_0%,var(--background)_82%)]" />

      <div className="relative mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-center gap-14 overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pt-36 md:gap-16 xl:grid-cols-[0.95fr_1.05fr] xl:pb-28 xl:pt-40">
        <Reveal
          className="relative mx-auto w-full min-w-0 max-w-full text-center sm:max-w-3xl md:max-w-4xl xl:mx-0 xl:text-left"
          delay={80}
        >

          <p className="inline-flex items-center rounded-full bg-[var(--background)] px-4 py-2 text-sm font-semibold text-[var(--muted)] ring-1 ring-[var(--border)]">
            Diseño web con identidad local
          </p>

          <div className="mt-7 space-y-6">
            <h1 className="mx-auto max-w-[18rem] text-balance font-display text-[1.95rem] font-black leading-[1.06] tracking-normal text-[var(--foreground)] min-[390px]:max-w-[20rem] min-[390px]:text-[2.15rem] sm:max-w-4xl sm:text-6xl md:max-w-3xl md:text-[4rem] xl:mx-0 xl:text-7xl xl:leading-[0.95]">
              Presencia digital{" "}
              <span className="text-[var(--primary)]">
                con identidad
              </span>{" "}
              para tu negocio.
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-8 text-[var(--muted-strong)] sm:text-xl xl:mx-0">
              Creamos landing pages y páginas web modernas, rápidas y estratégicas para negocios
              que quieren verse profesionales, inspirar confianza y recibir más clientes desde
              internet.
            </p>
          </div>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row sm:items-center xl:justify-start">
            <a
              href={whatsappUrl}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 text-base font-semibold text-white shadow-[0_24px_80px_rgba(211,144,51,0.18)] transition duration-200 hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--surface)] sm:w-auto"
              target="_blank"
              rel="noreferrer"
            >
              Quiero mi página web
              <ArrowIcon />
            </a>
            <Link
              href="/posada-las-orquideas"
              className="inline-flex min-h-12 items-center justify-center gap-1 rounded-full px-2 text-base font-semibold text-[var(--link)] transition duration-200 hover:text-[var(--link-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--surface)] sm:px-4"
            >
              Ver caso real
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium leading-none text-[var(--muted)] xl:justify-start">
            <span>Diseño premium</span>
            <span className="h-1 w-1 rounded-full bg-[var(--border-strong)]" />
            <span>WhatsApp directo</span>
            <span className="h-1 w-1 rounded-full bg-[var(--border-strong)]" />
            <span>Publicación lista</span>
          </div>
        </Reveal>

        <Reveal
          className="relative mx-auto w-full min-w-0 max-w-full sm:max-w-xl md:max-w-2xl xl:max-w-none"
          delay={180}
          direction="left"
        >
          <div className="relative w-full max-w-full overflow-hidden rounded-[2.2rem] border border-[var(--border)] bg-[var(--card-bg)] p-3 shadow-[var(--shadow-soft)] sm:p-4">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface-soft)]">
              <div className="relative flex items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                </div>
                <div className="flex min-w-0 items-center justify-end gap-2">
                  <div className="hidden max-w-[13rem] truncate rounded-full bg-[var(--background)] px-4 py-1.5 text-xs font-medium text-[var(--muted)] sm:block">
                    dakaweb.co/negocio-local
                  </div>
                  <div className="hidden shrink-0 rounded-full bg-[var(--primary-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--primary-hover)] ring-1 ring-[var(--primary)] md:block">
                    Listo
                  </div>
                </div>
              </div>

              <div className="relative p-4 sm:p-5">
                <div className="relative overflow-hidden rounded-[1.55rem] bg-[var(--surface)] px-5 py-7 shadow-sm ring-1 ring-[var(--border)] sm:px-8 sm:py-9">
                    <div className="relative flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
                    <div className="min-w-0 max-w-full">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                        Negocio local
                      </p>
                      <div className="mt-3 max-w-full overflow-hidden">
                        <div className="space-y-1 font-display text-[1.55rem] font-black leading-tight tracking-normal text-[var(--foreground)] sm:hidden">
                          <p className="block w-fit max-w-0 animate-typingMobileOne overflow-hidden whitespace-nowrap border-r-4 border-r-[var(--primary)] pr-1">
                            Tu negocio,
                          </p>

                          <p className="block w-fit max-w-0 animate-typingMobileTwo overflow-hidden whitespace-nowrap border-r-4 border-r-transparent pr-1">
                            listo para
                          </p>

                          <p className="block w-fit max-w-0 animate-typingMobileThree overflow-hidden whitespace-nowrap border-r-4 border-r-transparent pr-1">
                            ser encontrado
                          </p>
                        </div>

                        <div className="hidden space-y-1 font-display text-3xl font-black leading-tight tracking-normal text-[var(--foreground)] sm:block sm:text-4xl">
                          <p className="block w-fit max-w-0 animate-typingDesktopOne overflow-hidden whitespace-nowrap border-r-4 border-r-[var(--primary)] pr-1">
                            Tu negocio, listo para
                          </p>

                          <p className="block w-fit max-w-0 animate-typingDesktopTwo overflow-hidden whitespace-nowrap border-r-4 border-r-transparent pr-1">
                            ser encontrado.
                          </p>
                        </div>
                      </div>
                    </div>
                    <span className="rounded-full bg-[var(--background)] px-3 py-1 text-xs font-semibold text-[var(--muted-strong)] sm:shrink-0">
                      Online
                    </span>
                  </div>

                  <div className="relative mt-6 grid gap-3 sm:grid-cols-4">
                    {previewSections.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-3 transition-all duration-300 ease-out will-change-transform hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(29,29,31,0.10)]"
                      >
                        <div className="mb-4 flex items-center justify-between gap-2">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              item.tone === "gold"
                                ? "bg-[var(--primary)]"
                                : item.tone === "jade"
                                  ? "bg-[var(--primary-hover)]"
                                  : "bg-[var(--border-strong)]"
                            }`}
                          />
                          <span className="h-px flex-1 bg-[var(--border)]" />
                        </div>
                        <p className="text-sm font-bold text-[var(--foreground)]">{item.label}</p>
                        <p className="mt-1 text-xs font-medium text-[var(--muted)]">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_0.82fr]">
                  <div className="rounded-[1.45rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                        Señal digital
                      </p>
                      <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                    </div>
                    <p className="mt-4 font-display text-lg font-black leading-snug text-[var(--foreground)]">
                      Una página clara que conecta territorio, confianza y contacto.
                    </p>
                    <div className="mt-5 space-y-2">
                      <div className="h-2 rounded-full bg-[var(--background)]">
                        <div className="h-full w-[76%] rounded-full bg-[var(--primary)]" />
                      </div>
                      <div className="h-2 rounded-full bg-[var(--background)]">
                        <div className="h-full w-[58%] rounded-full bg-[var(--primary-soft)]" />
                      </div>
                      <div className="h-2 rounded-full bg-[var(--background)]">
                        <div className="h-full w-[88%] rounded-full bg-[var(--primary-hover)]" />
                      </div>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    className="group relative flex min-h-36 overflow-hidden rounded-[1.45rem] bg-[#1D1D1F] p-5 text-white shadow-sm shadow-black/[0.08] transition duration-300 hover:bg-[#B87422] hover:shadow-[0_18px_50px_rgba(184,116,34,0.24)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="relative flex h-full min-h-28 flex-col justify-between gap-4">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 transition duration-300 group-hover:text-white">
                        WhatsApp directo
                      </span>
                      <span className="font-display text-xl font-black leading-tight tracking-normal text-white transition duration-300 group-hover:text-white">
                        Cotizar ahora
                      </span>
                      <span className="inline-flex max-w-full items-center gap-2.5 whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#B87422] transition duration-300 ease-out group-hover:bg-[#1D1D1F] group-hover:text-white sm:text-sm">
                        <span className="whitespace-nowrap">Enviar mensaje</span>
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B87422] text-white transition duration-300 ease-out group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-[#B87422]">
                          <ArrowIcon />
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";

import { ArrowIcon, SparkIcon, whatsappUrl } from "@/components/landingShared";

const previewSections = [
  { label: "Servicios", detail: "Claros", tone: "gold" },
  { label: "Galería", detail: "Visual", tone: "jade" },
  { label: "Ubicación", detail: "Local", tone: "ivory" },
  { label: "Contacto", detail: "Directo", tone: "jade" },
];

export default function Hero() {
  return (
    <section className="relative z-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(47,125,78,0.22),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(217,164,65,0.14),transparent_30%),linear-gradient(180deg,rgba(7,17,15,0),rgba(7,17,15,0.55)_76%,rgba(7,17,15,0))]" />
      <div className="pointer-events-none absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-[#D9A441]/35 to-transparent" />
      <div className="pointer-events-none absolute bottom-10 left-[8%] hidden h-px w-80 bg-gradient-to-r from-transparent via-[#2F7D4E]/45 to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(135deg,rgba(245,239,227,0.62)_1px,transparent_1px),linear-gradient(45deg,rgba(47,125,78,0.55)_1px,transparent_1px)] [background-size:38px_38px,64px_64px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-36">
        <div className="relative max-w-3xl">
          <div className="absolute -left-5 -top-6 hidden h-20 w-20 border-l border-t border-[#D9A441]/25 lg:block" />
          <div className="absolute -left-5 top-20 hidden h-28 w-px bg-gradient-to-b from-[#D9A441]/30 to-transparent lg:block" />

          <p className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/25 bg-[#F5EFE3]/[0.055] px-4 py-2 text-sm font-semibold text-[#F5EFE3]/90 shadow-lg shadow-black/20 backdrop-blur-md">
            <span className="text-[#D9A441]">
              <SparkIcon />
            </span>
            Diseño web con identidad local
          </p>

          <div className="mt-6 space-y-6">
            <h1 className="max-w-4xl font-display text-4xl font-black leading-[0.98] tracking-normal text-[#F5EFE3] sm:text-5xl lg:text-7xl lg:leading-[0.95]">
              Presencia digital{" "}
              <span className="bg-gradient-to-r from-[#D9A441] via-[#F5EFE3] to-[#2F7D4E] bg-clip-text text-transparent">
                con identidad
              </span>{" "}
              para tu negocio.
            </h1>

            <p className="max-w-xl text-lg leading-8 text-[#F5EFE3]/78 sm:text-xl">
              Creamos landing pages y páginas web modernas, rápidas y estratégicas para negocios
              que quieren verse profesionales, inspirar confianza y recibir más clientes desde
              internet.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F5EFE3] px-6 text-base font-black text-[#11100D] shadow-xl shadow-black/30 transition duration-200 hover:-translate-y-0.5 hover:bg-[#D9A441] hover:shadow-[#D9A441]/15 focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#07110F]"
              target="_blank"
              rel="noreferrer"
            >
              Quiero mi página web
              <ArrowIcon />
            </a>
            <Link
              href="/posada-las-orquideas"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#F5EFE3]/14 bg-[#F5EFE3]/[0.035] px-6 text-base font-bold text-[#F5EFE3] shadow-lg shadow-black/10 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[#D9A441]/45 hover:bg-[#D9A441]/10 focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#07110F]"
            >
              Ver caso real
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold leading-none text-[#F5EFE3]/62">
            <span className="h-px w-12 bg-gradient-to-r from-[#D9A441] to-transparent" />
            <span>Diseño premium</span>
            <span className="h-1 w-1 rounded-full bg-[#D9A441]/75" />
            <span>WhatsApp directo</span>
            <span className="h-1 w-1 rounded-full bg-[#2F7D4E]/90" />
            <span>Publicación lista</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="pointer-events-none absolute -left-10 bottom-16 h-28 w-28 rounded-full bg-[#2F7D4E]/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-8 top-20 h-32 w-32 rounded-full bg-[#D9A441]/12 blur-3xl" />

          <div className="relative rounded-[2rem] border border-[#F5EFE3]/12 bg-[#F5EFE3]/[0.055] p-3 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-4">
            <div className="pointer-events-none absolute left-4 top-4 h-12 w-12 border-l border-t border-[#D9A441]/25" />
            <div className="pointer-events-none absolute bottom-4 right-4 h-12 w-12 border-b border-r border-[#D9A441]/25" />

            <div className="relative overflow-hidden rounded-[1.55rem] border border-[#F5EFE3]/10 bg-[#11100D]/90">
              <div className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:radial-gradient(circle_at_1px_1px,rgba(245,239,227,0.72)_1px,transparent_0)] [background-size:22px_22px]" />
              <div className="relative flex items-center justify-between gap-3 border-b border-[#F5EFE3]/10 bg-[#F5EFE3]/[0.04] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D9A441]/85" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5EFE3]/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2F7D4E]/90" />
                </div>
                <div className="flex min-w-0 items-center justify-end gap-2">
                  <div className="hidden max-w-[13rem] truncate rounded-full border border-[#F5EFE3]/10 bg-black/20 px-4 py-1.5 text-xs font-medium text-[#F5EFE3]/52 sm:block">
                    dakaweb.co/negocio-local
                  </div>
                  <div className="hidden shrink-0 rounded-full border border-[#D9A441]/25 bg-[#D9A441]/10 px-3 py-1.5 text-xs font-bold text-[#F5EFE3]/82 md:block">
                    Listo
                  </div>
                </div>
              </div>

              <div className="relative p-4 sm:p-5">
                <div className="relative overflow-hidden rounded-[1.55rem] border border-[#D9A441]/18 bg-[linear-gradient(135deg,rgba(11,46,38,0.94),rgba(17,16,13,0.9)),radial-gradient(circle_at_84%_14%,rgba(217,164,65,0.2),transparent_30%)] p-5 shadow-2xl shadow-black/25 sm:p-6">
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-[#D9A441]/65 via-[#2F7D4E]/55 to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 h-28 w-40 opacity-20 [background-image:linear-gradient(135deg,rgba(245,239,227,0.52)_1px,transparent_1px),linear-gradient(45deg,rgba(217,164,65,0.35)_1px,transparent_1px)] [background-size:18px_18px]" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#D9A441]">
                        Negocio local
                      </p>
                      <p className="mt-3 max-w-sm font-display text-3xl font-black leading-tight tracking-normal text-[#F5EFE3] sm:text-4xl">
                        Tu negocio, listo para ser encontrado
                      </p>
                    </div>
                    <span className="rounded-full border border-[#2F7D4E]/40 bg-[#2F7D4E]/18 px-3 py-1 text-xs font-bold text-[#F5EFE3]">
                      Online
                    </span>
                  </div>

                  <div className="relative mt-6 grid gap-3 sm:grid-cols-4">
                    {previewSections.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-[#F5EFE3]/10 bg-[#F5EFE3]/[0.055] p-3 shadow-lg shadow-black/10"
                      >
                        <div className="mb-4 flex items-center justify-between gap-2">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              item.tone === "gold"
                                ? "bg-[#D9A441]"
                                : item.tone === "jade"
                                  ? "bg-[#2F7D4E]"
                                  : "bg-[#F5EFE3]/55"
                            }`}
                          />
                          <span className="h-px flex-1 bg-[#F5EFE3]/12" />
                        </div>
                        <p className="text-sm font-black text-[#F5EFE3]">{item.label}</p>
                        <p className="mt-1 text-xs font-medium text-[#F5EFE3]/48">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_0.82fr]">
                  <div className="rounded-[1.45rem] border border-[#F5EFE3]/10 bg-[#F5EFE3]/[0.045] p-5 shadow-xl shadow-black/20">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#F5EFE3]/46">
                        Señal digital
                      </p>
                      <span className="h-2 w-2 rounded-full bg-[#2F7D4E] shadow-[0_0_18px_rgba(47,125,78,0.75)]" />
                    </div>
                    <p className="mt-4 font-display text-lg font-black leading-snug text-[#F5EFE3]">
                      Una página clara que conecta territorio, confianza y contacto.
                    </p>
                    <div className="mt-5 space-y-2">
                      <div className="h-2 rounded-full bg-[#F5EFE3]/10">
                        <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-[#D9A441] to-[#2F7D4E]" />
                      </div>
                      <div className="h-2 rounded-full bg-[#F5EFE3]/10">
                        <div className="h-full w-[58%] rounded-full bg-[#F5EFE3]/28" />
                      </div>
                      <div className="h-2 rounded-full bg-[#F5EFE3]/10">
                        <div className="h-full w-[88%] rounded-full bg-[#2F7D4E]/90" />
                      </div>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    className="group relative flex min-h-36 overflow-hidden rounded-[1.45rem] border border-[#D9A441]/20 bg-[#101610]/85 p-5 text-[#F5EFE3] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:border-[#D9A441]/35 hover:shadow-2xl hover:shadow-black/25 focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:ring-offset-2 focus:ring-offset-[#07110F]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(135deg,rgba(217,164,65,0.24)_1px,transparent_1px),radial-gradient(circle_at_85%_12%,rgba(47,125,78,0.28),transparent_30%)] [background-size:22px_22px,100%_100%]" />
                    <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-[#D9A441]/70 via-[#2F7D4E]/60 to-transparent" />

                    <span className="relative flex h-full min-h-28 flex-col justify-between gap-4">
                      <span className="text-xs font-black uppercase tracking-[0.18em] text-[#D9A441]">
                        WhatsApp directo
                      </span>
                      <span className="font-display text-xl font-black leading-tight tracking-normal text-[#F5EFE3]">
                        Cotizar ahora
                      </span>
                      <span className="inline-flex max-w-full items-center gap-2.5 whitespace-nowrap rounded-full border border-[#D9A441]/25 bg-[#F5EFE3] px-4 py-2.5 text-xs font-black text-[#11100D] shadow-lg shadow-black/20 transition duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-[#D9A441]/55 group-hover:bg-[#D9A441] group-hover:shadow-[#D9A441]/10 sm:text-sm">
                        <span className="whitespace-nowrap">Enviar mensaje</span>
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#11100D] text-[#F5EFE3] transition duration-300 ease-out group-hover:translate-x-0.5 group-hover:bg-[#0B2E26]">
                          <ArrowIcon />
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

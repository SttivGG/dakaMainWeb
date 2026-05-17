import Image from "next/image";

import Reveal from "@/components/Reveal";

const services = [
  {
    number: "1",
    title: "Landing page comercial",
    image: "/assets/images/landingparanegocios.webp",
    description:
      "Una página clara, rápida y enfocada en presentar tu oferta, generar confianza y llevar al cliente a escribirte.",
    microfeatures: ["Ideal para vender un servicio", "Acceso directo a WhatsApp"],
  },
  {
    number: "2",
    title: "Página web informativa",
    image: "/assets/images/tipoPortafolio.png",
    description:
      "Un sitio más completo para mostrar servicios, fotos, ubicación, reseñas y toda la información clave de tu negocio.",
    microfeatures: ["Secciones organizadas", "Diseño adaptable a distintos dispositivos"],
  },
  {
    number: "3",
    title: "Reservas y contacto",
    image: "/assets/images/reservaporwhatsapp.webp",
    description:
      "Estructuras pensadas para facilitar reservas, cotizaciones o mensajes directos desde el celular de tus clientes.",
    microfeatures: ["Flujo claro de contacto", "CTA estratégico"],
  },
  {
    number: "4",
    title: "Rediseño digital",
    image: "/assets/images/redisenoPresencia.jpg",
    description:
      "Convertimos una presencia informal o desactualizada en una experiencia profesional, moderna y lista para compartir.",
    microfeatures: ["Mejora visual completa", "Enfoque en confianza"],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative z-10 overflow-hidden bg-[var(--section)]"
    >
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14 lg:py-32 xl:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
            SERVICIOS
          </p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-black leading-[1.05] tracking-normal text-[var(--foreground)] sm:text-5xl lg:text-[3.35rem] xl:text-6xl">
            Servicios digitales para convertir las visitas en clientes reales.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-[var(--muted-strong)] sm:text-[1.05rem]">
            Diseñamos páginas rápidas, claras y enfocadas en convertir visitantes en clientes
            reales para todo tipo de negocios y comercios.
          </p>

          <div className="mt-8 rounded-[1.2rem] border border-[var(--border)] bg-[var(--surface-soft)] p-5">
            <p className="text-sm font-semibold leading-7 text-[var(--muted-strong)]">
              Cada proyecto se diseña con estructura comercial, versión móvil cuidada y conexión
              directa a WhatsApp.
            </p>
          </div>
        </Reveal>

        <div className="relative lg:pt-1">
          <div className="relative grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:gap-6">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 90}
              >
                <article
                  tabIndex={0}
                  role="button"
                  aria-label={`Ver servicio: ${service.title}`}
                  className="group/service relative self-start overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-2.5 shadow-[0_18px_50px_rgba(0,0,0,0.045)] transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)] motion-reduce:transform-none motion-reduce:transition-none md:hover:-translate-y-2 md:hover:shadow-[0_26px_80px_rgba(29,29,31,0.12)] sm:p-3"
                >
                  <div className="relative h-36 overflow-hidden rounded-[1.25rem] bg-[var(--surface)] md:h-32 xl:h-36">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out motion-reduce:transition-none md:group-hover/service:scale-105 group-focus/service:scale-105 group-focus-visible/service:scale-105 max-md:group-focus/service:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent" />
                  </div>

                  <div className="relative px-2.5 pb-2 pt-4 sm:px-3 sm:pt-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                        Servicio {service.number.padStart(2, "0")}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    </div>

                    <h3 className="mt-2.5 font-display text-[1.22rem] font-extrabold leading-tight tracking-normal text-[var(--foreground)]">
                      {service.title}
                    </h3>

                    <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] transition-opacity duration-300 md:hidden group-focus/service:opacity-0 group-focus-visible/service:opacity-0 max-md:group-focus/service:opacity-0">
                      Toca para ver más
                    </span>

                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out md:group-hover/service:grid-rows-[1fr] md:group-hover/service:opacity-100 group-focus/service:grid-rows-[1fr] group-focus/service:opacity-100 group-focus-visible/service:grid-rows-[1fr] group-focus-visible/service:opacity-100 max-md:group-focus/service:grid-rows-[1fr] max-md:group-focus/service:opacity-100 motion-reduce:transition-none">
                      <div className="overflow-hidden">
                        <span className="mt-5 block h-1 w-10 rounded-full bg-[var(--primary)]" />

                        <p className="mt-4 text-[0.93rem] leading-7 text-[var(--muted-strong)]">
                          {service.description}
                        </p>

                        <ul className="mt-4 space-y-1.5">
                          {service.microfeatures.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2.5 text-[0.82rem] font-medium leading-6 text-[var(--muted)]"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--border-strong)]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

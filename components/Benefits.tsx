import Image from "next/image";

import Reveal from "@/components/Reveal";

const benefits = [
  {
    number: "01",
    title: "Diseño moderno",
    description:
      "Una imagen digital cuidada, clara y profesional para que tu negocio genere confianza desde el primer vistazo.",
    image: "/assets/images/diseñoModerno.png",
    className: "lg:col-span-3",
    featured: true,
  },
  {
    number: "02",
    title: "Responsive",
    description:
      "Tu página se verá bien en celulares, tablets y computadores, lista para compartir con cualquier cliente.",
    image: "/assets/images/responsive.png",
    className: "lg:col-span-3",
    featured: true,
  },
  {
    number: "03",
    title: "Carga rápida",
    description:
      "Una experiencia ágil para que tus visitantes encuentren rápido lo que necesitan sin abandonar la página.",
    image: "/assets/images/velocidad-de-carga.jpg",
    className: "lg:col-span-2",
    featured: false,
  },
  {
    number: "04",
    title: "WhatsApp directo",
    description:
      "Botones y llamados a la acción pensados para que tus clientes te escriban sin formularios complicados.",
    image: "/assets/images/whatsapp.webp",
    className: "lg:col-span-2",
    featured: false,
  },
  {
    number: "05",
    title: "Todo tipo de negocios",
    description:
      "Pensado para todo tipo de negocios y emprendimientos que quieren crecer desde internet.",
    image: "/assets/images/negocio-rentable.webp",
    className: "md:col-span-2 lg:col-span-2",
    featured: false,
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative z-10 overflow-hidden bg-[var(--background)]"
    >
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-[var(--muted)]">BENEFICIOS</p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-normal text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Tu negocio con una presencia digital seria, clara y fácil de contactar.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted-strong)] sm:text-lg">
            Diseñamos páginas pensadas para verse profesionales, cargar rápido y llevar a tus
            clientes directo a la acción.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              className={benefit.className}
              delay={index * 90}
            >
              <article
                tabIndex={0}
                role="button"
                aria-label={`Ver beneficio: ${benefit.title}`}
                className="group/benefit relative h-full overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.045)] transition duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(29,29,31,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]"
              >
                <div className="scale-[1.02] blur-xl transition-all duration-500 ease-out md:group-hover/benefit:scale-100 md:group-hover/benefit:blur-none group-focus/benefit:scale-100 group-focus/benefit:blur-none group-focus-visible/benefit:scale-100 group-focus-visible/benefit:blur-none max-md:group-focus/benefit:scale-100 max-md:group-focus/benefit:blur-none">
                  <div
                    className={`relative h-48 overflow-hidden rounded-[1.35rem] bg-[var(--surface-soft)] sm:h-52 ${
                      benefit.featured ? "lg:h-56" : "lg:h-48"
                    }`}
                  >
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 ease-out md:group-hover/benefit:scale-105 group-focus/benefit:scale-105 group-focus-visible/benefit:scale-105 max-md:group-focus/benefit:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>

                  <div className="relative mt-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-bold tracking-[0.2em] text-[var(--muted)]">
                        {benefit.number}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                    </div>
                    <h3 className="mt-3 font-display text-xl font-black leading-tight tracking-normal text-[var(--foreground)]">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted-strong)] sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--overlay)] px-6 text-center opacity-100 backdrop-blur-sm transition-all duration-500 ease-out md:group-hover/benefit:bg-transparent md:group-hover/benefit:opacity-0 md:group-hover/benefit:backdrop-blur-none group-focus/benefit:bg-transparent group-focus/benefit:opacity-0 group-focus/benefit:backdrop-blur-none group-focus-visible/benefit:bg-transparent group-focus-visible/benefit:opacity-0 group-focus-visible/benefit:backdrop-blur-none max-md:group-focus/benefit:bg-transparent max-md:group-focus/benefit:opacity-0 max-md:group-focus/benefit:backdrop-blur-none">
                  <div className="relative">
                    <span className="mx-auto mb-4 block h-1 w-12 rounded-full bg-[var(--primary)] shadow-[0_0_24px_rgba(211,144,51,0.35)]" />
                    <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-[var(--foreground)] lg:text-3xl">
                      {benefit.title}
                    </h3>
                    <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] md:hidden">
                      Toca para ver
                    </span>
                    <span className="mx-auto mt-5 block h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

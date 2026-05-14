import Image from "next/image";

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
    title: "Adaptado a celular",
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
    title: "Negocios locales",
    description:
      "Pensado para hoteles, restaurantes, servicios, comercios y emprendimientos que quieren crecer desde internet.",
    image: "/assets/images/negocio-rentable.webp",
    className: "md:col-span-2 lg:col-span-2",
    featured: false,
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative z-10 overflow-hidden border-y border-[#F5EFE3]/10 bg-gradient-to-b from-[#07110F] via-[#0B1512] to-[#11100D]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D9A441]/50 to-transparent" />
      <div className="absolute left-[12%] top-10 h-80 w-80 rounded-full bg-[#D9A441]/10 blur-3xl" />
      <div className="absolute bottom-12 right-0 h-96 w-96 translate-x-1/4 rounded-full bg-[#2F7D4E]/14 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(135deg,rgba(245,239,227,0.45)_1px,transparent_1px),linear-gradient(45deg,rgba(47,125,78,0.45)_1px,transparent_1px)] [background-size:34px_34px,56px_56px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-black tracking-[0.28em] text-[#D9A441]">BENEFICIOS</p>
          <h2 className="mt-4 font-display text-3xl font-black leading-tight tracking-tight text-[#F5EFE3] sm:text-4xl lg:text-5xl">
            Tu negocio con una presencia digital seria, clara y fácil de contactar.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#F5EFE3]/70 sm:text-lg">
            Diseñamos páginas pensadas para verse profesionales, cargar rápido y llevar a tus
            clientes directo a la acción.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-[#F5EFE3]/10 bg-[#11100D]/70 p-4 shadow-xl shadow-black/20 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#D9A441]/35 hover:bg-[#132018]/85 ${benefit.className}`}
            >
              <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-[#D9A441]/70 via-[#2F7D4E]/60 to-transparent" />
              <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(245,239,227,0.7)_1px,transparent_0)] [background-size:20px_20px]" />

              <div
                className={`relative h-48 overflow-hidden rounded-[1.35rem] border border-[#F5EFE3]/10 bg-[#07110F] sm:h-52 ${
                  benefit.featured ? "lg:h-56" : "lg:h-48"
                }`}
              >
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11100D]/65 via-[#11100D]/10 to-transparent" />
              </div>

              <div className="relative mt-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-black tracking-[0.24em] text-[#D9A441]">
                    {benefit.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#2F7D4E] shadow-[0_0_18px_rgba(47,125,78,0.75)]" />
                </div>
                <h3 className="mt-3 font-display text-xl font-black leading-tight tracking-tight text-[#F5EFE3]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#F5EFE3]/70 sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

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
      className="relative z-10 overflow-hidden border-b border-[#F5EFE3]/10 bg-gradient-to-b from-[#11100D] via-[#07110F] to-[#0B1411]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D9A441]/38 to-transparent" />
      <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#D9A441]/9 blur-3xl" />
      <div className="absolute right-[-14%] top-1/4 h-[32rem] w-[32rem] rounded-full bg-[#58D7C4]/8 blur-3xl" />
      <div className="absolute bottom-8 left-[38%] h-72 w-72 rounded-full bg-[#2F7D4E]/8 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(120deg,rgba(217,164,65,0.42)_1px,transparent_1px),linear-gradient(60deg,rgba(124,245,213,0.32)_1px,transparent_1px)] [background-size:46px_46px,74px_74px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 lg:py-[6.5rem] xl:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D9A441]">
            SERVICIOS
          </p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-black leading-[1.05] tracking-tight text-[#F5EFE3] sm:text-5xl lg:text-[3.35rem] xl:text-6xl">
            Servicios digitales para convertir las visitas en clientes reales.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-[#F5EFE3]/72 sm:text-[1.05rem]">
            Diseñamos páginas rápidas, claras y enfocadas en convertir visitantes en clientes
            reales para todo tipo de negocios y comercios.
          </p>

          <div className="mt-7 overflow-hidden rounded-[1.2rem] border border-[#D9A441]/14 bg-gradient-to-br from-[#F5EFE3]/[0.07] via-[#F5EFE3]/[0.035] to-[#58D7C4]/[0.035] p-4 shadow-xl shadow-black/18 backdrop-blur-xl sm:p-5">
            <div className="mb-3 h-px w-4/5 bg-gradient-to-r from-[#D9A441]/65 via-[#58D7C4]/35 to-transparent" />
            <p className="text-sm font-semibold leading-7 text-[#F5EFE3]/84">
              Cada proyecto se diseña con estructura comercial, versión móvil cuidada y conexión
              directa a WhatsApp.
            </p>
          </div>
        </div>

        <div className="relative lg:pt-1">
          <div className="absolute inset-x-6 top-10 h-80 rounded-full bg-[#58D7C4]/7 blur-3xl" />
          <div className="absolute inset-x-12 bottom-6 h-48 rounded-full bg-[#D9A441]/5 blur-3xl" />
          <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[1.45rem] border border-[#F5EFE3]/10 bg-[#0B1411]/78 p-2.5 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D9A441]/32 hover:bg-[#101B16]/88 hover:shadow-[0_18px_44px_rgba(88,215,196,0.09)] motion-reduce:transform-none motion-reduce:transition-none sm:p-3"
              >
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-[#D9A441]/65 via-[#58D7C4]/38 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 motion-reduce:transition-none [background-image:radial-gradient(circle_at_20%_0%,rgba(217,164,65,0.13),transparent_34%),radial-gradient(circle_at_100%_20%,rgba(88,215,196,0.11),transparent_32%)]" />

                <div className="relative h-36 overflow-hidden rounded-[1.25rem] border border-[#F5EFE3]/10 bg-[#07110F] shadow-[inset_0_0_0_1px_rgba(245,239,227,0.04)] md:h-32 xl:h-36">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07110F]/64 via-[#07110F]/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D9A441]/9 via-transparent to-[#58D7C4]/9 mix-blend-screen" />
                </div>

                <div className="relative px-2.5 pb-2 pt-4 sm:px-3 sm:pt-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#D9A441]/86">
                      Servicio {service.number.padStart(2, "0")}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7CF5D5]/80 shadow-[0_0_14px_rgba(124,245,213,0.55)]" />
                  </div>

                  <h3 className="mt-2.5 font-display text-[1.22rem] font-extrabold leading-tight tracking-tight text-[#F5EFE3]">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-[0.93rem] leading-7 text-[#F5EFE3]/68">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {service.microfeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[0.82rem] font-semibold leading-6 text-[#F5EFE3]/76"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A441]/85 shadow-[0_0_10px_rgba(217,164,65,0.45)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  {
    number: "01",
    title: "Hablamos de tu negocio",
    description:
      "Conocemos tu oferta, tus clientes y lo que necesitas comunicar para generar confianza desde el primer vistazo.",
    accent: "Conversación inicial",
  },
  {
    number: "02",
    title: "Organizamos la estructura",
    description:
      "Definimos secciones, textos, imágenes y llamados a la acción para que la página tenga intención comercial.",
    accent: "Estrategia comercial",
  },
  {
    number: "03",
    title: "Diseñamos y desarrollamos",
    description:
      "Construimos una experiencia rápida, responsive y visualmente premium, pensada para verse bien en celular.",
    accent: "Diseño responsive",
  },
  {
    number: "04",
    title: "Nos encargamos de todo",
    description:
      "Publicamos la página, conectamos WhatsApp, dejamos el sitio funcionando y listo para que puedas compartirlo.",
    accent: "Sitio publicado",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative z-10 overflow-hidden border-b border-[#F5EFE3]/10 bg-gradient-to-b from-[#0B1411] via-[#07110F] to-[#11100D] text-[#F5EFE3]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(217,164,65,0.14),transparent_32%),radial-gradient(circle_at_74%_58%,rgba(88,215,196,0.13),transparent_38%),linear-gradient(180deg,rgba(7,17,15,0)_0%,rgba(17,16,13,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(135deg,rgba(217,164,65,0.5)_1px,transparent_1px),linear-gradient(45deg,rgba(124,245,213,0.38)_1px,transparent_1px)] [background-size:52px_52px,82px_82px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D9A441]/36 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#D9A441]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] bottom-16 h-96 w-96 rounded-full bg-[#58D7C4]/9 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-[6.5rem]">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#D9A441]">
            PROCESO
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-black leading-[1.08] tracking-normal text-[#F5EFE3] sm:text-4xl lg:text-5xl">
            De la idea a tu página publicada, sin enredos.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#F5EFE3]/72 sm:text-lg sm:leading-8">
            Nos encargamos de convertir la información de tu negocio en una página clara,
            moderna y lista para recibir clientes.
          </p>
        </div>

        <div className="relative mt-14 lg:mt-16">
          <div className="pointer-events-none absolute left-7 top-6 z-0 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#D9A441]/0 via-[#D9A441]/20 to-[#58D7C4]/0 md:hidden" />
          <div className="pointer-events-none absolute left-[9%] right-[9%] top-9 z-0 hidden h-px bg-gradient-to-r from-transparent via-[#D9A441]/18 to-transparent md:block" />
          <div className="pointer-events-none absolute left-[9%] right-[9%] top-9 z-0 hidden h-px bg-gradient-to-r from-transparent via-[#58D7C4]/16 to-transparent blur-sm md:block" />

          <div className="relative z-10 grid items-stretch gap-5 md:grid-cols-4 md:gap-4 xl:gap-5">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="group relative z-10 flex h-full min-h-[18rem] flex-col overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#58D7C4]/28 hover:bg-white/[0.045] hover:shadow-[0_18px_48px_rgba(88,215,196,0.1)] motion-reduce:transform-none motion-reduce:transition-none lg:p-7"
              >
                <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-[#D9A441]/65 via-[#58D7C4]/32 to-transparent" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 motion-reduce:transition-none [background-image:radial-gradient(circle_at_20%_0%,rgba(217,164,65,0.13),transparent_34%),radial-gradient(circle_at_95%_18%,rgba(88,215,196,0.12),transparent_34%)]" />

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="relative mb-5 flex w-full justify-center">
                    <span className="mx-auto grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#D9A441]/25 bg-[#07110F]/82 text-center text-sm font-black leading-none tabular-nums text-[#F5EFE3] shadow-[0_0_28px_rgba(217,164,65,0.12),inset_0_0_0_1px_rgba(245,239,227,0.04)] backdrop-blur-md transition duration-300 group-hover:border-[#58D7C4]/42 group-hover:text-[#7CF5D5] group-hover:shadow-[0_0_32px_rgba(88,215,196,0.16)]">
                      <span className="translate-y-px leading-none">
                        {step.number}
                      </span>
                    </span>
                    <span className="absolute right-0 top-1 h-2 w-2 rounded-full bg-[#7CF5D5]/85 shadow-[0_0_14px_rgba(124,245,213,0.48)]" />
                  </div>

                  <div className="inline-flex max-w-full items-center self-center whitespace-normal rounded-full border border-[#D9A441]/15 bg-[#D9A441]/[0.055] px-3 py-1 text-center text-[10px] font-black uppercase leading-5 tracking-[0.18em] text-[#D9A441]/88 sm:text-[11px]">
                    {step.accent}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-extrabold leading-tight tracking-normal text-[#F5EFE3] xl:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#F5EFE3]/68">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

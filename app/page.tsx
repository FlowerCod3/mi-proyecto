import Image from "next/image";

function SectionArrow({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className={`mx-auto flex h-[55.545px] w-[55.545px] shrink-0 items-center justify-center self-center rounded-full transition hover:translate-y-1 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-color)] ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 512 512"
        fill="none"
        stroke="currentColor"
        strokeWidth="17"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="block h-full w-full"
      >
        <circle cx="256" cy="256" r="247" />
        <path d="M256 119v273m-119-119 119 119 119-119" />
      </svg>
    </a>
  );
}

export default function Home() {
  return (
    <main className="pagina-fondo min-h-screen w-full">
<section className="hero-flores px-8 min-[760px]:px-4">
  <div className="hero-flores__inner mx-auto flex w-full max-w-[1280px] flex-col items-center justify-center py-10 text-center">
    <h1 className="hero-logo-wrap m-0 min-w-0 w-[85%] max-w-[731px] bg-transparent">
      <Image
        src="/amor-logo-manos-y-rostro.png"
        alt="Amor, manos y rostro"
        width={2073}
        height={758}
        preload
        sizes="(max-width: 759px) calc(85vw - 54.4px), (max-width: 891px) calc(85vw - 27.2px), 731px"
        className="hero-logo mx-auto block h-auto w-full max-w-full bg-transparent object-contain"
      />
    </h1>


    <SectionArrow href="#servicios" label="Ver nuestros servicios" className="relative top-8" />
  </div>
</section>

      <section id="servicios" className="px-6 py-16 max-[750px]:px-4">
        <div className="mx-auto w-full max-w-[1020px]">
          <div className="border-t border-[#d9c2b2] pt-12 text-center">
            <h2 className="m-0 text-[38px] font-light leading-tight min-[760px]:text-[52px]">
              Nuestros servicios
            </h2>
          </div>

          <div className="mt-12 grid gap-14 min-[760px]:grid-cols-2">
            <div>
              <h3 className="mb-6 text-[30px] font-light">Facial</h3>
              <ul className="m-0 list-none p-0">
                <li className="border-t border-[#d9c2b2] py-5">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="m-0 text-[18px] font-medium leading-snug">
                      Diagnóstico + limpieza profunda + alta frecuencia
                    </h4>
                    <strong className="shrink-0 text-[19px] font-medium">$22.000</strong>
                  </div>
                  <p className="mb-0 mt-3 text-[14px] leading-relaxed">
                    Primera sesión obligatoria. Masajes de regalo en esta sesión.
                  </p>
                </li>
                <li className="flex items-start justify-between gap-4 border-t border-[#d9c2b2] py-5">
                  <span className="text-[18px]">Radiofrecuencia</span>
                  <strong className="shrink-0 text-[19px] font-medium">$15.000</strong>
                </li>
                <li className="flex items-start justify-between gap-4 border-t border-[#d9c2b2] py-5">
                  <span className="text-[18px]">Sesión descongestiva</span>
                  <strong className="shrink-0 text-[19px] font-medium">$15.000</strong>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-[30px] font-light">Manicure</h3>
              <ul className="m-0 list-none p-0">
                <li className="border-t border-[#d9c2b2] py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[18px]">Polygel</span>
                      <span className="ml-2 text-[12px] font-semibold">✩ Más popular</span>
                    </div>
                    <strong className="shrink-0 text-[19px] font-medium">$15.000</strong>
                  </div>
                </li>
                <li className="flex items-start justify-between gap-4 border-t border-[#d9c2b2] py-5">
                  <span className="text-[18px]">Soft gel</span>
                  <strong className="shrink-0 text-[19px] font-medium">$20.000</strong>
                </li>
              </ul>
              <p className="mb-0 mt-5 border-t border-[#d9c2b2] pt-5 text-[14px] leading-relaxed">
                El servicio indicado depende de la salud de tus uñas y del resultado que deseas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionArrow href="#promos" label="Ver promos" className="my-4" />

      <section id="promos" className="px-6 py-16 max-[750px]:px-4">
        <div className="mx-auto w-full max-w-[1020px]">
          <div className="border-t border-[#d9c2b2] pt-12 text-center">
            <h2 className="m-0 text-[38px] font-light leading-tight min-[760px]:text-[52px]">
              Promos
            </h2>
            <p className="mx-auto mb-0 mt-6 max-w-[620px] text-[18px] leading-relaxed">
              Muy pronto vas a encontrar acá promociones especiales para cuidar tu piel y tus uñas.
            </p>
          </div>
        </div>
      </section>

      <SectionArrow href="#turnos" label="Pedir tu turno" className="my-4" />

      <section id="turnos" className="px-6 py-16 max-[750px]:px-4">
        <div className="mx-auto w-full max-w-[1020px]">
          <div className="border-t border-[#d9c2b2] pt-12 text-center">
            <h2 className="m-0 text-[38px] font-light leading-tight min-[760px]:text-[52px]">
              Pedí tu turno
            </h2>
            <p className="mx-auto mb-8 mt-6 max-w-[620px] text-[18px] leading-relaxed">
              Escribinos por WhatsApp para consultar disponibilidad y reservar tu próximo turno.
            </p>
            <a
              href="https://wa.me/5492646721492?text=Hola%2C%20quisiera%20pedir%20un%20turno."
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center border border-current bg-transparent px-7 py-3 text-[17px] font-medium transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-color)]"
            >
              Pedir turno por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d9c2b2] px-6 py-7 text-center text-sm">
        <p>Amor estética y bienestar</p>
      </footer>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="pagina-fondo min-h-screen w-full text-[#30202c]">
<section className="hero-flores px-8 min-[760px]:px-4">
  <div className="mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-center justify-center py-10 text-center">
    <h1 className="hero-logo-wrap m-0 mb-8 min-w-0 w-full max-w-[1140px] bg-transparent">
      <Image
        src="/amor-icon-transparent.png"
        alt="Amor, estética facial y manicure"
        width={2111}
        height={745}
        priority
        sizes="(max-width: 759px) calc(100vw - 64px), 1140px"
        className="hero-logo mx-auto block h-auto w-full max-w-full bg-transparent object-contain"
      />
    </h1>


    <a
      href="#servicios"
      aria-label="Ver nuestros servicios"
      title="Ver nuestros servicios"
      className="mt-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#701044] bg-[#701044] text-white shadow-[0_6px_18px_rgba(92,22,69,0.28)] transition hover:-translate-y-1 hover:bg-[#570c35] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#701044]"
    >
      <span aria-hidden="true" className="text-[30px] leading-none">
        ↓
      </span>
    </a>
  </div>
</section>

      <section id="servicios" className="bg-white/80 px-6 py-16 max-[750px]:px-4">
        <div className="mx-auto w-full max-w-[1020px]">
          <div className="border-t border-[#d9c2b2] pt-12 text-center">
            <h2 className="m-0 text-[38px] font-light leading-tight text-[#3a2434] min-[760px]:text-[52px]">
              Nuestros servicios
            </h2>
          </div>

          <div className="mt-12 grid gap-14 min-[760px]:grid-cols-2">
            <div>
              <h3 className="mb-6 text-[30px] font-light text-[#5c1645]">Facial</h3>
              <ul className="m-0 list-none p-0">
                <li className="border-t border-[#d9c2b2] py-5">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="m-0 text-[18px] font-medium leading-snug">
                      Diagnóstico + limpieza profunda + alta frecuencia
                    </h4>
                    <strong className="shrink-0 text-[19px] font-medium text-[#5c1645]">$22.000</strong>
                  </div>
                  <p className="mb-0 mt-3 text-[14px] leading-relaxed text-[#685c60]">
                    Primera sesión obligatoria. Masajes de regalo en esta sesión.
                  </p>
                </li>
                <li className="flex items-start justify-between gap-4 border-t border-[#d9c2b2] py-5">
                  <span className="text-[18px]">Radiofrecuencia</span>
                  <strong className="shrink-0 text-[19px] font-medium text-[#5c1645]">$15.000</strong>
                </li>
                <li className="flex items-start justify-between gap-4 border-t border-[#d9c2b2] py-5">
                  <span className="text-[18px]">Sesión descongestiva</span>
                  <strong className="shrink-0 text-[19px] font-medium text-[#5c1645]">$15.000</strong>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-[30px] font-light text-[#5c1645]">Manicure</h3>
              <ul className="m-0 list-none p-0">
                <li className="border-t border-[#d9c2b2] py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[18px]">Polygel</span>
                      <span className="ml-2 text-[12px] font-semibold text-[#8a5671]">✩ Más popular</span>
                    </div>
                    <strong className="shrink-0 text-[19px] font-medium text-[#5c1645]">$15.000</strong>
                  </div>
                </li>
                <li className="flex items-start justify-between gap-4 border-t border-[#d9c2b2] py-5">
                  <span className="text-[18px]">Soft gel</span>
                  <strong className="shrink-0 text-[19px] font-medium text-[#5c1645]">$20.000</strong>
                </li>
              </ul>
              <p className="mb-0 mt-5 border-t border-[#d9c2b2] pt-5 text-[14px] leading-relaxed text-[#685c60]">
                El servicio indicado depende de la salud de tus uñas y del resultado que deseas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="promos" className="bg-white/80 px-6 py-16 max-[750px]:px-4">
        <div className="mx-auto w-full max-w-[1020px]">
          <div className="border-t border-[#d9c2b2] pt-12 text-center">
            <h2 className="m-0 text-[38px] font-light leading-tight text-[#3a2434] min-[760px]:text-[52px]">
              Promos
            </h2>
            <p className="mx-auto mb-0 mt-6 max-w-[620px] text-[18px] leading-relaxed text-[#685c60]">
              Muy pronto vas a encontrar acá promociones especiales para cuidar tu piel y tus uñas.
            </p>
          </div>
        </div>
      </section>

      <section id="turnos" className="bg-white/80 px-6 py-16 max-[750px]:px-4">
        <div className="mx-auto w-full max-w-[1020px]">
          <div className="border-t border-[#d9c2b2] pt-12 text-center">
            <h2 className="m-0 text-[38px] font-light leading-tight text-[#3a2434] min-[760px]:text-[52px]">
              Pedí tu turno
            </h2>
            <p className="mx-auto mb-8 mt-6 max-w-[620px] text-[18px] leading-relaxed text-[#685c60]">
              Escribinos por WhatsApp para consultar disponibilidad y reservar tu próximo turno.
            </p>
            <a
              href="https://wa.me/5492646721492?text=Hola%2C%20quisiera%20pedir%20un%20turno."
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center bg-[#5c1645] px-7 py-3 text-[17px] font-medium text-white transition hover:bg-[#471036] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5c1645]"
            >
              Pedir turno por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d9c2b2] px-6 py-7 text-center text-sm text-[#8a6751]">
        <p>Amor estética y bienestar</p>
      </footer>
    </main>
  );
}

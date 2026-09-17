import Image from "next/image";

export default function Home() {
  return (
    <main className="pagina-fondo min-h-screen text-[#30202c]">
      <section className="hero-flores px-8 max-[750px]:px-4">
        <div className="hero-flores__inner mx-auto grid w-full max-w-[1440px] items-center justify-items-center gap-x-12 gap-y-3 py-12 min-[760px]:min-h-[calc(100svh-80px)] min-[760px]:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] max-[759px]:py-10">
          <h1 className="m-0 w-full max-w-[880px]">
            <Image
              src="/amor-logo.png"
              alt="Amor"
              width={1774}
              height={887}
              priority
              className="block h-auto w-full"
            />
          </h1>
          <div className="min-w-0 pb-3 text-center">
            <p className="mb-5 text-[22px] font-medium uppercase text-[#795d67]">
              Estética facial y manicure
            </p>
            <h2 className="m-0 text-[36px] font-light leading-[1.08] text-[#392533] min-[760px]:text-[48px] min-[1100px]:text-[62px] min-[1500px]:text-[78px]">
              Belleza<br />serena, piel<br />luminosa
            </h2>
          </div>
          <a
            href="#servicios"
            aria-label="Ver nuestros servicios"
            title="Ver nuestros servicios"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-[#5c1645] bg-white/95 text-[#5c1645] shadow-[0_6px_18px_rgba(92,22,69,0.18)] transition hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5c1645] min-[760px]:col-span-2"
          >
            <span aria-hidden="true" className="text-[30px] leading-none">↓</span>
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

      <footer className="border-t border-[#d9c2b2] px-6 py-7 text-center text-sm text-[#8a6751]">
        <p>Amor estética y bienestar</p>
      </footer>
    </main>
  );
}

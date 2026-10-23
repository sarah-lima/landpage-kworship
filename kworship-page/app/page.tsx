import Link from "next/link";
import Contato from "./contato";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#202020]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#84a1cf]">
        {/* Fundo para mobile */}
        <div
          className="absolute inset-0 -z-10 bg-[url('/logo-inicial.JPEG')] bg-cover bg-center bg-no-repeat md:hidden"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-black/50 md:hidden"
          aria-hidden="true"
        />
        {/* Fundo */}
        <div
          className="absolute inset-0 -z-10 hidden bg-[#84a1cf] md:block"
          aria-hidden="true"
        />

        {/* Conteúdo */}
        <div className="relative mx-auto">
          <div className="grid items-center gap-10 px-4 py-12 md:grid-cols-2 py-6">
            {/* Logos à esquerda */}
            <div className="relative z-10 flex flex-col items-center">
              <img
                src="/logo-adalos.PNG"
                alt="Logo Ádalos"
                className="block w-82 max-w-full"
              />

              <img
                src="/kworship-logo.PNG"
                alt="Logo K-Worship"
                className="-mt-6 block w-82 max-w-full relative bottom-[40px]"
              />
              <a
                href="#saiba-mais"
                className="relative bottom-[70px] inline-flex rounded-full bg-[#07132a] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#202b40]"
              >
                Saiba mais
              </a>
            </div>

            {/* Imagem principal à direita */}
            <div className="absolute inset-y-0 right-0 hidden w-[55%] md:block">
              <div className="relative h-full w-full">
                <img
                  src="/logo-inicial.JPEG"
                  alt="Banner do evento"
                  className="h-full w-full object-cover object-center"
                />

                {/* Mistura a imagem com o fundo */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, #84a1cf 0%, rgba(132,161,207,0.9) 10%, rgba(132,161,207,0.5) 30%, transparent 65%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o evento */}
      <section id="evento" className="px-6 py-20">
        <div className="mx-auto px-6 max-w-6xl">
          <div className="max-w-2xl mb-10">
            <p className="font-bold uppercase tracking-widest text-[#01255f]">
              Sobre o Kworship
            </p>
            <p className="mt-5 leading-7 text-gray-600">
              Nos dias 7 e 8 de novembro, São Paulo recebe a 2ª edição do K-Worship Day, um evento gratuito que une cultura coreana, música, dança, gastronomia e fé em uma experiência única!
              <br />
              O nome K-Worship surgiu a partir de uma estratégia para aproveitar a onda Hallyu, fenômeno de popularização da cultura coreana pelo mundo, criando uma oportunidade para que pessoas interessadas nessa cultura também possam ouvir sobre Jesus.
              <br />

              A proposta é simples e transformadora: oferecer experiências culturais, da gastronomia coreana à música e à dança, como uma ponte para que cada pessoa tenha a oportunidade de conhecer Jesus. Nosso desejo é que, por meio dessa vivência, almas sejam alcançadas e vidas sejam impactadas pelo Evangelho.
              <br />

              Prefeitura de São Paulo, o K-Worship Day busca conectar culturas, reunir pessoas e, acima de tudo, compartilhar o amor de Jesus de uma forma criativa e acessível.            </p>
          </div>
        </div>
        <div className="px-4 text-center">
        <p className="font-bold uppercase tracking-widest text-[#082b65]">
              Sorteio especial
            </p>
       <Link
              href="/sorteio"
              className="mt-7 inline-flex rounded-full bg-[#082b65] px-7 py-3 font-bold text-white transition hover:bg-[#082b65]"
            >
              Saiba como participar
            </Link>
            </div>
      </section>
      <section
        id="saiba-mais"
        className="relative overflow-hidden bg-[#DCE9F8] px-6 py-16 md:px-12 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* Título da seção */}
          <div className="mb-2 flex items-center md:mb-16">
            <h2 className="font-extrabold text-[#01255f] md:text-5xl">
              Informações do evento
            </h2>
            <div
              className=" ml-2 h-1 w-6 rounded-full bg-[#01255f]"
            />
          </div>

          {/* Conteúdo: detalhes à esquerda e sorteio à direita */}
          <div className="items-stretch">
            {/* Informações do evento */}
            <div className="relative flex flex-col py-7 px-2  md:p-10">
              <div className="absolute left-0 top-0 h-2 w-full" />

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative flex flex-col overflow-hidden  py-7 text-black md:p-10">
                    <div className="mb-2"> Dia 1</div>
                    {/* Data */}
                    <div className="flex items-start gap-2">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#01255f]/10 text-xl">
                        📅
                      </div>

                      <div>
                        <p className="font-bold text-[#01255f]">Data</p>
                        <p className="mt-1 text-gray-600">
                          07/11
                        </p>
                      </div>
                    </div>

                    {/* Horário */}
                    <div className="flex items-start gap-2">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#01255f]/10 text-xl">
                        🕒
                      </div>

                      <div>
                        <p className="font-bold text-[#01255f]">Horário</p>
                        <p className="mt-1 text-gray-600">
                          10h às 21h
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[#01255f] py-7 px-2 text-white shadow-xl md:p-10">

                    <div className="mb-2"> Dia 2</div>
                    {/* Data */}
                    <div className="flex items-start gap-2">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#01255f]/10 text-xl">
                        📅
                      </div>

                      <div>
                        <p className="font-bold text-white">Data</p>
                        <p className="mt-1 text-white">
                          08/11
                        </p>
                      </div>
                    </div>

                    {/* Horário */}
                    <div className="flex items-start gap-2">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#01255f]/10 text-xl">
                        🕒
                      </div>

                      <div>
                        <p className="font-bold text-white">Horário</p>
                        <p className="mt-1 text-white">
                          10h às 17h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Local */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#01255f]/10 text-xl">
                    📌
                  </div>

                  <div>
                    <p className="font-bold text-[#01255f]">Local</p>
                    <p className="mt-1 text-gray-600">
                      Praça Coronel Fernando Prestes        </p>
                    <p className="text-sm text-gray-500">
                      Bom Retiro (Metrô Tiradentes - linha azul) - São Paulo/SP
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <a
                  href="https://maps.app.goo.gl/js7BqPc1q51Xk3Ft6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#01255f] px-5 py-3 font-bold text-[#01255f] transition hover:bg-[#01255f] hover:text-white sm:w-auto"
                >
                  Como chegar
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contato />

      {/* Rodapé */}
      <footer className="px-6 py-8 text-center text-sm text-gray-500">
        <p className="font-semibold text-gray-700">
          Ádalos by Kworship-Day
        </p>
        <p className="mt-2">
          © 2026 Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <span className="text-3xl">{icon}</span>
      <h3 className="mt-4 font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{children}</p>
    </div>
  );
}



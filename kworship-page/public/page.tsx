import Carrossel from "./carrosel";
import GaleriaEvento from "./galeriaEvento";
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
      <section id="evento" className="px-6 py-6">
        <div className="mx-auto px-6 max-w-6xl">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-widest text-[#01255f]">
              Sobre o Ádalos
            </p>

            <div className="mt-6 grid justify-items-auto gap-10 md:grid-cols-2">
              {/* Texto à esquerda */}
              <div className="order-1">
                <p className="leading-7 text-gray-600">
                  <b> Ádalos</b> é um grupo de jovens que fazem parte do
                  ministério Jesus para as Nações que escolheram 
                  <b> usar os seus dons e talentos para adorar ao
                    Senhor</b>, formaram um ministério que leva a
                  presença de Deus de uma forma criativa e
                  transformadora através da dança e do louvor,
                  alcançando mais vidas para Jesus.
                  <div className="mt-3 italic underline">
                    “Tudo o que tem vida louve o Senhor!
                    <br />ALELUIA!"
                    <br />Salmos 150:6
                  </div>
                </p>
              </div>

              {/* Imagem à direita */}
              <div className="order-2 min-h-[400px] overflow-hidden rounded-xl md:block">
                <img
                  src="/adalos-bless.JPEG"
                  alt="Grupo Ádalos"
                  className="h-full min-h-[400px] w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#EEF4FC] px-6 py-6 text-white">
        <div className="mx-auto px-6 max-w-6xl">
          <p className="font-bold uppercase tracking-widest text-[#01255f]">
            Sobre o KWorship
          </p>

          <div className="mt-6 grid justify-items-auto gap-10 md:grid-cols-2">
            {/* Texto à esquerda */}
            <div className="order-1">
              <p className="leading-7 text-gray-600">
                O nome surgiu a partir de uma estratégia para aproveitar a onda Hallyu, na qual pessoas interessadas pela cultura coreana pudessem ter uma oportunidade de ouvir sobre Jesus. A proposta é simples e transformadora: oferecer experiências culturais desde gastronomia até música e a dança como uma ponte para que cada pessoa tenha a oportunidade de conhecer Jesus. Nosso desejo é que, por meio dessa vivência única, almas sejam alcançados e vidas impactadas pelo evangelho.
              </p>
            </div>

            {/* Imagem à direita */}
            <div className="order-2 relative min-h-[350px] overflow-hidden rounded-xl md:block">
              <img
                src="/adalos-circulo.PNG"
                alt="Grupo Ádalos"
                className="h-full min-h-[350px] max-h-[350px] w-full object-cover object-center"
              />

              {/* Transição suave para o fundo */}
            
            </div>
          </div>
        </div>
      </section>
      {/* Sorteio */}
      <section className="bg-white">
        <Carrossel title='Participações especiais' tipo="participacoes" color="84a1cf" cards={[
          {
            imagem: "soraia.png",
            titulo: "",
            descricao: "",
          },
          {
            imagem: "/rebeca.png",
            titulo: "",
            descricao: "",
          },
          {
            imagem: "/ton.png",
            titulo: "",
            descricao: "",
          },
          {
            imagem: "/cassiane.png",
            titulo: "",
            descricao: "",
          },
        ]
        } />
      </section>
      <section>
        <Carrossel title='Comidas' tipo="comidas" color="F8F5EF" cards={[
          { imagem: "/toppoki.jpeg", titulo: "Tteokbokki", descricao: "Bolinhos de arroz com molho apimentado." },
          { imagem: "/frango.JPG.jpeg", titulo: "Dakgangjeong", descricao: "Frango frito coreano podendo ser apimentado ou agridoce." },
          { imagem: "/kimchi.jpeg", titulo: "Kimchi", descricao: "Acelga fermentada com sabor apimentado." },
          { imagem: "/kimbap.png", titulo: "Kimbap", descricao: "Rodelas de arroz, vegetais e carne enrolados em alga marinha." },
        { imagem: "hotdog.png", titulo: "Hot Dog Coreano", descricao: "Hotdog coreano empanado e crocante, recheado com salsicha e queijo derretido." },
          { imagem: "/japagueti.jpeg", titulo: "Japchae", descricao: "Macarrão de batata doce com legumes variados e carne em um molho agridoce." },
          { imagem: "/mandu.jpeg", titulo: "Mandu", descricao: "Bolinho frito recheado de carne e vegetais." },
          { imagem: "/doce.jpeg", titulo: "Tanghulu", descricao: "Espetinho de frutas cobertas por uma camada fina e crocante de açúcar." },
        ]} />
      </section>
      <GaleriaEvento />
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
                      Bom Retiro (Metrô Tiradentes) - São Paulo/SP
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
      <footer className="px-6 py-8 bg-[#071D3D] text-center text-sm text-white">
        <p className="font-semibold text-white">
          K WORSHIP DAY by Ádalos
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

function StepCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
      <span className="text-4xl font-black text-[#01255f]">{number}</span>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-6 text-gray-600">{children}</p>
    </div>
  );
}

function Rule({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-xl border border-white/10 bg-white/5 p-5">
      <summary className="cursor-pointer p-4 list-none font-bold">
        <span className="flex items-center justify-between gap-4">
          {title}
        </span>
      </summary>
      <p className="mt-4 leading-7 text-white/70 p-4">{children}</p>
    </details>
  );
}

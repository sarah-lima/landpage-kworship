
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#202020]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-6 py-20 text-white md:py-28">

        {/* Imagem somente no mobile */}
       <div
  className="absolute inset-0 -z-10 bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat md:hidden"
  aria-hidden="true"
/>

{/* Camada escura */}
<div
  className="absolute inset-0 -z-10 bg-black/50 md:hidden"
  aria-hidden="true"
/>

        {/* Gradiente somente no desktop */}
        <div
          className="absolute inset-0 -z-10 hidden bg-gradient-to-br from-[#84a1cf] to-[#84a1cf] md:block"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-6xl">
          <div className="mt-2 grid px-4 items-center gap-10 md:grid-cols-2">
            <div>
 
              <div className="text-4xl font-black leading-tight md:text-6xl">
                <img src="/logo.png" alt="K-Worship" className="mb-4 w-82" />
                
                <span className="block text-[#aac5ef]">
                  Participe e concorra!
                </span>
              </div>


              <p className="mt-6 max-w-xl text-lg text-white/90">
                Faça parte dessa iniciativa, contribua com a nossa causa
                e participe do sorteio especial do evento.
              </p>

              <a
                href="#como-participar"
                className="mt-8 inline-flex rounded-full bg-[#07132a] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#202b40]"
              >
                Quero participar
              </a>
            </div>
            <div className="hidden md:block relative min-h-[350px] w-screen md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[55%]">
              <img
                src="/banner.PNG"
                alt="Banner K-Worship"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o evento */}
      <section id="evento" className="px-6 py-20">
        <div className="mx-auto px-6 max-w-6xl">
          <div className="max-w-2xl mb-10">
            <p className="font-bold uppercase tracking-widest text-[#01255f]">
              Sobre o evento
            </p>
            <h2 className="mt-3 mb-4 text-3xl font-black md:text-4xl">
              Juntos, podemos fazer mais.
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              O nome surgiu a partir de uma estratégia para aproveitar a onda Hallyu, na qual pessoas interessadas pela cultura coreana pudessem ter uma oportunidade de ouvir sobre Jesus. A proposta é simples e transformadora: oferecer experiências culturais da gastronomia à música e à dança como uma ponte para que cada pessoa tenha a oportunidade de conhecer Jesus. Nosso desejo é que, por meio dessa vivência única, almas sejam alcançados e vidas impactadas pelo evangelho.
            </p>
          </div>

          <p className="my-4 text-sm font-semibold uppercase tracking-widest text-[#676980]">
            Datas do evento
          </p>
          <div className=" grid gap-5 sm:grid-cols-3">
            <InfoCard icon="📅" title="">
              <p className="text-xs font-semibold uppercase tracking-wider text-black/70">
                Sábado
              </p>
              <p className="mt-1 text-1xl font-black text-black">07/11</p>
              <div className="my-3 h-px bg-black/20" />
              <p className="flex items-center gap-2 text-sm font-medium text-black sm:text-base">
                <span>◷</span> 10h às 21h
              </p>
            </InfoCard>
            <InfoCard icon="📅" title="">
              <p className="text-xs font-semibold uppercase tracking-wider text-black/70">
                Domingo
              </p>
              <p className="mt-1 text-1xl font-black text-black">08/11</p>
              <div className="my-3 h-px bg-black/20" />
              <p className="flex items-center gap-2 text-sm font-medium text-black sm:text-base">
                <span>◷</span> 10h às 17h
              </p>
            </InfoCard>
            <InfoCard icon="📍" title="Local">
              Praça Coronel Fernando Prestes<br /> Bom Retiro (Metrô Tiradentes)
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Sorteio */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto px-6 grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-[#aac5ef]">
              Sorteio especial
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Sua participação vale a pena!
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              Ao cumprir os critérios de participação, você poderá receber
              vouchers para concorrer aos prêmios disponíveis no sorteio.
              Consulte as condições e a pontuação de cada contribuição.
            </p>
            <a
              href="#como-participar"
              className="mt-7 inline-flex rounded-full bg-[#aac5ef] px-7 py-3 font-bold text-white transition hover:bg-[#eaf1fb]"
            >
              Saiba como participar
            </a>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#eaf1fb] to-[#aac5ef] p-8 md:p-12">
            <div className="text-center">
              <img src='/passagem.jpeg' className="mb-4" />
              <h3 className="mt-5 text-2xl font-black text-[#01255f]">
                Prêmios especiais
              </h3>
              <p className="mt-3 text-gray-700">
                Sortearemos 2 passagens de ida e volta para a Coreia do Sul, uma no sábado e outra no domingo.<br />Lembrando que o prêmio custeia apenas a passagem!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como participar */}
      <section id="como-participar" className="px-6 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-[#01255f]">
              Como participar
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              É simples fazer parte!
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <StepCard number="01" title="Siga nossas redes sociais">
              Siga o perfil <a href="https://www.instagram.com/adalos_jpn" target="_blank" rel="noopener noreferrer" className="font-black underline">@adalos</a> e <a href="https://www.instagram.com/kworshipday" target="_blank" rel="noopener noreferrer" className="font-black underline">@kworshipday</a> no Instagram.
            </StepCard>
            <StepCard number="02" title="Doe um alimento e concorra">
              Doe um quilo de alimento.
              <br /> Cada kg doado = 1 voucher<br /> O alimento deve ser apresentado nos dias do evento            </StepCard>
            <StepCard number="03" title="Esteja presente no evento">
              Participe do evento ao longo dos dias e esteja presente no momento do sorteio.            </StepCard>
          </div>
        </div>
      </section>

      {/* Regras */}
      <section id="regras" className="bg-gradient-to-br from-[#01255f] to-[#072048] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-bold uppercase tracking-widest text-[#eaf1fb]">
            Transparência e confiança
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Regras do sorteio
          </h2>

          <div className="mt-8 space-y-4">
            <Rule title="Como participar?">
              Basta seguir o <a href="https://www.instagram.com/adalos_jpn" target="_blank" rel="noopener noreferrer" className="font-black underline">@adalos</a> e <a href="https://www.instagram.com/kworshipday" target="_blank" rel="noopener noreferrer" className="font-black underline">@kworshipday</a> no Instagram e doe um quilo de alimento não perecível.
              <br/>A cada um kg de alimento não perecível doado, o participante recebe 1 voucher para concorrer ao sorteio. Quanto mais alimentos forem doados, mais chances de ganhar!
              <br /> E estar presente no evento nos dias 07/11 e 08/11.
            </Rule>
            <Rule title="Quando será realizado o sorteio?">
              O sorteio será realizado nos dias 07/11 e 08/11, durante o evento.
            </Rule>
            <Rule title="Quais alimentos podem ser doados?">
              <ul>
                <li className="list-disc">Arroz</li>
                <li className="list-disc">Feijão</li>
                <li className="list-disc">Café</li>
                <li className="list-disc">Macarrão</li>
                <li className="list-disc">Óleo</li>
                <li className="list-disc">Açúcar</li>
                <li className="list-disc">Farinha de trigo</li>
                <li className="list-disc">Leite em pó</li>
                <li className="list-disc">Molho de tomate</li>
                <li className="list-disc">Sardinha</li>
              </ul>
            </Rule>
            <Rule title="Quais instituições serão beneficiadas com as doações?">
              As doações serão destinadas a comunidade terapêutica Germano Neemias, CNPJ 30.758.434.0001/16
</Rule>
          </div>

        </div>
      </section>

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

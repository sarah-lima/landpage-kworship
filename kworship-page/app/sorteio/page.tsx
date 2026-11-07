"use client";

export default function Sorteio() {
  return (
    <main className="min-h-screen bg-white text-[#202020] bg-[#f5f7fb]">
    <section
      id="sorteio"
      className="bg-[#f5f7fb] py-16 md:py-24"
    >
      {/* Sorteio */}
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
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#eaf1fb] to-[#aac5ef] p-8 md:p-12">
            <div className="text-center">
              <img src='/passagem.jpeg' className="mb-4" />
              <h3 className="mt-5 text-2xl font-black text-[#01255f]">
                Prêmios especiais
              </h3>
              <p className="mt-3 text-gray-700">
                Sortearemos <b>3</b> passagens de ida e volta para a Coreia do Sul, uma no sábado e outra no domingo.<br />Lembrando que o prêmio custeia apenas a passagem!
              </p>
            </div>
          </div>
        </div>
      {/* Como participar */}
        <div className="mx-auto max-w-6xl px-6 py-6">
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
             Participe do evento ao longo dos dias e <b> esteja presente no momento do sorteio</b>. O prêmio será entregue exclusivamente à pessoa sorteada, não sendo permitida a retirada por familiares, representantes ou pessoas conhecidas.            </StepCard>
          </div>
Leia o regulamento completo do sorteio<br/>
Consulte as regras, condições de participação e critérios para recebimento do prêmio.<br/>
          <a
  href="https://docs.google.com/document/d/1PM_RlwlERUWLKh4IF5J7wyd750ZIo78U/edit?usp=drivesdk&ouid=100304160764718001992&rtpof=true&sd=true"
  target="_blank"
  rel="noopener noreferrer"
><b>
  Consultar regulamento completo</b>
</a>
        </div>

      {/* Regras */}
      <div className="bg-gradient-to-br from-[#01255f] to-[#072048] px-6 py-20 text-white">
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
              O sorteio será realizado um no dia 07/11 e outra dia 08/11, durante o evento. Das 10h - 21h.
            </Rule>
            <Rule title="Doando alimento no sábado estarei concorrendo ao sorteio de domingo?">
              Não, ao doar alimento no sábado, você apenas estará concorrendo ao sorteio do dia 07/11, para concorrer nos dois dias é necessário doar alimento em ambos os dias.
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
        </div>

    </section>
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
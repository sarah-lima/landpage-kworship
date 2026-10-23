import Carrossel from "./carrosel";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#202020]">
      {/* Hero */}
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
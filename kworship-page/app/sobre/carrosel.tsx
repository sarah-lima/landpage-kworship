
"use client";

import { useState, useEffect, useRef } from "react";

type Card = {
  imagem: string;
  titulo: string;
  descricao?: string;
};

type CarrosselProps = {
  cards: Card[];
  title: string;
  color?: string;
  tipo?: "participacoes" | "comidas";
};

export default function Carrossel({
  cards,
  title,
  color,
  tipo = "participacoes",
}: CarrosselProps) {
  const [indice, setIndice] = useState(0);
  const [visiveis, setVisiveis] = useState(1);
  const toqueInicial = useRef<number | null>(null);
const participacoes = tipo === "participacoes";
  const quantidadeVisivel =
  visiveis >= 4 ? (participacoes ? 4 : 3) : visiveis;
const maxIndice = Math.max(0, cards.length - quantidadeVisivel);
  useEffect(() => {
    const atualizarVisiveis = () => {
      setVisiveis(window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1);
    };

    atualizarVisiveis();
    window.addEventListener("resize", atualizarVisiveis);

    return () => window.removeEventListener("resize", atualizarVisiveis);
  }, []);

  useEffect(() => {
    setIndice((atual) => Math.min(atual, maxIndice));
  }, [maxIndice]);

  const proximo = () => {
    setIndice((atual) => Math.min(atual + 1, maxIndice));
  };

  const anterior = () => {
    setIndice((atual) => Math.max(atual - 1, 0));
  };

  const fundo = (participacoes ? "#102B59" : "#F8F5EF");
  const texto = participacoes ? "text-white" : "text-[#102B59]";
  const destaque = participacoes ? "#DDAA72" : "#3B6FB6";
  const cardFundo = "bg-white";
  const totalPaginas = maxIndice + 1;
const gapPx = 8;

const larguraCard = `calc((100% - ${
  gapPx * (quantidadeVisivel - 1)
}px) / ${quantidadeVisivel})`;
if (!cards.length) return null;

  return (
    <section
      className="overflow-hidden py-10 sm:py-14"
      style={{ backgroundColor: fundo }}
      aria-label={title}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Título e navegação */}
        <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
          <div>
            <p
              className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${texto} opacity-75`}
            >
              {participacoes ? "Conheça os convidados" : "Sabores da Coreia"}
            </p>

            <h2 className={`text-2xl font-black sm:text-3xl md:text-4xl ${texto}`}>
              {title}
            </h2>

            <div
              className="mt-3 h-1 w-12 rounded-full"
              style={{ backgroundColor: destaque }}
            />
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={anterior}
              disabled={indice === 0}
              aria-label="Cards anteriores"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition disabled:cursor-not-allowed disabled:opacity-30 ${
                participacoes
                  ? "border-white/40 text-white hover:bg-white/10"
                  : "border-[#102B59]/30 text-[#102B59] hover:bg-[#102B59]/10"
              }`}
            >
              <span aria-hidden="true">←</span>
            </button>

            <button
              type="button"
              onClick={proximo}
              disabled={indice >= maxIndice}
              aria-label="Próximos cards"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-30"
              style={{ backgroundColor: participacoes ? "#3B6FB6" : "#102B59" }}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Janela do carrossel */}
        <div
          className="overflow-hidden"
          onTouchStart={(e) => {
            toqueInicial.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (toqueInicial.current === null) return;

            const diferenca = toqueInicial.current - e.changedTouches[0].clientX;

            if (diferenca > 50) proximo();
            if (diferenca < -50) anterior();

            toqueInicial.current = null;
          }}
        >
          <div
            className="flex items-stretch gap-2 transition-transform duration-500 ease-out"
         style={{
  transform: `translateX(calc(${indice} * (-1 * (${larguraCard}) - ${gapPx}px)))`,
}}   
          >
            {cards.map((card, i) => (
              <article
                key={`${card.titulo}-${i}`}
                className={`flex min-w-0 shrink-0 flex-col overflow-hidden rounded-2xl ${cardFundo} shadow-sm transition-shadow duration-300 hover:shadow-xl ${
                  visiveis === 1
                    ? "w-full"
                    : visiveis === 2
                      ? "w-[calc((100%-1rem)/2)]"
                      : `w-[calc((100%-2rem)/${tipo === "participacoes" ? 4 : 3})]`
                }`}
                style={{ width: larguraCard }}
              >
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4]">
                  <img
                    src={card.imagem}
                    alt={card.titulo}
                    loading={i < visiveis ? "eager" : "lazy"}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />

                  {participacoes && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071D3D]/90 to-transparent px-4 pb-3 pt-10">
                      <h3 className="text-lg font-extrabold text-white sm:text-xl">
                        {card.titulo}
                      </h3>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  {!participacoes && (
                    <h3 className="text-base font-extrabold text-[#102B59] sm:text-lg">
                      {card.titulo}
                    </h3>
                  )}

                  {card.descricao && (
                    <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-gray-600">
                      {card.descricao}
                    </p>
                  )}

                  <div
                    className="mt-4 h-1 w-10 rounded-full"
                    style={{ backgroundColor: destaque }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        {totalPaginas > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: totalPaginas }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndice(i)}
                aria-label={`Ir para a página ${i + 1}`}
                aria-current={indice === i ? "true" : undefined}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: indice === i ? "24px" : "8px",
                  backgroundColor:
                    indice === i
                      ? destaque
                      : participacoes
                        ? "rgba(255,255,255,0.45)"
                        : "rgba(16,43,89,0.22)",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

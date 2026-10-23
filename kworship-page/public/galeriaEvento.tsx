
"use client";

const fotos = [
  {
    imagem: "/galeria/IMG_6074.JPEG",
    alt: "Momentos de louvor do evento",
    destaque: true,
  },
  {
    imagem: "/galeria/IMG_6058.JPEG",
    alt: "Apresentação de dança",
  },
  {
    imagem: "/galeria/IMG_6072.JPEG",
    alt: "Participantes reunidos no evento",
  },
  {
    imagem: "/galeria/IMG_6076.JPEG",
    alt: "Momentos especiais da edição anterior",
  },
    {
    imagem: "/galeria/IMG_6080.JPEG",
    alt: "Momentos especiais da edição anterior",
  },
    {
    imagem: "/galeria/IMG_6081.JPEG",
    alt: "Momentos especiais da edição anterior",
  },
   {
    imagem: "/galeria/IMG_6075.JPEG",
    alt: "Momentos especiais da edição anterior",
  },
];

export default function GaleriaEvento() {
  return (
    <section className="bg-[#F8F5EF] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 max-w-xl sm:mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B6FB6]">
            Nossas memórias
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-[#102B59] sm:text-3xl md:text-4xl">
            Relembre a última edição
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
            Momentos de louvor, dança, cultura e comunhão
            que ficaram na memória.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {fotos.map((foto, index) => (
            <figure
              key={foto.imagem}
              className={`group overflow-hidden rounded-xl sm:rounded-2xl ${
                index === 0
                  ? "col-span-2 aspect-[16/9]"
                  : "aspect-[4/3]"
              }`}
            >
              <img
                src={foto.imagem}
                alt={foto.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

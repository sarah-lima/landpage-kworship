"use client";

const telefone = "5511969249257";
const instagram = "https://www.instagram.com/kworshipday/";

export default function Contato() {
  return (
    <section
      id="contato"
      className="bg-[#f5f7fb] px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#17366b]">
            Fale com o Ádalos
          </p>

          <h2 className="text-3xl font-extrabold text-[#082b65] md:text-4xl">
            Estamos aqui para você!
          </h2>

          <p className="mt-4 text-gray-600">
            Precisa de ajuda ou quer acompanhar as novidades?
            Entre em contato com nossa equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#e8eef9] text-3xl">
              🎧
            </div>

            <h3 className="text-xl font-bold text-[#082b65]">
              SAC Ádalos
            </h3>

            <p className="mt-2 text-gray-600">
              Entre em contato para tirar dúvidas e obter informações.
            </p>

            <p className="mt-5 text-lg font-semibold text-[#082b65]">
              +55 11 96924-9257
            </p>

            <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
              <a
                href={`tel:+${telefone}`}
                className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#082b65] px-4 py-3 text-sm font-semibold text-white hover:bg-[#123d83]"
              >
                ☎ Ligar agora
              </a>

              <a
                href={`https://wa.me/${telefone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-[#082b65] px-4 py-3 text-sm font-semibold text-[#082b65] hover:bg-[#eef3fc]"
              >
                <span>WhatsApp</span>
                <span>↗</span>
              </a>
            </div>
          </article>

          <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-pink-50 text-3xl">
              📸
            </div>

            <h3 className="text-xl font-bold text-[#082b65]">
              Siga o Ádalos
            </h3>

            <p className="mt-2 text-gray-600">
              Acompanhe novidades, convidados especiais e próximos eventos.
            </p>

            <p className="mt-5 text-lg font-semibold text-[#b42375]">
              @kworshipday
            </p>

            <div className="mt-auto pt-6">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#082b65] px-5 py-3 text-sm font-semibold text-white hover:bg-[#123d83]"
              >
                Acessar Instagram ↗
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
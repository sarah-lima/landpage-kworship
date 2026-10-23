import Contato from "../contato";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#202020]">
      {/* Hero */}
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

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { nome: "Início", href: "/" },
  { nome: "Sobre o evento", href: "/sobre" },
  { nome: "Contato", href: "/contato" },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const pathname = usePathname();

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={fecharMenu}
          className="text-xl font-bold tracking-wide text-[#01255f]"
        >
          K-WORSHIP
        </Link>

        {/* Menu desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                pathname === link.href ? "page" : undefined
              }
              className={`text-sm font-medium transition-colors hover:text-[#65a5d9] ${
                pathname === link.href
                  ? "text-[#65a5d9]"
                  : "text-[#01255f]"
              }`}
            >
              {link.nome}
            </Link>
          ))}

          <Link
            href="/sorteio"
            className="rounded-lg bg-[#01255f] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#23477f]"
          >
            Concorra à passagem
          </Link>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-[#01255f] hover:bg-gray-100 md:hidden"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
        >
          {menuAberto ? (
            /* Ícone X */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            /* Ícone hambúrguer */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menu mobile */}
      {menuAberto && (
        <div
          id="menu-mobile"
          className="border-t border-gray-100 bg-white px-5 pb-5 pt-3 shadow-lg md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={fecharMenu}
                aria-current={
                  pathname === link.href ? "page" : undefined
                }
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-blue-50 ${
                  pathname === link.href
                    ? "bg-blue-50 text-[#01255f]"
                    : "text-gray-700"
                }`}
              >
                {link.nome}
              </Link>
            ))}

            <Link
              href="/sorteio"
              onClick={fecharMenu}
              className="mt-3 rounded-lg bg-[#01255f] px-4 py-3 text-center font-semibold text-white transition hover:bg-[#23477f]"
            >
              ✈ Concorra à passagem
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

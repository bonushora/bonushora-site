import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">

      <header className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">BônusHora</div>

        <nav className="flex gap-6 text-sm text-gray-600">
          <Link to="/">Home</Link>
          <Link to="/como-funciona">Como funciona</Link>
          <Link to="/filosofia">Filosofia</Link>
          <Link to="/manual">Manual</Link>
          <Link to="/roadmap">Roadmap</Link>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t px-6 py-10 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} BônusHora — Rede de confiança e compromisso
      </footer>

    </div>
  );
}

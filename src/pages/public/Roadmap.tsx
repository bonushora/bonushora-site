import React from 'react';

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      
      {/* HEADER / NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="text-xl font-bold tracking-tight text-blue-600">BônusHora</a>
            <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full border border-blue-200">Protocolo</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="/" className="hover:text-blue-600 transition-colors">Início</a>
            <a href="/como-funciona" className="hover:text-blue-600 transition-colors">Como Funciona</a>
            <a href="/filosofia" className="hover:text-blue-600 transition-colors">Filosofia</a>
            <a href="/roadmap" className="text-blue-600 transition-colors">Cronograma</a>
          </nav>
          <div>
            <span className="text-xs font-medium bg-slate-900 text-white px-4 py-2 rounded-lg shadow-sm">
              Tecnologia Social
            </span>
          </div>
        </div>
      </header>

      {/* HERO SECTION INTERNA */}
      <section className="bg-slate-950 text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Linha do Tempo</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
            Cronograma de Implementação e Evolução
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg leading-relaxed">
            Acompanhe as fases de desenvolvimento do protocolo, desde o desenho da arquitetura em camadas até a homologação em ambientes institucionais.
          </p>
        </div>
      </section>

      {/* TIMELINE / ROADMAP */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-l-2 border-slate-200 ml-4 space-y-12">
          
          {/* FASE 1 - CONCLUÍDA */}
          <div className="relative pl-8">
            <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-emerald-500 border-4 border-white shadow-sm" />
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Fase 1 — Concluída</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Arquitetura de Contratos Inteligentes (Blockchain)</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Modelagem matemática e implementação dos Smart Contracts em Solidity. Criação da infraestrutura de contabilidade de tempo e indexação isonômica de créditos utilitários ($BH$).
              </p>
            </div>
          </div>

          {/* FASE 2 - CONCLUÍDA */}
          <div className="relative pl-8">
            <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-emerald-500 border-4 border-white shadow-sm" />
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Fase 2 — Concluída</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Camadas de Governança Digital (PoSQ & PoVC)</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Desenvolvimento dos algoritmos de Prova de Critério e Execução (PoSQ) e Prova de Validação Comunitária (PoVC) para auditoria e validação descentralizada de serviços comunitários prestados.
              </p>
            </div>
          </div>

          {/* FASE 3 - EM ANDAMENTO */}
          <div className="relative pl-8">
            <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow-sm animate-pulse" />
            <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-md">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Fase 3 — Em Execução</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Portal Institucional e Demonstração do Piloto BH-SMC</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Estruturação do portal público `www.bonushora.com.br` como ambiente institucional de apresentação da arquitetura BônusHora e demonstração controlada da evolução do Piloto BH-SMC.
              </p>
            </div>
          </div>

          {/* FASE 4 - PRÓXIMA */}
          <div className="relative pl-8">
            <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-slate-300 border-4 border-white shadow-sm" />
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm opacity-75">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Fase 4 — Planejada</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Piloto BH-SMC — Telemetria de Impacto (SCI) e Validação Operacional</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Evolução do Piloto BH-SMC com telemetria de impacto social, indicadores SCI, ampliação da validação operacional e preparação de futuras demonstrações em ambientes controlados.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© 2026 Plataforma BônusHora. Todos os direitos reservados de propriedade intelectual.</p>
        </div>
      </footer>

    </div>
  );
}

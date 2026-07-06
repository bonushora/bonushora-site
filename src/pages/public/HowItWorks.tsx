import React from 'react';

export default function HowItWorks() {
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
            <a href="/como-funciona" className="text-blue-600 transition-colors">Como Funciona</a>
            <a href="/filosofia" className="hover:text-blue-600 transition-colors">Filosofia</a>
            <a href="/roadmap" className="hover:text-blue-600 transition-colors">Cronograma</a>
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
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Arquitetura Técnica</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
            Como Funciona o Ecossistema de Utilidade Social
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg leading-relaxed">
            Conheça a engenharia em três camadas projetada para dar transparência, imutabilidade e controle fiscal a programas públicos de coordenação comunitária.
          </p>
        </div>
      </section>

      {/* CONTEÚDO / AS 3 CAMADAS DETALHADAS */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          
          {/* CAMADA 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <span className="text-xs font-bold uppercase px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">Camada 1</span>
              <h2 className="text-xl font-bold text-slate-900 mt-4">PoSQ: Prova de Critério e Execução</h2>
              <p className="text-xs text-slate-400 mt-1">Checklists Estáticos Ponderados</p>
            </div>
            <div className="md:col-span-2 text-slate-600 text-sm space-y-4">
              <p>
                Antes que qualquer atividade seja iniciada, a administração pública ou associação responsável define a demanda dentro do Marketplace Institucional através de critérios estritos de entrega.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium">
                <li>Pesos congelados no momento da criação do checklist.</li>
                <li>Mapeamento de conformidade técnica do serviço executado.</li>
                <li>Mitigação de arbitrariedade humana na avaliação.</li>
              </ul>
              <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                O software calcula dinamicamente a nota com base nas métricas preestabelecidas, garantindo que o recurso de fomento do município (API de Split) seja liberado apenas mediante a entrega real do serviço básico de utilidade pública.
              </p>
            </div>
          </div>

          {/* CAMADA 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <span className="text-xs font-bold uppercase px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">Camada 2</span>
              <h2 className="text-xl font-bold text-slate-900 mt-4">PoVC: Prova de Validação Comunitária</h2>
              <p className="text-xs text-slate-400 mt-1">Contratos Inteligentes Imutáveis</p>
            </div>
            <div className="md:col-span-2 text-slate-600 text-sm space-y-4">
              <p>
                Após a validação da primeira camada, o protocolo aciona os Smart Contracts descentralizados. Esta camada é responsável pelo registro histórico e pela distribuição das unidades de conta de tempo ($BH$).
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium">
                <li>Emissão direta do ativo utilitário $BH$ vinculada ao tempo gasto (1 hora = 1 token $BH$).</li>
                <li>Construção de histórico de reputação meritocrática imutável para o cidadão prestador.</li>
                <li>Execução descentralizada via oráculos e regras de consenso criptográfico.</li>
              </ul>
              <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                Isso assegura que nenhuma entidade governamental ou partido político consiga adulterar o saldo de créditos de tempo acumulados pela população, protegendo o voluntariado de interferências externas.
              </p>
            </div>
          </div>

          {/* CAMADA 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <span className="text-xs font-bold uppercase px-3 py-1 bg-teal-50 text-teal-700 rounded-full border border-teal-100">Camada 3</span>
              <h2 className="text-xl font-bold text-slate-900 mt-4">SCI: Serviço de Telemetria de Impacto Social</h2>
              <p className="text-xs text-slate-400 mt-1">Auditoria Pública em Tempo Real</p>
            </div>
            <div className="md:col-span-2 text-slate-600 text-sm space-y-4">
              <p>
                A última camada resolve o problema crônico de auditoria de programas sociais. O SCI escuta os eventos consolidados em blockchain e gera um painel analítico transparente para os órgãos fiscalizadores.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium">
                <li>Mapeamento estatístico do engajamento social comunitário.</li>
                <li>Painel dinâmico com mapa de calor das regiões que mais realizam trocas de tempo.</li>
                <li>Dados transparentes prontos para prestação de contas fiscais junto aos Tribunais de Contas.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-400 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© 2026 Plataforma BônusHora. Todos os direitos reservados de propriedade intelectual.</p>
        </div>
      </footer>

    </div>
  );
}

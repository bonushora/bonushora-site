import React from 'react';

// Componente Principal da Landing Page Institucional BônusHora
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      
      {/* HEADER / NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-blue-600">BônusHora</span>
            <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full border border-blue-200">Protocolo</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#proposta" className="hover:text-blue-600 transition-colors">Proposta</a>
            <a href="#camadas" className="hover:text-blue-600 transition-colors">Tecnologia Social</a>
            <a href="#impacto" className="hover:text-blue-600 transition-colors">Eficiência Fiscal</a>
            <a href="#diretrizes" className="hover:text-blue-600 transition-colors">Diretrizes</a>
          </nav>
          <div>
            <span className="text-xs font-medium bg-slate-900 text-white px-4 py-2 rounded-lg shadow-sm">
              Código Aberto (GitHub)
            </span>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-24 pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Multiplicando o <span className="text-blue-600">impacto social</span> e otimizando recursos públicos através do tempo.
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Uma infraestrutura de tecnologia social para criar redes de cooperação autossustentáveis em municípios, cooperativas e ecossistemas comunitários.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#proposta" className="bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
                Conhecer o Protocolo
              </a>
              <a href="#camadas" className="bg-slate-100 text-slate-700 font-medium px-6 py-3 rounded-xl hover:bg-slate-200 transition-all border border-slate-200">
                Arquitetura de Utilidade
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent hidden lg:block" />
      </section>

      {/* O DESAFIO / PROPOSTA */}
      <section id="proposta" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">O Paradoxo Local</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">
              Escassez de Circulação Fiduciária vs. Abundância de Capacidade
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              O principal gargalo do desenvolvimento socioeconômico em territórios periféricos ou regiões isoladas não é a falta de habilidades ou de disposição ao trabalho. O problema central é a <strong>escassez estrutural de meio de troca convencional (Real)</strong>.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              O cidadão tem tempo livre e conhecimento prático; a comunidade possui demandas urgentes de zeladoria, apoio escolar e assistência; mas as trocas não acontecem porque não há recursos disponíveis para intermediar o início dessas atividades.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-xl font-bold mb-4">A Abordagem BônusHora</h3>
            <p className="text-blue-100 leading-relaxed text-sm mb-6">
              O protocolo utiliza o tempo como unidade de conta e registro de contribuição imutável. Ele permite que o Estado e entidades parceiras ativem a força de trabalho local e promovam o bem-estar coletivo sem depender da injeção contínua e insustentável de recursos do caixa público.
            </p>
            <div className="border-t border-white/20 pt-4 flex items-center justify-between text-xs font-medium text-blue-200">
              <span>✓ Lastro de Atividade Real</span>
              <span>✓ Sem Volatilidade Especulativa</span>
            </div>
          </div>
        </div>
      </section>

      {/* TECNOLOGIA SOCIAL / 3 CAMADAS */}
      <section id="camadas" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Infraestrutura em 3 Camadas</span>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Design Institucional focado em Utilidade Pública</h2>
            <p className="mt-4 text-slate-400 text-sm">
              Diferente dos bancos de tempo tradicionais, o ecossistema une mecanismos rígidos de governança digital para mitigar fraudes e garantir transparência técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold mb-4">1</div>
              <h3 className="text-lg font-bold mb-2">Planejamento e Execução (PoSQ)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                As demandas de serviço comunitário são geradas com critérios e checklists técnicos cujos pesos são congelados logo na criação. O software calcula automaticamente a média ponderada da entrega.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold mb-4">2</div>
              <h3 className="text-lg font-bold mb-2">Registro de Contribuição (PoVC)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A validação operacional emite unidades de conta de tempo ($BH$) e atualiza os índices de reputação de forma imutável via Smart Contracts (Blockchain), criando um histórico meritocrático e à prova de adulterações.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold mb-4">3</div>
              <h3 className="text-lg font-bold mb-2">Painel de Governança (SCI)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                O Serviço de Telemetria de Impacto Social (SCI) captura os eventos em tempo real da rede, gerando mapas de engajamento e relatórios transparentes para auditorias externas e órgãos governamentais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EFICIÊNCIA FISCAL / MULTIPLICADOR */}
      <section id="impacto" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Eficiência Pública</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-2">O Efeito Multiplicador do Gasto Social</h2>
          <p className="mt-4 text-slate-600 text-sm">
            Em auxílios financeiros tradicionais, o recurso do governo se encerra no primeiro consumo. O Protocolo BônusHora transforma o gasto linear em uma dinâmica circular sustentável.
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <th className="p-4">Indicador de Gestão</th>
                <th className="p-4">Modelos Assistenciais Tradicionais</th>
                <th className="p-4 text-blue-600">Modelo Cooperativo BônusHora</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              <tr>
                <td className="p-4 font-medium text-slate-900">Eficiência Orçamentária</td>
                <td className="p-4">Linear (1:1). O impacto cessa na primeira compra realizada.</td>
                <td className="p-4 bg-blue-50/30 text-slate-800 font-medium">Exponencial. O crédito de tempo continua girando novos serviços locais consecutivamente.</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-900">Resiliência Comunitária</td>
                <td className="p-4">Dependência contínua do envio regular de caixas públicos.</td>
                <td className="p-4 bg-blue-50/30 text-slate-800 font-medium">Autonomia. A rede local opera baseada no tempo e capacidade operacional dos próprios moradores.</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-900">Auditoria e Controle</td>
                <td className="p-4">Lenta e retrospectiva. Depende de notas e relatórios em papel.</td>
                <td className="p-4 bg-blue-50/30 text-slate-800 font-medium">Em tempo real (SCI). Eventos criptografados na rede e auditáveis a qualquer momento.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* DIRETRIZES DE NÃO-ESPECULAÇÃO */}
      <section id="diretrizes" className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 text-amber-600 font-bold mb-4 text-sm">
            <span>🛡️ Diretrizes de Conformidade e Proteção Regulatória</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            O ativo de utilidade BônusHora ($BH$) foi concebido estritamente como um indexador de contabilidade de tempo e ferramenta de coordenação social para ajuda mútua. Ele <strong>não possui</strong> finalidades financeiras, não concede direitos a dividendos, participações societárias ou rendimentos, e está fora do escopo de atuação do mercado de valores mobiliários especulativos.
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Sua emissão é estritamente vinculada à comprovação física da prestação de serviços por meio do mecanismo PoSQ/PoVC, atuando como um protocolo fechado de uso utilitário institucional de economia circular.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© 2026 Plataforma BônusHora. Todos os direitos reservados de propriedade intelectual.</p>
          <p className="mt-2">Protegido sob a Licença Creative Commons Atribuição-NãoComercial-SemDerivações 4.0 Internacional (CC BY-NC-ND 4.0).</p>
        </div>
      </footer>

    </div>
  );
}

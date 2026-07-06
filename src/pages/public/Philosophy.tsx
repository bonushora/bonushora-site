import React from 'react';

export default function Philosophy() {
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
            <a href="/filosofia" className="text-blue-600 transition-colors">Filosofia</a>
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
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Nossa Filosofia</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
            O Valor Humano Além do Capital Convencional
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg leading-relaxed">
            Acreditamos que o tempo e o conhecimento prático de cada cidadão são ativos de utilidade inestimáveis para a regeneração do tecido social e comunitário.
          </p>
        </div>
      </section>

      {/* CONTEÚDO DA FILOSOFIA */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">1. Resgatando as Dinâmicas Circulares de Cooperação</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Historicamente, comunidades e bairros sempre operaram através de redes de ajuda mútua e cooperação orgânica. No entanto, o avanço dos modelos centralizados de circulação fiduciária reduziu a capacidade de as pessoas cooperarem de forma direta quando o dinheiro convencional se torna escasso.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            A filosofia do BônusHora baseia-se na descentralização da capacidade de registro. Ao permitir que a comunidade faça a contabilidade de suas contribuições usando o tempo como um indexador justo e universal (onde 1 hora de serviço de qualquer natureza equivale a 1 hora de crédito), nós restabelecemos a autonomia social sem ferir regras econômicas externas.
          </p>
        </div>

        <hr className="border-slate-200" />

        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">2. O Tempo como Unidade Isonômica e Incorruptível</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Diferente dos ativos sujeitos à especulação e volatilidade de mercado, o tempo possui uma propriedade matemática intrínseca: o dia de todo ser humano tem exatamente 24 horas. Não há inflação de tempo, não há flutuação cambial de tempo e não há concentração de capital temporal de forma desproporcional.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Esta isonomia faz do tempo o lastro de utilidade perfeito para ecossistemas comunitários fechados. O protocolo garante que a energia dedicada a cuidar de uma praça, auxiliar um jovem no reforço escolar ou consertar uma calçada seja devidamente registrada e validada, gerando um ecossistema com propósito estritamente voltado ao bem-estar coletivo.
          </p>
        </div>

        <hr className="border-slate-200" />

        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">3. Tecnologia Social a Serviço da Governança Aberta</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Não enxergamos a tecnologia criptográfica e a blockchain como fins em si mesmos, nem como instrumentos de flutuação financeira. Para o BônusHora, a infraestrutura distribuída funciona como um **cartório digital de utilidade pública**, imune a decisões arbitrárias e desvios de finalidade.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            O resultado prático dessa filosofia é a emancipação comunitária: uma rede que dá voz e reconhecimento ao cidadão ativo, otimiza o gasto fiscal do Estado e blinda a iniciativa contra o assistencialismo passivo tradicional.
          </p>
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

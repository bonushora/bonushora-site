export type Lang = 'pt' | 'en';
export const content = {
 pt: {
  brand:'BônusHora', kicker:'Pesquisa econômica aberta', hero:'Cidade BônusHora — o mapa vivo da pesquisa', intro:'Investigamos se uma economia social complementar pode fortalecer a cooperação, o comércio local e o bem-estar, convivendo com a economia monetária tradicional.', caveat:'Hipóteses e simulações não são comprovação de impacto real.', promo:'Apresentação audiovisual', promoNote:'Vídeo institucional preservado da edição anterior. Algumas afirmações podem não corresponder ao novo escopo científico.',
  nav:{home:'Início', brazil:'Brasil', world:'Mundo', city:'Cidade sintética', experiments:'Experimentos', other:'Outros mundos', history:'Histórico'},
  explore:'Explore os territórios da pesquisa', brazilTitle:'Brasil — ponto de partida', brazilDesc:'Salvador, Bahia, é o território de referência inicial. Não há alegação de experimento local concluído.', worldTitle:'Atlas mundial', worldDesc:'Explore países e futuros territórios. A presença no mapa não significa participação no projeto.', cityTitle:'Cidade sintética', cityDesc:'Uma representação ilustrativa dos componentes do laboratório, sem indicar resultados econômicos.', otherTitle:'Outros mundos',otherDesc:'Cenários hipotéticos de sociedades e economias em condições alternativas; nenhuma dessas localidades é real.', expTitle:'Acompanhamento dos experimentos',expDesc:'Planejamento científico e estados documentais, sem resultados inventados.',historyTitle:'Histórico e versões',historyDesc:'Eventos documentais verificados, separados de exemplos de interface e marcos futuros.',
  open:'Explorar', status:'Estado', planned:'Planejado', documentary:'Documental', pending:'Sem experimentos cadastrados', cityNote:'Mapa urbano esquemático ilustrativo. Qualificação científica exige evidências.', provenance:'Referências', country:'País selecionado', dataUnavailable:'Mapa geográfico indisponível. Verifique a conexão e a fonte de dados.', global:'Internacional', notReal:'Cenário hipotético — não é uma localização geográfica real', selectVersion:'Selecione um marco', current:'Versão conceitual do portal', footer:'Pesquisa em desenvolvimento • Dados observados, hipóteses e simulações são identificados separadamente.'
 },
 en: {
  brand:'BônusHora', kicker:'Open economic research', hero:'BônusHora City — a living research map', intro:'We investigate whether a complementary social economy can strengthen cooperation, local commerce, and well-being while coexisting with the conventional monetary economy.', caveat:'Hypotheses and simulations are not evidence of real-world impact.', promo:'Video presentation', promoNote:'Institutional video retained from an earlier edition. Some claims may not reflect the current research scope.',
  nav:{home:'Home', brazil:'Brazil', world:'World', city:'Synthetic city', experiments:'Experiments', other:'Other worlds', history:'History'},
  explore:'Explore research territories', brazilTitle:'Brazil — starting point', brazilDesc:'Salvador, Bahia, is the initial reference territory. No completed local experiment is claimed.', worldTitle:'World atlas', worldDesc:'Browse countries and potential future sites. Map presence does not imply project participation.', cityTitle:'Synthetic city',cityDesc:'An illustrative view of the laboratory components, not an indicator of economic results.',otherTitle:'Other worlds',otherDesc:'Hypothetical scenarios of societies and economies under alternative conditions; none of these places is real.',expTitle:'Experiment tracking',expDesc:'Scientific planning and documented states, without invented results.',historyTitle:'History and versions',historyDesc:'Verified documentary milestones are kept separate from UI examples and future work.',
  open:'Explore',status:'Status',planned:'Planned',documentary:'Documentary',pending:'No experiments registered',cityNote:'Schematic city illustration. Scientific qualification requires evidence.',provenance:'References',country:'Selected country',dataUnavailable:'Geographic map unavailable. Check connectivity and the data source.',global:'International',notReal:'Hypothetical scenario — not a real geographical location', selectVersion:'Select milestone',current:'Concept version of the portal',footer:'Research in progress • Observed data, hypotheses, and simulations are clearly distinguished.'
 }
} as const;
export const navSlugs = {home:'',brazil:'brasil',world:'mundo',city:'cidade',experiments:'experimentos',other:'outros-mundos',history:'historico'} as const;
export const enSlugs = {home:'',brazil:'brazil',world:'world',city:'city',experiments:'experiments',other:'other-worlds',history:'history'} as const;
export type PageKey = keyof typeof navSlugs;
export function pathFor(lang:Lang, key:PageKey){return `/${lang}${key==='home'?'':`/${(lang==='pt'?navSlugs:enSlugs)[key]}`}`;}
export const experiments = [
 {id:'E01',pt:'Economia tradicional',en:'Traditional economy'},
 {id:'E02',pt:'Economia complementar',en:'Complementary economy'},
 {id:'E03',pt:'Comércio local',en:'Local commerce'},
 {id:'E04',pt:'Vulnerabilidade',en:'Vulnerability'},
 {id:'E05',pt:'Cooperação',en:'Cooperation'},
 {id:'E06',pt:'Sustentabilidade',en:'Sustainability'}
];
export const milestones=[
 {id:'research-scope-2026-11',date:'2026-11-16',pt:'Escopo conceitual de pesquisa e atlas aprovado',en:'Research and atlas conceptual scope approved',kind:'documentary'},
 {id:'data-catalog-v01',date:'2026-11-16',pt:'Catálogo BH-DATA-SOURCES-v0.1 preparado; ingestão não verificada',en:'BH-DATA-SOURCES-v0.1 catalog prepared; ingestion unverified',kind:'documentary'}
];

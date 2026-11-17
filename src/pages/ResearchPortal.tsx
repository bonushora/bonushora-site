import {useState} from 'react';
import {Link,useLocation} from 'react-router-dom';
import GeoAtlas from '../components/GeoAtlas';
import {content,experiments,milestones,pathFor,type Lang,type PageKey} from '../data/content';
import './ResearchPortal.css';

const VIDEO='https://app.heygen.com/embeds/7e50f25251fb48fc9c2d2116420f0412';
const entries:PageKey[]=['home','brazil','world','city','experiments','other','history'];
function parsePath(path:string):{lang:Lang,page:PageKey}{
 const parts=path.split('/').filter(Boolean);const lang:Lang=parts[0]==='en'?'en':'pt';
 const slug=parts[1]||'';
 const map:Record<string,PageKey>={'':'home',brasil:'brazil',brazil:'brazil',mundo:'world',world:'world',cidade:'city',city:'city',experimentos:'experiments',experiments:'experiments','outros-mundos':'other','other-worlds':'other',historico:'history',history:'history'};
 return {lang,page:map[slug]||'home'};
}
function City({lang}:{lang:Lang}){
 const places=[{n:lang==='pt'?'Laboratório':'Laboratory',x:95,y:125,h:70,c:'#3187ba'},{n:lang==='pt'?'Biblioteca':'Library',x:250,y:105,h:55,c:'#4b9c86'},{n:lang==='pt'?'Comércio':'Commerce',x:395,y:160,h:44,c:'#be9a4e'},{n:lang==='pt'?'Comunidade':'Community',x:162,y:270,h:38,c:'#b17da6'},{n:lang==='pt'?'Observatório':'Observatory',x:340,y:280,h:65,c:'#5f86bd'}];
 const [sel,setSel]=useState(0);
 return <><div className="city-stage"><svg viewBox="0 0 550 390" role="img" aria-label={lang==='pt'?'Ilustração interativa esquemática da cidade sintética':'Interactive schematic synthetic city illustration'}>
 <path d="M18 164 L253 32 L530 181 L293 363 Z" fill="#bde2d0" stroke="#659e93" strokeWidth="3"/>
 {places.map((b,i)=><g key={b.n} onClick={()=>setSel(i)} onKeyDown={e=>{if(e.key==='Enter')setSel(i)}} tabIndex={0} role="button" aria-label={b.n} style={{cursor:'pointer'}}>
 <path d={`M${b.x} ${b.y} l36 -19 l40 20 l-38 22 Z`} fill={i===sel?'#f6c976':'#d5e6ee'} stroke="#36546b"/>
 <path d={`M${b.x} ${b.y} v${b.h} l38 20 v-${b.h} Z`} fill={b.c}/>
 <path d={`M${b.x+38} ${b.y+22} v${b.h} l38 -20 v-${b.h} Z`} fill="#32566e"/>
 <path d={`M${b.x} ${b.y} l36 -19 l40 20 l-38 22 Z`} fill={i===sel?'#ffc96c':'#9ad1e1'}/>
 <text x={b.x+34} y={b.y+b.h+35} textAnchor="middle" fontSize="13" fontWeight="600" fill="#1c3345">{b.n}</text></g>)}
 </svg></div><p className="selection-note" aria-live="polite">{places[sel].n} — {content[lang].planned}. {content[lang].cityNote}</p></>
}
export default function ResearchPortal(){
 const location=useLocation();const {lang,page}=parsePath(location.pathname);const t=content[lang];
 const title:Record<PageKey,string>={home:t.hero,brazil:t.brazilTitle,world:t.worldTitle,city:t.cityTitle,experiments:t.expTitle,other:t.otherTitle,history:t.historyTitle};
 const desc:Record<PageKey,string>={home:t.intro,brazil:t.brazilDesc,world:t.worldDesc,city:t.cityDesc,experiments:t.expDesc,other:t.otherDesc,history:t.historyDesc};
 const [milestone,setMilestone]=useState(0);
 return <div className="research-shell" lang={lang}><a className="skip-link" href="#main">{lang==='pt'?'Pular para conteúdo':'Skip to content'}</a>
  <header className="research-header"><div className="research-header-inner"><Link className="brand" to={pathFor(lang,'home')}>◈ BônusHora</Link><nav className="research-nav" aria-label={lang==='pt'?'Navegação principal':'Main navigation'}>{entries.map(key=><Link key={key} to={pathFor(lang,key)} aria-current={page===key?'page':undefined}>{t.nav[key]}</Link>)}</nav><div className="language-switch" aria-label="Language"><Link aria-current={lang==='pt'?'page':undefined} to={pathFor('pt',page)}>PT</Link><span>/</span><Link aria-current={lang==='en'?'page':undefined} to={pathFor('en',page)}>EN</Link></div></div></header>
  <main id="main" className="research-main"><section className="research-hero"><p className="eyebrow">{t.kicker} · BH-ECONOMIC-PARADIGM</p><h1>{title[page]}</h1><p className="lead">{desc[page]}</p><p className="caveat">{t.caveat}</p>{page==='home'&&<div className="hero-actions"><Link className="btn-primary" to={pathFor(lang,'brazil')}>{t.nav.brazil} ↗</Link><Link className="btn-secondary" to={pathFor(lang,'world')}>{t.nav.world} ↗</Link></div>}</section>
  {page==='home'&&<><section className="section-block"><h2>{t.explore}</h2><div className="feature-grid">{(['brazil','world','city','experiments','other','history'] as PageKey[]).map((key,i)=><Link className="feature-card" key={key} to={pathFor(lang,key)}><span className="feature-icon">{['🇧🇷','🌍','🏙️','🔬','🪐','🕰️'][i]}</span><h3>{title[key]}</h3><p>{desc[key]}</p><strong>{t.open} →</strong></Link>)}</div></section><section className="section-block video-section"><h2>{t.promo}</h2><p>{t.promoNote}</p><div className="video-frame"><iframe src={VIDEO} title={lang==='pt'?'Vídeo promocional BônusHora':'BônusHora promotional video'} loading="lazy" allow="encrypted-media; fullscreen" allowFullScreen/></div></section></>}
  {(page==='world'||page==='brazil')&&<section className="section-block"><GeoAtlas lang={lang} brazil={page==='brazil'}/><p className="location-status"><strong>Salvador · Bahia · Brasil</strong> — {t.documentary} / {t.planned}.</p></section>}
  {page==='city'&&<section className="section-block"><City lang={lang}/></section>}
  {page==='experiments'&&<section className="section-block"><div className="feature-grid">{experiments.map(e=><article className="feature-card" key={e.id}><span className="eyebrow">{e.id}</span><h3>{e[lang]}</h3><p>{t.status}: {t.planned}</p><p>{t.pending}</p></article>)}</div><p className="source-note">{lang==='pt'?'Os códigos E01–E06 são planejamento conceitual; nenhum resultado de execução está declarado.':'Codes E01–E06 are conceptual plans; no execution results are claimed.'}</p></section>}
  {page==='other'&&<section className="section-block"><div className="other-world"><span aria-hidden="true">🪐</span><h2>{t.notReal}</h2><p>{t.planned} — {t.pending}</p></div></section>}
  {page==='history'&&<section className="section-block"><label className="history-label" htmlFor="milestone">{t.selectVersion}</label><select id="milestone" value={milestone} onChange={e=>setMilestone(Number(e.target.value))}>{milestones.map((m,i)=><option key={m.id} value={i}>{m.date} · {m.id}</option>)}</select><article className="history-card"><p className="eyebrow">{milestones[milestone].date} · {t.documentary}</p><h2>{milestones[milestone][lang]}</h2><p>{t.caveat}</p><a href="https://github.com/bonushora/social-value-economy-research" target="_blank" rel="noreferrer">GitHub — {t.provenance} ↗</a></article><p className="source-note">{lang==='pt'?'Não representam releases de software validados; datas de eventos científicos dependem de documentação de origem.':'These are not validated software releases; scientific event dates depend on source documentation.'}</p></section>}
  </main><footer className="research-footer"><p>© BônusHora · {t.footer}</p><a href="https://github.com/bonushora/bonushora-site" target="_blank" rel="noreferrer">Source: GitHub ↗</a></footer>
 </div>
}

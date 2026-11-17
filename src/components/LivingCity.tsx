import {useState} from 'react';
import {Link} from 'react-router-dom';
import {pathFor,type Lang} from '../data/content';
import {citySnapshots} from '../data/cityHistory';
import {districtResearch} from '../data/cityResearch';
import {experiments} from '../data/content';
import './LivingCity.css';

type District = {
 id:string;
 pt:string;
 en:string;
 descriptionPt:string;
 descriptionEn:string;
 status:'planned'|'documentary';
 x:number;
 y:number;
 height:number;
 color:string;
};

const districts:District[]=[
 {id:'lab',pt:'Laboratório',en:'Laboratory',
 descriptionPt:'Experimentos econômicos E01–E06.',
 descriptionEn:'Economic experiments E01–E06.',
 status:'planned',x:110,y:205,height:74,color:'#3987b5'},
 {id:'library',pt:'Biblioteca',en:'Library',
 descriptionPt:'Fontes científicas e documentação.',
 descriptionEn:'Scientific sources and documentation.',
 status:'documentary',x:345,y:135,height:83,color:'#479c86'},
 {id:'commerce',pt:'Comércio',en:'Commerce',
 descriptionPt:'Estudo da economia tradicional.',
 descriptionEn:'Study of the traditional economy.',
 status:'planned',x:595,y:205,height:60,color:'#bf9655'},
 {id:'community',pt:'Comunidade',en:'Community',
 descriptionPt:'Pesquisa sobre economia complementar.',
 descriptionEn:'Research on the complementary economy.',
 status:'planned',x:95,y:410,height:57,color:'#ae82b2'},
 {id:'observatory',pt:'Observatório',en:'Observatory',
 descriptionPt:'Indicadores e resultados científicos.',
 descriptionEn:'Scientific indicators and results.',
 status:'planned',x:340,y:445,height:95,color:'#5c88bd'},
 {id:'museum',pt:'Museu do Tempo',en:'Time Museum',
 descriptionPt:'Memória histórica e versões da pesquisa.',
 descriptionEn:'Research history and versions.',
 status:'documentary',x:595,y:420,height:76,color:'#b57f67'},
 {id:'council',pt:'Conselho',en:'Council',
 descriptionPt:'Governança e decisões documentadas.',
 descriptionEn:'Governance and documented decisions.',
 status:'documentary',x:755,y:315,height:70,color:'#738b98'}
];

function Building({item,selected,onSelect,lang}:{
 item:District;
 selected:boolean;
 onSelect:()=>void;
 lang:Lang;
}){
 const {x,y,height:h,color}=item;
 const top=y-h;
 const name=lang==='pt'?item.pt:item.en;

 return <g
  role="button"
  tabIndex={0}
  aria-label={name}
  aria-pressed={selected}
  onClick={onSelect}
  onKeyDown={e=>{
   if(e.key==='Enter'||e.key===' '){
    e.preventDefault();
    onSelect();
   }
  }}
  className={`city-building ${selected?'selected':''}`}
 >
  <path
   d={`M${x-9} ${y+13} l87 -46 88 46 -87 47 Z`}
   fill="#b3c5bd"
   opacity=".6"
  />
  <path
   d={`M${x} ${top} l78 -42 78 42 -78 43 Z`}
   fill={selected?'#f4c66e':'#a9d9e7'}
   stroke="#31526a"
   strokeWidth="2"
  />
  <path
   d={`M${x} ${top} l78 43 v${h} l-78 -43 Z`}
   fill={color}
   stroke="#31526a"
   strokeWidth="1.5"
  />
  <path
   d={`M${x+78} ${top+43} l78 -43 v${h} l-78 43 Z`}
   fill="#385a72"
   stroke="#31526a"
   strokeWidth="1.5"
  />
  <path
   d={`M${x+14} ${top+28} v20 l18 9 v-20 Z
       M${x+42} ${top+43} v20 l17 9 v-20 Z`}
   fill="#c9ecf4"
  />
  <path
   d={`M${x+102} ${top+29} v22 l18 -9 v-22 Z`}
   fill="#b6e5ed"
  />
  <text
   x={x+78}
   y={y+68}
   textAnchor="middle"
   fontSize="14"
   fontWeight="700"
   fill="#1a374a"
  >{name}</text>
 </g>;
}

export default function LivingCity({lang}:{lang:Lang}){
 const [selectedId,setSelectedId]=useState('lab');
 const [snapshotId,setSnapshotId]=useState(citySnapshots[0].id);
 const selected=districts.find(d=>d.id===selectedId)??districts[0];
 const pt=lang==='pt';
 const associations=districtResearch[selected.id]??[];
 const related=associations.map(a=>({
  association:a,
  experiment:experiments.find(e=>e.id===a.experimentId)
 })).filter(item=>item.experiment!==undefined);
 const snapshot=citySnapshots.find(s=>s.id===snapshotId)??citySnapshots[0];

 return <section className="living-city">
  <div className="city-heading">
   <h2>{pt?'Explore a Cidade Viva':'Explore the Living City'}</h2>
   <p>{pt
    ?'Selecione um distrito para conhecer sua função na pesquisa.'
    :'Select a district to explore its role in the research.'}</p>
  </div>

  <div className="city-timeline">
   <label htmlFor="city-snapshot">
    {pt?'Marco documental':'Documentary milestone'}
   </label>
   <select
    id="city-snapshot"
    value={snapshotId}
    onChange={e=>setSnapshotId(e.target.value)}
   >
    {citySnapshots.map(s=><option key={s.id} value={s.id}>
     {s.date} · {pt?s.pt:s.en}
    </option>)}
   </select>
   <p className="city-timeline-disclaimer">
    {pt
     ?'Seleção documental: não representa reconstrução urbana comprovada.'
     :'Documentary selection: not a verified reconstruction of the city.'}
   </p>
  </div>

  <div className="living-city-map">
   <svg
    viewBox="0 0 1000 640"
    role="group"
    aria-label={pt?'Mapa isométrico interativo':'Interactive isometric map'}
   >
    <path
     d="M45 248 L480 18 L955 266 L520 605 Z"
     fill="#cce9d9"
     stroke="#84ad9f"
     strokeWidth="4"
    />

    <path
     d="M90 291 L480 86 L908 306"
     fill="none"
     stroke="#eef3ef"
     strokeWidth="34"
    />
    <path
     d="M185 506 L560 302 L815 439"
     fill="none"
     stroke="#eef3ef"
     strokeWidth="29"
    />

    <path
     d="M465 288 l58 -32 61 32 -60 34 Z"
     fill="#e9cf93"
     stroke="#ba9b64"
     strokeWidth="2"
    />
    <text x="523" y="292" fontSize="12"
     textAnchor="middle" fill="#5a553e">
     {pt?'PRAÇA':'PLAZA'}
    </text>

    {[
     [200,285],[275,145],[710,110],[780,475],
     [235,540],[520,530],[865,345]
    ].map(([x,y],i)=><g key={i}>
     <path d={`M${x} ${y} l13 -7 13 7 -13 8 Z`}
      fill="#438d69"/>
     <path d={`M${x+13} ${y+8} v14`}
      stroke="#80664c" strokeWidth="4"/>
     <circle cx={x+13} cy={y-6} r="16" fill="#5da982"/>
    </g>)}

    {districts.map(d=><Building
     key={d.id}
     item={d}
     selected={selectedId===d.id}
     onSelect={()=>setSelectedId(d.id)}
     lang={lang}
    />)}
   </svg>
  </div>

  <article className="city-snapshot-panel" aria-live="polite">
   <p className="city-panel-eyebrow">
    {pt?'MARCO SELECIONADO':'SELECTED MILESTONE'}
   </p>
   <h3>{pt?snapshot.pt:snapshot.en}</h3>
   <p><strong>ID:</strong> <code>{snapshot.id}</code></p>
   <p><strong>{pt?'Data':'Date'}:</strong> {snapshot.date}</p>
   <p>
    {pt
     ?'Não existem mudanças urbanas verificadas associadas a este marco.'
     :'No verified urban changes are associated with this milestone.'}
   </p>
   <a href={snapshot.evidenceUrl}
      target="_blank"
      rel="noreferrer">
    {pt?'Consultar repositório de pesquisa'
        :'Consult research repository'} ↗
   </a>
   <p className="city-timeline-disclaimer">
    {pt
     ?'O repositório é uma referência para consulta, não uma certificação automática deste marco.'
     :'The repository is a reference for review, not automatic certification of this milestone.'}
   </p>
  </article>

  <div className="city-district-panel" aria-live="polite">
   <div>
    <p className="city-panel-eyebrow">
     {pt?'DISTRITO SELECIONADO':'SELECTED DISTRICT'}
    </p>
    <h3>{pt?selected.pt:selected.en}</h3>
    <p>{pt?selected.descriptionPt:selected.descriptionEn}</p>
    <p className="city-status">
     {pt?'Estado científico':'Scientific status'}:
     {' '}
     <strong>{selected.status==='planned'
      ?(pt?'Planejado':'Planned')
      :(pt?'Documental':'Documentary')}</strong>
    </p>
   </div>
   <Link
    className="city-history-link"
    to={pathFor(lang,selected.id==='museum'?'history':'experiments')}
   >
    {pt?'Ver documentação':'View documentation'} →
   </Link>
  </div>

  <section className="city-research-panel"
   aria-label={pt?'Experimentos relacionados':'Related experiments'}>
   <h3>{pt?'Pesquisa associada ao distrito':
     'Research associated with this district'}</h3>
   <p className="city-research-warning">
    {pt
     ?'Associações conceituais de navegação. Nenhuma evidência experimental específica está cadastrada.'
     :'Conceptual navigation associations. No experiment-specific evidence is registered.'}
   </p>
   {related.length===0
    ?<p>{pt
      ?'Nenhum experimento associado neste catálogo inicial.'
      :'No experiments associated in this initial catalog.'}</p>
    :<ul className="city-experiment-list">
      {related.map(({association,experiment})=>
       experiment&&<li key={association.experimentId}>
        <strong>{experiment.id} — {experiment[lang]}</strong>
        <span>{pt?'Planejado':'Planned'}</span>
        <small>{pt
         ?'Evidência específica: não cadastrada'
         :'Specific evidence: not registered'}</small>
       </li>)}
     </ul>}
   <Link to={pathFor(lang,'experiments')}>
    {pt?'Consultar catálogo de experimentos':
      'View experiment catalog'} →
   </Link>
  </section>

  <p className="city-disclaimer">
   {pt
    ?'Representação visual ilustrativa. A existência de edifícios não demonstra experimentos realizados ou impacto econômico comprovado.'
    :'Illustrative visualization. Buildings do not indicate completed experiments or proven economic impact.'}
  </p>
 </section>;
}

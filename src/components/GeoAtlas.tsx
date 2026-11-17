import {useEffect, useMemo, useState} from 'react';
import type {Lang} from '../data/content';
import {content} from '../data/content';

// Natural Earth is an external geographic dataset. Retrieved at runtime, not a scientific experimental result.
const WORLD_URL='https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson';
const BRAZIL_URL='https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson';
type Geometry={type:string;coordinates:unknown};
type Feature={type:'Feature';properties:Record<string, unknown>;geometry:Geometry};
type Collection={type:'FeatureCollection';features:Feature[]};
type Position=[number,number];
function rings(geometry:Geometry):Position[][] {
 const c=geometry.coordinates as unknown;
 if(!Array.isArray(c)) return [];
 if(geometry.type==='Polygon') return c as Position[][];
 if(geometry.type==='MultiPolygon') return (c as Position[][][]).flat();
 return [];
}
function point(lon:number,lat:number, brazil:boolean):[number,number]{
 if(brazil) return [30+(lon+75)*8.8,15+(7-lat)*6.4];
 return [(lon+180)*2.5,(90-lat)*2.2];
}
function svgPath(geometry:Geometry,brazil:boolean):string{
 return rings(geometry).map(r=>r.map((c,i)=>{const [x,y]=point(c[0],c[1],brazil);return `${i?'L':'M'}${x.toFixed(1)} ${y.toFixed(1)}`;}).join(' ')+' Z').join(' ');
}
export default function GeoAtlas(props:{lang:Lang;brazil:boolean}){
 return <GeoAtlasContent key={props.brazil?'brazil':'world'} {...props}/>;
}

function GeoAtlasContent({lang,brazil}:{lang:Lang;brazil:boolean}){
 const t=content[lang];const [data,setData]=useState<Collection|null>(null);const [error,setError]=useState(false);const [selected,setSelected]=useState('');
 useEffect(()=>{const controller=new AbortController();fetch(brazil?BRAZIL_URL:WORLD_URL,{signal:controller.signal}).then(r=>{if(!r.ok)throw new Error(String(r.status));return r.json() as Promise<Collection>}).then(d=>{if(d.type!=='FeatureCollection'||!Array.isArray(d.features))throw new Error('Invalid geojson');setData(d)}).catch(e=>{if(e.name!=='AbortError')setError(true)});return()=>controller.abort()},[brazil]);
 const paths=useMemo(()=>data?.features.map((f,i)=>({id:i,name:String(f.properties.name??f.properties.NAME??f.properties.ADMIN??f.properties.name_pt??`#${i}`),br:String(f.properties.ISO_A3??f.properties.ADM0_A3??'')==='BRA'||String(f.properties.ADMIN??'').toLowerCase()==='brazil',d:svgPath(f.geometry,brazil)}))??[],[data,brazil]);
 return <div className="atlas-wrap">
  <div className="atlas-help">{brazil?(lang==='pt'?'Salvador, Bahia • marcador geográfico de referência':'Salvador, Bahia • reference location marker'):t.worldDesc}</div>
  {error?<p role="alert">{t.dataUnavailable} <a href={brazil?BRAZIL_URL:WORLD_URL} target="_blank" rel="noreferrer">GeoJSON ↗</a></p>:!data?<p aria-live="polite">{lang==='pt'?'Carregando mapa geográfico…':'Loading geographic map…'}</p>:<>
  <svg className="atlas-svg" viewBox={brazil?'0 0 520 420':'0 0 900 400'} role="img" aria-label={brazil?'Brazil states, Salvador highlighted':'World countries'}>
    {paths.map(p=><path key={p.id} d={p.d} fill={!brazil&&p.br?'#38b5a1':selected===p.name?'#62a8d1':'#b6cddd'} stroke="#40657e" strokeWidth={brazil?0.65:0.32} onClick={()=>setSelected(p.name)} tabIndex={0} role="button" aria-label={p.name} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSelected(p.name)}}}><title>{p.name}</title></path>)}
    {brazil&&<><circle cx={point(-38.5014,-12.973, true)[0]} cy={point(-38.5014,-12.973,true)[1]} r="6" fill="#ee793f" stroke="#fff" strokeWidth="2"/><text x={point(-38.5014,-12.973,true)[0]+10} y={point(-38.5014,-12.973,true)[1]-10} fontSize="15" fill="#17334d" fontWeight="bold">Salvador</text></>}
    {!brazil&&<circle cx={point(-38.5014,-12.973,false)[0]} cy={point(-38.5014,-12.973,false)[1]} r="5" fill="#ee793f" stroke="white" strokeWidth="1.5"><title>Salvador, Brazil</title></circle>}
  </svg>
  <div aria-live="polite" className="map-selection">{selected?`${t.country}: ${selected} — ${t.pending}`:(brazil?'Salvador • Bahia • Brasil':'Brazil highlighted • Salvador marked')}</div>
  </>}
  <p className="attribution">{lang==='pt'?'Cartografia: Natural Earth / comunidade Click That Hood. Mapas de referência, não resultados da pesquisa.':'Cartography: Natural Earth / Click That Hood community. Reference maps, not research findings.'} <a href={brazil?BRAZIL_URL:WORLD_URL} target="_blank" rel="noreferrer">{t.provenance} ↗</a></p>
 </div>
}

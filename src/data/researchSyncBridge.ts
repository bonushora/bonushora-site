/**
 * MT-WEB-26 candidate-only bridge. Display projections are review metadata,
 * NOT scientific events, website publications, or validated conclusions.
 * Nothing in this module fetches, persists or promotes any candidate.
 */
export type ReviewSection = 'history'|'districts'|'experiments'|'indicators'|'atlas';
export type ReviewClassification = 'documentary'|'observed'|'synthetic'|'hypothesis';
export interface CandidateSource {
 readonly id: string;
 readonly path: string;
 readonly sha256: string;
 readonly bytes: number;
 readonly origin: string;
 readonly classification: ReviewClassification;
 readonly sections: readonly ReviewSection[];
 readonly qualification: 'NOT_QUALIFIED';
}
export interface CandidateSnapshot {
 readonly schema: 'bh-research-sync-candidate-v0.1';
 readonly qualification: 'CANDIDATE_ONLY';
 readonly scientific_events_published: 0;
 readonly sources: readonly CandidateSource[];
}
export interface ReviewEntry {
 readonly sourceId: string;
 readonly sourceSha256: string;
 readonly origin: string;
 readonly classification: ReviewClassification;
 readonly qualification: 'NOT_QUALIFIED';
 readonly warningPt: 'Candidato não qualificado — não é resultado científico';
 readonly warningEn: 'Unqualified candidate — not a scientific result';
}
export type ReviewProjection = Readonly<Record<ReviewSection,readonly ReviewEntry[]>>;
const sections: readonly ReviewSection[] = ['history','districts','experiments','indicators','atlas'];
const classifications: readonly string[] = ['documentary','observed','synthetic','hypothesis'];
const hashRe = /^[0-9a-f]{64}$/;
const idRe = /^[a-z][a-z0-9_-]{1,63}$/;
const empty = (): Record<ReviewSection,ReviewEntry[]> => ({history:[],districts:[],experiments:[],indicators:[],atlas:[]});
const record = (v:unknown):v is Record<string,unknown> => typeof v==='object' && v!==null && !Array.isArray(v);
export function projectCandidate(input:unknown): ReviewProjection {
 if (!record(input) || Object.keys(input).sort().join(',')!=='qualification,schema,scientific_events_published,sources' ||
     input.schema!=='bh-research-sync-candidate-v0.1' || input.qualification!=='CANDIDATE_ONLY' ||
     input.scientific_events_published!==0 || !Array.isArray(input.sources) || input.sources.length>500)
   throw new Error('BLOCKED: invalid candidate envelope');
 const projection=empty();
 const seen=new Set<string>();
 for (const item of input.sources) {
   if (!record(item) || Object.keys(item).sort().join(',')!=='bytes,classification,id,origin,path,qualification,sections,sha256')
     throw new Error('BLOCKED: source schema mismatch');
   if (typeof item.id!=='string' || !idRe.test(item.id) || seen.has(item.id)) throw new Error('BLOCKED: invalid/duplicate source id');
   seen.add(item.id);
   if (typeof item.sha256!=='string' || !hashRe.test(item.sha256) || item.qualification!=='NOT_QUALIFIED' ||
       !classifications.includes(String(item.classification)) || typeof item.origin!=='string' || !item.origin.trim() ||
       typeof item.path!=='string' || !item.path.trim() || !Number.isSafeInteger(item.bytes) || Number(item.bytes)<0 || Number(item.bytes)>16777216)
      throw new Error('BLOCKED: invalid source metadata');
   if (!Array.isArray(item.sections) || item.sections.length===0 || new Set(item.sections).size!==item.sections.length ||
       item.sections.some((s:unknown)=> !sections.includes(s as ReviewSection)))
      throw new Error('BLOCKED: invalid section mapping');
   const entry:ReviewEntry={sourceId:item.id,sourceSha256:item.sha256,origin:item.origin,
     classification:item.classification as ReviewClassification,qualification:'NOT_QUALIFIED',
     warningPt:'Candidato não qualificado — não é resultado científico',
     warningEn:'Unqualified candidate — not a scientific result'};
   for (const sec of item.sections as ReviewSection[]) projection[sec].push(entry);
 }
 for (const section of sections) projection[section].sort((a,b)=>a.sourceId.localeCompare(b.sourceId,'en'));
 return projection;
}

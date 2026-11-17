/**
 * BH-RESEARCH-SYNC — documentary event registry foundation.
 * No event is qualified or published by merely appearing in this catalog.
 * Content digests are declarations until independently checked against source bytes.
 */
export type EventClassification = 'documentary' | 'observed' | 'synthetic' | 'hypothesis';
export type EventQualification = 'candidate' | 'qualified' | 'rejected';
export type EventSection = 'city' | 'history' | 'experiments' | 'indicators' | 'atlas';

export interface ResearchEvent {
  readonly id: string;
  readonly revision: number;
  readonly recordedAt: string; // UTC, ISO-8601
  readonly classification: EventClassification;
  readonly qualification: EventQualification;
  readonly sections: readonly EventSection[];
  readonly source: Readonly<{
    uri: string;
    sha256: string; // Source payload hash; validate independently before promotion
  }>;
  readonly title: Readonly<{ pt: string; en: string }>;
  readonly previousRevisionSha256: string | null;
}

const CLASSIFICATIONS: readonly string[] = ['documentary','observed','synthetic','hypothesis'];
const QUALIFICATIONS: readonly string[] = ['candidate','qualified','rejected'];
const SECTIONS: readonly string[] = ['city','history','experiments','indicators','atlas'];
const SHA256 = /^[a-f0-9]{64}$/;
const ID = /^[a-z][a-z0-9._-]{2,79}$/;
const UTC = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/;

/** Shape and semantic checks only — not an external source or approval check. */
export function validateResearchEvents(items: readonly ResearchEvent[]): readonly string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  const lastRevision = new Map<string, number>();
  let prevTime = -Infinity;
  for (const [index, item] of items.entries()) {
    const prefix = `events[${index}]`;
    if (!ID.test(item.id)) errors.push(`${prefix}:invalid-id`);
    const key = `${item.id}@${item.revision}`;
    if (seen.has(key)) errors.push(`${prefix}:duplicate-revision`);
    seen.add(key);
    if (!Number.isSafeInteger(item.revision) || item.revision < 1) errors.push(`${prefix}:invalid-revision`);
    const prior = lastRevision.get(item.id);
    if (prior === undefined && item.revision !== 1) errors.push(`${prefix}:missing-first-revision`);
    if (prior !== undefined && item.revision !== prior + 1) errors.push(`${prefix}:noncontiguous-revision`);
    if (prior === undefined && item.previousRevisionSha256 !== null) errors.push(`${prefix}:unexpected-previous-hash`);
    if (prior !== undefined && (typeof item.previousRevisionSha256 !== 'string' || !SHA256.test(item.previousRevisionSha256))) errors.push(`${prefix}:missing-previous-hash`);
    lastRevision.set(item.id, item.revision);
    const time = Date.parse(item.recordedAt);
    if (!UTC.test(item.recordedAt) || !Number.isFinite(time) || new Date(time).toISOString() !== new Date(item.recordedAt).toISOString()) errors.push(`${prefix}:invalid-recorded-at`);
    if (Number.isFinite(time) && time < prevTime) errors.push(`${prefix}:out-of-order`);
    if (Number.isFinite(time)) prevTime = time;
    if (!CLASSIFICATIONS.includes(item.classification)) errors.push(`${prefix}:invalid-classification`);
    if (!QUALIFICATIONS.includes(item.qualification)) errors.push(`${prefix}:invalid-qualification`);
    if (item.qualification === 'qualified') errors.push(`${prefix}:external-qualification-required`);
    if (!Array.isArray(item.sections) || item.sections.length === 0 || new Set(item.sections).size !== item.sections.length || item.sections.some(section => !SECTIONS.includes(section))) errors.push(`${prefix}:invalid-sections`);
    if (typeof item.source?.uri !== 'string' || !item.source.uri.startsWith('https://')) errors.push(`${prefix}:invalid-source-uri`);
    if (typeof item.source?.sha256 !== 'string' || !SHA256.test(item.source.sha256)) errors.push(`${prefix}:invalid-source-hash`);
    if (!item.title?.pt?.trim() || !item.title?.en?.trim()) errors.push(`${prefix}:missing-bilingual-title`);
  }
  return errors;
}

/** Initial catalog deliberately empty. Events require source qualification. */
export const researchEvents: readonly ResearchEvent[] = [];

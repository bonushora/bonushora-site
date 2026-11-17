/*
 * BH-ECONOMIC-PARADIGM
 * City research mapping v0.1
 *
 * These are conceptual navigation associations.
 * They are NOT experimental results or validated evidence.
 */

export type ResearchAssociation = {
  experimentId: string;
  relation: 'conceptual';
  evidence: null;
};

const conceptual = (
  ids: string[]
): ResearchAssociation[] => ids.map(experimentId => ({
  experimentId,
  relation: 'conceptual',
  evidence: null,
}));

export const districtResearch: Record<
  string,
  ResearchAssociation[]
> = {
  lab: conceptual([
    'E01','E02','E03','E04','E05','E06'
  ]),
  library: [],
  commerce: conceptual(['E01','E03']),
  community: conceptual(['E02','E04','E05']),
  observatory: conceptual(['E06']),
  museum: [],
  council: [],
};

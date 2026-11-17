import {milestones} from './content';

/**
 * Marcos documentais existentes no catalogo do portal.
 *
 * Nao sao snapshots comprovados do estado urbano.
 * Nao representam resultados experimentais.
 * Nenhuma mudanca nos edificios e inferida a partir deles.
 */
export const citySnapshots = milestones.map(m => ({
  id: m.id,
  date: m.date,
  pt: m.pt,
  en: m.en,
  kind: 'documentary' as const,
  urbanChangesVerified: false,
  evidenceUrl:
    'https://github.com/bonushora/social-value-economy-research',
}));

export type CitySnapshot = (typeof citySnapshots)[number];

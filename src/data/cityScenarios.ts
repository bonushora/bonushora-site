/** MT-WEB-31. Artificial render fixtures, never research events or official districts. */
import type {District} from './cityDistricts';
import {districts as officialDistricts} from './cityDistricts';

export const CITY_SCENARIOS = [7, 8, 15, 30] as const;
export type CityScenario = typeof CITY_SCENARIOS[number];

/** Deliberately non-scientific labels. Append-only fixture ordering. */
export function districtsForScenario(count: CityScenario): District[] {
 if (!CITY_SCENARIOS.includes(count)) throw new Error('INVALID_SYNTHETIC_SCENARIO');
 if (officialDistricts.length !== 7) throw new Error('OFFICIAL_DISTRICT_BASELINE_CHANGED');
 const fake: District[] = Array.from({length:count-7},(_,i)=>({
  id:`synthetic-fixture-${String(i+1).padStart(2,'0')}`,
  pt:`SIMULAÇÃO ${i+1}`, en:`SIMULATION ${i+1}`,
  descriptionPt:'Distrito artificial, exclusivo para teste visual. Não é instituição, localidade ou resultado científico.',
  descriptionEn:'Artificial district for visual testing only. Not an institution, place, or scientific finding.',
  status:'planned', height:70, color:'#83a5bd'
 }));
 return [...officialDistricts,...fake];
}

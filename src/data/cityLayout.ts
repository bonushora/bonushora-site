import type {District} from './cityDistricts';

export type PositionedDistrict = District & {x:number; y:number};
export type CityLayout = {
 districts: PositionedDistrict[];
 width: number;
 height: number;
 expansionCount: number;
};

const LEGACY = new Set([
 'lab','library','commerce','community','observatory','museum','council'
]);
const MAX_DISTRICTS = 200; // operational guardrail, not a conceptual cap
const COLS = 4;
const START_X = 1050;
const START_Y = 210;
const STEP_X = 210;
const STEP_Y = 240;

/** Stable with an append-only catalogue. Never infer scientific outcomes. */
export function layoutDistricts(source: readonly District[]): CityLayout {
 if (source.length > MAX_DISTRICTS) throw new Error('CITY_CAPACITY_EXCEEDED');
 const seen = new Set<string>();
 const legacySeen = new Set<string>();
 let nextSlot = 0;
 const positioned = source.map((d): PositionedDistrict => {
  if (!d.id || seen.has(d.id)) throw new Error('DUPLICATE_OR_EMPTY_ID');
  seen.add(d.id);
  if (!(Number.isFinite(d.height) && d.height > 0 && d.height <= 150))
   throw new Error('INVALID_BUILDING_HEIGHT');
  if ((d.x === undefined) !== (d.y === undefined))
   throw new Error('PARTIAL_COORDINATES');
  let x = d.x;
  let y = d.y;
  if (LEGACY.has(d.id)) {
   legacySeen.add(d.id);
   if (x === undefined || y === undefined) throw new Error('MISSING_LEGACY_COORDINATES');
  } else {
   // New districts are automatically positioned in the extension zone.
   // Explicit coordinates for new entries are forbidden until collision
   // qualification supports arbitrary custom positioning.
   if (x !== undefined || y !== undefined) throw new Error('CUSTOM_COORDINATES_NOT_QUALIFIED');
   x = START_X + (nextSlot % COLS) * STEP_X;
   y = START_Y + Math.floor(nextSlot / COLS) * STEP_Y;
   nextSlot += 1;
  }
  if (!Number.isFinite(x) || !Number.isFinite(y) || x < 0 || y < 0)
   throw new Error('INVALID_COORDINATES');
  return {...d, x, y} as PositionedDistrict;
 });
 if (legacySeen.size !== LEGACY.size) throw new Error('MISSING_LEGACY_DISTRICT');
 const rows = Math.ceil(nextSlot / COLS);
 const cols = Math.min(nextSlot, COLS);
 return {
  districts: positioned,
  width: nextSlot ? Math.max(1000, START_X + (cols-1)*STEP_X + 216) : 1000,
  height: nextSlot ? Math.max(640, START_Y + (rows-1)*STEP_Y + 128) : 640,
  expansionCount: nextSlot
 };
}

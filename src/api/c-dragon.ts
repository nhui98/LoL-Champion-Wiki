import { kCDragon, kCDragonCDN, kPatch } from '@/config/constants';
import { ChampionSummary } from '@/types';

export async function fetchChampionSummaryData() {
  try {
    const res = await fetch(`${kCDragon}/v1/champion-summary.json`);

    if (!res.ok) throw new Error(`!res.ok - res.statusText: ${res.statusText}`);

    const data = (await res.json()) as ChampionSummary[];

    if (!data || !data.length) return null;

    return data.filter((champ) => champ.id > 0);
  } catch (error) {
    console.log('fetchChampionSummaryData() error:', error);
    return null;
  }
}

export function fetchChampionBanner(championId: number) {
  return `${kCDragonCDN}/${kPatch}/champion/${championId}/splash-art/centered`;
}

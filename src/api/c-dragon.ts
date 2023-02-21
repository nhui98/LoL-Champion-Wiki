import { kCDragon, kCDragonCDN, kPatch } from '@/config/constants';
import { ChampionData, ChampionSummary } from '@/types';

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

export async function fetchChampionData(championId: number) {
  try {
    const res = await fetch(
      `${kCDragonCDN}/${kPatch}/champion/${championId}/data`
    );

    if (!res.ok) throw new Error(`!res.ok - res.statusText: ${res.statusText}`);

    const data = await res.json();

    if (!data) return null;

    return data as ChampionData;
  } catch (error) {
    console.log('fetchChampionData() error:', error);
    return null;
  }
}

export function fetchChampionBanner(championId: number, skinId: number = 0) {
  return `${kCDragonCDN}/${kPatch}/champion/${championId}/splash-art/centered/skin/${skinId}`;
}

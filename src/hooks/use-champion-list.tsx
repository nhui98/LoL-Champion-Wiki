import { useStore } from '@/store/zustand';
import { ChampionSummary } from '@/types';
import { useMemo } from 'react';

export function useChampionList(championData: ChampionSummary[] | null) {
  const roleFilter = useStore((state) => state.roleFilter);

  return useMemo(() => {
    if (!championData) return null;

    if (roleFilter === 'all') return championData;

    return championData.filter((champ) => {
      let shouldFilter = false;

      champ.roles.forEach((role) => {
        if (role === roleFilter) shouldFilter = true;
      });

      return shouldFilter;
    });
  }, [championData, roleFilter]);
}

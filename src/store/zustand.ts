import { ChampionSummary, Role } from '@/types';
import { create } from 'zustand';

type Store = {
  roleFilter: 'all' | Role;
  setRoleFilter: (roleFilter: 'all' | Role) => void;
  searchFilter: ChampionSummary | null;
  setSearchFilter: (searchFilter: ChampionSummary | null) => void;
};

export const useStore = create<Store>()((set) => ({
  roleFilter: 'all',
  setRoleFilter: (roleFilter) => set(() => ({ roleFilter })),
  searchFilter: null,
  setSearchFilter: (searchFilter) => set(() => ({ searchFilter })),
}));

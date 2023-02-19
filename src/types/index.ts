export type ChampionSummary = {
  id: number;
  name: string;
  alias: string;
  squarePotraitPath: string;
  roles: Role[];
};

export type Role =
  | 'assassin'
  | 'fighter'
  | 'mage'
  | 'marksman'
  | 'support'
  | 'tank';

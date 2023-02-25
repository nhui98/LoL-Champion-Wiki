export interface ChampionSummary {
  id: number;
  name: string;
  alias: string;
  squarePotraitPath: string;
  roles: Role[];
}

export type Role =
  | 'assassin'
  | 'fighter'
  | 'mage'
  | 'marksman'
  | 'support'
  | 'tank';

export interface ChampionData extends ChampionSummary {
  title: string;
  shortBio: string;
  tacticalInfo: {
    style: number;
    difficulty: number;
    damageType: 'string';
  };
  playstyleInfo: PlaystyleInfo;
  skins: Skin[];
  passive: Passive;
  spells: Spell[];
}

export type Skin = {
  id: number;
  isBase: string;
  name: string;
  splashPath: string;
  uncenteredSplashPath: string;
  tilePath: string;
  loadScreenPath: string;
  skinType: string;
  rarity: string;
  isLegacy: boolean;
  regionRarityId: number;
  skinLines: { id: number }[] | null;
  description: string | null;
};

export type Passive = {
  name: string;
  abilityIconPath: string;
  abilityVideoPath: string;
  abilityVideoImagePath: string;
  description: string;
};

export type Spell = {
  spellKey: 'q' | 'w' | 'e' | 'r';
  name: string;
  abilityIconPath: string;
  abilityVideoPath: string;
  abilityVideoImagePath: string;
  cost: string;
  cooldown: string;
  description: string;
  dynamicDescription: string;
  range: number[];
  costCoefficients: number[];
  cooldownCoefficients: number[];
  coefficients: {
    coefficient1: number;
    coefficient2: number;
  };
  effectAmounts: {
    Effect1Amount: number[];
    Effect2Amount: number[];
    Effect3Amount: number[];
    Effect4Amount: number[];
    Effect5Amount: number[];
    Effect6Amount: number[];
    Effect7Amount: number[];
    Effect8Amount: number[];
    Effect9Amount: number[];
    Effect10Amount: number[];
  };
  ammo: {
    ammoRechargeTime: number[];
    maxAmmo: number[];
  };
  maxLevel: number;
};

export type AbilityKey = 'p' | 'q' | 'w' | 'e' | 'r';

export type PlaystyleInfo = {
  damage: number;
  durability: number;
  crowdControl: number;
  mobility: number;
  utility: number;
};

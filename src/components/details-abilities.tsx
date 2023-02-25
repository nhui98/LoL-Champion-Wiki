import { fetchAbilityVideo, fetchChampionAbility } from '@/api/c-dragon';
import { AbilityKey, Passive, Spell } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

type DetailsAbilitiesProps = {
  name: string;
  id: number;
  spells: Spell[];
  passive: Passive;
};

export default function DetailsAbilities({
  name,
  id,
  passive,
  spells,
}: DetailsAbilitiesProps) {
  const [activeAbility, setActiveAbility] = useState<AbilityKey>('p');

  const abilities = {
    p: {
      spellKey: 'passive',
      name: passive.name,
      description: passive.description,
      abilityVideoPath: passive.abilityVideoPath,
    },
    q: spells.find((spell) => spell.spellKey === 'q'),
    w: spells.find((spell) => spell.spellKey === 'w'),
    e: spells.find((spell) => spell.spellKey === 'e'),
    r: spells.find((spell) => spell.spellKey === 'r'),
  };

  return (
    <>
      <div className="relative mt-10 flex justify-center gap-4 py-10 sm:gap-8">
        {(['p', 'q', 'w', 'e', 'r'] as const).map((ability) => (
          <Ability
            key={ability}
            championName={name}
            championId={id}
            ability={ability}
            activeAbility={activeAbility}
            setActiveAbility={setActiveAbility}
          />
        ))}
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-black" />
      </div>

      <div className="mt-40 px-4 sm:px-8">
        <div className="relative mx-auto flex max-w-lg flex-col gap-4 border border-zinc-50 bg-white px-4 py-8 drop-shadow-large sm:px-8">
          <div className="absolute -top-32 left-0 flex w-full justify-center">
            {abilities[activeAbility]?.abilityVideoPath ? (
              <div className="rounded-full border-2 border-zinc-900 p-1">
                <div className="flex h-80 w-80 items-center justify-center overflow-hidden rounded-full bg-center">
                  <video
                    src={fetchAbilityVideo(
                      abilities[activeAbility]?.abilityVideoPath
                    )}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ) : null}
          </div>

          <div className="mt-44">
            <div className="text-xs font-bold uppercase text-zinc-600">
              {abilities[activeAbility]?.spellKey}
            </div>
            <div className="text-lg font-bold leading-loose">
              {abilities[activeAbility]?.name}
            </div>
            <p className="mt-2 font-medium">
              {abilities[activeAbility]?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

type AbilityProps = {
  championId: number;
  championName: string;
  ability: AbilityKey;
  activeAbility: AbilityKey;
  setActiveAbility: Dispatch<SetStateAction<AbilityKey>>;
};

function Ability({
  championId,
  ability,
  championName,
  activeAbility,
  setActiveAbility,
}: AbilityProps) {
  return (
    <div className="relative h-12 w-12 rounded-sm border-2 border-zinc-900">
      <div className="cursor-pointer" onClick={() => setActiveAbility(ability)}>
        <Image
          src={fetchChampionAbility(championId, ability)}
          alt={`${championName} p`}
          width={48}
          height={48}
        />
      </div>
      <div className="absolute -bottom-10 flex w-full flex-col items-center justify-center">
        <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-black">
          <div
            className={clsx(
              'flex h-2 w-2 items-center justify-center rounded-full border-2 bg-black',
              activeAbility === ability ? 'opacity-100' : 'opacity-0'
            )}
          />
        </div>
        <div className="h-4 w-0.5 bg-black" />
      </div>
    </div>
  );
}

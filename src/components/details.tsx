'use client';

import { fetchAbilityVideo, fetchChampionAbility } from '@/api/c-dragon';
import { AbilityKey, ChampionData } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

type DetailsProps = {
  championData: ChampionData;
};

export default function Details({ championData }: DetailsProps) {
  const { id, shortBio, roles, playstyleInfo, name, passive, spells } =
    championData;
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
    <section className="pb-20">
      <header>
        <div className="mt-10 flex justify-between px-8">
          <div>
            <div>
              <span className="relative">
                <span className="text-lg font-bold">01</span>
                <span className="absolute -inset-2 rotate-45 border-2"></span>
              </span>
              <span className="pl-8 text-lg font-bold">Overview</span>
            </div>
            <div className="mt-8">
              <span className="relative">
                <span className="text-base font-bold text-zinc-900/40">02</span>
                <span className="absolute -inset-1 rotate-45 border-2 border-zinc-900/40"></span>
              </span>
              <span className="pl-8 text-base font-bold text-zinc-900/40">
                Abilities
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-medium">ID</span>
              <span className="text-5xl font-bold">{id}</span>
            </div>
          </div>
        </div>
      </header>

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

      <div className="mt-40 px-4 pb-8 sm:px-8">
        <div className="relative mx-auto flex max-w-lg flex-col gap-4 border border-zinc-50 bg-white px-4 py-8 drop-shadow-large sm:px-8">
          <div className="absolute -top-32 left-0 flex w-full justify-center">
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

      {/* <div className="mt-20 px-4 sm:px-8">
        <div className="mx-auto flex max-w-lg flex-col gap-4 border border-zinc-50 bg-white px-4 py-8 drop-shadow-large sm:px-8">
          <div>
            <div className="text-lg font-bold">Description</div>
            <p className="mt-2 font-medium">{shortBio}</p>
          </div>

          <div>
            <div className="text-lg font-bold">Roles</div>
            <ul className="mt-2 flex space-x-8">
              {roles.map((role) => (
                <li key={role} className="font-medium capitalize">
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-2 flex flex-col gap-2">
            <div className="text-lg font-bold">Statistics</div>
            <PlaystyleStat
              statName="Damage"
              rating={playstyleInfo.damage}
              className="flex items-center justify-between"
            />
            <PlaystyleStat
              statName="Durability"
              rating={playstyleInfo.durability}
              className="flex items-center justify-between"
            />
            <PlaystyleStat
              statName="Crowd Control"
              rating={playstyleInfo.crowdControl}
              className="flex items-center justify-between"
            />
            <PlaystyleStat
              statName="Mobility"
              rating={playstyleInfo.mobility}
              className="flex items-center justify-between"
            />
            <PlaystyleStat
              statName="Utility"
              rating={playstyleInfo.utility}
              className="flex items-center justify-between"
            />
          </div>
        </div>
      </div> */}
    </section>
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

type PlaystyleStatProps = {
  statName: string;
  rating: number;
  className: string;
};

function PlaystyleStat({ className, rating, statName }: PlaystyleStatProps) {
  return (
    <div className={clsx(className)}>
      <span className="text-base font-medium">{statName}</span>
      <div className="flex gap-0.5">
        <div
          className={clsx(
            'h-1.5 w-12 rounded-md bg-zinc-300',
            rating >= 1 && 'bg-zinc-900'
          )}
        />
        <div
          className={clsx(
            'h-1.5 w-12 rounded-md bg-zinc-300',
            rating >= 2 && 'bg-zinc-900'
          )}
        />
        <div
          className={clsx(
            'h-1.5 w-12 rounded-md bg-zinc-300',
            rating >= 3 && 'bg-zinc-900'
          )}
        />
      </div>
    </div>
  );
}

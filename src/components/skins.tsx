'use client';

import { fetchChampionSplash, fetchChampionTile } from '@/api/c-dragon';
import { ChampionData } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

function BackIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden={true}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
    </svg>
  );
}

type SkinsProps = {
  championData: ChampionData;
};

export default function Skins({ championData }: SkinsProps) {
  const { name, title, id, skins } = championData;
  const [skin, setSkin] = useState(skins[0]);
  const skinsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(skinsRef.current?.scrollHeight);
    console.log(skinsRef.current?.clientHeight);
    console.log(skinsRef.current?.scrollTop);
    skinsRef.current?.scrollBy({ top: 510 });
  }, []);

  return (
    <section className="h-full w-full">
      <div className="relative h-full">
        <Link href={'/'} className="absolute top-8 left-8">
          <BackIcon className="h-8 w-8 fill-zinc-50" />
        </Link>
        <Image
          src={fetchChampionSplash(id, skin.id)}
          alt={name}
          fill
          className="absolute -z-20 h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 -z-20 h-full w-full bg-zinc-900/80 bg-gradient-to-b from-[rgba(17,17,19,1)] via-[rgba(17,17,19,0.5)]  to-[rgba(17,17,19,1)] " />
        <div className="absolute inset-24 -z-10">
          <Image
            src={fetchChampionSplash(id, skin.id)}
            alt={name}
            fill
            className="relative h-full w-full object-cover drop-shadow-xlarge"
            priority
          />
          <div className="relative inset-0 h-full w-full bg-zinc-900/30 bg-gradient-to-b from-[rgba(17,17,19,1)] via-[rgba(17,17,19,0.5)]  to-[rgba(17,17,19,1)]" />
        </div>

        <div className="absolute bottom-0 left-0 flex h-60 w-full flex-col items-center justify-center gap-4">
          <h1 className="text-center text-7xl font-bold text-zinc-50">
            {name}
          </h1>
          <h2 className="text-center text-2xl font-bold text-zinc-50">
            {title}
          </h2>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-white/0 to-white/100 opacity-5" />
        </div>

        <div className="absolute top-24 right-8 flex flex-col items-end gap-4">
          <div className="flex items-center gap-4">
            <span className="text-base font-semibold text-zinc-50">
              {skin.name}
            </span>
            <span className="text-sm font-medium text-zinc-500">skin</span>
          </div>
          <div
            ref={skinsRef}
            className="no-scrollbar max-h-[520px] items-end gap-2 overflow-y-auto"
          >
            {skins.map((skin) => (
              <div
                className="mt-2 h-16 w-16 cursor-pointer rounded-sm border-2 border-zinc-700"
                key={skin.id}
                onClick={() => setSkin(skin)}
              >
                <Image
                  src={fetchChampionTile(id, skin.id)}
                  alt={skin.name}
                  key={skin.id}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
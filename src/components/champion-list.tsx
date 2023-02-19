'use client';

import Image from 'next/image';
import { ChampionSummary } from '@/types';
import { fetchChampionBanner } from '@/api/c-dragon';
import { useChampionList } from '@/hooks/use-champion-list';
import { useStore } from '@/store/zustand';
import Link from 'next/link';

type ChampionListProps = {
  championData: ChampionSummary[] | null;
};

export default function ChampionList({ championData }: ChampionListProps) {
  const championList = useChampionList(championData);
  const searchFilter = useStore((state) => state.searchFilter);

  const filteredChampions = !searchFilter
    ? championList
    : championList?.filter((champ) => champ.id === searchFilter.id);

  <div>No champions found.</div>;

  return (
    <section className="mt-20">
      {filteredChampions && filteredChampions.length ? (
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[repeat(2,minmax(0,150px))] place-content-center gap-8 px-4 sm:grid-cols-[repeat(3,minmax(0,150px))] sm:gap-12 sm:px-8 md:grid-cols-[repeat(4,minmax(0,150px))] lg:grid-cols-5">
          {filteredChampions.map((champion) => (
            <ChampionCard key={champion.id} champion={champion} />
          ))}
        </div>
      ) : (
        <div className="flex w-full justify-center tracking-wide">
          No champions found.
        </div>
      )}
    </section>
  );
}

function ChampionCard({ champion }: { champion: ChampionSummary }) {
  if (champion.id <= 0) return null;

  return (
    <figure className="group relative h-44 w-full sm:h-48 md:h-52 lg:h-56 xl:h-60">
      <Link href={`/champion-details/${champion.id}`}>
        <div className="relative z-10 h-full w-full translate-x-2 -translate-y-2 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
          <Image
            src={fetchChampionBanner(champion.id)}
            alt={champion.name}
            fill
            sizes="(min-width:640px) 50vw, 25vw"
            className="h-full w-full object-cover"
            quality={100}
          />
          <div className="absolute bottom-0 flex w-full justify-center bg-zinc-900/10 py-4 text-center text-lg font-semibold text-zinc-50/80 transition-colors duration-300 group-hover:bg-zinc-900/40 group-hover:text-zinc-50 sm:text-xl">
            {champion.name}
          </div>
        </div>

        <div className="absolute top-0 left-0 h-full w-full -translate-x-2 translate-y-2 border-2 border-black transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
      </Link>
    </figure>
  );
}

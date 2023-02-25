import { ChampionData } from '@/types';
import clsx from 'clsx';

type DetailsProps = {
  championData: ChampionData;
};

export default function Details({ championData }: DetailsProps) {
  const { id, shortBio, roles, playstyleInfo } = championData;

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

      <div className="mt-20 px-4 sm:px-8">
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
      </div>
    </section>
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

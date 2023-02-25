import { PlaystyleInfo } from '@/types';
import clsx from 'clsx';

type PlayStyleStatsProps = {
  playstyleInfo: PlaystyleInfo;
};

export default function PlayStyleStats({ playstyleInfo }: PlayStyleStatsProps) {
  return (
    <>
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
    </>
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

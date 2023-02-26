import { PlaystyleInfo } from '@/types';
import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';

type PlayStyleStatsProps = {
  playstyleInfo: PlaystyleInfo;
};

export default function PlayStyleStats({ playstyleInfo }: PlayStyleStatsProps) {
  return (
    <div className="flex flex-col gap-2">
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
  );
}

type PlaystyleStatProps = {
  statName: string;
  rating: number;
  className: string;
};

const parent: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const children: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function PlaystyleStat({ className, rating, statName }: PlaystyleStatProps) {
  return (
    <div className={clsx(className)}>
      <span className="text-base font-medium">{statName}</span>
      <motion.div
        className="flex gap-0.5"
        initial="initial"
        animate="animate"
        variants={parent}
      >
        <motion.div
          className={clsx(
            'h-1.5 w-12 rounded-md bg-zinc-300',
            rating >= 1 && 'bg-zinc-900'
          )}
          variants={children}
        />
        <motion.div
          className={clsx(
            'h-1.5 w-12 rounded-md bg-zinc-300',
            rating >= 2 && 'bg-zinc-900'
          )}
          variants={children}
        />
        <motion.div
          className={clsx(
            'h-1.5 w-12 rounded-md bg-zinc-300',
            rating >= 3 && 'bg-zinc-900'
          )}
          variants={children}
        />
      </motion.div>
    </div>
  );
}

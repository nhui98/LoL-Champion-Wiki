import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';
import { Panel } from './details';
import { motion, Variants } from 'framer-motion';

type DetailsHeaderProps = {
  id: number;
  panel: Panel;
  setPanel: Dispatch<SetStateAction<Panel>>;
};

const tabs = [
  {
    number: '01',
    title: 'Overview',
  },
  {
    number: '02',
    title: 'Abilities',
  },
] as const;

const parent: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const children: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export default function DetailsHeader({
  id,
  panel,
  setPanel,
}: DetailsHeaderProps) {
  return (
    <header>
      <div className="mt-10 flex justify-between px-8">
        <motion.div
          className="flex flex-col gap-8"
          initial="initial"
          animate="animate"
          variants={parent}
        >
          {tabs.map((tab) => (
            <motion.div
              key={tab.title}
              className="relative cursor-pointer"
              onClick={() => setPanel(tab.title)}
              variants={children}
            >
              <span className="relative">
                <span
                  className={clsx(
                    'font-bold',
                    panel === tab.title
                      ? 'text-lg'
                      : 'text-base text-zinc-900/40'
                  )}
                >
                  {tab.number}
                </span>
                <span
                  className={clsx(
                    'absolute rotate-45 border-2',
                    panel === tab.title
                      ? '-inset-2'
                      : '-inset-1 border-zinc-900/40'
                  )}
                />
              </span>
              <span
                className={clsx(
                  'pl-8 font-bold',
                  panel === tab.title ? 'text-lg' : 'text-base text-zinc-900/40'
                )}
              >
                {tab.title}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate="animate"
          variants={children}
        >
          <span className="text-base font-medium">ID</span>
          <span className="text-5xl font-bold">{id}</span>
        </motion.div>
      </div>
    </header>
  );
}

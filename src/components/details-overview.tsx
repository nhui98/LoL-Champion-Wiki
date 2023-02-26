import { PlaystyleInfo, Role } from '@/types';
import PlayStyleStats from './playstyle-stats';
import { motion, Variants } from 'framer-motion';

type DetailsDescriptionProps = {
  roles: Role[];
  shortBio: string;
  playstyleInfo: PlaystyleInfo;
};

const parent: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
    },
  },
};

const children: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function DetailsOverview({
  playstyleInfo,
  roles,
  shortBio,
}: DetailsDescriptionProps) {
  return (
    <div className="mt-20 px-4 sm:px-8">
      <motion.div
        className="mx-auto flex max-w-lg flex-col gap-4 border border-zinc-50 bg-white px-4 py-8 drop-shadow-large sm:px-8"
        initial="initial"
        animate="animate"
        variants={parent}
      >
        <motion.div variants={children}>
          <div className="text-lg font-bold">Description</div>
          <p className="mt-2 font-medium">{shortBio}</p>
        </motion.div>

        <motion.div variants={children}>
          <div className="text-lg font-bold">Roles</div>
          <ul className="mt-2 flex space-x-8">
            {roles.map((role) => (
              <li key={role} className="font-medium capitalize">
                {role}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="mt-2 flex flex-col gap-2" variants={children}>
          <div className="text-lg font-bold">Statistics</div>
          <PlayStyleStats playstyleInfo={playstyleInfo} />
        </motion.div>
      </motion.div>
    </div>
  );
}

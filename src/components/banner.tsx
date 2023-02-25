'use client';

import Image from 'next/image';
import HomeBanner from '../images/home-banner.png';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
  initial: { opacity: 0, y: 75 },
  animate: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay,
    },
  }),
};

export default function Banner() {
  return (
    <div className="relative">
      <motion.div
        className="flex h-[600px] items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={HomeBanner}
          alt="home-banner"
          className="h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 h-full w-full bg-black/40 bg-gradient-to-b from-zinc-50/0 to-black" />
      </motion.div>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center">
        <div className="select-none">
          <motion.h2
            className="text-center text-base font-bold italic tracking-wide text-zinc-50 sm:text-xl"
            initial="initial"
            animate="animate"
            custom={0.5}
            variants={variants}
          >
            DISCOVER YOUR
          </motion.h2>
          <motion.h1
            className="mt-2 text-5xl font-black italic text-zinc-50 sm:text-7xl"
            initial="initial"
            animate="animate"
            custom={0.75}
            variants={variants}
          >
            CHAMPION
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

'use client';

import { fetchChampionSplash, fetchChampionTile } from '@/api/c-dragon';
import { ChampionData } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

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

const skinParent: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
    },
  },
};

const skinChild: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};

const textVariant: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: (delay) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
    },
  }),
};

export default function Skins({ championData }: SkinsProps) {
  const { name, title, id, skins } = championData;
  const [skin, setSkin] = useState(skins[0]);

  return (
    <section className="h-full">
      <div className="relative flex min-h-screen bg-black lg:h-full">
        <Link href={'/'} className="absolute top-8 left-8 z-30">
          <BackIcon className="h-8 w-8 fill-zinc-50" />
        </Link>

        <AnimatePresence initial={false}>
          <motion.div
            key={skin.id}
            className="absolute z-10 min-h-screen w-full"
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: {
                  duration: 2,
                },
              },
            }}
          >
            <Image
              src={fetchChampionSplash(id, skin.id)}
              alt={name}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="absolute h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 h-full w-full bg-zinc-900/80 bg-gradient-to-b from-[rgba(17,17,19,0.8)] via-[rgba(17,17,19,0.2)] to-[rgba(17,17,19,0.8)]" />

            <div className="absolute inset-4 z-10 sm:inset-12 lg:inset-24">
              <Image
                src={fetchChampionSplash(id, skin.id)}
                alt={name}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="relative h-full w-full object-cover drop-shadow-xlarge"
                priority
              />
              <div className="relative inset-0 h-full w-full bg-zinc-900/30 bg-gradient-to-b from-[rgba(17,17,19,1)] via-[rgba(17,17,19,0.5)]  to-[rgba(17,17,19,1)]" />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 z-30 flex h-60 w-full flex-col items-center justify-center gap-4">
          <motion.h1
            className="smLtext-7xl text-center text-6xl font-bold text-zinc-50"
            initial="initial"
            animate="animate"
            variants={textVariant}
          >
            {name}
          </motion.h1>
          <motion.h2
            className="text-center text-xl font-bold text-zinc-50 sm:text-2xl"
            initial="initial"
            animate="animate"
            variants={textVariant}
            custom={0.25}
          >
            {title}
          </motion.h2>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-white/0 to-white/100 opacity-5" />
        </div>

        <div className="absolute top-24 right-8 z-30 hidden flex-col items-end gap-4 md:flex">
          <motion.div
            className="flex items-center gap-4"
            initial="initial"
            animate="animate"
            variants={skinChild}
          >
            <motion.span
              key={skin.name}
              className="text-base font-semibold text-zinc-50"
              initial="initial"
              animate="animate"
              variants={skinChild}
            >
              {skin.name}
            </motion.span>
            <span className="text-sm font-medium text-zinc-500">skin</span>
          </motion.div>
          <motion.div
            className="no-scrollbar max-h-[520px] items-end gap-2 overflow-y-auto"
            initial="initial"
            animate="animate"
            variants={skinParent}
          >
            {skins.map((s) => (
              <motion.div
                className={clsx(
                  'mt-2 h-16 w-16 cursor-pointer rounded-sm border-2 ',
                  s === skin ? 'border-role-mage' : 'border-zinc-700'
                )}
                key={s.id}
                onClick={() => setSkin(s)}
                variants={skinChild}
              >
                <Image
                  src={fetchChampionTile(id, s.id)}
                  alt={s.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-zinc-900 px-4 py-8 sm:px-8 md:hidden">
        <motion.div
          className="flex items-center gap-4"
          initial="initial"
          animate="animate"
          variants={skinChild}
        >
          <span className="text-sm font-medium text-zinc-500">skin</span>
          <motion.span
            className="text-base font-semibold text-zinc-50"
            key={skin.name}
            initial="initial"
            animate="animate"
            variants={skinChild}
          >
            {skin.name}
          </motion.span>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-2"
          initial="initial"
          animate="animate"
          variants={skinParent}
        >
          {skins.map((s) => (
            <motion.div
              className={clsx(
                'mt-2 h-16 w-16 cursor-pointer rounded-sm border-2 ',
                s === skin ? 'border-role-mage' : 'border-zinc-700'
              )}
              key={s.id}
              onClick={() => setSkin(s)}
              variants={skinChild}
            >
              <Image
                src={fetchChampionTile(id, s.id)}
                alt={s.name}
                key={s.id}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

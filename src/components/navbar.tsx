'use client';

import { useChampionList } from '@/hooks/use-champion-list';
import { useStore } from '@/store/zustand';
import { ChampionSummary, Role } from '@/types';
import { Combobox, Transition, Listbox } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

const filterLinks = {
  all: 'ALL',
  assassin: 'ASSASSINS',
  fighter: 'FIGHTERS',
  mage: 'MAGES',
  marksman: 'MARSKMEN',
  support: 'SUPPORTS',
  tank: 'TANKS',
} as const;

function SearchIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={true} className={className}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
    </svg>
  );
}

function ChevronDown({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={true} className={className}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
    </svg>
  );
}

export default function Navbar({
  championData,
}: {
  championData: ChampionSummary[] | null;
}) {
  const championList = useChampionList(championData);
  const searchFilter = useStore((state) => state.searchFilter);
  const setSearchFilter = useStore((state) => state.setSearchFilter);
  const [query, setQuery] = useState('');

  const filteredChampions =
    query === ''
      ? championList
      : championList?.filter((champion) =>
          champion.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <header className="absolute top-[500px] left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 px-4 sm:px-8 lg:max-w-7xl">
      <div className="flex h-16 items-center justify-between border-2 border-zinc-500">
        <Combobox value={searchFilter} onChange={setSearchFilter} nullable>
          <div className="relative">
            <div className="flex items-center gap-4">
              <Combobox.Button className="flex h-16 cursor-pointer items-center gap-x-2 pl-4 sm:pl-8">
                <div className="flex h-full items-center">
                  <SearchIcon className="h-5 w-5 fill-zinc-50" />
                </div>
                <Combobox.Input
                  onChange={(event) => setQuery(event.target.value)}
                  // @ts-ignore
                  displayValue={(champion) => champion?.name}
                  placeholder="SEARCH"
                  className="w-32 border-b-[1px] border-transparent bg-transparent py-1 text-sm font-medium tracking-wide text-zinc-50/70 outline-none transition-colors duration-300 hover:border-zinc-50/70 focus:border-zinc-50/70"
                />
              </Combobox.Button>
            </div>

            {filteredChampions && filteredChampions.length > 0 && (
              <Transition
                as={Fragment}
                enter="transition duration-200 ease-out"
                enterFrom="transform translate-y-2 opacity-0"
                enterTo="transform translate-y-0 opacity-100"
                leave="transition duration-150 ease-out"
                leaveFrom="transform translate-y-0 opacity-100"
                leaveTo="transform translate-y-2 opacity-0"
              >
                <Combobox.Options className="absolute top-[62px] -left-[2px] z-50 max-h-60 w-full overflow-auto border-[2px] border-t-0 border-zinc-500 bg-zinc-50 py-1 text-base shadow-lg">
                  {filteredChampions.map((champion) => {
                    if (champion.id <= 0) return null;

                    return (
                      <Combobox.Option
                        key={champion.id}
                        value={champion}
                        className={({ active }) =>
                          clsx(
                            'relative cursor-default select-none py-2 pr-4 pl-2 transition-colors duration-150',
                            active
                              ? 'bg-role-mage text-zinc-50'
                              : 'text-zinc-900'
                          )
                        }
                      >
                        {champion.name}
                      </Combobox.Option>
                    );
                  })}
                </Combobox.Options>
              </Transition>
            )}
          </div>
        </Combobox>

        <NavFilter />
      </div>
    </header>
  );
}

function NavFilter() {
  const roleFilter = useStore((state) => state.roleFilter);
  const setRoleFilter = useStore((state) => state.setRoleFilter);

  return (
    <>
      <Listbox value={roleFilter} onChange={setRoleFilter}>
        {({ open }) => (
          <div className="relative flex h-full w-40 justify-end pr-4 sm:pr-8 lg:hidden">
            <Listbox.Button className="flex h-full gap-x-0 sm:gap-x-2">
              <div className="flex h-full items-center text-sm uppercase tracking-wide text-zinc-50">
                {roleFilter}
              </div>
              <div className="flex h-full items-center">
                <ChevronDown
                  className={clsx(
                    'h-5 w-5 fill-zinc-50 transition-transform duration-300',
                    open ? 'rotate-180' : 'rotate-0'
                  )}
                />
              </div>
            </Listbox.Button>
            <Listbox.Options className="absolute top-[62px] -right-[2px] z-10 max-h-60 w-full overflow-auto border-[2px] border-t-0 border-zinc-500 bg-zinc-50 py-1 text-base shadow-lg">
              {(Object.keys(filterLinks) as (keyof typeof filterLinks)[]).map(
                (key) => (
                  <Listbox.Option
                    key={key}
                    value={key}
                    className={({ selected, active }) =>
                      clsx(
                        'relative cursor-default select-none py-2 pr-4 pl-2 text-sm tracking-wide transition-colors duration-150',
                        selected
                          ? 'bg-role-mage text-zinc-50'
                          : 'text-zinc-900',
                        !selected && active && 'bg-role-mage/70'
                      )
                    }
                  >
                    {filterLinks[key]}
                  </Listbox.Option>
                )
              )}
            </Listbox.Options>
          </div>
        )}
      </Listbox>

      <ul className="hidden h-full items-center gap-4 pr-8 lg:flex">
        {(Object.keys(filterLinks) as (keyof typeof filterLinks)[]).map(
          (key) => (
            <li
              key={key}
              className={clsx(
                `relative flex h-full cursor-pointer items-center text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-4 after:-translate-x-1/2`,
                key === roleFilter
                  ? `text-zinc-50 after:bg-zinc-50`
                  : 'text-zinc-50/70 hover:text-zinc-50'
              )}
              onClick={() => setRoleFilter(key)}
            >
              {filterLinks[key]}
            </li>
          )
        )}
      </ul>
    </>
  );
}

import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';
import { Panel } from './details';

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

export default function DetailsHeader({
  id,
  panel,
  setPanel,
}: DetailsHeaderProps) {
  return (
    <header>
      <div className="mt-10 flex justify-between px-8">
        <div className="flex flex-col gap-8">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="relative cursor-pointer"
              onClick={() => setPanel(tab.title)}
            >
              <span className="relative">
                <span
                  className={clsx(
                    'transition-colors duration-300',
                    panel === tab.title
                      ? 'text-lg font-bold'
                      : 'text-base font-bold text-zinc-900/40'
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
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-base font-medium">ID</span>
          <span className="text-5xl font-bold">{id}</span>
        </div>
      </div>
    </header>
  );
}

'use client';

import { ChampionData } from '@/types';
import { useState } from 'react';
import DetailsAbilities from './details-abilities';
import DetailsOverview from './details-overview';
import DetailsHeader from './details-header';

type DetailsProps = {
  championData: ChampionData;
};

export type Panel = 'Overview' | 'Abilities';

export default function Details({ championData }: DetailsProps) {
  const [panel, setPanel] = useState<Panel>('Overview');

  return (
    <section className="pb-20">
      <DetailsHeader id={championData.id} panel={panel} setPanel={setPanel} />

      {panel === 'Overview' ? (
        <DetailsOverview
          playstyleInfo={championData.playstyleInfo}
          roles={championData.roles}
          shortBio={championData.shortBio}
        />
      ) : (
        <DetailsAbilities
          name={championData.name}
          id={championData.id}
          passive={championData.passive}
          spells={championData.spells}
        />
      )}
    </section>
  );
}

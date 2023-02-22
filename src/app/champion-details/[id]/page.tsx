import { fetchChampionData } from '@/api/c-dragon';
import Details from '@/components/details';
import Skins from '@/components/skins';
import { notFound } from 'next/navigation';

export default async function ChampionDetails({
  params,
}: {
  params: { id: string };
}) {
  const championData = await fetchChampionData(Number(params.id));

  if (!championData) notFound();

  return (
    <main>
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <Details championData={championData} />
        </div>
        <div className="col-span-7">
          <Skins championData={championData} />
        </div>
      </div>
    </main>
  );
}

import { fetchChampionData } from '@/api/c-dragon';
import Details from '@/components/details';
import Skins from '@/components/skins';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const championData = await fetchChampionData(Number(params.id));

  return { title: championData?.name };
}

export default async function ChampionDetails({
  params,
}: {
  params: { id: string };
}) {
  const championData = await fetchChampionData(Number(params.id));

  if (!championData) notFound();

  return (
    <main>
      <div className="grid h-full grid-cols-1 lg:grid-cols-12">
        <div className="h-full lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-1">
          <Skins championData={championData} />
        </div>
        <div className="lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-1">
          <Details championData={championData} />
        </div>
      </div>
    </main>
  );
}

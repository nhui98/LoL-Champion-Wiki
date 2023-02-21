import { fetchChampionData } from '@/api/c-dragon';
import { notFound } from 'next/navigation';

export default async function ChampionDetails({
  params,
}: {
  params: { id: string };
}) {
  const championData = await fetchChampionData(Number(params.id));

  if (!championData) notFound();

  return <main></main>;
}

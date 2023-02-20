import { fetchChampionSummaryData } from '@/api/c-dragon';
import Banner from '@/components/banner';
import ChampionList from '@/components/champion-list';
import Navbar from '@/components/navbar';

export default async function Home() {
  const championData = await fetchChampionSummaryData();

  return (
    <>
      <main className="relative">
        <Navbar championData={championData} />
        <Banner />
        {/* @ts-ignore */}
        <ChampionList championData={championData} />
        <footer className="mt-40"></footer>
      </main>
    </>
  );
}

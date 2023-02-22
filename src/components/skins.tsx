import { ChampionData } from '@/types';

type SkinsProps = {
  championData: ChampionData;
};

export default function Skins({ championData }: SkinsProps) {
  const { name, title } = championData;
  return <section className="flex w-full"></section>;
}

import Image from 'next/image';
import HomeBanner from '../images/home-banner.png';

export default function Banner() {
  return (
    <div className="relative">
      <div className="flex h-[600px] items-center justify-center overflow-hidden">
        <Image
          src={HomeBanner}
          alt="home-banner"
          className="h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 h-full w-full bg-black/40 bg-gradient-to-b from-zinc-50/0 to-black" />
      </div>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center">
        <div className="select-none">
          <h2 className="text-center text-base font-bold italic tracking-wide text-zinc-50 sm:text-xl">
            DISCOVER YOUR
          </h2>
          <h1 className="mt-2 text-5xl font-black italic text-zinc-50 sm:text-7xl">
            CHAMPION
          </h1>
        </div>
      </div>
    </div>
  );
}

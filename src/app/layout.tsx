import '@total-typescript/ts-reset';
import localFont from '@next/font/local';

const fontSatoshi = localFont({
  src: '../fonts/Satoshi-Variable.ttf',
  variable: '--font-satoshi',
});

import './globals.css';

export const metadata = {
  title: 'LoL Champ Wiki',
  description:
    'A site to discover the different champions available for the popular moba game League of Legends.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontSatoshi.variable}>
      <head />
      <body className="no-scrollbar overflow-y-scroll">{children}</body>
    </html>
  );
}

import '@total-typescript/ts-reset';
import localFont from '@next/font/local';

const fontSatoshi = localFont({
  src: '../fonts/Satoshi-Variable.ttf',
  variable: '--font-satoshi',
});

import './globals.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontSatoshi.variable}>
      <head />
      <body className="overflow-y-scroll">{children}</body>
    </html>
  );
}

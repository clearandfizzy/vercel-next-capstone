// @ts-expect-error The global stylesheet is resolved by Next.js at build time.
import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} antialiased`}
      >{children}</body>
    </html>
  );
}

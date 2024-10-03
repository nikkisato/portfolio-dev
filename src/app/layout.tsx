import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';

const Inter = localFont({
  src: './fonts/Inter-VariableFont_opsz,wght.ttf',
  variable: '--font-inter',
  weight: '100 900',
});
const InterItalic = localFont({
  src: './fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
  variable: '--font-inter-italic',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Nikki Sato Developer',
  description: 'A developer portfolio using Typescript, Next, Sanity CMS, Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Inter.variable} ${InterItalic.variable} antialiased`}>
        {draftMode().isEnabled && <a href="/api/draft-mode/disable">Disable preview mode</a>}
        {children}
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}

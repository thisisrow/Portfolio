import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prathamesh Mishra | Full Stack Developer',
  description: 'Portfolio of Prathamesh Mishar, a Full Stack Web Developer specializing in React, Next.js, and Node.js',
  icons: {
    icon: 'https://avatars.githubusercontent.com/u/175528783?v=4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'SIMBKM',
    template: 'SIMBKM | %s'
  },
  description:
    'Sistem Informasi Merdeka Belajar Kampus Merdeka (SIMBKM) Universitas Diponegoro Departemen Teknik Komputer. Aplikasi ini digunakan untuk mempermudah mahasiswa dalam melakukan pendaftaran kegiatan dan program yang diselenggarakan oleh Kampus Merdeka.',
  keywords: [
    'SIMBKM',
    'Kampus Merdeka',
    'Universitas Diponegoro',
    'Departemen Teknik Komputer'
  ]
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-hidden `}
        suppressHydrationWarning={true}
      >
        <NextTopLoader showSpinner={false} />
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}

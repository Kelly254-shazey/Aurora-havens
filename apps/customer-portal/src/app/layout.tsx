import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers/Providers';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['400','500','600','700'], display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'Customer Portal', template: '%s | Aurora Havens Portal' },
  description: 'Manage your Aurora Havens account, properties, investments, and more.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Providers>
          <AuthProvider>{children}</AuthProvider>
        </Providers>
      </body>
    </html>
  );
}

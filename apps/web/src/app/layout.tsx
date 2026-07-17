import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Providers } from '@/components/providers/Providers';
import { AuthProvider } from '@/contexts/AuthContext';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { BackToTop } from '@/components/ui/BackToTop';
import { DemoBanner } from '@/components/ui/DemoBanner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['400', '500', '600', '700'], display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#D4AF37',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aurorahavens.com'),
  title: {
    default: 'Aurora Havens — Real Estate & Community Development',
    template: '%s | Aurora Havens',
  },
  description: 'Aurora Havens offers premium real estate properties, investment opportunities, and community development programs across Africa. Buy, invest, or donate to make a difference.',
  keywords: ['real estate', 'property', 'invest', 'Africa', 'community development', 'foundation', 'donate', 'Nairobi', 'Kenya'],
  authors: [{ name: 'Aurora Havens' }],
  creator: 'Aurora Havens',
  publisher: 'Aurora Havens',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Aurora Havens',
    title: 'Aurora Havens — Real Estate & Community Development',
    description: 'Premium real estate properties, investment opportunities, and community development programs across Africa.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurora Havens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora Havens — Real Estate & Community Development',
    description: 'Premium real estate, investments, and community development across Africa.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Providers>
          <AuthProvider>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-gold-500 focus:text-dark-900 focus:rounded-lg">
              Skip to main content
            </a>
            <DemoBanner />
            <Header />
            <ErrorBoundary>
              <main id="main-content" className="min-h-screen">{children}</main>
            </ErrorBoundary>
            <Footer />
            <BackToTop />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}

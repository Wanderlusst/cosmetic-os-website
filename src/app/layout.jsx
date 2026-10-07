import { Cormorant_Garamond } from 'next/font/google';
import { Manrope } from 'next/font/google';
import '../index.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'Aurelia Clinic | Luxury Aesthetic Medicine | London & Beverly Hills',
  description: 'Natural Beauty, Thoughtfully Refined. Luxury aesthetic medicine designed to enhance your natural features through artistry, expertise, and medical excellence.',
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport = {
  themeColor: '#FAF7F2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ background: '#FAF7F2', color: '#1D1D1D' }}>
        {children}
      </body>
    </html>
  );
}
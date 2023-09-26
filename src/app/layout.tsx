import Header from '@/components/Header/Header';
import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer/Footer';

// font data here
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${poppins.variable}`}>
      <body className='font-poppins bg-primary-light-gray'>
        <Header />
        <main className='w-[70%] mx-auto min-h-screen pt-24'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

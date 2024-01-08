import 'react-multi-carousel/lib/styles.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Footer from './components/Footer';
import Nav from './components/Nav';
import { body } from './fonts';
import './layout.css';
import './globals.css';
import './locomotive-scroll.css';

export const metadata = {
  title: 'The Writings on the Wall',
  description:
    'An art project based in Sweden on the struggles of Iranians in their fight agains dictatorship',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main className='app'>
          <section className='app__top'>
            <Nav />
          </section>
          <section className='app__bottom'>
            {children}
            <Footer />
          </section>
        </main>
        <script src='https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js'></script>
      </body>
    </html>
  );
}

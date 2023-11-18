import Footer from './components/Footer';
import Nav from './components/Nav';
import { body } from './fonts';
import './layout.css';

export const metadata = {
  title: 'The Writings on the Wall',
  description:
    'An art project based in Sweden on the struggles of Iranians in their fight agains dictatorship',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <link rel='stylesheet' href='https://use.typekit.net/zux4qdk.css'></link>
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
      </body>
    </html>
  );
}

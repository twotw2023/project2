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
    <html lang='en' className={body.className}>
      <body className='background-image'>
        <main className='app'>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

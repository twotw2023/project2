import Link from 'next/link';
import { sprayFont } from '../fonts';
import './Nav.css';
import Image from 'next/image';
import ActiveLink from './ActiveLink';

const Nav = () => {
  return (
    <nav className='nav-container'>
      <div className={`${sprayFont.variable} nav-left`}>
        <Link href='/' className='nav-logo'>
          <Image
            src='/logo.png'
            alt='log'
            width={300}
            height={100}
            className='nav-logo__img'
          />
        </Link>
      </div>
      <div className={`nav-right`}>
        <ActiveLink href='/'>
          <p className='tagLine'>Home</p>
          <Image
            src='/red-line.png'
            alt='active element'
            width={600}
            height={200}
            className='line'
          />
        </ActiveLink>
        <ActiveLink href='/performance'>
          <p className='tagLine'>Performance</p>
          <Image
            src='/red-line.png'
            alt='active element'
            width={600}
            height={200}
            className='line'
          />
        </ActiveLink>
        <ActiveLink href='/exhibition'>
          <p className='tagLine'>Online Exhibition</p>
          <Image
            src='/red-line.png'
            alt='active element'
            width={600}
            height={200}
            className='line'
          />
        </ActiveLink>
        <ActiveLink href='/about'>
          <p className='tagLine'>About</p>
          <Image
            src='/red-line.png'
            alt='active element'
            width={600}
            height={200}
            className='line'
          />
        </ActiveLink>
      </div>
    </nav>
  );
};

export default Nav;

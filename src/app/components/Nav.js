import Link from 'next/link';
import { sprayFont } from '../fonts';
import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav-container'>
      <div className={`${sprayFont.variable} nav-left`}>
        <Link href='/' className='nav-logo'>
          <p>
            The Writings
            <br />
            on the Wall
          </p>
        </Link>
      </div>
      <div className={` nav-right`}>
        <Link href='/exhibition' className='nav-element'>
          Online Exhibition
        </Link>
        <Link href='/performance' className='nav-element'>
          Performance
        </Link>
        <Link href='/about' className='nav-element'>
          About
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

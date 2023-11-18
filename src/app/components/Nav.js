'use client';
import Link from 'next/link';
import { sprayFont } from '../fonts';
import './Nav.css';
import Image from 'next/image';
import { useState } from 'react';
import ActiveLink from './ActiveLink';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`navbar nav-container ${isOpen ? 'nav--open' : 'nav--close'}`}
    >
      <div
        className={`${sprayFont.variable} nav-leftlogo ${
          isOpen ? 'nav--open' : 'nav--close'
        }`}
      >
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
      <div
        className={`hamburgerMenu  ${isOpen ? 'nav--open' : 'nav--close'}`}
        onClick={handleClick}
      >
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <div className={`menu nav-right ${isOpen ? 'nav--open' : 'nav--close'}`}>
        <div className='menu__list__text'>
          <ActiveLink href='/'>
            <p className='tagLine' onClick={handleClick}>
              Home
            </p>
            <Image
              src='/red-line.png'
              alt='active element'
              width={600}
              height={200}
              className='line'
            />
          </ActiveLink>
          <ActiveLink href='/performance'>
            <p className='tagLine' onClick={handleClick}>
              Performance
            </p>
            <Image
              src='/red-line.png'
              alt='active element'
              width={600}
              height={200}
              className='line'
            />
          </ActiveLink>
          <ActiveLink href='/exhibition'>
            <p className='tagLine' onClick={handleClick}>
              Online Exhibition
            </p>
            <Image
              src='/red-line.png'
              alt='active element'
              width={600}
              height={200}
              className='line'
            />
          </ActiveLink>
          <ActiveLink href='/about'>
            <p className='tagLine' onClick={handleClick}>
              About
            </p>
            <Image
              src='/red-line.png'
              alt='active element'
              width={600}
              height={200}
              className='line'
            />
          </ActiveLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

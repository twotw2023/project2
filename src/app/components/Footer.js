import Link from 'next/link';
import './Footer.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <p className='title'>
            The Writings <br />
            on the Wall
          </p>
          <ul className='footer-list socialMedia'>
            <li>
              <Link href='https://www.instagram.com/menetekell/'>
                <Image
                  src='/instagram.png'
                  alt='instagram'
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com/menetekell/'>
                <Image src='/mail.png' alt='instagram' width={25} height={25} />
              </Link>
            </li>
          </ul>
          <div className='footer-copyright'>
            &copy; 2023 The Writings on the Wall. All rights reserved.
          </div>
        </div>
        <div className='footer-right'>
          <div className='footer-sponsor'>
            <ul className='footer-list sponsors'>
              <li>
                <Image
                  src='/logos/ABF.png'
                  alt='ABF Sekundär'
                  width={60}
                  height={40}
                  className='footer-list-logo abf'
                />
              </li>
              <li>
                <Image
                  src='/logos/GTB.svg'
                  alt='Göteborg Stad'
                  width={120}
                  height={40}
                  className='footer-list-logo gtb'
                />
              </li>
              <li>
                <Image
                  src='/logos/KulturUngdom.png'
                  alt='KulturUngdom Logo'
                  width={200}
                  height={80}
                  className='footer-list-logo kulturungdome'
                />
              </li>
              <li>
                <Image
                  src='/logos/noncitizen.png'
                  alt='noncitizen Logo'
                  width={699}
                  height={128}
                  className='footer-list-logo noncitizen'
                />
              </li>
              <li>
                <Image
                  src='/logos/sensus.png'
                  alt='sensus Logo'
                  width={105}
                  height={21}
                  className='footer-list-logo sensus'
                />
              </li>
              <li>
                <Image
                  src='/logos/VG_neg.png'
                  alt='VG Logo'
                  width={300}
                  height={89}
                  className='footer-list-logo vg'
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-social'></div>
    </div>
  );
};

export default Footer;

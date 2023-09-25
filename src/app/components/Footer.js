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
        </div>
        <div className='footer-right'>
          <div className='footer-sponsor'>
            <ul className='footer-list'>
              <li>
                <Image
                  src='/ABF.png'
                  alt='ABF Sekundär'
                  width={60}
                  height={40}
                />
              </li>
              <li>
                <Image
                  src='/GTB.svg'
                  alt='Göteborg Stad'
                  width={120}
                  height={40}
                />
              </li>
            </ul>
          </div>
          <div className='footer-social'>
            <ul className='footer-list'>
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
                  <Image
                    src='/mail.png'
                    alt='instagram'
                    width={25}
                    height={25}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-copyright'>
        &copy; 2023 The Writings on the Wall. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

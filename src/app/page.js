'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Hero from './components/Hero';
import './page.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <section className='home'>
      <Hero />
      <div className='home__slogan'>
        {/* <div className='invert'></div> */}
        <h3>
          Discover the untold stories of Iran's fight for freedom and democracy
          through art and expression
        </h3>
        <Image
          src='/sprayed-pattern-3.png'
          alt='spray pattern'
          width={1600}
          height={900}
          className='home__slogan__div__Image'
        />
      </div>
      <div className='home__Welcome container'>
        <div className='home__welcome__text text'>
          <p>
            The Writings on the Wall is a politically independent cultural
            initiative dedicated to amplifying the voices of the Iranian people
            in their ongoing struggle for freedom, political autonomy, and
            economic democracy.
          </p>
        </div>
        <div className='home__welcome__carouselContainer'>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            autoPlay={false}
            emulateTouch={true}
            dynamicHeight={false}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={75}
            width={'100%'}
            showThumbs={false}
            className='home__carousel'
          >
            <Image
              src='/Persian.png'
              alt='poster-Persian'
              width={350}
              height={500}
            />
            <Image
              src='/svenska.png'
              alt='poster-swedish'
              width={350}
              height={500}
            />
            <Image
              src='/English.png'
              alt='poster-English'
              width={350}
              height={500}
            />
            <Image
              src='/Persian.png'
              alt='poster-Persian'
              width={350}
              height={500}
            />
            <Image
              src='/svenska.png'
              alt='poster-swedish'
              width={350}
              height={500}
            />
            <Image
              src='/English.png'
              alt='poster-English'
              width={350}
              height={500}
            />
            <Image
              src='/Persian.png'
              alt='poster-Persian'
              width={350}
              height={500}
            />
            <Image
              src='/svenska.png'
              alt='poster-swedish'
              width={350}
              height={500}
            />
            <Image
              src='/English.png'
              alt='poster-English'
              width={350}
              height={500}
            />
          </Carousel>
        </div>
      </div>
      <div className='home__performance container'>
        <div className='home__performance__video'>
          <video
            autoPlay
            muted
            playsInline
            className='background-video'
            width={900}
            height={600}
          >
            <source src='/teaser.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='home__performance__text text'>
          <p>
            Bear witness to the alchemy of street art as we resurrect the echoes
            of slogans found on the walls of Iranian cities. These slogans,
            erased or transformed by the regime, are symbols of unyielding
            resistance.
          </p>
        </div>
      </div>
    </section>
  );
}

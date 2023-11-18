'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Hero from './components/Hero';
import './page.scss';
import Image from 'next/image';
import Intro from './components/Intro';
import CarouselUI from './components/home/Carousel';

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  return (
    <section className='home'>
      <Hero />
      {/* <div className='home__slogan'>
        <CarouselUI />
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
      </div> */}
      <div className='home__welcome container'>
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
            autoPlay={true}
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
        <h1 className='home__h1'>Performance</h1>
        <div className='home__performance__textVideo'>
          <div className='home__performance__video'>
            <video
              autoPlay
              muted
              playsInline
              className='background-video a'
              width={900}
              height={600}
              loop={true}
            >
              <source
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/v1698791186/project/teaser_l6z2iz.mp4`}
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='home__performance__text text'>
            <p>
              Bear witness to the alchemy of street art as we resurrect the
              echoes of slogans found on the walls of Iranian cities.
            </p>
          </div>
        </div>
      </div>
      <div className='home__exhibition container'>
        {/* <div className='home__Exhibition__text text'> */}
        <h1 className='home__h1'>Online Exhibition</h1>
        {/* </div> */}
        {/* <div className=''>
        </div> */}
        {/* <div className='home__exhibition__image'>
          <Image
          src='/collage.png'
          width={350}
          height={500}
          alt='Online-Exhibition'
          />
        </div> */}
      </div>
      <div className='home__carousel--infinite'>
        <CarouselUI />
      </div>
    </section>
  );
}

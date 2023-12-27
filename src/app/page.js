'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Hero from './components/Hero';
import './page.scss';
import Image from 'next/image';
import CarouselUI from './components/home/Carousel';

export default function Home() {
  return (
    <section className='home'>
      <Hero />
      <div className='home__welcome container'>
        <div className='home__welcome__text text'>
          <p>
            <strong>The Writings on the Wall</strong> is a politically
            independent cultural initiative dedicated to amplifying the voices
            of the Iranian people in their ongoing struggle for freedom,
            political autonomy, and economic democracy.
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
                src='https://res.cloudinary.com/doiriwp8w/video/upload/v1703695549/teaser-no-subtitle_qgjcd1.mp4'
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
        <h1 className='home__h1'>Online Exhibition</h1>
      </div>
      <div className='home__carousel--infinite'>
        <CarouselUI />
      </div>
    </section>
  );
}

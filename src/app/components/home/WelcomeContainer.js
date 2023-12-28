'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const WelcomeContainer = () => {
  return (
    <div className='home__welcome container'>
      <div className='home__welcome__text text'>
        <p>
          <strong>The Writings on the Wall</strong> is a politically independent
          cultural initiative dedicated to amplifying the voices of the Iranian
          people in their ongoing struggle for freedom, political autonomy, and
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
  );
};

export default WelcomeContainer;

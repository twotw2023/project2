'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import './AfsanehCard.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { data } from '@/app/lib/db';
import Link from 'next/link';
import Image from 'next/image';

const AfsanehCard1 = ({ data }) => {
  const artistData = data;
  // const artistData = data[4];
  const artworks = artistData.artworks[0];
  const artworkLinks = artworks.urls;

  return (
    <div className='flex flex-col items-center justify-center'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        style={{ width: '70%', height: '70%' }}
        className='mySwiper-afsaneh'
        lazyPreloadPrevNext={2}
        loop
      >
        {artworkLinks.map((artwork) => (
          <SwiperSlide
            key={artwork.key}
            className='flex flex-col bg-transparent'
          >
            <Image
              src={artwork.src}
              alt={artistData.artist + '/' + artwork.title_eng}
              width={250}
              height={400}
              loading='lazy'
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsyS+pBwAEjgHYhgKGbwAAAABJRU5ErkJggg=='
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className='artistCard'>
        <strong>Artist:&nbsp;&nbsp;</strong>
        {artistData.artist}
      </p>
      <h3 className='titleCard'>
        <strong>Title:&nbsp;&nbsp;</strong>
        {artworks.title_eng}
      </h3>
      <Link className='button' href='/exhibition/afsaneh-salim-bayati'>
        learn more
      </Link>
    </div>
  );
};

const AfsanehCard2 = ({ data }) => {
  const artistData = data;
  // const artistData = data[4];
  const artworks = artistData.artworks;
  return (
    <div className='flex flex-col items-center justify-center w-auto'>
      {/* <video
        autoPlay
        muted
        playsInline
        width={300}
        height={300}
        poster={artistData.image}
        controls
        className='mr-auto ml-auto mt-4 mb-10'
      >
        <source src={artworks[1].src[0]} type='video/mp4' />
        Your browser does not support the audio tag.
      </video> */}
      <iframe
        src='https://player.vimeo.com/video/898952731?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
        width='1024'
        height='1280'
        frameBorder='0'
        allow='autoplay; fullscreen; picture-in-picture'
        title='05'
        className='w-80 h-80'
        loading='lazy'
      ></iframe>

      <p className='artistCard'>
        <strong>Artist:&nbsp;&nbsp;</strong>
        {artistData.artist}
      </p>

      <Link className='button' href='/exhibition/afsaneh-salim-bayati'>
        learn more
      </Link>
    </div>
  );
};

export { AfsanehCard1, AfsanehCard2 };

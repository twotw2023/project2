'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './IceFlowerCard.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { data } from '@/app/lib/db';
import Link from 'next/link';
import Image from 'next/image';

const AfsanehCard1 = () => {
  const artistData = data[4];
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
        className='mySwiper'
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
            />
            {/* <p className='artist acalypca'>
              <strong>Artist:&nbsp;&nbsp;</strong>
              {artistData.artist}
            </p>
            <h3 className='titleCard'>
              <strong>Title:&nbsp;&nbsp;</strong>
              {artwork.title_eng}
            </h3> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <p className='artist acalypca'>
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

const AfsanehCard2 = () => {
  const artistData = data[4];
  const artworks = artistData.artworks;
  return (
    <div className='flex flex-col items-center justify-center w-auto'>
      <video
        playsInline
        width={300}
        height={300}
        poster={artistData.image}
        controls
        className='mr-auto ml-auto mt-4 mb-10'
      >
        <source src={artworks[1].src} type='audio/mp3' />
        Your browser does not support the audio tag.
      </video>

      <p className='artist acalypca'>
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

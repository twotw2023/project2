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

const AnonymousCard = () => {
  const artistData = data[5];
  const artworks = artistData.artworks;
  return (
    <div className='flex flex-col items-center justify-center'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper-anonymous'
        lazyPreloadPrevNext={2}
        loop
        style={{ width: '70%', height: '85%' }}
      >
        {artworks.map((artwork) => (
          <SwiperSlide
            className='flex flex-col bg-transparent'
            key={artwork.id}
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
            <p className='artist acalypca'>
              <strong>Artist:&nbsp;&nbsp;</strong>
              {artistData.artist}
            </p>
            <h3 className='titleCard'>
              <strong>Title:&nbsp;&nbsp;</strong>
              {artwork.title_eng}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link className='button' href='/exhibition/anonymous'>
        learn more
      </Link>
    </div>
  );
};

export default AnonymousCard;

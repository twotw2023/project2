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

const ShabnamCard = () => {
  const artistData = data[10];
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
        className='mySwiper-shabnamFaraee'
        lazyPreloadPrevNext={2}
        loop
      >
        {artworks.map((artwork) => (
          <SwiperSlide
            className='flex flex-col bg-transparent'
            key={artwork.id}
          >
            <>
              <Image
                src={artwork.src[0]}
                alt={artistData.artist + '/' + artwork.title_eng}
                width={250}
                height={400}
              />
              <p className='artist acalypca'>
                <strong>Artist:&nbsp;&nbsp;</strong>
                {artistData.artist}
              </p>
              <h3 className='titleCard'>
                <strong>Title:&nbsp;&nbsp;</strong>
                {artwork.title_eng}
              </h3>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link className='button' href='/exhibition/shabnam-faraee'>
        learn more
      </Link>
    </div>
  );
};

export default ShabnamCard;
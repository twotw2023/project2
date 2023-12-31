'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './acalypcaCard.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { data } from '@/app/lib/db';
import Link from 'next/link';

const AcalypcaCard = () => {
  const artistData = data[0];
  const artworks = artistData.artworks;
  return (
    <div className='flex flex-col items-center justify-center'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper'
      >
        {artworks.map((artwork) => (
          <SwiperSlide>
            <video
              playsInline
              width={400}
              height={400}
              key={artwork.id}
              lazy='true'
              controls
            >
              <source src={artwork.src} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className='artist acalypca'>
        <strong>Artist:&nbsp;&nbsp;</strong>
        {artistData.artist}
      </p>
      {/* <h3 className='title'>
        <strong>Title:&nbsp;&nbsp;</strong>
        {artworks[1].title_eng}
      </h3> */}
      <Link className='button' href='/exhibition/acalypca'>
        learn more
      </Link>
    </div>
  );
};

export default AcalypcaCard;

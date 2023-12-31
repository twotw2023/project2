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

const AhooraCard = () => {
  const artistData = data[3];
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
        <source src={artworks[0].src} type='audio/mp3' />
        Your browser does not support the audio tag.
      </video>

      <p className='artist acalypca'>
        <strong>Artist:&nbsp;&nbsp;</strong>
        {artistData.artist}
      </p>
      <h3 className='titleCard'>
        <strong>Title:&nbsp;&nbsp;</strong>
        {artworks[0].title_eng}
      </h3>
      <Link className='button' href='/exhibition/ahoora'>
        learn more
      </Link>
    </div>
  );
};

export default AhooraCard;

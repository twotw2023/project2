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

const AnonymousGroupCard = () => {
  const artistData = data[1];
  const artworks = artistData.artworks;
  return (
    <div className='flex flex-col items-center justify-center w-1/3'>
      <iframe
        src='https://player.vimeo.com/video/898787939?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
        allow='autoplay; fullscreen; picture-in-picture'
        title="font-family: 'Familjen Grotesk', sans-serif;"
        className='w-40'
      ></iframe>
      <script src='https://player.vimeo.com/api/player.js'></script>

      <p className='artist acalypca'>
        <strong>Artist:&nbsp;&nbsp;</strong>
        {artistData.artist}
      </p>
      <h3 className='titleCard'>
        <strong>Title:&nbsp;&nbsp;</strong>
        {artworks[0].title_eng}
      </h3>
      <Link className='button' href='/exhibition/acalypca'>
        learn more
      </Link>
    </div>
  );
};

export default AnonymousGroupCard;
'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './AcalypcaCard.css';
// import classes from './AcalypcaCard.module.css';

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
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='AcalypcaSwiper'
        lazyPreloadPrevNext={2}
        loop
      >
        {artworks.map((artwork) => (
          <SwiperSlide
            key={artwork.id}
            className='flex flex-col bg-transparent'
          >
            <iframe
              src={artwork.src}
              width={600}
              height={300}
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              title='09'
            ></iframe>
            <p className='artistCard'>
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
      <Link className='button' href='/exhibition/acalypca'>
        learn more
      </Link>
    </div>
  );
};

export default AcalypcaCard;

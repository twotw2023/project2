'use client';
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

const ZeinabCard = () => {
  const artistData = data[7];
  const artworks = artistData.artworks[0];
  const artworkLinks = artworks.src;

  return (
    <div className='flex flex-col items-center justify-center'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper'
        lazyPreloadPrevNext={2}
        loop
        style={{ width: '100%', height: '50%' }}
      >
        {artworkLinks.map((artwork) => (
          <SwiperSlide
            key={artwork.key}
            className='flex flex-col bg-transparent'
          >
            <Image
              src={artwork.src}
              alt={artistData.artist + '/' + artwork.title_eng}
              width={400}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className='artist acalypca'>
        <strong>Artist:&nbsp;&nbsp;</strong>
        {artistData.artist}
      </p>
      <h3 className='titleCard'>
        <strong>Title:&nbsp;&nbsp;</strong>
        untitled
      </h3>
      <Link className='button' href='/exhibition/zeinab-nikcheh'>
        learn more
      </Link>
    </div>
  );
};

export default ZeinabCard;

'use client';
import './SoheilaCard.css';

import { data } from '@/app/lib/db';
import Link from 'next/link';

const SoheilaCard = ({ data }) => {
  const artistData = data;
  // const artistData = data[9];
  const artworks = artistData.artworks;
  return (
    <div className='flex flex-col items-center justify-center w-auto'>
      <iframe
        className='Soheila-video'
        width='450'
        height='350'
        title="font-family: 'Familjen Grotesk', sans-serif;"
        src='https://www.youtube.com/embed/9PTDi7rvv2k?si=cabzev2I9yvMlcHX&rel=0'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        loading='lazy'
        // className='ml-auto mr-auto'
      ></iframe>

      <p className='artistCard'>
        <strong>Artist:&nbsp;&nbsp;</strong>
        {artistData.artist}
      </p>
      <h3 className='titleCard'>
        <strong>Title:&nbsp;&nbsp;</strong>
        {artworks[0].title_eng}
      </h3>
      <Link className='button' href='/exhibition/soheila-bahramian'>
        learn more
      </Link>
    </div>
  );
};

export default SoheilaCard;

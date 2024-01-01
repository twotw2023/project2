'use client';
import Link from 'next/link';

import { data } from '@/app/lib/db';
import './page.css';
import Image from 'next/image';
import { useRef } from 'react';

const page = () => {
  const artistData = data[0];
  const artworks = artistData.artworks;
  const videoRef = useRef(null);

  return (
    <div className='mt-40'>
      <h2 className='artist'>{artistData.artist}</h2>
      <p className='artist-bio'>{artistData.bio}</p>
      <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4 mr-auto ml-auto'>
        {artworks.map((artwork) => (
          <>
            <iframe
              src={artwork.src}
              frameborder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              // style={{
              //   position: 'absolute',
              //   top: 0,
              //   left: 0,
              //   width: '100%',
              //   height: '100%',
              // }}
              className='vimeo'
              title='01'
            ></iframe>
            <script src='https://player.vimeo.com/api/player.js'></script>
          </>
        ))}
      </div>
    </div>
  );
};

export default page;

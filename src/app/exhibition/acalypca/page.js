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
          <video
            onMouseEnter={(events) => {
              events.target.play();
            }}
            onMouseOut={(events) => {
              events.target.pause();
            }}
            playsInline
            width={400}
            height={400}
            key={artwork.id}
            lazy='true'
            ref={videoRef}
            controls
          >
            <source src={artwork.src} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default page;

'use client';
import { useEffect } from 'react';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react';
import { Image } from 'lightbox.js-react';
import { data } from '@/app/lib/db';
import './page.css';

const page = () => {
  const artistData = data[10];
  const artworks = artistData.artworks;
  const images = Array.from(artworks, (artwork) => ({
    src: artwork.src,
    alt: artistData.artist + '/' + artworks.title_eng,
  }));

  useEffect(() => {
    initLightboxJS(process.env.NEXT_PUBLIC_LIGHTBOX, 'individual');
  });
  return (
    <div>
      <h2 className='artist'>{artistData.artist}</h2>
      <h3 className='title'>
        <strong>Title:&nbsp;&nbsp;</strong>
        {artworks[0].title_eng}
      </h3>
      <p className='artist-bio'>
        <strong>Statement:&nbsp;&nbsp;</strong>
        {artworks[0].statement}
      </p>
      <div className='mt-10 mr-auto ml-auto mb-10 w-1/4'>
        <Image image={{ src: artworks[0].src, title: artworks[0].title_eng }} />
      </div>
      <h3 className='title'>
        <strong>Title:&nbsp;&nbsp;</strong>
        {artworks[1].title_eng}
      </h3>
      <p className='artist-bio'>
        <strong>Statement:&nbsp;&nbsp;</strong>
        {artworks[1].statement}
      </p>

      <div className='mt-10 mr-auto ml-auto mb-10 w-1/4'>
        <Image image={{ src: artworks[1].src, title: artworks[1].title_eng }} />
      </div>
    </div>
  );
};

export default page;

'use client';
import { useEffect } from 'react';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react';
import Image from 'next/image';
import { data } from '@/app/lib/db';
import './page.css';
import Link from 'next/link';

const page = () => {
  const artistData = data[6];
  const artworks = artistData.artworks;
  // const images = artworks[0].src;
  const images = Array.from(artworks[0].urls, (artwork) => ({
    src: artwork.src,
    alt: artistData.artist + '/' + artworks[0].title_eng,
    key: artwork.key,
    width: '300',
    height: '400',
  }));

  useEffect(() => {
    initLightboxJS(process.env.NEXT_PUBLIC_LIGHTBOX, 'individual');
  });
  return (
    <div>
      <div className='artist-link-container'>
        <div>
          <h2 className='artist'>{artistData.artist}</h2>
        </div>
        <Link href='/exhibition' className='backLink'>
          <Image
            src='/arrow/arrow--red.png'
            width={300}
            height={300}
            alt='go back'
          />
        </Link>
      </div>
      <h3 className='title artworkPage'>
        <strong>Title:&nbsp;&nbsp;</strong>
        <br />
        {artworks[0].title_eng}
      </h3>
      <p className='artist-bio'>
        <strong>Statement:&nbsp;&nbsp;</strong>
        <br />
        {artworks[0].statement}
      </p>
      <div className='mt-10 flex justify-center mb-10'>
        <SlideshowLightbox
          className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 p-4 '
          showThumbnails={true}
          lightboxIdentifier='lightbox1'
          framework='next'
          images={images}
          theme='day'
          captionStyle={{ color: 'black' }}
          modalClose='clickOutside'
          textColor='black'
          imgCaption
          displayImgMetadata
        >
          {images.map((image) => (
            <div
              className='flex flex-col max-w-45 items-center justify-center'
              key={image.key}
            >
              <Image
                src={image.src}
                alt={image.alt}
                data-lightboxjs='lightbox1'
                quality={80}
                imgcaption={artworks.title_eng}
                width={300}
                height={400}
              />
            </div>
          ))}
        </SlideshowLightbox>
      </div>
    </div>
  );
};

export default page;

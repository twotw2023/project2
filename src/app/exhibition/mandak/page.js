'use client';
import { useEffect } from 'react';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react';
import Image from 'next/image';
import { data } from '@/app/lib/db';
import './page.css';

const page = () => {
  const artistData = data[12];
  const artworks = artistData.artworks;
  const images = Array.from(artworks, (artwork) => ({
    src: artwork.src,
    alt: artistData.artist + '/' + artworks.title_eng,
    width: '300',
    height: '400',
  }));

  useEffect(() => {
    initLightboxJS(process.env.NEXT_PUBLIC_LIGHTBOX, 'individual');
  });
  return (
    <div>
      {/* <Link href='/exhibition'>
        <Image
          src='/arrow/arrow--red.png'
          width={300}
          height={300}
          alt='go back'
        />
      </Link> */}
      <h2 className='artist'>{artistData.artist}</h2>
      {/* <h3 className='title'>
        <strong>Title:&nbsp;&nbsp;</strong>
        {artworks[0].title_eng}
      </h3> */}
      <p className='artist-bio'>
        <strong>Bio:&nbsp;&nbsp;</strong>
        {artistData.bio}
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
              key={image.src}
            >
              <Image
                src={image.src}
                alt={image.alt}
                height={200}
                width={200}
                data-lightboxjs='lightbox1'
                quality={80}
                key={image.src}
              />
            </div>
          ))}
        </SlideshowLightbox>
      </div>
    </div>
  );
};

export default page;

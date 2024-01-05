'use client';
import { useEffect } from 'react';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react';
import Image from 'next/image';
import { data } from '@/app/lib/db';
import './page.css';

const page = () => {
  const artistData = data[5];
  const artworks = artistData.artworks;
  // const images = artworks[0].src;
  const images = Array.from(artworks, (artwork) => ({
    src: artwork.src,
    alt: artistData.artist + '/' + artworks.title_eng,
    key: artwork.id,
  }));

  useEffect(() => {
    initLightboxJS(process.env.NEXT_PUBLIC_LIGHTBOX, 'individual');
  });
  return (
    <div>
      <h2 className='artist'>{artistData.artist}</h2>
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
                height={200}
                width={200}
                data-lightboxjs='lightbox1'
                quality={80}
                imgcaption={image.title}
                placeholder='blur'
                blurDataURL={image.src}
              />
              <p className='image-caption w-40 text-center'>{image.title}</p>
            </div>
          ))}
        </SlideshowLightbox>
      </div>
    </div>
  );
};

export default page;

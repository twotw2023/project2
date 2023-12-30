'use client';
import { useEffect } from 'react';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react';
import Image from 'next/image';
import { data } from '@/app/lib/db';
import './page.css';
import VideoPlayer from '@/app/components/exhibition/VideoPlayer';

const page = () => {
  const artistData = data[4];
  const artworks = artistData.artworks;
  // const images = artworks[0].src;
  const images = Array.from(artworks[0].src, (artwork) => ({
    src: artwork,
    alt: artistData.artist + '/' + artworks[0].title_eng,
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
        "We," born out of the bitter common sufferings, have become "us."
        <br />
        "We," who have opened our lips to protest and shamefully our frail
        bodies,
        <br />
        which have become the hotter bed of bullets; have become "us."
        <br />
        "We," entangled in our own ashes,
        <br />
        in the dark and obscure moments when our fellow traveler has not been,
        <br />
        have stood alone and plunged into the deep abyss of sameness as if it
        were our eternal companion.
        <br />
        "We," behind the ramparts of evil in war with hope and despair,
        <br />
        weary of our own whims and restless for the future of freedom...
        <br />
        "We," immersed in the sleep of power and contaminated sanctities,
        <br />
        have given up and abandoned everything that became "us"
        <br />
        and have distanced ourselves from our homeland.
        <br />
        "We," the wanderers farther than the heart desires,
        <br />
        sometimes detested in the outskirts of memory and reminiscence,
        <br />
        in the imagination,
        <br />
        sometimes estranged and sometimes longed for...
        <br />
        "We," fragments of "we"...
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
              key={image.title}
            >
              <Image
                src={image.src}
                alt={image.alt}
                height={200}
                width={200}
                data-lightboxjs='lightbox1'
                quality={80}
                imgcaption={image.title}
              />
              <p className='image-caption w-40 text-center'>{image.title}</p>
            </div>
          ))}
        </SlideshowLightbox>
      </div>
      <video
        autoPlay
        muted
        playsInline
        className='mr-auto ml-auto mt-10 mb-10'
        width={400}
        height={600}
        controls
      >
        <source src={artworks[1].src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default page;

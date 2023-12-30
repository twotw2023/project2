'use client';
import Link from 'next/link';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import { render } from 'react-dom';

import { data } from '@/app/lib/db';
import './page.css';
import Image from 'next/image';

const page = () => {
  const artistData = data[0];
  const artworks = artistData.artworks;
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  // console.log(artworks);

  return (
    <div className='mt-16'>
      <h1>Acalpca</h1>
      <Link href=''>about the artist</Link>

      {/* <div>
        <LightGallery plugins={[lgZoom, lgVideo]} mode='lg-fade'>
          {artworks.map((item) => {
            <Link data-src={item.src} key={item.id} href={item.src}>
              <iframe src={item.src} loading='lazy' />
            </Link>;
          })}
        </LightGallery>
      </div> */}
    </div>
  );
};

export default page;

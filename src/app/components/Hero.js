'use client';
import React from 'react';
import './Hero.css';

import VideoPlayer from './VideoPlayer';
import Image from 'next/image';
import { Video, CloudinaryContext } from 'Cloudinary-react';

const Hero = () => {
  return (
    <div className='video__container'>
      {/* <CloudinaryContext
        cloud_name={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`}
      >
        <Video
          publicId='v1696146457/project/video_hero_aamxev'
          width='100%'
          autoPlay={true}
        />
      </CloudinaryContext> */}
      <video
        autoPlay
        muted
        playsInline
        className='background-video'
        width='100%'
      >
        <source src='/video_hero.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;

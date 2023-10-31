'use client';
import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleVideoReady = (event) => {
    event.target.play();
    console.log(event.target);
  };

  const handlePlay = (event) => {
    console.log(loaded);
  };
  return (
    <div className='video__container'>
      <video
        onLoad={handlePlay}
        autoPlay
        muted
        playsInline
        className='background-video'
        width={900}
        height={900}
        onCanPlay={handleVideoReady}
      >
        <source
          src='https://res.cloudinary.com/dhakhocyv/video/upload/v1696146457/project/video_hero_aamxev.mp4'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
      {/* <iframe
        src='/video_hero.mp4'
        loading='lazy'
        autoPlay
        className='background-video'
        width={900}
        height={900}
        playsInline
      ></iframe> */}
    </div>
  );
};

export default Hero;

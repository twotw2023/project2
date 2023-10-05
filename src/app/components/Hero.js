'use client';
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='video__container'>
      <video
        autoPlay
        muted
        playsInline
        className='background-video'
        width={900}
        height={600}
      >
        <source src='/video_hero.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;

'use client';
import './Hero.css';
import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const Hero = () => {

//   return (
//     <div data-scroll-container className='hero'>
//       <div className='video__container'>
//         <video
//           // onLoad={handlePlay}
//           autoPlay
//           muted
//           playsInline
//           className='background-video'
//           width={900}
//           height={900}
//           // onCanPlay={handleVideoReady}
//         >
//           <source
//             src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/v1700095191/project/Comp_1-noStroke_enxp3s.mp4`}
//             type='video/mp4'
//           />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

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
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/v1700095191/project/Comp_1-noStroke_enxp3s.mp4`}
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;

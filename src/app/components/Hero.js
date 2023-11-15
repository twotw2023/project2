'use client';
import './Hero.css';
import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const background = useRef(null);
  const spray = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: 'top',
        end: '+=200px',
        // markers: true,
      },
    });

    timeline1
      .from(background.current, { clipPath: `inset(15%)` })
      // .to(background.current, { width: '100vw' })
      .to(spray.current, {
        y: '50px',
        ScrollTrigger: {
          trigger: '#spray',
          start: 'top top',
          end: '+=1000', // 200px past the start
          pin: '#spray',
          markers: true,
        },
      });
  }, []);
  return (
    <div data-scroll-container className='hero'>
      <div className='video__container'>
        <video
          // onLoad={handlePlay}
          autoPlay
          muted
          playsInline
          className='background-video'
          width={900}
          height={900}
          // onCanPlay={handleVideoReady}
        >
          <source
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/v1696146457/project/video_hero_aamxev.mp4`}
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className='hero__bg' ref={background} id='bg'>
        <Image
          className='hero__bg__img'
          src='/bg.jpg'
          fill={true}
          alt='background-image'
        />
      </div> */}
      {/* <div className='intro'>
        <h1 data-scroll data-scroll-speed='0.7'>
          the writings on the wall
        </h1>
        <div
          data-scroll
          data-scroll-speed='0.7'
          className='intro__img'
          id='#spray'
          ref={spray}
        >
          <Image
            className='intro__img__Image'
            src='/sprayed-pattern-3.png'
            fill={true}
            alt='sprayed pattern'
          />
        </div>
      </div> */}
    </div>
  );
};

// const Hero = () => {
//   const handleVideoReady = (event) => {
//     event.target.play();
//     console.log(event.target);
//   };

//   const handlePlay = (event) => {
//     console.log(loaded);
//   };
//   return (
//     <div className='video__container'>
//       <video
//         onLoad={handlePlay}
//         autoPlay
//         muted
//         playsInline
//         className='background-video'
//         width={900}
//         height={900}
//         onCanPlay={handleVideoReady}
//       >
//         <source
//           src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/v1696146457/project/video_hero_aamxev.mp4`}
//           type='video/mp4'
//         />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

export default Hero;

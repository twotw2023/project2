'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './page.css';

export default function Page() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <main className={`${styles.main} performance`}>
      <div>
        {/* <Image src='/exhibition/a.png' fill={true} alt='background' /> */}
        {/* <Image src='/exhibition/a.png' fill={true} alt='background' /> */}
        <video
          autoPlay
          muted
          playsInline
          className='performance__video'
          width={1400}
          height={875}
          loop={true}
        >
          <source
            src={`https://res.cloudinary.com/doiriwp8w/video/upload/v1703695549/teaser-no-subtitle_qgjcd1.mp4
          `}
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Coming Soon ...</p>
          <p ref={secondText}>Coming Soon ...</p>
        </div>
      </div>
    </main>
  );
}

// 'use client';
// import { body } from '../fonts';
// import { useEffect, useState } from 'react';
// import ArtworksList from '../components/ArtworksList';
// import './page.css';

// //

// const page = (props) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/api/artWorks')
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       });
//   }, []);

//   if (isLoading) return <p>Loading...</p>;
//   if (!data) return <p>No profile data</p>;
//   return (
//     <section className='exhibit-container'>
//       {/* <h1>Online Exhibition</h1> */}
//       <p className={`${body.variable} exhibit__desc`}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Eget nunc
//         scelerisque viverra mauris in aliquam sem. Sed lectus vestibulum mattis
//         ullamcorper velit sed. Id faucibus nisl tincidunt eget nullam. Ut ornare
//         lectus sit amet. Tincidunt arcu non sodales neque sodales ut etiam sit.
//         Amet facilisis magna etiam tempor orci. Leo vel fringilla est
//         ullamcorper eget nulla facilisi etiam. Pellentesque dignissim enim sit
//         amet venenatis. Vitae auctor eu augue ut lectus arcu. In est ante in
//         nibh mauris. Metus dictum at tempor commodo ullamcorper. Amet volutpat
//         consequat mauris nunc congue nisi. Tempus urna et pharetra pharetra
//         massa. Ut morbi tincidunt augue interdum velit euismod in pellentesque
//         massa. Quisque id diam vel quam elementum pulvinar etiam non. Lacus
//         suspendisse faucibus interdum posuere lorem ipsum. Sed arcu non odio
//         euismod lacinia at quis risus. Accumsan lacus vel facilisis volutpat est
//         velit egestas dui id. Velit ut tortor pretium viverra suspendisse
//         potenti nullam. Tempor commodo ullamcorper a lacus vestibulum sed.
//         Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor
//         purus. Sem nulla pharetra diam sit amet nisl suscipit. Nibh nisl
//         condimentum id venenatis a condimentum.
//       </p>

//       {console.log(data)}
//       {/* <p>{props.params}</p> */}
//       <ArtworksList artWorks={data.artWorks} />
//       <button>Load More</button>
//     </section>
//   );
// };

// export default page;

'use client';

import dynamic from 'next/dynamic';

import { body } from '../fonts';
// anonymous_group: dynamic(() => import('./AnonymousGroupCard'))

import './page.css';
import AcalypcaCard from '../components/exhibition/acalypcaCard';
import AnonymousGroupCard from '../components/exhibition/AnonymousGroupCard';
import IceFlowerCard from '../components/exhibition/IceFlowerCard';
import AhooraCard from '../components/exhibition/AhooraCard';
import {
  AfsanehCard1,
  AfsanehCard2,
} from '../components/exhibition/AfsanehCard1';
import AnonymousCard from '../components/exhibition/AnonymousCard';
import SamanehCard from '../components/exhibition/SamanehCard';
import ZeinabCard from '../components/exhibition/ZeinabCard';
import SahelCard from '../components/exhibition/SahelCard';
import SoheilaCard from '../components/exhibition/SoheilaCard.js';
import ShabnamCard from '../components/exhibition/ShabnamCard';
import NasserCard from '../components/exhibition/NasserCard';
import Image from 'next/image';
import Link from 'next/link';
import OnlineExhibition from '../components/exhibition/OnlineExhibition';
import MandakCard from '../components/exhibition/MandakCard';
import InnerJalz from '../components/exhibition/InnerJalz';

const page = () => {
  return (
    <section className='exhibit-container'>
      <p className={`${body.variable} exhibit__desc `}>
        Through an Open Call on social media, we have gathered works from 13
        artists, whose diverse perspectives and artistic expressions create a
        varied exhibition. Each artist, using unique tools from brushstrokes to
        pixels, explores themes of oppression, the struggle for freedom, hope,
        and fear. <br />
        In the light of the fight against dictatorship in Iran and the vital
        movement for Women's Life Freedom, this digital art exhibition has come
        to life. Here, the artworks reflect on the diverse experiences and
        challenges of humanity. Each artist's choice of expression becomes an
        individual voice, a piece of a collective story shaped in different
        ways. Curators Azad Larki & anonymous artist, have intricately connected
        these diverse works to form a narrative palette. <br />
        "The Writings on the Wall" is an invitation to explore the various
        stories that adorn the walls of our digital art hall. The artworks are
        the result of different perspectives and art forms, yet they come
        together in their commitment to illuminate the ongoing struggle for
        freedom and human rights through the Women's Life Freedom movement in
        Iran. Each piece constitutes a subtle but significant part of this
        shared narrative.
        <br />
        <br />
        <strong>Artists:</strong> Acalypca, Afsaneh Salim Bayati, Ahoora, Ice
        Flower, Mandak, Nasser TeymourPour, Sahel Samavati, Samaneh Roghani,
        Shabnam Faraee, Inner Jalz, Soheila Bahramian, Zeinab Nikcheh &
        anonymous artists.
      </p>
      <h2 className='header'>Virtual Exhibition</h2>
      <p className={`${body.variable} exhibit__desc `}>
        Delve into a selection of works from the exhibition in the virtual
        gallery below. To view the complete works of each artist, including
        those in video format, please visit the ‘Selected Works’ section.{' '}
      </p>
      <p>It's recommended to view the exhibition in fullscreen.</p>
      <OnlineExhibition />

      <div className='title-container'>
        <Image
          // className='float-left hidden mt-5 h-2 md:block md:w-auto md:h-40 lg:block lg:h-20'
          className='frameImages'
          src='/arrow/frames.png'
          alt='frames'
          width={300}
          height={300}
        />

        <Image
          className='greenWave'
          src='/arrow/wave--green.png'
          alt='green wave'
          width={300}
          height={300}
        />

        <h2 className='artist heading'>Selected Works</h2>
      </div>
      <div className='container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4'>
        <AcalypcaCard />
        <AnonymousGroupCard />
        <IceFlowerCard />
        <NasserCard />
        <ShabnamCard />
        <AhooraCard />
        <SamanehCard />
        <InnerJalz />
        <AfsanehCard2 />
        <MandakCard />
        <AnonymousCard />
        <ZeinabCard />
        <SahelCard />
        <AfsanehCard1 />
        <SoheilaCard />
      </div>
    </section>
  );
};

export default page;

// 'use client';
// import Image from 'next/image';
// import styles from './page.module.css';
// import { useRef, useEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Countdown, { calcTimeDelta } from 'react-countdown';

// export default function Home() {
//   const firstText = useRef(null);
//   const secondText = useRef(null);
//   const slider = useRef(null);
//   let xPercent = 0;
//   let direction = -1;

//   // timer

//   const lunchTime = calcTimeDelta('2024/01/01');
//   // console.log(lunchTime);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.to(slider.current, {
//       scrollTrigger: {
//         trigger: document.documentElement,
//         scrub: 0.25,
//         start: 0,
//         end: window.innerHeight,
//         onUpdate: (e) => (direction = e.direction * -1),
//       },
//       x: '-500px',
//     });
//     requestAnimationFrame(animate);
//   }, []);

//   const animate = () => {
//     if (xPercent < -100) {
//       xPercent = 0;
//     } else if (xPercent > 0) {
//       xPercent = -100;
//     }
//     gsap.set(firstText.current, { xPercent: xPercent });
//     gsap.set(secondText.current, { xPercent: xPercent });
//     requestAnimationFrame(animate);
//     xPercent += 0.1 * direction;
//   };

//   return (
//     <main className={styles.main}>
//       <div className={styles.container}>
//         <div className={styles.images}>
//           <Image
//             src='/exhibition/a.png'
//             width={3840}
//             height={2400}
//             alt='background'
//             className={styles.exhibition__image}
//           />
//           <Image
//             src='/exhibition/a.png'
//             fill={true}
//             alt='background'
//             className={styles.mobile__image}
//           />
//         </div>
//         <div className={styles.containerCount}>
//           <h1>Exhibition Opening:</h1>
//           <div className={styles.countDown}>
//             <Countdown date={Date.now() + lunchTime.total} />
//           </div>
//         </div>
//       </div>
//       <div className={styles.sliderContainer}>
//         <div ref={slider} className={styles.slider}>
//           <p ref={firstText}>Coming Soon ...</p>
//           <p ref={secondText}>Coming Soon ...</p>
//         </div>
//       </div>
//     </main>
//   );
// }

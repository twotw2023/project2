import Hero from './components/Hero';
import CarouselUI from './components/home/Carousel';
import WelcomeContainer from './components/home/WelcomeContainer';

import './page.scss';

export default function Home() {
  return (
    <section className='home'>
      <Hero />
      <WelcomeContainer />
      <div className='home__performance container'>
        <h1 className='home__h1'>Performance</h1>
        <div className='home__performance__textVideo'>
          <div className='home__performance__video'>
            <video
              autoPlay
              muted
              playsInline
              className='background-video a'
              width={900}
              height={600}
              loop={true}
            >
              <source
                src='https://res.cloudinary.com/doiriwp8w/video/upload/v1703695549/teaser-no-subtitle_qgjcd1.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='home__performance__text text'>
            <p>
              Bear witness to the alchemy of street art as we resurrect the
              echoes of slogans found on the walls of Iranian cities.
            </p>
          </div>
        </div>
      </div>
      <div className='home__exhibition container'>
        <h1 className='home__h1'>Online Exhibition</h1>
      </div>
      <div className='home__carousel--infinite'>
        <CarouselUI />
        {/* <PosterCarousel /> */}
      </div>
    </section>
  );
}

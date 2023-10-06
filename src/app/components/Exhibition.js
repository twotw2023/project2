import './Exhibition.css';
import { Carousel } from 'react-responsive-carousel';

const Exhibition = () => {
  return (
    <div className='exibition__container'>
      <div className='exhibition__video'>
        <Carousel
          showArrows={true}
          showIndicators={false}
          showStatus={false}
          autoPlay={false}
          emulateTouch={true}
          dynamicHeight={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={75}
          width={'100%'}
          showThumbs={false}
          className='home__carousel'
        ></Carousel>
      </div>
      <div className='exhibition__text text'>
        <p>
          Bear witness to the alchemy of street art as we resurrect the echoes
          of slogans found on the walls of Iranian cities. These slogans, erased
          or transformed by the regime, are symbols of unyielding resistance.
        </p>
      </div>
    </div>
  );
};

export default Exhibition;

import './Carousel.css';
import { cardDetails } from '@/app/lib/featured';
import CarouselItem from './CarouselItem';

const CarouselUI = () => {
  return (
    <div className='carousel-container'>
      <div className='carousel-track'>
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              image={cardDetails[detailKey].image}
              title={cardDetails[detailKey].title}
              artist={cardDetails[detailKey].artist}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              image={cardDetails[detailKey].image}
              title={cardDetails[detailKey].title}
              artist={cardDetails[detailKey].artist}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselUI;

import ArtWorkItem from '../ArtWorkItem';
import './Carousel.css';
import { cardDetails } from '@/app/lib/featured';

const CarouselUI = () => {
  return (
    <div className='carousel-container'>
      <div className='carousel-track'>
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <ArtWorkItem
              image={cardDetails[detailKey].image}
              title={cardDetails[detailKey].title}
              artist={cardDetails[detailKey].artist}
            ></ArtWorkItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <ArtWorkItem
              image={cardDetails[detailKey].image}
              title={cardDetails[detailKey].title}
              artist={cardDetails[detailKey].artist}
            ></ArtWorkItem>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselUI;

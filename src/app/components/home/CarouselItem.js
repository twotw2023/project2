'use client';
import { useRouter } from 'next/navigation';
import Card from '../Card';
import './CarouselItem.css';
import Image from 'next/image';

const CarouselItem = (props) => {
  const router = useRouter();

  const showDetailHandler = () => {
    router.push('/exhibition');
  };

  return (
    <>
      <dev className='carousel__item' key={props.id}>
        <Card>
          <div className='carousel__media' onClick={showDetailHandler}>
            {props.video && (
              <video
                autoPlay
                muted
                playsInline
                className='carousel__video'
                width={600}
                height={600}
              >
                <source src={props.video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            )}
            {props.audio && (
              <video
                autoPlay
                loop={true}
                muted
                playsInline
                className='carousel__video'
                width={600}
                height={600}
                poster={props.poster}
              >
                <source src={props.audio} type='audio/mp3' />
                Your browser does not support the video tag.
              </video>
            )}
            {props.image && (
              <Image
                className='carousel__image'
                alt={props.title}
                src={props.image}
                width={600}
                height={600}
              />
            )}
            <div className='carousel--hover'>
              <div className='carousel__content'>
                <h3>Artist</h3>
                <h3>{props.artist}</h3>
              </div>
            </div>
          </div>
        </Card>
      </dev>
    </>
  );
};

export default CarouselItem;

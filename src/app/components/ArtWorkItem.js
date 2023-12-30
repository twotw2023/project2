'use client';
import { body } from '../fonts';
import { useRouter } from 'next/navigation';
import Card from './Card';
import './artWorkItem.css';
import Image from 'next/image';

const ArtWorkItem = (props) => {
  // const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const showDetailHandler = () => {
    router.push('/exhibition');
  };

  // const handleHoverIn = () => {
  //   setHovered(true);
  // };
  // const handleHoverOut = () => {
  //   setHovered(false);
  // };
  return (
    <li className='artWork__item' key={props.id}>
      <Card>
        <div className='artWork__media' onClick={showDetailHandler}>
          {props.video && (
            <video
              autoPlay
              muted
              playsInline
              className='artWork__video'
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
              className='artWork__video'
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
              className='artWork__image'
              alt={props.title}
              src={props.image}
              width={600}
              height={600}
            />
          )}
          <div className='artWork--hover'>
            <div className='artWork__content'>
              <h3 className={`${body.variable}`}>{props.title}</h3>
              <h3 className={`${body.variable}`}>{props.artist}</h3>
            </div>
            <div className='artWork__actions'>
              <button
                className={`${body.variable}`}
                onClick={showDetailHandler}
              >
                See more
              </button>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ArtWorkItem;

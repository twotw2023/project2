import { data } from '@/app/lib/db';
import './page.css';

const page = () => {
  const artistData = data[3];
  const artworks = artistData.artworks;

  return (
    <div>
      <h2 className='artist'>{artistData.artist}</h2>
      <h3 className='title'>{artworks[0].title_eng}</h3>
      <p className='artist-bio'>{artworks[0].statement}</p>
      <video
        playsInline
        width={300}
        height={300}
        poster={artistData.image}
        controls
        className='mr-auto ml-auto mt-4 mb-10'
      >
        <source src={artworks[0].src} type='audio/mp3' />
        Your browser does not support the audio tag.
      </video>
    </div>
  );
};

export default page;

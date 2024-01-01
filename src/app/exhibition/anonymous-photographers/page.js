import { data } from '@/app/lib/db';
import './page.css';

const page = () => {
  const artistData = data[1];
  const artworks = artistData.artworks;
  return (
    <div>
      <h2 className='artist'>{artistData.artist}</h2>
      <h3 className='title'>{artworks[0].title_eng}</h3>
      <p className='artist-bio'>{artworks[0].statement}</p>
      <ul className='gap-2'>
        <li className='mt-0'>
          <p className='artist-bio list-artist'>
            <strong>Story, Executive Producer:</strong> Hossein Fatemi
          </p>
        </li>
        <li className='mt-0'>
          <p className='artist-bio list-artist'>
            <strong>Editor:</strong> Hamid Reza
          </p>
        </li>
        <li>
          <p className='artist-bio list-artist'>
            <strong>Producer:</strong> Q.S
          </p>
        </li>
        <li>
          <p className='artist-bio list-artist'>
            <strong>Photographers:</strong> 10 anonymous Middle East Images
            photographers
          </p>
        </li>
        <li>
          <p className='artist-bio list-artist'>
            <strong>Licence:</strong> Middle East Images/IranWire
          </p>
        </li>
      </ul>
      <div
        style={{ padding: '60% 0 0 0', position: 'relative' }}
        className='mt-20 mb-20'
      >
        <iframe
          src='https://player.vimeo.com/video/898949517?h=464b5784bd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          frameborder='0'
          allow='autoplay; fullscreen; picture-in-picture'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          title="font-family: 'Familjen Grotesk', sans-serif;"
        ></iframe>
      </div>
      <script src='https://player.vimeo.com/api/player.js'></script>
    </div>
  );
};

export default page;

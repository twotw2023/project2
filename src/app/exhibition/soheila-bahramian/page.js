import { data } from '@/app/lib/db';
import './page.css';

const page = () => {
  const artistData = data[9];
  const artworks = artistData.artworks;
  return (
    <div>
      <h2 className='artist'>{artistData.artist}</h2>
      <h3 className='title'>{artworks[0].title_eng}</h3>
      <p className='artist-bio'>{artworks[0].statement}</p>
      <div className='mt-10 mb-20 mr-auto ml-auto'>
        <iframe
          width='720'
          height='405'
          title="font-family: 'Familjen Grotesk', sans-serif;"
          src='https://www.youtube.com/embed/9PTDi7rvv2k?si=cabzev2I9yvMlcHX&rel=0'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
          className='ml-auto mr-auto'
        ></iframe>
      </div>
      {/* 
        <iframe
          src='https://www.youtube.com/embed/9PTDi7rvv2k?si=cabzev2I9yvMlcHX'
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
      </div> */}
      {/* <script src='https://player.vimeo.com/api/player.js'></script> */}
    </div>
  );
};

export default page;

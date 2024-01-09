import Image from 'next/image';
import dynamic from 'next/dynamic';

const DynamicExhibition = dynamic(
  () => import('../components/exhibition/OnlineExhibition'),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicAnonymousGroup = dynamic(
  () => import('../components/exhibition/AnonymousGroupCard'),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicIceFlower = dynamic(
  () => import('../components/exhibition/IceFlowerCard'),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicAhoora = dynamic(
  () => import('../components/exhibition/AhooraCard'),
  {
    loading: () => <p>Loading...</p>,
  }
);

import './page.css';
import { body } from '../fonts';
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
import OnlineExhibition from '../components/exhibition/OnlineExhibition';
import MandakCard from '../components/exhibition/MandakCard';
import InnerJalz from '../components/exhibition/InnerJalz';
import AcalypcaCard from '../components/exhibition/AcalypcaCard';
import { getLocalData } from '../lib/localdata';
import Link from 'next/link';

const page = async () => {
  const artistData = await getLocalData();
  const data = await Promise.all(artistData);
  // console.log(data[0]);
  return (
    <section className='exhibit-container'>
      <p className={`${body.variable} exhibit__desc `}>
        Through an Open Call on social media, we have gathered works from 15
        artists, whose diverse perspectives and artistic expressions create a
        varied exhibition. Each artist, using unique tools from brushstrokes to
        pixels, explores themes of oppression, the struggle for freedom, hope,
        and fear. <br />
        In the light of the fight against dictatorship in Iran and the vital
        movement for Women Life Freedom, this digital art exhibition has come to
        life. Here, the artworks reflect on the diverse experiences and
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
      <p className={`${body.variable} exhibit__desc `}>
        It's recommended to view the exhibition in fullscreen.
      </p>
      {/* <OnlineExhibition /> */}
      {/* <DynamicExhibition /> */}
      <Link href='/exhibition/virtual-exhibition' style={{ color: 'red' }}>
        Go to Virtual Exhibition
      </Link>

      <div className='title-container'>
        <Image
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

        <h2 className='header'>Selected Works</h2>
      </div>
      <div className='container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4'>
        <AcalypcaCard data={data[0]} />
        <AnonymousGroupCard data={data[1]} />
        {/* <DynamicAnonymousGroup data={data[1]} /> */}
        <IceFlowerCard data={data[2]} />
        {/* <DynamicIceFlower data={data[2]} /> */}
        <NasserCard data={data[11]} />
        <ShabnamCard data={data[10]} />
        <AhooraCard data={data[3]} />
        {/* <DynamicAhoora data={data[3]} /> */}
        <SamanehCard data={data[6]} />
        <InnerJalz data={data[13]} />
        <AfsanehCard2 data={data[4]} />
        <MandakCard data={data[12]} />
        <AnonymousCard data={data[5]} />
        <ZeinabCard data={data[7]} />
        <SahelCard data={data[8]} />
        <AfsanehCard1 data={data[4]} />
        <SoheilaCard data={data[9]} />
      </div>
    </section>
  );
};

export default page;

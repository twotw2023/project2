import dynamic from 'next/dynamic';

import OnlineExhibition from '@/app/components/exhibition/OnlineExhibition';
import './page.css';

const DynamicExhibition = dynamic(
  () => import('../../components/exhibition/OnlineExhibition'),
  {
    loading: () => <p>Loading...</p>,
  }
);

const page = () => {
  return (
    <div className='virtual-container'>
      {/* <OnlineExhibition /> */}
      <DynamicExhibition />
    </div>
  );
};

export default page;

import React from 'react';
import './OnlineExhibition.css';

const OnlineExhibition = () => {
  return (
    <div className='exhibition-container'>
      <iframe
        className='exhibition-lg'
        width='853'
        height='480'
        src='https://www.artsteps.com/embed/6590b92942e13c54491b636e/853/480'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <iframe
        className='exhibition-md'
        width='640'
        height='360'
        src='https://www.artsteps.com/embed/6590b92942e13c54491b636e/640/360'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <iframe
        className='exhibition-sd'
        width='560'
        height='315'
        src='https://www.artsteps.com/embed/6590b92942e13c54491b636e/560/315'
        frameBorder='0'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default OnlineExhibition;

import React from 'react';

const VideoPlayer = (src) => {
  return (
    <div>
      <video
        autoPlay
        muted
        playsInline
        className='artWork__video'
        width={600}
        height={600}
      >
        <source src={src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

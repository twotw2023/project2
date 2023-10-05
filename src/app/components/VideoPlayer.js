'use client';
import React, { useEffect, useRef } from 'react';
import { Video, CloudinaryContext } from 'Cloudinary-react';
import { useInView } from 'react-intersection-observer';

const VidPlayer = React.memo(({ videoref }) => {
  return (
    <CloudinaryContext
      cloud_name={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`}
    >
      <Video
        publicId='v1696146457/project/video_hero_aamxev'
        width='100%'
        innerRef={videoref}
      />
    </CloudinaryContext>
  );
});

const VideoPlayer = () => {
  const videoref = useRef();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView === true) {
      videoref.current.play();
      console.log(videoref.current);
    }
  });
  return (
    <div ref={ref}>
      <VidPlayer videoref={videoref} />
    </div>
  );
};
export default VideoPlayer;

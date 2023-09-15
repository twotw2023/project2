import '../videos.css';
const video2 = () => {
  return (
    <div className='embed-container'>
      <iframe
        width='315'
        height='560'
        src='https://www.youtube.com/embed/xcUe9FEHyNU?si=KXsFK_CEDPffu3AK'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;'
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default video2;

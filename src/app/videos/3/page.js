import '../videos.css';
const video3 = () => {
  return (
    <div className='embed-container'>
      <iframe
        width='315'
        height='560'
        src='https://www.youtube.com/embed/8hhA01gcCuk?si=LlGU8PUEwUvqu0SL'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default video3;

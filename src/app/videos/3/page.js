import '../videos.css';
const video3 = () => {
  return (
    <div className='embed-container'>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/watch?v=8hhA01gcCuk'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default video3;

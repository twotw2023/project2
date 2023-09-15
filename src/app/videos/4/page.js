import '../videos.css';
const video4 = () => {
  return (
    <div className='embed-container'>
      <iframe
        width='315'
        height='560'
        src='https://www.youtube.com/embed/XOGwji_Pbj8?si=Cg0hISegVUEC2Xkv'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default video4;

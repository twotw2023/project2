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
    </div>
  );
};

export default OnlineExhibition;

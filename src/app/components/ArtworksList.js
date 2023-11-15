import './ArtWorkList.css';
import ArtWorkItem from './ArtWorkItem';

const ArtworksList = ({ artWorks }) => {
  console.log(artWorks);
  // artWorks.map((artWork) => ({
  //   title: artWork.title,
  //   image: artWork.image,
  //   artist: artWork.artist,
  //   statement: artWork.statement,
  //   id: artWork.id,
  //   video: artWork.video,
  // }));
  return (
    <ul className='artWorksList'>
      {artWorks.map((artWork) => (
        <ArtWorkItem
          id={artWork.id}
          title={artWork.title}
          image={artWork.image}
          artist={artWork.artist}
          statement={artWork.statement}
          video={artWork.video}
        />
      ))}
    </ul>
  );
};

export default ArtworksList;

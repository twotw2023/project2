import React from 'react';
import { ArtWorkItem } from './ArtWorkItem';

const ArtworksList = (props) => {
  return (
    <ul className='artWorksList'>
      {console.log(props, 'artworks')}
      {props.artWorks.map((artWork) => (
        <ArtWorkItem
          key={artWork.id}
          id={artWork.id}
          title={artWork.title}
          image={artWork.image}
          artist={artWork.artist}
          statement={artWork.statement}
          material={artWork.material}
        />
      ))}
    </ul>
  );
};

export default ArtworksList;

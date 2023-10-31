import React from 'react';

const ArtWorkDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <h2>{props.artist}</h2>
      <h3>{props.material}</h3>
      <p>{props.statement}</p>
    </section>
  );
};

export default ArtWorkDetail;

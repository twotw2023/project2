import { Fragment } from 'react';
import Head from 'next/head';
import { ObjectId } from 'mongodb';

import ArtWorkDetail from '../components/ArtWorkDetail';
import { connectToDatabase } from '../lib/db';

const ArtWorkDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.artWork.title}</title>
        <meta name='title' content={props.artWork.title} />
      </Head>
      <ArtWorkDetail
        title={props.artWork.title}
        image={props.artWork.image}
        address={props.artWork.address}
        statement={props.artWork.statement}
        artist={props.artWork.artist}
        material={props.artWork.material}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const client = await connectToDatabase();
  const clientCollection = client.db('azad').collection('wall');
  const artworkArray = await clientCollection.find({}, { _id: 1 }).toArray();
  return {
    fallback: 'blocking',
    paths: artworkArray.map((artWork) => ({
      params: { artworkId: artWork._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const artworkId = context.params.artworkId;
  const client = await connectToDatabase();
  const clientCollection = client.db('azad').collection('wall');
  const artWork = await clientCollection.findOne({ _id: ObjectId(artworkId) });

  return {
    props: {
      artWork: {
        id: artWork._id.toString(),
        title: artWork.title,
        image: artWork.image,
        statement: artWork.statement,
        artist: artWork.artist,
        material: artWork.material,
      },
    },
  };
};

export default ArtWorkDetails;

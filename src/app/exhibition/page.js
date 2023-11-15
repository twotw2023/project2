'use client';
import { body } from '../fonts';
import { useEffect, useState } from 'react';
import ArtworksList from '../components/ArtworksList';
import './page.css';

//

const page = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/artWorks')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <section className='exhibit-container'>
      {/* <h1>Online Exhibition</h1> */}
      <p className={`${body.variable} exhibit__desc`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eget nunc
        scelerisque viverra mauris in aliquam sem. Sed lectus vestibulum mattis
        ullamcorper velit sed. Id faucibus nisl tincidunt eget nullam. Ut ornare
        lectus sit amet. Tincidunt arcu non sodales neque sodales ut etiam sit.
        Amet facilisis magna etiam tempor orci. Leo vel fringilla est
        ullamcorper eget nulla facilisi etiam. Pellentesque dignissim enim sit
        amet venenatis. Vitae auctor eu augue ut lectus arcu. In est ante in
        nibh mauris. Metus dictum at tempor commodo ullamcorper. Amet volutpat
        consequat mauris nunc congue nisi. Tempus urna et pharetra pharetra
        massa. Ut morbi tincidunt augue interdum velit euismod in pellentesque
        massa. Quisque id diam vel quam elementum pulvinar etiam non. Lacus
        suspendisse faucibus interdum posuere lorem ipsum. Sed arcu non odio
        euismod lacinia at quis risus. Accumsan lacus vel facilisis volutpat est
        velit egestas dui id. Velit ut tortor pretium viverra suspendisse
        potenti nullam. Tempor commodo ullamcorper a lacus vestibulum sed.
        Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor
        purus. Sem nulla pharetra diam sit amet nisl suscipit. Nibh nisl
        condimentum id venenatis a condimentum.
      </p>

      {console.log(data)}
      {/* <p>{props.params}</p> */}
      <ArtworksList artWorks={data.artWorks} />
      <button>Load More</button>
    </section>
  );
};

export default page;

// export const getStaticProps = async (context) => {
//   const client = await connectToDatabaset();
//   const dbName = 'azad';
//   const collectionName = 'wall';
//   // const client = await MongoClient.connect(uri);
//   const database = client.db(dbName);
//   const collection = database.collection(collectionName);
//   // const clientCollection = client.db('azad').collection('wall');
//   const artWorks = await collection.find({});
//   const allValues = await cursor.toArray();

//   return {
//     props: {
//       artWorks: allValues.map((artWork) => ({
//         title: artWork.title,
//         image: artWork.image,
//         artist: artWork.artist,
//         statement: artWork.statement,
//         id: artWork._id.toString(),
//         material: artWork.material,
//       })),
//     },
//     revalidate: 1,
//   };
// };

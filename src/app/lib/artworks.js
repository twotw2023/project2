import clientPromise from './db';
import shuffle from './util';

let client;
let db;
let artWorks;

const init = async () => {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db('azad');
    artWorks = await db.collection('wall');
    // console.log(artWorks);
  } catch (error) {
    throw new Error('Failed to stablish connection to database ');
  }
};

(async () => {
  await init();
})();

export async function getArtWorks() {
  try {
    if (!artWorks) await init();
    const result = await artWorks.find({}).limit(15).toArray();
    const shuffledResult = shuffle(result);
    // .map((work) => ({ ...work, _id: user._id.toString() }));
    // console.log(result);

    return { artWorks: result };
  } catch (error) {
    return { error: 'Failed to fetch artWorks' };
  }
}

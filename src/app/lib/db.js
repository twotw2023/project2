import { MongoClient } from 'mongodb';

const URI = process.env.NEXT_PUBLIC_MONGODB_URI;
const options = {};
if (!URI) throw new Error('please add your mongodb uri to .env.local ');

let client = new MongoClient(URI, options);
let clientPromise;

clientPromise = client.connect();

export default clientPromise;

// import { MongoClient } from 'mongodb';

// export async function connectToDatabase() {
//   const uri = `${process.env.NEXT_PUBLIC_MONGODB_URI}`;
//   const client = await MongoClient.connect(uri);

//   return client;
// }

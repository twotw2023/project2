import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
  const uri = `${process.env.NEXT_PUBLIC_MONGODB_URI}`;
  const client = await MongoClient.connect(uri);
  return client;
};

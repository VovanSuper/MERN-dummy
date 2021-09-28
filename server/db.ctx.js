import { MongoClient } from 'mongodb';

const [dbContainer, dbPort, username, password] = [process.env.DB_CONTAINER_NAME, +process.env.DB_PORT, process.env.DB_USER, process.env.DB_PASS];
console.log({ dbContainer, dbPort, username, password });
const url = `mongodb://${dbContainer}:${dbPort}`;
const client = new MongoClient(url, { auth: { username, password } });

export const dbCtx = {
  connect: () => client.connect().then(client => ({ Client: client })),
  close: () => client.close().catch(e => console.error('ERROR CLOSING DB .. ', JSON.stringify(e.message || e))),
  queryCollection: ({ Client, db, collection, query = {} }) =>
    Client.db(db)
      .collection(collection)
      .find(query)
      .toArray()
      .catch(e => console.error('ERROR QUERYING THE DB .. ', JSON.stringify(e.message || e))),
};
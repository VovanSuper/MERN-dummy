import { MongoClient } from 'mongodb';

const isLocalDev = process.env.NODE_ENV === 'dev-local';

const [dbContainer, dbPort, username, password] = [process.env.DB_CONTAINER_NAME, +process.env.DB_PORT, process.env.DB_USER, process.env.DB_PASS];
const url = `mongodb://${isLocalDev ? 'localhost' : dbContainer}:${dbPort}`;
console.log({ dbContainer, dbPort, username, password, url });

const client = new MongoClient(url, { auth: { username, password } });

export const dbCtx = {
  connect: () => client.connect().then(client => ({ Client: client })),
  close: () => client.close().catch(e => console.error('ERROR CLOSING DB .. ', JSON.stringify(e.message || e))),
  queryCollection: ({ Client, db, collection, query = {}, filter = { limit: null, skip: null } }) =>
    Client.db(db)
      .collection(collection)
      .find(query, filter)
      .toArray()
      .catch(e => console.error('ERROR QUERYING THE DB .. ', JSON.stringify(e.message || e))),
};

import { join } from 'path';
import { readFile } from 'fs/promises';
import { dbCtx } from '../db.ctx.js';

const fromRoot = globalThis.fromRoot ?? process.cwd();
const [db, collection] = [process.env.DB_NAME, process.env.DB_COLLECTION];
const { connect, queryCollection } = dbCtx;

const Ricknmorty = class {
  data = [];
  dataMap = new Map();

  constructor() {
    console.log('ricknmorty ctor');
    // this.initFromFile();
    console.log({ db, collection });
    this.initFromDb();
  }

  async initFromFile() {
    this.dataFile = await readFile(join(fromRoot, 'data', 'json', 'ricknmorty.json'));
    this.data = JSON.parse(this.dataFile);
    this.data.forEach(({ id, ...rest }) => this.dataMap.set(id, { id, ...rest }));
  }

  async initFromDb() {
    try {
      const { Client } = await connect();
      this.data = await queryCollection({ Client, db, collection, query: {} });

      console.log({ DATA: this.data });

      this.data.forEach(({ id, ...rest }) => this.dataMap.set(id, { id, ...rest }));
      return;
    } catch (e) {
      console.error(`[Ricknmorthy->initFromDb()]  ::: ${e.message || e}`);
    }
  }

  async getWithFilters({ limit = 20, offset = 0 }) {
    try {
      if (!!!this.data.length || !!!this.dataMap.length) {
        await this.initFromDb();
      }
      const result = [];
      for (let [key, val] of this.dataMap.entries()) {
        if (+key <= offset) continue;
        if (+key > limit + offset) break;
        result.push(val);
      }

      return [result, result.length];
    } catch (e) {
      console.error('[ricknmortySvc->getWithFilter]:: error querying data :: ', e);
      throw e;
    }
  }
};

export default new Ricknmorty();

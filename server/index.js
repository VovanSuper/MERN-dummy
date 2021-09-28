import { resolve } from 'path';

import getApp from './main.js';
import { dbCtx } from './db.ctx.js';
globalThis.fromRoot = resolve('./');

const PORT = +process.env.PORT || 8088;
let server = undefined;
const { close } = dbCtx;

export default async function startUp() {
  return getApp()
    .then(app => {
      let server = app.listen(PORT, () => {
        const { port } = server.address() || { port: PORT };
        console.log(`Listening on ${port}`);
      });
    })
    .catch(e => {
      console.warn(e);
      shutdownHandler();
    });
}

function shutdownHandler() {
  !!server &&
    setTimeout(() => {
      console.log('🤞 Shutting down application');
      // stop the server from accepting new connections
      close()
        .then(_ => {
          server.close(() => {
            console.log('👋 All requests stopped, shutting down');
            process.exit();
          });
        })
        .catch(e => console.e(`Error shutting down :: ${e.message || e}`));
    }, 0);
}

startUp().then(_ => console.log('Running ...'));

process.on('SIGINT', shutdownHandler);
process.on('SIGTERM', shutdownHandler);

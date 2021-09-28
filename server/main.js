// import createError from 'http-errors';
import express, { urlencoded, json } from 'express';
// import { join } from 'path';
// import cookieParser from 'cookie-parser';
import cors from 'cors';
// import authRouter from './routes/auth';
import apiRouter from './routes/api.js';
// import logger, { expressLogger } from './logger';
// import { validateEnv } from './utils/validate-env';
// import { isInstalled, startComposeDatabase, validateDBConnection } from './database';
// import env from './env';
// import { InvalidPayloadException } from './exceptions/invalid-payload';
// import extractToken from './middleware/extract-token';
// import { session } from './middleware/session';
// import authenticate from './middleware/authenticate';
import sanitizeQuery from './middleware/sanitize-query.js';
// import cache from './middleware/cache';

export default async function createApp() {
  // validateEnv(['KEY', 'SECRET']);

  // await validateDBConnection();

  // if ((await isInstalled()) === false) {
  //   logger.log(`Database doesn't have Directus tables installed.`);
  //   process.exit(1);
  // }

  // await startComposeDatabase();

  const app = express();
  app
    // .use(expressLogger)
    // .use((req, res, next) => {
    //   (
    //     express.json({
    //       limit: env.MAX_PAYLOAD_SIZE,
    //     }) as RequestHandler
    //   )(req, res, (err: any) => {
    //     if (err) {
    //       return next(new InvalidPayloadException(err.message));
    //     }

    //     return next();
    //   });
    // })
    .use(json())
    .use(urlencoded({ extended: false }))
    // .use(extractToken)
    .use(cors())
    // .use(session)
    // .use(authenticate)
    .use(sanitizeQuery);
  // .use(cache)

  // app.use('/', authRouter);
  // app.use('/auth', authRouter);
  // app.get('/', (req, resp) => resp.redirect('/api/ricknmorty'))
  app.get('/', (req, resp) => resp.send('/api/ricknmorty'))
  app.use('/api', apiRouter);

  // app.use((req, res, next) => {
  //   next(createError(404));
  // });

  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    return res.status(err.status || 500).json({ error: err.message });
  });

  return app;
}

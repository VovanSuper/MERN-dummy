import { sanitizeQuery } from '../utils/sanitize-query.js';

const sanitizeQueryMiddleware = (req, res, next) => {
  req.sanitizedQuery = {};
  if (!req.query) return;

  req.sanitizedQuery = sanitizeQuery({
    ...req.query,
  });

  Object.freeze(req.sanitizedQuery);

  return next();
};

export default sanitizeQueryMiddleware;

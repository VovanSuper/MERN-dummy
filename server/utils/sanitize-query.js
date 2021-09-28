export function sanitizeQuery(rawQuery) {
  const query = {};

  if (rawQuery.limit !== undefined) {
    const limit = sanitizeLimit(rawQuery.limit);

    if (typeof limit === 'number') {
      query.limit = limit;
    }
  }
  if (rawQuery.offset) {
    query.offset = sanitizeOffset(rawQuery.offset);
  }

  return query;
}

const sanitizeLimit = (rawLimit) => {
  if (rawLimit === undefined || rawLimit === null) return null;
  return Number(rawLimit);
};

const sanitizeOffset = (rawOffset) => {
  return Number(rawOffset);
};

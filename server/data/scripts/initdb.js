db.createCollection('ricknmorty');

const data = JSON.parse(cat('/data/json/ricknmorty.json'));

db.ricknmorty.insertMany(data);

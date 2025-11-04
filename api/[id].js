const fs = require('fs');
const path = '/tmp/data.json';
module.exports = (req, res) => {
  if (req.method !== 'GET') return res.status(405).end();
  const db = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path)) : {};
  res.json(db[req.query.id] || {});
};

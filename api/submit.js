const fs = require('fs');
const path = '/tmp/data.json';
module.exports = (req, res) => {
  const db = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path)) : {};
  const { id, score, name } = req.body;
  const uid = Date.now().toString();
  if (db[id]) {
    db[id].scores[uid] = score;
    db[id].names[uid] = name;
  }
  fs.writeFileSync(path, JSON.stringify(db));
  res.json({ ok: true });
};

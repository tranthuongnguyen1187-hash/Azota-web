const fs = require('fs');
const path = '/tmp/data.json';
module.exports = (req, res) => {
  const db = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path)) : {};
  const id = Date.now().toString();
  db[id] = { questions: req.body.questions, time: req.body.time, scores: {}, names: {} };
  fs.writeFileSync(path, JSON.stringify(db));
  res.json({ id });
};

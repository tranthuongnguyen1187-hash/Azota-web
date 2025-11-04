const fs = require('fs');
const path = '/tmp/data.json';
module.exports = (req, res) => {
  const db = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path)) : {};
  const quiz = db[req.query.id] || { questions: [], time: 600 };
  res.json({ questions: quiz.questions, time: quiz.time });
};

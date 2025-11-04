const fs = require('fs');
const path = '/tmp/data.json';
module.exports = (req, res) => {
  res.json(fs.existsSync(path) ? JSON.parse(fs.readFileSync(path)) : {});
};

const fs = require("fs");
const path = require("path");

function readFileData(callback) {
  const filePath = path.join(__dirname, "Data.txt");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, data);
  });
}

module.exports = readFileData;

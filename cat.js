const fs = require("fs");

const callCat = function (filePath) {
  fs.readFile(`./${filePath}`, "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files);
      process.stdout.write("\nprompt > ");
    }
  });
};

module.exports = callCat;

var fs = require("fs");

module.exports = readJSON;

function readJSON(filename, callback){
  fs.readFile(filename, function(error, bf){
    if(error) return callback(error);

    try {
      bf = JSON.parse(bf.toString());
    } catch (err) {
      callback(err);
      return;
    }

    callback(undefined, bf);
  });
}

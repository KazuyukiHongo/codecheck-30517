"use strict";

function main(argv) {
  /**
   * このコードは引数と標準出力を用いたサンプルコードです。
   * このコードは好きなように編集・削除してもらって構いません。
   *
   * This is a sample code to use arguments and outputs.
   * You can edit and even remove this code as you like.
   */
  //argv.forEach((v, i) => console.log(`argv[${i}]: ${v}`));

  var request = require('request');

  var options = {
      url:'http://challenge-server.code-check.io/api/hash',
      qs: {
          'q': argv[0]
      }
  };

  var callback = function(err, res, body) {
      if (!err && res.statusCode === 200) {
          console.log(body);
      }
  };

  request.post(options, callback);
  
}

module.exports = main;

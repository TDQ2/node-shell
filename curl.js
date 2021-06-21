const request = require("request");

const callCurl = function (url) {
  request(url, function (error, response, body) {
    if (error) {
      throw error;
    } else {
      // process.stdout.write(`statusCode: ${response && response.statusCode}`);
      process.stdout.write(body);
    }
  });
};

module.exports = callCurl;

// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// console.log('body:', body); // Print the HTML for the Google homepage.

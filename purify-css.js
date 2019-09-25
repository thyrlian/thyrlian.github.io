const purify = require("purify-css");

let content = ['*.html'];
let css = ['assets/css/*.css'];
let options = {
  output: "assets/css/purified.css",
  minified: false,
  info: true
};

purify(content, css, options, function (purifiedAndMinifiedResult) {
  console.log(purifiedAndMinifiedResult);
});

// To run:
// node purify-css.js

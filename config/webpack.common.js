
const {join} = require("path");
const {jsSrc, cssSrc} =  require("../config/utils")

module.exports = {
  entry: {
    'js/index': join(jsSrc,'index.js')
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
    
    ]
  }
};
const { resolve, join } = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");


module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: join(__dirname, "../dist")
  },  
   devServer: {
    static: {
      directory: join(__dirname, '_site'),
    },
    compress: true,
    port: 4000,
    open: true,
    hot : true,
    proxy: {
      '/api': 'http://localhost:4000', 
    },
  },
  
});
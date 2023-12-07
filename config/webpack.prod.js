const { join, resolve } = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const { jsSrc, cssSrc } = require('../config/utils');

module.exports = merge(common, {
  mode: 'production',
  entry: { 'js/index': join(jsSrc, 'index.js') },
  output: {
    filename: '[name].min.js',
    path: resolve(__dirname, '../assets'),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          keep_classnames: true,
          mangle: true,
          compress: true,
          keep_fnames: true,
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
 
});

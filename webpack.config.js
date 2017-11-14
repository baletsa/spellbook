'use strict';

const config = require('./config').scripts;

module.exports = {
  cache: true,
  entry: {
    app: config.src
  },
  output: {
    publicPath: '/scripts/',
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: [/libs/, /node_modules/],
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      },
      {
        test: /\.js$/,
        exclude: [/libs/, /node_modules/],
        loader: "eslint-loader"
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
};

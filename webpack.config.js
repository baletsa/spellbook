const path = require('path');

const webpack = require('webpack');

const config = require('./config').scripts;

module.exports = {
  cache: true,
  entry: {
    app: path.resolve(__dirname, './app/app')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
  },
  output: {
    path: path.resolve(__dirname, '/build'),
    publicPath: '/',
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
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.svg$/,
        loader: "file-loader"
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
};

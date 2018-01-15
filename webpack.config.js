const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./config').scripts;

module.exports = {
  cache: true,
  entry: {
    app: path.resolve(__dirname, './app/app')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    historyApiFallback: {
      index: '/spellbook',
    }
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/spellbook/',
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: [/libs/, /node_modules/],
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          ['css-loader', 'sass-loader']
        )
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        keepClosingSlash: true
      }
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          screw_ie8: true,
          drop_console: true,
          // do not show warnings in the console (there is a lot of them)
          warnings: false,
          unused: true,
          dead_code: true
      },
      mangle: {
          screw_ie8: true
      },
      output: {
          comments: false,
          ascii_only: true,
          screw_ie8: true
      },
      comments: false,
      sourceMap: false
    })
  ],
  devtool: 'source-map'
};

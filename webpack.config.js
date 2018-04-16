const path = require('path');
// const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlwebPackagePlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
    // vendors: ['vue']
  },
  // output: {
  //   path: BUILD_PATH,
  //   filename: '[name].js'
  // },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  // module: {
  //   rules: [{
  //     test: /\.sass$/,
  //     exclude: /node_modules/,
  //     use: ['styler-loader', 'css-loader', 'sass-loader']
  //   }]
  // },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlwebPackagePlugin ({
      title: 'Hello Vue.js world!',
      template: path.resolve(APP_PATH, 'index.html'),
      filename: 'index.html',
      // chunks: ['app', 'vendors']
    }),
  ],
  // optimization: {
  //   splitChunks: {
  //     name: 'vendors',
  //     filename: 'vendors.js'
  //   },
  // }
}
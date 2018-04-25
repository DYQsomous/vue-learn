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
    contentBase: APP_PATH,
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [APP_PATH, '~bootstrap/scss']
            }
          }
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlwebPackagePlugin ({
      title: 'Hello Vue.js world!',
      template: path.resolve(APP_PATH, 'index.html'),
      filename: 'index.html',
      inject: 'body'
      // chunks: ['app', 'vendors']
    }),
  ],
  // optimization: {
  //   splitChunks: {
  //     name: 'vendors',
  //     filename: 'vendors.js'
  //   },
  // }
  stats: {
    errorDetails: true,
    colors: true,
    reasons: true,
  }
}
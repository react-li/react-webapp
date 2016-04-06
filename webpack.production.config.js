var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, 'app/index.js'),
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style!css' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?outputStyle=compressed")},
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(png|jpg)$/, include: path.resolve(__dirname, 'app'), loader: 'url?limit=25000'},
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, include: path.resolve(__dirname, 'app'), loader: 'url?limit=100000'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' }
    ]),
    new ExtractTextPlugin('app.css')
  ]
};

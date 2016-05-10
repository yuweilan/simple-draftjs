const webpack = require('webpack');
module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: './dist/',
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', ''],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /(node_modules|example|dist)/,
    }]
  }
};
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js',
      publicPath: '/static/'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
};

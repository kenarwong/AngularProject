/// <binding />
const path = require('path');
var webpack = require('webpack');

'use strict';

module.exports = {
    entry: {
        'app': './app/app.js',
        'vendor' : ['jquery', 'angular', 'angular-route']
    },
    output: {
        filename: 'app.bundle.js',
        path: 'dist'
    },
    module: {
        loaders: [
          {
              test: /\.html$/,
              loader: 'html-loader'
          }
        ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ],
    devtool: 'source-map',
    performance: {
        hints: false
    }
};
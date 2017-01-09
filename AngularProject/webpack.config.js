const path = require('path');

"use strict";

module.exports = {
    entry: "./Scripts/app/app.js",
    output: {
        filename: "./Scripts/dist/app.bundle.js"
    },
    module: {
        loaders: [
          {
              test: /\.html$/,
              loader: "html-loader"
          }
        ]
    },
    devtool: 'source-map'
};
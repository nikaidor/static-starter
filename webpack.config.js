const path = require('path');

module.exports = {
  entry: './scripts/main.js',
  output: {
    path: path.resolve(__dirname, '_assets'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
}

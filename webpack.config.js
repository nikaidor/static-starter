const path = require('path');

const { PROD } = process.env

module.exports = {
  entry: './scripts/main.js',
  output: {
    path: path.resolve(__dirname, '_assets'),
    filename: 'main.js',
  },
  mode: PROD ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
}

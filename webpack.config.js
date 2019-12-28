const path = require('path')
const CSS = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, 'dist', 'assets'),
    filename: 'main.bundle.js',
  },
  mode: isDev ? 'development' : 'production',
  stats: isDev ? 'errors-warnings' : {
    builtAt: false,
    children: false,
    entrypoints: false,
    hash: false,
    modules: false,
    timings: false,
    version: false,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CSS({
      filename: 'main.bundle.css',
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'scripts'),
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: 'svelte-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'import-glob',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.pcss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          CSS.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
}

const PROD = process.env.NODE_ENV === 'production'
const purge = {
  content: [
    'src/**/*.js',
    'src/**/*.njk',
  ],
  extractors: [{
    extractor: (value) => value.match(/[A-z0-9-:%/]+/g) || [],
    extensions: ['js', 'njk'],
  }],
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./src/_styles/tailwind.js'),
    require('autoprefixer'),
    ...PROD
      ? [
        require('@fullhuman/postcss-purgecss')(purge),
        require('cssnano'),
      ]
      : [],
  ],
}

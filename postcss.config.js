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
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    ...PROD
      ? [
        require('@fullhuman/postcss-purgecss')(purge),
      ]
      : [],
  ],
}

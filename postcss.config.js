const isDev = process.env.NODE_ENV !== 'production'
const purge = {
  content: [
    'public/**/*.njk',
    'public/**/*.njk',
  ],
  extractors: [{
    extractor: (value) => value.match(/[A-z0-9-:%/]+/g) || [],
    extensions: ['js', 'njk'],
  }],
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./styles/tailwind.js'),
    require('autoprefixer'),
    ...isDev
      ? []
      : [
        require('@fullhuman/postcss-purgecss')(purge),
        require('cssnano'),
      ],
  ],
}

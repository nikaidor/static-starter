const { PROD } = process.env
const purge = {
  content: ['templates/**/*.njk'],
  extractors: [{
    extractor: (value) => value.match(/[A-z0-9-:%/]+/g) || [],
    extensions: ['njk'],
  }],
}

module.exports = {
  plugins: [
    require('postcss-easy-import')({
      extensions: ['.css', '.pcss'],
    }),
    require('tailwindcss')('./styles/tailwind.js'),
    require('autoprefixer'),
    ...PROD
      ? [
        require('@fullhuman/postcss-purgecss')(purge),
        require('postcss-clean'),
      ]
      : [],
  ],
}

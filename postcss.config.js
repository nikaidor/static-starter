const { PROD } = process.env
const purge = {
  content: ['src/**/*.njk'],
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
    require('tailwindcss')('./src/_styles/tailwind.js'),
    require('autoprefixer'),
    ...PROD
      ? [
        require('@fullhuman/postcss-purgecss')(purge),
        require('postcss-clean'),
      ]
      : [],
  ],
}

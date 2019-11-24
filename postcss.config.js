const isDev = process.env.NODE_ENV !== 'production'
const purge = {
  content: [
    'scripts/**/*.js',
    'scripts/**/*.svelte',
    'public/**/*.njk',
  ],
  extractors: [{
    extractor: (value) => value.match(/[A-z0-9-:%/]+/g) || [],
    extensions: ['js', 'njk', 'svelte'],
  }],
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./styles/tailwind.js'),
    require('postcss-nested'),
    require('autoprefixer'),
    ...isDev
      ? []
      : [
        require('@fullhuman/postcss-purgecss')(purge),
        require('cssnano'),
      ],
  ],
}

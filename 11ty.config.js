const htmlmin = require('html-minifier')

module.exports = (config) => {
  config.addPassthroughCopy({ 'public/static': './' })

  config.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      const minified = htmlmin.minify(content, {
        removeComments: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
      })
      return minified
    }
    return content
  })

  config.setBrowserSyncConfig({
    online: true,
    open: true,
    files: [
      'dist/assets/**/*',
    ],
  })

  return {
    dir: {
      data: 'data',
      includes: 'includes',
      input: 'public',
      output: 'dist',
    },
  }
}

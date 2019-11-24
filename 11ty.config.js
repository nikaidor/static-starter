require('dotenv').config()
const htmlmin = require('html-minifier')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = (config) => {
  config.addPassthroughCopy({ static: './' })

  if (!isDev) {
    config.addTransform('htmlmin', function (content, outputPath) {
      if (outputPath && outputPath.endsWith('.html')) {
        const minified = htmlmin.minify(content, {
          removeComments: true,
          collapseWhitespace: true,
        })
        return minified
      }
      return content
    })
  }

  config.setBrowserSyncConfig({
    files: [
      'dist/assets/**/*',
    ],
    online: false,
    open: true,
  })

  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'public',
      output: 'dist',
    },
    jsDataFileSuffix: '.config',
  }
}

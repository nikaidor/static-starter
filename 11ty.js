const prettyhtml = require('@starptech/prettyhtml')

module.exports = (config) => {
  // Pass files to 11ty
  config.addPassthroughCopy({ './src/_static': './' })
  config.addPassthroughCopy({ './src/_assets': './assets' })

  // Prettify HTML
  config.addTransform('prettyhtml', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      const pretty = prettyhtml(content)
      return pretty
    }
    return content
  })

  // BrowserSync Config
  config.setBrowserSyncConfig({
    open: true,
  })

  // Stop using gitignore for watching
  config.setUseGitIgnore(false)

  return {
    dir: {
      data: '_data',
      input: 'src',
      includes: '_components',
      layouts: '_layouts',
      output: 'dist',
    },
    passthroughFileCopy: true,
  }
}

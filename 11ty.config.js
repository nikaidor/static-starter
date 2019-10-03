const prettyhtml = require('@starptech/prettyhtml')

module.exports = (config) => {
  // Pass files to 11ty
  config.addPassthroughCopy({ './src/_static': './' })

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
    files: ['dist'],
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    passthroughFileCopy: true,
  }
}

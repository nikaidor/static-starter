const prettyhtml = require('@starptech/prettyhtml')

module.exports =  config => {

  config.addPassthroughCopy({'_assets': './assets'})
  config.addPassthroughCopy({'static': '.'})

  config.addTransform('prettyhtml', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      let pretty = prettyhtml(content)
      return pretty
    }
    return content
  })

  config.setBrowserSyncConfig({
    open: true,
  })

  return {
    dir: {
      data: 'data',
      input: "templates",
      includes: "components",
      layouts: "layouts",
    },
    passthroughFileCopy: true,
  }
}

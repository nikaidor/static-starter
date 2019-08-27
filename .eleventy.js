module.exports =  config => {

  config.addPassthroughCopy({'_assets': './assets'})
  config.addPassthroughCopy({'static': '.'})

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

module.exports = (config) => {
  config.addPassthroughCopy({ 'src/static': './' })

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
      input: 'src/public',
      output: 'dist',
    },
    jsDataFileSuffix: '.config',
  }
}

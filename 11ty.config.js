module.exports = config => {
  config.addPassthroughCopy({ static: './' })

  config.setBrowserSyncConfig({
    files: ['dist/assets/**/*'],
    online: false,
    open: true,
  })

  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'pages',
      output: 'dist',
    },
    jsDataFileSuffix: '.config',
  }
}

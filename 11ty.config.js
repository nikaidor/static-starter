module.exports = config => {
  config.addPassthroughCopy({ static: './' })

  config.setBrowserSyncConfig({
    files: ['dist/assets/**/*'],
    open: true,
    watch: true,
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

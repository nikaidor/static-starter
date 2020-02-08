module.exports = config => {
  config.addPassthroughCopy({ static: './' })
  config.setDataDeepMerge(true)

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })

  return {
    dir: {
      input: 'pages',
      output: 'dist',
    },
    jsDataFileSuffix: '.config',
  }
}

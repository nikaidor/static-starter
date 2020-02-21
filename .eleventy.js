module.exports = config => {
  config.addPassthroughCopy({ public: './' })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })

  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'views',
      output: 'dist',
    },
  }
}

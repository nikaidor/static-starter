module.exports = (config) => {
  config.setBrowserSyncConfig({
    open: true,
    files: ['dist']
  })

  config.addPassthroughCopy({ 'public/static': './' })

  return {
    dir: {
      data: 'data',
      includes: 'includes',
      input: 'public',
      output: 'dist'
    }
  }
}

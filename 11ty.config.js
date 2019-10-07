module.exports = (config) => {
  config.setBrowserSyncConfig({
    online: true,
    open: true,
    files: [
      'dist/assets/**/*',
    ],
  })
  config.addPassthroughCopy({ 'public/static': './' })

  return {
    dir: {
      data: 'data',
      includes: 'includes',
      input: 'public',
      output: 'dist',
    },
  }
}

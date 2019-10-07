module.exports = (config) => {
  config.setBrowserSyncConfig({
    online: true,
    open: true,
    files: [
      'dist/main.bundle.css',
      'dist/main.bundle.js',
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

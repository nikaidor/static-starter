const Nunjucks = require('nunjucks')

module.exports = config => {
  config.addPassthroughCopy({ public: './' })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })

  config.setDataDeepMerge(true)

  config.setLibrary(
    'njk',
    new Nunjucks.Environment(new Nunjucks.FileSystemLoader('views/_includes'), {
      lstripBlocks: true,
      trimBlocks: true,
    })
  )

  return {
    dir: {
      input: 'views',
      output: 'dist',
    },
  }
}

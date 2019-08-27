const fs = require('fs').promises
const glob = require('glob')
const path = require('path')

async function scripts() {
  const files = glob.sync('./scripts/imports/**/*.js')
  const filePaths = files.map((file) => {
    const fixedPath = file.replace('/scripts', '')
    const removeExt = fixedPath.replace('.js', '')
    return `import '${removeExt}'`
  })
  const importString = filePaths.join('\n')
  const mainJS = path.resolve(__dirname, 'scripts', 'main.js')
  await fs.writeFile(mainJS, importString, 'utf8')
  await fs.appendFile(mainJS, '\n', 'utf8')
}

scripts()

const fs = require('fs').promises
const path = require('path')

async function generateImports() {
  const files = await fs.readdir('./src/_scripts/imports')
  const filePaths = files.map((file) => {
    return `import './imports/${file}'`
  })
  const importString = filePaths.join('\n')
  const mainJS = path.resolve(__dirname, 'src', '_scripts', 'main.js')
  await fs.writeFile(mainJS, importString, 'utf8')
  await fs.appendFile(mainJS, '\n', 'utf8')
}

generateImports()

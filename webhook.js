const Koa = require('koa')
const fsp = require('fs').promises
const path = require('path')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
const PORT = 8000

router.get('/rebuild', async (ctx) => {
  const location = path.resolve(__dirname, '11ty.config.js')
  const contents = await fsp.readFile(location)
  await fsp.writeFile(location, contents, 'utf8')
  ctx.status = 200
  console.log('Webhook triggered!')
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(PORT, () => console.log(`Server live on port ${PORT}.`))

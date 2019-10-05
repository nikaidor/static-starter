import { run } from './helpers'

run('.div', function (match) {
  console.log(match)
  console.log(process.env.NODE_ENV)
})

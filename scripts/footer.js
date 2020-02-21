import { run } from './helpers'

run('footer', el => {
  el.innerText = `Copyright Matt Waler ${new Date().getFullYear()}`
})

import '../styles/_main.pcss'
import 'alpinejs'
import Users from './Users.svelte'
import { run } from './helpers'

run('[svelte-users]', target => {
  new Users({
    target,
  })
})

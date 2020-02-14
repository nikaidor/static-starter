import '../styles/_main.pcss'

import Hello from './Hello.svelte'
import { run } from './helpers'

run('[svelte-hello]', target => {
  new Hello({
    target,
  })
})

if (DEV_MODE) {
  console.log('We are in dev mode, ladies and gentlemen.')
}

import '../styles/_main.pcss'
import 'alpinejs'
import Message from './Message.svelte'
import { run } from './helpers'

async function start() {
  if (devMode) {
    const { startServer } = await import('./server')
    startServer()
  }

  run('[svelte-message]', target => {
    new Message({
      target,
    })
  })
}

start()

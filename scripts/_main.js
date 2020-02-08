import '../styles/_main.pcss'
import 'alpinejs'
import Message from './Message.svelte'
import { run } from './helpers'

run('[svelte-message]', target => {
  new Message({
    target,
  })
})

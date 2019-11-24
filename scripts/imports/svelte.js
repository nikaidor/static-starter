import { run } from '../helpers'
import Message from '../svelte/Message.svelte'

run('message', (target) => {
  new Message({
    target,
  })
})

import { run } from './helpers'
import Message from './message.svelte'
import Users from './users.svelte'

run('[data-message]', target => new Message({ target }))
run('[data-users]', target => new Users({ target }))

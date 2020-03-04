import { run } from './helpers'
import Message from './message.svelte'
import Users from './users.svelte'
import Navigation from './navigation.svelte'

run('[data-message]', target => new Message({ target }))
run('[data-users]', target => new Users({ target }))
run('[data-navigation]', target => new Navigation({ target }))

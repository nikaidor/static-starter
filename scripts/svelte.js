import { run } from './helpers'
import Hello from './Hello.svelte'

run('[data-hello]', target => new Hello({ target }))

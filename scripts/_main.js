import '../styles/_main.pcss'
import './footer'
import './svelte'

// DEV_MODE gets replaced at build time based on ENV!
if (DEV_MODE) {
  console.log('We are in dev mode, ladies and gentlemen.')
}

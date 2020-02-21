import { writable } from 'svelte/store'
import axios from 'axios'

// Basic String Store Example
export const message = writable('Hello world.')

// Grabbing Initial State From API
export const users = writable([])
export async function getUsers() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  users.set(data)
}
getUsers()

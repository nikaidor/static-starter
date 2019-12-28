import { writable } from 'svelte/store'

function isNavOpen () {
  const { subscribe, update } = writable(false)

  return {
    subscribe,
    toggle: () => update(value => !value),
  }
}

export const nav = isNavOpen()

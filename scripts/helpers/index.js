const isDev = process.env.NODE_ENV !== 'production'

export const $ = (el) => document.querySelector(el)

export const $$ = (el) => Array.from(document.querySelectorAll(el))

export function after (time, fn) {
  return setTimeout(() => {
    fn()
  }, time)
}

export function click (el, fn) {
  el.addEventListener('click', fn)
}

export function run (el, fn) {
  const matches = Array.from(document.querySelectorAll(`[data-run~="${el}"]`))
  if (matches.length > 0) {
    return matches.forEach(match => {
      fn(match)
    })
  } else if (isDev) {
    console.warn(`Run Warning: No matches for "${el}" found.`)
  }
}

export const select = (parent, child) => {
  const match = parent.querySelector(`[data-select~="${child}"]`)
  if (match == null && isDev) {
    return console.warn(`Select Warning: No match found for ${child}.`)
  }
  return match
}

export const selectAll = (parent, child) => {
  const matches = Array.from(parent.querySelectorAll(`[data-select~="${child}"]`))
  if (matches.length === 0 && isDev) {
    return console.warn(`SelectAll Warning: No matches found for ${child}.`)
  }
  return matches
}

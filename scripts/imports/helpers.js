const isDev = process.env.NODE_ENV !== 'production'

export function run (el, fn) {
  const matches = Array.from(document.querySelectorAll(el))
  if (matches.length > 0) {
    return matches.forEach(match => {
      fn(match)
    })
  } else if (isDev) {
    console.log(`Not running ${fn}, no matches for ${el} found.`)
  }
}

export function click (el, fn) {
  el.addEventListener('click', fn)
}

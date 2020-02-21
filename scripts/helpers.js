export const select = (el, parent = document) => parent.querySelector(el)

export const selectAll = (el, parent = document) =>
  Array.from(parent.querySelectorAll(el))

export const on = (event, el, fn) => el.addEventListener(event, fn)

export const run = (element, fn) => {
  const matches = selectAll(element)
  if (matches.length > 0) {
    matches.forEach(match => fn(match))
  }
}

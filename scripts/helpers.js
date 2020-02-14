export const $ = (el, parent = document) => parent.querySelector(el)

export const $$ = (el, parent = document) =>
  Array.from(parent.querySelectorAll(el))

export const run = (element, fn) => {
  const matches = $$(element)
  if (matches.length > 0) {
    matches.forEach(match => fn(match))
  }
}

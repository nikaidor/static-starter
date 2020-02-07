export const $ = el => document.querySelector(el)

export const $$ = el => Array.from(document.querySelectorAll(el))

export const run = (element, fn) => {
  const matches = $$(element)
  if (matches.length > 0) {
    matches.forEach(match => fn(match))
  }
}

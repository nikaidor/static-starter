export function run(fn) {
  fn()
}

export function click(el, fn) {
  el.addEventListener('click', fn)
}

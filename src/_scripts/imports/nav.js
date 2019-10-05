import { click, run } from '../modules/helpers'

run(() => {
  const mobileNav = document.querySelector('#mobile-nav')
  const mobileNavToggle = document.querySelector('#mobile-nav-toggle')
  const mobileNavClose = document.querySelector('#mobile-nav-close')
  const elements = Array.from(document.querySelectorAll('header, footer, main'))

  function toggleNav() {
    mobileNav.classList.toggle('hidden')
    elements.forEach((element) => {
      element.classList.toggle('hidden')
    })
  }

  click(mobileNavToggle, toggleNav)
  click(mobileNavClose, toggleNav)
})

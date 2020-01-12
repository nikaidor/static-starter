const colorValues = {}
const screenValues = [640, 960, 1280]
const fontFamilyValues = {}
const fontSizeValues = [14, 16, 18, 20, 24, 30, 36, 42, 48, 60, 72, 96]
const fontWeightValues = [300, 400, 500, 600, 700]
const remValues = [
  4,
  8,
  12,
  16,
  24,
  32,
  48,
  64,
  96,
  128,
  320,
  480,
  640,
  768,
  960,
]
const viewportValues = [25, 50, 75, 100]
const percentValues = [20, 25, 40, 50, 60, 75, 80, 100]
const percentCalcValues = {
  '33%': 'calc(100% * (1/3))',
  '66%': 'calc(100% * (2/3))',
}

const rem = value => `${value / 16}rem`

const fontSize = {}
fontSizeValues.forEach(value => {
  fontSize[value] = rem(value)
})

const fontWeight = {}
fontWeightValues.forEach(value => {
  fontWeight[value] = value
})

const percents = { ...percentCalcValues }
percentValues.forEach(value => {
  percents[`${value}%`] = `${value}%`
})

const rems = {}
const negativeRems = {}
const negativeRemValues = remValues.map(value => `-${value}`)
remValues.forEach(value => {
  rems[value] = rem(value)
})
negativeRemValues.forEach(value => {
  negativeRems[value] = rem(value)
})

const screens = {}
screenValues.forEach(value => {
  screens[`${value}`] = `${value}px`
})

const viewports = {}
viewportValues.forEach(value => {
  viewports[`${value}vw`] = `${value}vw`
  viewports[`${value}vh`] = `${value}vh`
})

const spacing = {
  0: '0',
  auto: 'auto',
  ...rems,
  ...percents,
  ...viewports,
}

const margin = {
  ...spacing,
  ...negativeRems,
}

module.exports = {
  corePlugins: {
    container: false,
    flex: false,
  },
  theme: {
    extend: {
      colors: colorValues,
      fontFamily: fontFamilyValues,
    },
    fontSize,
    fontWeight,
    height: spacing,
    margin,
    maxHeight: spacing,
    maxWidth: spacing,
    minHeight: spacing,
    minWidth: spacing,
    padding: spacing,
    screens,
    width: spacing,
  },
  plugins: [require('@tailwindcss/custom-forms')],
}

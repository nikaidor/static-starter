// #region Values

const calcs = {
  '33%': 'calc(100% * (1/3))',
}
const colors = {}
const fontFamilies = {}
const fontSizes = [14, 16, 18, 20, 24, 30, 36, 42]
const fontWeights = [400, 500, 600, 700]
const percents = [25, 50, 100]
const rems = [1, 8, 16, 24, 32, 48, 64, 320, 480, 640, 960]
const screens = [640, 768, 960]
const viewports = [100]

// #endregion

// #region Building Objects From ^ Values

const fontSizeObject = {}
const fontWeightObject = {}
const negativeRems = rems.map(value => `-${value}`)
const negativeRemObject = {}
const percentObject = { ...calcs }
const remObject = {}
const screenObject = {}
const viewportObject = {}

const rem = value => `${value / 16}rem`

fontSizes.forEach(value => {
  fontSizeObject[value] = rem(value)
})

fontWeights.forEach(value => {
  fontWeightObject[value] = value
})

percents.forEach(value => {
  percentObject[`${value}%`] = `${value}%`
})

rems.forEach(value => {
  remObject[value] = rem(value)
})

negativeRems.forEach(value => {
  negativeRemObject[value] = rem(value)
})

screens.forEach(value => {
  screenObject[`${value}`] = `${value}px`
})

viewports.forEach(value => {
  viewportObject[`${value}vw`] = `${value}vw`
  viewportObject[`${value}vh`] = `${value}vh`
})

const spacing = {
  0: '0',
  auto: 'auto',
  ...remObject,
  ...percentObject,
  ...viewportObject,
}

// #endregion

// #region Configuration Object

module.exports = {
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors,
      fontFamily: fontFamilies,
    },
    fontSize: fontSizeObject,
    fontWeight: fontWeightObject,
    height: spacing,
    margin: { ...spacing, ...negativeRemObject },
    maxHeight: spacing,
    maxWidth: spacing,
    minHeight: spacing,
    minWidth: spacing,
    padding: spacing,
    screens: screenObject,
    width: spacing,
  },
  plugins: [require('@tailwindcss/custom-forms')],
}

// #endregion

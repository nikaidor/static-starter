import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'

const isDev = process.env.NODE_ENV !== 'production'

export default {
  input: 'scripts/main.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'main',
    file: 'dist/assets/main.bundle.js',
  },
  plugins: [
    svelte({
      dev: isDev,
    }),
    postcss({
      extract: 'dist/assets/main.bundle.css',
      minimize: !isDev,
    }),
    resolve({
      browser: true,
      dedupe: importee =>
        importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    commonjs(),
    !isDev && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}

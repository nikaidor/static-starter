# StaticStart

The goal of this project is to bring together what I believe are most pragmatic and performant frontend frameworks and tools into a cohesive template for making web development wonderful.

## Getting Started

- `npm i` to grab dependencies
- `npm run dev` to fire up dev server
- `npm run build` to build static site

## Templating

### 11ty

This project uses [11ty](https://www.11ty.dev/docs/) for templating and static generation. All templating takes place inside the `pages` directory.

Refer to the [11ty docs](https://www.11ty.dev/docs/) for more information on how to customize 11ty to your liking, it is an incredibly powerful tool!

### Assets

All static assets, like images and fonts, should be placed in `static`, as it is copied as-is into the `dist` directory.

## Scripting

This project uses a combination of tools to make developing dynamic data-driven scripting simple and pleasant.

### Rollup

For bundling, this project uses [Rollup](https://rollupjs.org/guide/en/). This is a fantastic bundler that makes complex bundling simple and highly configurable. See `rollup.config.js` to see what is going on under the hood.

### Alpine

For simple data-driven functionality like toggling visibility of menus, especially in scenarios where you would like the markup to be static and indexable, reach for [Alpine](https://github.com/alpinejs/alpine/). It provides a Vue-esque API that allows you to script inside the markup.

**Note:** See `pages/about.njk` for an example of Alpine in action.

### Svelte

For more complex functionality, especially those that don't require SEO, such as pulling data from an API client side or sending post requests, this project utilitizes [Svelte](https://svelte.dev). Svelte is an exceptional JS framework that makes reactivity simple and predictable. See `scripts/Users.svelte` to get an idea of how and when to utilize Svelte over Alpine.

**Note:** See `pages/index.njk` and `scripts/_main.js` to see how Svelte can be initialized on pages.

### JSON-Server

This project also includes [JSON-Server](https://github.com/typicode/json-server) for mocking an API in development. See `db.json`, and `scripts/Users.svelte` to see this in action. Requests to the API will change the `db.json` file, so state will persist for free and is source-controllable!

**Note:** You may notice the url to hit the endpoint in `scripts/Users.svelte` is `API/users`. We are making use of [@rollup-plugin-replace](https://github.com/rollup/plugins/tree/master/packages/replace#readme) to replace strings at build time. In our case, we are replacing the string `API` with the `https://localhost:3000` during development, and `''` in production (since we do not have one yet). See `rollup.config.js` for more information.

## Styling

This project uses [TailwindCSS](https://tailwindcss.com/) for styling. This allows us to generate a giant list of utility classes that can be shared across differing templating languages and frameworks. The configuration file is located at `tailwind.config.js`, and all imports are located in `styles`.

I use Tailwind in a pragmatic and predictable fashion. With this configuation, all you need to edit are the arrays and objects located in the `values` comment block of `tailwind.config.js`.

If you like the way I use Tailwind, awesome! If not, just delete it and create your own. That's the beauty of using Tailwind.

## Knock Yourself Out!

Thank you for taking the time to check out this repo and read through the docs. I hope this tool is useful and pleasant to work with. Have a great day!

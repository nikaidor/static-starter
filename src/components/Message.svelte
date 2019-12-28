<script>
  import { nav } from './stores.js'

  const buttonClasses = 'border px-16 py-8 mt-8 text-white bg-indigo-500'

  let a = 2
  const incrementA = () => a += 1

  let b = 2
  const incrementB = () => b += 1

  $: sum = a + b
</script>

<div class="mt-24">
  <h1 class="text-30 font-700">This is the Svelte Message component!</h1>
  <p>isNavOpen is {$nav}</p>
  <div class="mt-16">
    <button on:click={nav.toggle} class="{buttonClasses}">Toggle isNavOpen</button>
  </div>
  <p>A is {a}, B is {b}, and the sum is {sum}!</p>
  <div class="mt-16">
    <button on:click={incrementA} class="{buttonClasses}">Increment A</button>
    <button on:click={incrementB} class="{buttonClasses} ml-16">Increment B</button>
  </div>
</div>

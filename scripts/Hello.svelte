<script>
  import { message, users } from './store'
</script>

<h2 class="text-30">{ $message }</h2>

{#each $users as { name }}
  <p>{name}</p>
{/each}

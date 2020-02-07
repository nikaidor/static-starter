<script>
  import axios from 'axios'

  let message = 'Hello from svelte!'

  let users = []
  async function getUsers() {
    const { data } = await axios.get('/api/users')
    users = data.users
  }
  getUsers()
</script>

<p class="mt-32 text-30 font-700">{message}</p>

{#each users as { name, id }}
  <p>{name}</p>
{/each}

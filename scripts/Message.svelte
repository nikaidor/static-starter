<script>
  import axios from 'axios'

  let users = []
  async function getUsers() {
    const { data } = await axios.get('API/users')
    users = data
  }
  getUsers()

  let input = ''
  async function addUser() {
    if (input !== '') {
      await axios.post('API/users', {
        name: input,
      })
      input = ''
      getUsers()
    }
  }

  let message = 'Hello from svelte!'
</script>

<p class="mt-32 text-30 font-700">{message}</p>

<div class="flex mt-24">
  <input class="border px-16 py-8" bind:value={input} type="text" />
  <button class="border px-16 py-8" on:click={addUser}>Add a user</button>
</div>

<div class="mt-24">
  {#each users as { name }}
    <p class="mt-8">{name}</p>
  {/each}
</div>

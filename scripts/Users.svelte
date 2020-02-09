<script>
  import axios from 'axios'

  let users = []
  let input = ''
  let state = 'loading'

  async function getUsers() {
    try {
      const { data } = await axios.get('API/users')
      users = data
      state = 'loaded'
    } catch {
      state = 'error'
    }
  }

  getUsers()

  async function addUser() {
    try {
      if (input !== '') {
        await axios.post('API/users', { name: input })
        input = ''
        getUsers()
      }
    } catch {
      state = 'error'
    }
  }

  async function removeUser(id) {
    try {
      await axios.delete(`API/users/${id}`)
      getUsers()
    } catch {
      state = 'error'
    }
  }

  async function updateUser(id, value) {
    try {
      await axios.patch(`API/users/${id}`, { name: value })
      getUsers()
    } catch {
      state = 'error'
    }
  }
</script>

<div class="flex mt-24">
  <input
    placeholder="Add users here!"
    on:keydown={e => (e.keyCode === 13 ? addUser() : null)}
    class="border shadow-lg px-16 py-8"
    bind:value={input}
    type="text" />
</div>

<div class="mt-24">
  {#if state == 'loading'}
    <p>Loading...</p>
  {:else if state === 'loaded'}
    {#each users as { id, name }}
      <div class="mt-8 flex items-center">
        <p>{name}</p>
        <input
          placeholder="Edit Name"
          class="border ml-24 px-16 py-8"
          on:keydown={e => (e.keyCode === 13 ? updateUser(id, e.target.value) : null)}
          type="text" />
        <button class="ml-24 text-red-500" on:click={removeUser(id)}>X</button>
      </div>
    {/each}
  {:else if state === 'error'}
    <p>An error occurred.</p>
  {/if}
</div>

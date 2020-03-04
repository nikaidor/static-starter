<script>
  import axios from 'axios'

  let navigation = []
  async function getNavJson() {
    const { data } = await axios.get('/api/navigation.json')
    navigation = data
  }
  getNavJson()
</script>

{#each navigation as { text, link }}
  <a class="block mt-8 underline" href={link}>{text}</a>
{/each}

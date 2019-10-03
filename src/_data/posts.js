const axios = require('axios')

module.exports = async function() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const limit = res.data.slice(0, 9)
  return limit
}

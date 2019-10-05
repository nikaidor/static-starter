const axios = require('axios')

module.exports = async function() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return res.data
}

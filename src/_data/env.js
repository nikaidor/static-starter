require('dotenv').config()
const { PROD, SECRET: secret } = process.env

module.exports = {
  secret,
  mode: PROD ? 'production' : 'development',
}

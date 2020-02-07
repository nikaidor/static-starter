import { Server, Model, RestSerializer } from 'miragejs'

export function startServer() {
  new Server({
    serializers: {
      application: RestSerializer,
    },
    models: {
      user: Model,
    },
    routes() {
      this.namespace = '/api'
      this.timing = 0
      this.resource('users')
    },
    seeds(server) {
      server.db.loadData({
        users: [{ name: 'User 1' }, { name: 'User 2' }],
      })
    },
  })
}

export default startServer

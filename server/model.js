const { find, save } = require('./../database')

const model = {
  repo: {
    get: (query, cb) => {
      find(query, cb)
    },
    post: (repos, cb) => {
      if (Array.isArray(repos)) {
        for (let repo of repos) {
          save(repo);
        }
      }
      cb()
    }
  }
}

module.exports = model;
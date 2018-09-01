const { getReposByUsername } = require('../helpers/github.js');
const model = require('./model.js');
const querystring = require('querystring')

const controller = {
  repos: { 
    get: (req, res) => {
      query = querystring.parse(req.url.split('?')[1])
      model.repo.get(query, (data) => res.send(data));
    },
    post: (req, res) => {
      getReposByUsername(req.body, (repos) => {
        model.repo.post(JSON.parse(repos), () => res.send('SUCCESS'))
      })
    }
  }
}

module.exports = controller;
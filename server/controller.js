const { getReposByUsername } = require('../helpers/github.js');
const model = require('./model.js');

const controller = {
  repos: { 
    get: (req, res) => {
      res.send()
      // TODO - your code here!
      // This route should send back the top 25 repos
    },
    post: (req, res) => {
      // TODO - your code here!
      // This route should take the github username provided
      // and get the repo information from the github API, then
      // save the repo information in the database
      console.log('router:', req.body)
      getReposByUsername(req.body, (data) => {
        res.send(data);
      })
    }
  }
}

module.exports = controller;
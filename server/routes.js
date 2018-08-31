const router = require('express').Router();
// const github = require('../helpers/github.js');

router.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.send(req.body)
});

router.get('/repos', function (req, res) {
  res.send()
  // TODO - your code here!
  // This route should send back the top 25 repos
});

module.exports = router
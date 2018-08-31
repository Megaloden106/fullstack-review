const router = require('express').Router();
const controller = require('./controller.js')

router.post('/repos', controller.repos.post);

router.get('/repos', controller.repos.get);

module.exports = router
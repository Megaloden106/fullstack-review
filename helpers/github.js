const request = require('request');
const config = process.env.TOKEN || require('./../config.js').TOKEN;

let getReposByUsername = ({ username }, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config}`
    }
  };
  let data = '';
  request
    .get(options)
    .on('data', chunk => data += chunk)
    .on('end', () => cb(data));
}

module.exports.getReposByUsername = getReposByUsername;
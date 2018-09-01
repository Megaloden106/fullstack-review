const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const repoSchema = new mongoose.Schema({
  name: String,
  repo: String,
  url: {
    type: String,
    unique: true
  },
  stars: Number
});

const Repo = mongoose.model('Repo', repoSchema);

const save = (repo) => {
  let input = new Repo({
    name: repo.owner.login,
    repo: repo.name,
    url: repo.url,
    stars: repo.stargazers_count.toString()
  });
  input.save((err) => {
    err && console.log(err) 
  });
}

const find = ({ limit }, cb) => {
  Repo.find()
  .limit(Number(limit))
  .sort({ stars: -1 })
  .exec((err, repos) => {
    if (err) console.log(err);
    cb(repos);
  })
}

module.exports = {
  save: save,
  find: find
};


import React from 'react';

const RepoList = ({ repos }) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    <div></div>
    {repos.map(repo => (
      <p key={repo.url}>
        Owner: {repo.name} | Repo: {repo.repo} | 
        Stargazers: {repo.stars} | <a href={repo.url}>{repo.url}</a>
      </p>
    ))}
  </div>
)

export default RepoList;
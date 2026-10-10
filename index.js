
require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

const githubData = {
  "login": "gitPiyush2004",
  "id": 177743663,
  "node_id": "U_kgDOCpgnLw",
  "avatar_url": "https://avatars.githubusercontent.com/u/177743663?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/gitPiyush2004",
  "html_url": "https://github.com/gitPiyush2004",
  "followers_url": "https://api.github.com/users/gitPiyush2004/followers",
  "following_url": "https://api.github.com/users/gitPiyush2004/following{/other_user}",
  "gists_url": "https://api.github.com/users/gitPiyush2004/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/gitPiyush2004/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/gitPiyush2004/subscriptions",
  "organizations_url": "https://api.github.com/users/gitPiyush2004/orgs",
  "repos_url": "https://api.github.com/users/gitPiyush2004/repos",
  "events_url": "https://api.github.com/users/gitPiyush2004/events{/privacy}",
  "received_events_url": "https://api.github.com/users/gitPiyush2004/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Piyush Bhatia",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-08-07T11:40:03Z",
  "updated_at": "2026-07-31T22:15:06Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('hiteshdotcom');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login at Chai Aur Code</h1>');
});

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App listening on port ${PORT}`);
});

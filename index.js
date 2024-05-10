const express = require('express')  // Server-side web Framework
const app = express()
require('dotenv').config()

const githubData = {
  "login": "andepraveenofficial",
  "id": 150348094,
  "node_id": "U_kgDOCPYhPg",
  "avatar_url": "https://avatars.githubusercontent.com/u/150348094?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/andepraveenofficial",
  "html_url": "https://github.com/andepraveenofficial",
  "followers_url": "https://api.github.com/users/andepraveenofficial/followers",
  "following_url": "https://api.github.com/users/andepraveenofficial/following{/other_user}",
  "gists_url": "https://api.github.com/users/andepraveenofficial/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/andepraveenofficial/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/andepraveenofficial/subscriptions",
  "organizations_url": "https://api.github.com/users/andepraveenofficial/orgs",
  "repos_url": "https://api.github.com/users/andepraveenofficial/repos",
  "events_url": "https://api.github.com/users/andepraveenofficial/events{/privacy}",
  "received_events_url": "https://api.github.com/users/andepraveenofficial/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ande Praveen",
  "company": null,
  "blog": "",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 15,
  "public_gists": 0,
  "followers": 3,
  "following": 6,
  "created_at": "2023-11-09T11:56:56Z",
  "updated_at": "2024-04-23T05:28:01Z"
}

/* -----> Routes <----- */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  console.log("Login")
  res.send('Login')
})


app.get('/github', (req, res) => {
  console.log("Github")
  res.json(githubData)
})



const port = process.env.PORT
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
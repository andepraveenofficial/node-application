const express = require('express')  // Server-side web Framework
const app = express()
require('dotenv').config()

/* -----> Routes <----- */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  console.log("Login")
  res.send('Login')
})

const port = process.env.PORT
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
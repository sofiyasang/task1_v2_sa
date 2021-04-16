const express = require('express')
const app = express()
const port = 8000


app.get('/', (req, res) => {
  res.send('Hello from ssang!'+' To check health go to <link>http://localhost:8000/health</link>')
})

app.get('/health',  (req, res) => res.json({
  status: 'OK'
}))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


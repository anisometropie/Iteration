const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000
const app = express()

app.use(express.static(__dirname))
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

console.log(`listening to port ${port}`)
app.listen(port)

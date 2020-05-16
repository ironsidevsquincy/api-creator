const express = require('express')
const argv = require('yargs').argv

const config = require(argv._.pop())
console.log(argv)
const handlers = require('./handlers')

const app = express()
const port = 3000

config.forEach(config => {
  app[config.method.toLowerCase()](config.url, (req, res) => {
    if (config.type) {
      res.type(config.type)
    }
    handlers[config.handler](req, res)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})

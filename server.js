const express = require('express')
const { join } = require('path')

const app = express()

// middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

// have app listen in on port 3000 if not connected to Heroku
app.listen(process.env.PORT || 3000)
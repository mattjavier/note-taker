const express = require('express')
const { join } = require('path')
const { allowedNodeEnvironmentFlags } = require('process')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.listen(3000)
const router = require('express').Router()
const { join } = require('path')

// set routes for notes.html
router.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, '../public/notes.html'))
})

// set routes for index.html, includes everything other than '/notes'
router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'))
})

module.exports = router
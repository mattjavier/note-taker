const router = require('express').Router()
const { join } = require('path')
const fs = require('fs')
const  uuid = require('uuid')

// GET all saved notes
router.get('/notes', (req, res) => {
  fs.readFile(join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) { console.log(err) }
    res.json(JSON.parse(data))
  })
})

// POST new note to db.json, return new note
router.post('/notes', (req, res) => {
  fs.readFile(join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) { console.log(err) }

    // get db, make it JSON from string
    let notes = JSON.parse(data)
    let note = {
      id: uuid.v1(),
      title: req.body.title,
      text: req.body.text
    }

    // add new note
    notes.push(note)

    // write back to db.json, make notes array string
    fs.writeFile(join(__dirname, '../db/db.json'), JSON.stringify(notes), err => {
      if (err) { console.log(err) }
      res.json(note)
      console.log(note)
    })
  })
})

// DELETE a note given a unique id, rewrite db.json
router.delete('/notes/:id', (req, res) => {
  fs.readFile(join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) { console.log(err) }
    let notes = JSON.parse(data)

    // rewrite notes array to include all notes except the one with req.params.id
    notes = notes.filter(note => note.id !== req.params.id)

    fs.writeFile(join(__dirname, '../db/db.json'), JSON.stringify(notes), err => {
      if (err) { console.log(err) }
      res.sendStatus(200)
    })
  })
})

module.exports = router
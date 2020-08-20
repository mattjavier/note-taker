const router = require('express').Router()

// make all routes for our notes begin with '/api/'
router.use('/api', require('./noteRoutes.js'))
router.use('/', require('./viewRoutes.js'))

module.exports = router
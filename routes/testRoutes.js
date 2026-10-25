const express = require('express')
const { testController } = require('../controllers/testController')

// routes object store krega

const router = express.Router()

//routes
router.get('/test', testController)

//export
module.exports = router;
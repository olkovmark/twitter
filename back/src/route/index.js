// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

const post = require('./post')
router.use('/', post)

router.get('/', (req, res) => {
  res.status(200).json('Hello World')
})

module.exports = router

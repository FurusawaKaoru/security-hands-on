const express = require('express')
const router = express.Router()

const allowList = [
  'http://localhost:3000',
  'http://site.example:3000',
];

router.use(express.json())
router.use((req, res, next) => {
  if (req.headers.origin && allowList.includes(req.headers.origin)) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
  }
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Headers', 'X-Token')
  }
  next()
})

router.get('/', (req, res) => {
  res.send({ message: 'Hello' })
})
router.post('/', (req, res) => {
  const body = req.body
  console.log(body)
  res.end()
})

module.exports = router
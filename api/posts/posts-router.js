// implement your posts router here
const express = require('express')
const post = require('./posts-model')
const router = express.Router()

router.get('/', (req, res) => {
    post.find()
    .then(found => {
        res.json(found)
    })
    .catch(() => {
        res.status(500).json({message:"The posts information could not be retrieved"})
    })
})
router.get('/:id', (req, res) => {

})
router.post('/', (req, res) => {

})
router.delete('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})
router.get('/:id/messages', (req, res) => {

})

module.exports= router
const express = require('express')
const router = express.Router()

let db = require('../db.js')

router.get('/:id/comments', (req, res) =>{
    db.findById(req.params.id)
    .then(data => {
        if(data.length > 0){
            return db.findPostComments(req.params.id)
        }
            return res.status(404).json({message: "The post with the specified ID does not exist."})
    })
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ error: "The comments information could not be retrieved." })
    })
})

module.exports = router;
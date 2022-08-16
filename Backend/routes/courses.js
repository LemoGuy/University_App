const User = require('../models/User'); 
const express = require('express'); 
const router = express.Router();
const Course = require('../models/Course')

router.post ('/', (req,res) => {
    Course.create(req.body)
    res.sendStatus(200)
})

module.exports = router; 
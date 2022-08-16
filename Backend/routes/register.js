const User = require('../models/User'); // db table
const express = require('express'); // e
const router = express.Router();
const bcrypt = require('bcryptjs')
const roles = require('../roles');

const lecturer = require('../models/Lecturer.js');
const getRole = require('../roles/getRole');
const getModel = require('../models/getModel');

// data that user did post, inside req.body 
router.post('/', async (req, res) => {
    let data = { ...req.body }; // get the post data


    let model = getModel(data);

    let errors = [];

    let hash = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))
    // res.send('hello'); // You can only send 1 send.status or string!!@!!!!!
    data['password'] = hash
    // check if user already exists
    await model.create(data); // instert into db
    res.sendStatus(200); // give OK status
});

module.exports = router; 
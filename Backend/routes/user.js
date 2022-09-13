const User = require('../models/User'); // db table
const express = require('express'); // e
const router = express.Router();
const bcrypt = require('bcryptjs')
const roles = require('../roles');

const getRole = require('../roles/getRole');
const getModel = require('../models/getModel');



// get users
router.get('/', async (req, res) => {
    // console.log(req.query.id)
    let query = {};
    if(req.query.userId) {
        if(req.query.userId.length > 24 ) {
            res.sendStatus(400)
            return
        }
        let startId = BigInt('0x' + req.query.userId)
        if(startId === NaN ) {
            res.sendStatus(400)
            return
        }
        let endId = startId + BigInt(1)
        startId = startId.toString(16)
        endId = endId.toString(16)

        startId = req.query.userId + "0".repeat(24 - req.query.userId.length)
        endId = endId + "0".repeat(24 - endId.length)

        query._id = {
            $gte: startId,
            $lt: endId
        }
    }

    if (req.query.id) {
        query._id = req.query.id
    }
    
    let users = await User.find(query)
    res.json(users)
});

// get data from db
router.get('/:user_id', async (req,res) => {

})

// update data and remove old one directly
router.put('/:user_id', async (req, res) => {

})




// Todo put auth for all 

// data that user did post, inside req.body 
router.post('/', async (req, res) => {
    let data = { ...req.body }; // get the post data
    let model = getModel(req.query.type);

    if (!model) {
        res.sendStatus(400)
        return
    }

    // global error handling later...
    
    let errors = [];
    let hash = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))
    data['password'] = hash
    // check if user already exists
    await model.create(data); // instert into db
    res.sendStatus(200); // give OK status
});

router.delete('/:id', async (req, res) => {
    await User.deleteOne({_id: req.params.id})
    res.sendStatus(200)
})

module.exports = router; 
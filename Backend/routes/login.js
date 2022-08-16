const express = require('express');
const router = express.Router();
const User = require('../models/User');
let jwt = require('jsonwebtoken');
let crypto = require('crypto');
const bcrypt = require('bcryptjs')

// Login
router.post('/', async(req, res) => {
  // console.log(req.body);
  let user = await User.findOne({ "username": req.body.username })
  if (!user) {
    res.sendStatus(404)
    return
  }

  if (!await bcrypt.compare(req.body.password, user.password)) {
    res.sendStatus(404)
    return
  }
  
  let token = jwt.sign({
    "sub": user.username,
    "role": user.__t
    // "exp": (new Date()).getTime() + 3600
  }, "1234567890")
  res.send({ token })
});


module.exports = router;
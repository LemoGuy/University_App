const express = require('express');
const router = express.Router(); 
const passport = require('passport');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


// router.get('/', forwardAuthenticated, (req, res) => res.render('login.ejs'));

// Login
router.post('/', (req, res, next) => {
  // console.log(req.body);

    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/',
      failureFlash: true
    })(req, res, next);
  });
 

module.exports = router;
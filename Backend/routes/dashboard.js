const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const getRole = require('../roles/getRole');

router.get('/', ensureAuthenticated, (req, res) => {
    // res.render('dashboard.ejs', {
    //     user: req.user.username,
    //     role: getRole(req.user)
    // })
    res.json({role: getRole(req.user)})
});

//TODO !! IF ELSE FOR ROLES

module.exports = router;
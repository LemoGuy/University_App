const express = require('express');
const router = express.Router(); 
const Student = require('../models/Student')
const HeadOfDepartment = require('../models/HeadOfDepartment')


const hodRole = require('../roles/HeadOfDepartment')

router.get('/', async (req, res) => {
    
    const user = await HeadOfDepartment.findOne({})
    const role = hodRole(user)
    
    const student = await Student.findOne({});
    res.sendStatus(200);
    console.log(role.can("delete", student));

    });


router.post('/', (req, res) => {
  // console.log(req.body);

  req.body ["birthdate"] = Date.now();
  req.body ["userCreationDate"] = Date.now();

  HeadOfDepartment.create(req.body);
  res.sendStatus(200);
  });
 

module.exports = router;
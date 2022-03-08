const express = require ('express'); 
const {default: mongoose} = require('mongoose'); 
const Department = require ("../Models/Departments"); 
const router = express.Router(); 

router.get ("/", (req, res) => {
    Department.find ({}).then((departments) => 
    res.json ({
        status: 200, 
        departments: departments,
    })
    ); 
}); 

router.post ("/", (req, res) => {
    const data = req.body; 
    Department.create (data).then((department) => 
    res.json ({
        status: 200, 
        department: department,
    })
    ); 
}); 

module.exports = router; 
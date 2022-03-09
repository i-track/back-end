const express = require("express");
const { restart } = require("nodemon");
const Department = require('../Models/Department')

const router = express.Router();

router.get("/", (req, res) => {
  Department.find({})
    .then((departments => res.json({
      status: 200,
      departments: departments,
    })))

  }) 

router.post("/", (req, res) => {
  const data = req.body;
  Department.create(data)
    .then((department) =>
    res.json({
      status: 200,
      department: department,
    })
  );
});

router.put('/:id', (req, res) =>{
  Department.findByIdAndUpdate( req.params.id, req.body, { new:true })
  .then((department)=>{
    res.json({
      status: 200,
      department:department
    })
  })
});

router.delete('/:id', (req, res) => {
  Department.findByIdAndDelete(req.params.id)
  .then((department) => {
    console.log(req.params)
    res.json({
      status: 200,
      department: department,
    });
  })
});


module.exports = router;

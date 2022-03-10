const express = require("express");
const { restart } = require("nodemon");
const Department = require('../Models/Department')

const router = express.Router();

// this will find all the departments
router.get("/", (req, res) => {
  Department.find({})
    .then((departments => res.json({
      status: 200,
      departments: departments,
    })))

  }) 
  // this will find a department by name
router.get("/query", (req, res) => {
  Department.findOne(req.query)
    .then((departments => res.json({
      status: 200,
      departments: departments,
    })))
    
  }) 
// this will create a department and its members
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

// this will update the name of the department
router.put('/:id', (req, res) =>{
  Department.findByIdAndUpdate( req.params.id, req.body, { new:true })
  .then((department)=>{
    res.json({
      status: 200,
      department:department
    })
  })
});

// this will delete a department by id
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

// this will delete a department by its name
router.delete('/', (req, res) => {
  Department.findOneAndDelete(req.query)
  .then((department) => {
    console.log(req.params)
    res.json({
      status: 200,
      department: department,
    });
  })
});
// this will delete all the departments
router.route("/deletemany").delete(function(req, res) {
  Department.deleteMany({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// // this will update a specific member by its id
// router.put('/updateMember/:id',(req,res) => {
//   //this will find the department by its id and then update a member with what is inside req.body
//   Department.findByIdAndUpdate(req.params.id, { new:true }).then((teamMember) => {res.json({
//     status:200,
//     msg:"item update",
//     teamMember:teamMember
//   });
// });
// });

router.put('/:id', (req, res) => {
  Department.findOneAndUpdate({ _id: req.params.id}, req.body,  {new: true})
      .then(member => res.status(200).json({status: 200, member: member}))
})


module.exports = router;

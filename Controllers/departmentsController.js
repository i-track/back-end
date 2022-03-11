const express = require("express");
const Department = require('./../Models/Department')

const router = express.Router();

// *********************
// READ ALL DEPARTMENTS 
// ********************

// router.get("/", (req, res) => {
//   Department.find({})
//     .then((departments => res.json({
//       status: 200,
//       departments: departments,
//     })))

//   }) 


  router.get("/", (req, res) => {
    Department.find({})
        .then((departments => res.json({
            status: 200,
            departments: departments
        })))
})


  // ************************************
  // // this will find department by name
  // ***********************************

router.get("/query", (req, res) => {
  Department.findOne(req.query)
    .then((departments => res.json({
      status: 200,
      departments: departments,
    })))
    
  }) 
// ************************
//   WILL ADD A DEPARTMENT 
// ************************

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

// **************
// UPDATES BY ID
// **************

router.put('/:id', (req, res) =>{
  Department.findByIdAndUpdate( req.params.id, req.body, { new:true })
  .then((department)=>{
    res.json({
      status: 200,
      department:department
    })
  })
});

// *********************
// DELETES ONE DEPARTMENT
// **********************

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


// **************************
// DELETES DEPARTMENT BY NAME
// **************************

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


module.exports = router;

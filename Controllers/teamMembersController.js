const express = require("express");
const { restart } = require("nodemon");
const TeamMember = require('../Models/teamMemberSchema')

const router = express.Router();

router.get("/", (req, res) => {
    TeamMember.find({})
    .then((teamMembers => res.json({
      status: 200,
      teamMembers: teamMembers,
    })))
  }) 

router.post("/", (req, res) => {
  const data = req.body;
  TeamMember.create(data)
    .then((teamMember) =>
    res.json({
      status: 200,
      teamMember: teamMember,
    })
  );
});

router.put('/:id', (req, res) =>{
TeamMember.findByIdAndUpdate( req.params.id, req.body, { new:true })
  .then((teamMember)=>{
    res.json({
      status: 200,
      teamMember: teamMember
    })
  })
});

router.delete('/:id', (req, res) => {
TeamMember.findByIdAndDelete(req.params.id)
  .then((teamMember) => {
    console.log(req.params)
    res.json({
      status: 200,
      teamMember: teamMember,
    });
  })
});


module.exports = router;

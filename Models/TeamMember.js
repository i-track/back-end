const mongoose = require("../connection"); 

const Schema = mongoose.Schema; 

const teamMemberSchema = new Schema ({
    firstName: String, 
    lastName: String, 
    email: String, 
    phoneName: Number
})

module.exports = mongoose.module("TeamMember", teamMemberSchema)
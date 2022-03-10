const mongoose = require("../connection");
const teamMemberSchema = require('./teamMemberSchema')

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  firstName: {type: String, require:true},  
  lastName: String, 
  email: String, 
  phone: Number,
  dptName: [teamMemberSchema]
})

module.exports = mongoose.model("Department", departmentSchema);

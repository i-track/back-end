const mongoose = require("../connection");
const teamMemberSchema = require("./teamMemberSchema");

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  dptName: {type: String, require:true},
  member: [teamMemberSchema],
})

module.exports = mongoose.model("Department", departmentSchema);

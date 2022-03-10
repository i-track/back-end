const mongoose = require("../connection");
const teamMemberSchema = require("./teamMemberSchema");

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  dptName: {type: String, index: {unique: true, required: true}},
  member: [teamMemberSchema],
})

module.exports = mongoose.model("Department", departmentSchema);

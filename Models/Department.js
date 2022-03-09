const mongoose = require("../connection");
const TeamMember = require("./");

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  dptName: {type: String, require:true},
  member: [TeamMember],
})

module.exports = mongoose.model("Department", departmentSchema);

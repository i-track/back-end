const mongoose = require("../connection");
// const TeamMember = require("./");

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  dptName: String,
  // member: [TeamMember],
})

module.exports = mongoose.model("Department", departmentSchema);

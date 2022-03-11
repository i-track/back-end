const mongoose = require("../connection");
const teamMemberSchema = require('./teamMemberSchema')

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    dptName: String
})

module.exports = mongoose.model("Department", departmentSchema);

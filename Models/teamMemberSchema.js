const mongoose = require("../connection"); 
const departmentSchema = require('./Department')

const Schema = mongoose.Schema; 

const teamMemberSchema = new Schema ({
    dptName: [departmentSchema]
});  

module.exports = teamMemberSchema
const mongoose = require("../connection"); 

const Schema = mongoose.Schema; 

const teamMemberSchema = new Schema ({
    firstName: {type: String, require:true},  
    lastName: String, 
    email: String, 
    phone: Number,
    dptName: {type: String, require:true} 
});  

module.exports = teamMemberSchema


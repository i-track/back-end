const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/itrack").then(()=>console.log("we're live!"))

module.exports = mongoose
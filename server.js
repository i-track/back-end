require('dotenv').config()  
const express = require('express')
const logger = require('morgan')
const cors = require('cors')


// variable for the .env file
const PORT = process.env .PORT

// middleware
const app = express()
// allows postman requests to accept json
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`Listening in on port: ${PORT}`)
})
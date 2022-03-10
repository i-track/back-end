require('dotenv').config()  
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const departmentsController = require('./Controllers/departmentsController')




// variable for the .env file
const PORT = process.env.PORT

// middleware
const app = express(); 
// allows postman requests to accept json
app.use(express.urlencoded({extended:false})); 
app.use(express.json());
app.use(logger("dev"));
app.use(cors());


// //T E S T I N G   C O N N E C T I O N
//     app.get('/', (req, res) => {
//     res.send('conection test passed')
// });

app.use('/departments', departmentsController)


app.listen(PORT, ()=>{
    console.log(`Listening in on port: ${PORT}`)
})
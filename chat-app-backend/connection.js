const mongoose = require('mongoose')
require('dotenv').config()

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.tkab1.mongodb.net/?retryWrites=true&w=majority`
/*
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.tkab1.mongodb.net/?retryWrites=true&w=majority` , ()=>{

 console.log("Connected To Atlas Server")

})
*/


mongoose.connect( url ,{useNewUrlParser: true,useUnifiedTopology: true,})
.then(()=> console.log("Connected To Atlas Server"))
.catch((e)=> console.log(e))

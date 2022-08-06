const express = require('express')
const app = express()
const rooms = [ 'general' , 'tech' , 'finance' , 'crypto']
const cors = require('cors')
const userRoutes = require('./Routes/UserRoutes')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors()) // fuck you cors for wasting my one whole day

require('./connection')

app.use('/users', userRoutes)

const server = require('http').createServer(app)
const PORT = 3002


const io = require('socket.io')( server , { 

  cors: {
     
       origin:'http://localhost:3000',
       methods: [ 'GET' , 'POST ']
      }

})

server.listen( PORT , ()=>{

    console.log("Listening to port", PORT)

})
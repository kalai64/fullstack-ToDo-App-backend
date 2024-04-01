const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const routes = require('./routes/ToDoRoutes')

const app = express()
const PORT = process.env.port || 8000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
        .then(()=>console.log(`Mongoose Connected...`))
        .catch((err)=>console.log(err))

app.use(routes)

app.listen(PORT, ()=>console.log(`Port Running on ${PORT}`))
require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/',(req, res)=>{
    res.send('Hello World!')

})

app.get('*', (req,res)=>{
    res.status(404).send()
})

app.listen(process.env.PORT)

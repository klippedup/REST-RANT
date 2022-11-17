require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))


app.get('/',(req, res) => {
    res.send('Hello World home page')

})

app.get('*', (req,res) => {
    res.status(404).send()
})

app.listen(process.env.PORT)
